"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";


interface ScrollRevealProps {
children: ReactNode;
delay?: number;
}

const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
    const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    });


    return (
    <Box
    ref={ref}
    sx={{
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(60px)",
    transition: `all 0.6s ease ${delay}s`,
    }}
    >
    {children}
    </Box>
);
};


export default ScrollReveal;