"use client";

import { inter } from "@/utils/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import BeamButton from "@/components/widgets/BeamButton";

const programData = [
    {
    title: "Innovation Program",
    desc: "Transform your creative ideas into patented innovations that solve real-world problems",
    image: "/images/programs/innovationProgram.png",
    icon: "/images/icon/bulbIcon.png",
    accent: "#C89B3C",
    points: [
    "Structured innovation methodology training",
    "Patent filing support and grants",
    "Mentorship from experienced innovators",
    "Showcase opportunities at innovation fairs",
    ],
    },
    {
    title: "Research Program",
    desc: "Conduct rigorous scientific research and publish your findings in prestigious journals",
    image: "/images/programs/researchProgram.png",
    icon: "/images/icon/researchIcon.png",
    accent: "#5B7DBF",
    points: [
    "Research methodology and design training",
    "Access to research lab resources",
    "Publication guidance and support",
    "Research grants and funding opportunities",
    ],
},
{
    title: "Entrepreneurship Program",
    desc: "Build and launch startups with mentorship, resources, and funding opportunities",
    image: "/images/programs/entrepreneur.png",
    icon: "/images/icon/rocketIcon.png",
    accent: "#7C5CC4",
    points: [
    "Startup development bootcamps",
    "Business plan and pitch training",
    "Access to IAIRE Launch competition",
    "Mentorship from successful entrepreneurs",
    ],
},
];

const ProgramCard = ({ item, reverse }: any) => {
return (
    <Box
    sx={{
        display: "flex",
        flexDirection: {
        xs: "column",
        md: reverse ? "row-reverse" : "row",
        },
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        transition: "all 0.3s ease",
        "&:hover": {
        transform: "translateY(-4px)",
        borderColor: item.accent,
        boxShadow: `
        0 10px 25px rgba(0,0,0,0.05),
        0 0 0 1px ${item.accent}40,
        0 0 20px ${item.accent}30
        `,
},
    }}
    >

    <Box
        sx={{
        width: { xs: "100%", md: "574px" },
        minHeight: { xs: "220px", md: "520px" },
        flex: 1,
        position: "relative",
        }}>
        <Image
        src={item.image}
        alt={item.title}
        fill
        style={{ objectFit: "cover" }}
        />
    </Box>

    <Box
        sx={{
        flex: 1,
        p: { xs: 3, md: 5 },
        }}
    >
        <Box sx={{ mb: 2 }}>
    <Image src={item.icon} alt="" width={64} height={64} />
        </Box>

        {/* TITLE */}
        <Typography
        sx={{
            maxWidth: { xs: "100%", md: "400px" },
            fontFamily: '"Playfair Display", serif',
            fontSize: {xs:"20px",md:"30px"},
            lineHeight: "36px",
            fontWeight: 700,
            color: "#1A2847",
            mb: 2,
            wordBreak: "break-word",
        }}
        >
        {item.title}
        </Typography>

        <Typography
        sx={{
            maxWidth: { xs: "100%", md: "490px" },
            fontFamily: inter.style.fontFamily,
            fontSize: {xs:"14px",md:"18px"},
            fontWeight: 400,
            lineHeight: "28px",
            color: "#6B7280",
            mb: 2,
            wordBreak: "break-word",
        }}
        >
        {item.desc}
        </Typography>

        {item.points.map((p: string, i: number) => (
        <Box
            key={i}
            sx={{ display: "flex", mb: 1, alignItems: "center" }}
        >
            <Box
            sx={{
                width: 20,
                height: 20,
                position: "relative",
                mr: 1,
                flexShrink: 0,
            }}
            >
            <Image
                src="/images/icon/rightIcon.png"
                alt="check"
                fill
                style={{ objectFit: "contain" }}
            />
            </Box>

            <Typography
            sx={{
                maxWidth: { xs: "100%", md: "350px" },
                fontFamily: inter.style.fontFamily,
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#6B7280",
                wordBreak: "break-word",
            }}
            >
            {p}
            </Typography>
        </Box>
        ))}

        <BeamButton
        sx={{
            mt: 2,
            width: { xs: "auto", md: "143px" },
            background: "#1A2847",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: inter.style.fontFamily,
            fontSize: "16px",
            fontWeight: 400,
            transition: "gap 0.2s ease",
            "&:hover": {
            background: "#D4A574",
            color: "#1A2847",
            },
            "&:hover .arrow": {
            transform: "translateX(4px)",
            },
            }}
        >
        Learn More <ArrowForwardIcon className="arrow" sx={{ px:1,fontSize: 18,transition:"transform 0.3s ease" }} />
        </BeamButton>
    </Box>
    </Box>
);
};

const ProgramsSection = () => {
return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F9F7F5" }}>
    <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {programData.map((item, index) => (
            <ProgramCard
            key={index}
            item={item}
            reverse={index % 2 !== 0}
            />
        ))}
        </Box>
    </Container>
    </Box>
);
};

export default ProgramsSection;