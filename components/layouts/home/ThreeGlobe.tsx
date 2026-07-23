"use client";

import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Stage, Center, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { Box, CircularProgress, Typography } from "@mui/material";

// Suppress WebGL-related console errors in sandboxed or headless environments
if (typeof window !== "undefined") {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      args[0] &&
      typeof args[0] === "string" &&
      (args[0].includes("WebGLRenderer") ||
        args[0].includes("WebGL context") ||
        args[0].includes("Could not create a WebGL context") ||
        args[0].includes("Error creating WebGL context"))
    ) {
      return;
    }
    originalError(...args);
  };
}

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
          color: "rgba(255, 255, 255, 0.8)",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        <CircularProgress
          size={32}
          thickness={5}
          sx={{ color: "rgba(255, 255, 255, 0.8)" }}
        />
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
          }}
        >
          Loading Earth {progress.toFixed(0)}%
        </Typography>
      </Box>
    </Html>
  );
};

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Suppress logging of WebGL renderer errors to console
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

const EarthModel = () => {
  const { scene } = useGLTF(
    "https://kodvmpilnjduyzxw.public.blob.vercel-storage.com/IAIRE/earth_-_16k_high_resolution-compressed-compressed.glb",
  );
  const earthRef = useRef<THREE.Group>(null);
  const { gl } = useThree();
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  const [baseScale, setBaseScale] = useState<number | null>(null);
  const scrollYRef = useRef(0);

  // Normalize base scale on load (mesh-only bounding box to ignore helpers/empty nodes)
  useEffect(() => {
    if (scene) {
      // Reset scale before measuring to fix caching issues when remounting
      scene.scale.set(1, 1, 1);
      scene.updateMatrixWorld(true);

      const box = new THREE.Box3();
      let hasMesh = false;
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          box.expandByObject(child);
          hasMesh = true;
        }
      });

      const size = new THREE.Vector3();
      if (hasMesh) {
        box.getSize(size);
      } else {
        new THREE.Box3().setFromObject(scene).getSize(size);
      }

      const maxDim = Math.max(size.x, size.y, size.z);
      // Target a baseline size of 6.5 units
      setBaseScale(3.5 / maxDim);
    }
  }, [scene]);

  // Track page scroll position using a ref to prevent unnecessary React re-renders
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Drag rotation handlers
  useEffect(() => {
    const domElement = gl.domElement;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current || !earthRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      // Rotate horizontally (around Y axis) and vertically (around X axis)
      earthRef.current.rotation.y += deltaX * 0.005;
      earthRef.current.rotation.x = Math.max(
        -Math.PI / 4,
        Math.min(Math.PI / 4, earthRef.current.rotation.x + deltaY * 0.005),
      );

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    domElement.addEventListener("pointerdown", handlePointerDown);
    domElement.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      domElement.removeEventListener("pointerdown", handlePointerDown);
      domElement.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [gl]);

  useFrame((state, delta) => {
    if (earthRef.current) {
      // 1. Continuous auto-rotation when user is not dragging
      if (!isDragging.current) {
        earthRef.current.rotation.y += delta * 0.15;
      }

      // 2. Smooth scroll-scale animation via LERP
      if (baseScale !== null) {
        // Capped between 1.0x (normal) and 1.65x (scaled up)
        const scrollMultiplier = Math.min(
          1.65,
          Math.max(1.0, 1.0 + (scrollYRef.current / 700) * 0.65),
        );
        const targetScale = baseScale * scrollMultiplier;

        // Smoothly interpolate current scale to target scale
        const currentScale = earthRef.current.scale.x;
        const lerpedScale = THREE.MathUtils.lerp(
          currentScale,
          targetScale,
          0.08,
        );
        earthRef.current.scale.set(lerpedScale, lerpedScale, lerpedScale);
      }
    }
  });

  if (baseScale === null) return null;

  return (
    <group ref={earthRef} scale={[baseScale, baseScale, baseScale]}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
};

const ThreeEarth = ({
  height = "500px",
  cameraZ = 4.2,
}: {
  height?: any;
  cameraZ?: number;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: height,
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <ErrorBoundary>
        <Canvas
          shadows={false}
          camera={{ position: [0, 0, cameraZ], fov: 45 }}
          gl={{ antialias: false, powerPreference: "default" }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 3, 5]} intensity={2.5} />
          <Suspense fallback={<Loader />}>
            <Stage
              environment="city"
              intensity={1.5}
              shadows={false}
              adjustCamera={false}
            >
              <EarthModel />
            </Stage>
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </Box>
  );
};

// Only preload if in a browser context to avoid SSR errors
if (typeof window !== "undefined") {
  useGLTF.preload(
    "https://kodvmpilnjduyzxw.public.blob.vercel-storage.com/IAIRE/earth_-_16k_high_resolution.glb",
  );
}

export default ThreeEarth;
