"use client";

import { inter } from "@/utils/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BeamButton from "@/components/widgets/BeamButton";

const whyData = [
    {
    title: "Recognition & Prestige",
    desc: "Membership in IAIRE is a mark of excellence recognized globally by educators, researchers, and industry leaders.",
    icon: "/images/icon/recoveryIcon.png",
    },
    {
    title: "Exclusive Resources",
    desc: "Access comprehensive playbooks, templates, case studies, and training materials designed for IRE excellence.",
    icon: "/images/icon/resourceIcon.png",
    },
    {
    title: "Advancement Opportunities",
    desc: "Clear pathways for growth from member to fellow, with increasing recognition and benefits at each level.",
    icon: "/images/icon/opportunityIcon.png",
    },
];

const WhyCard = ({ item }: any) => {
return (
    <Box
    sx={{
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        background: "#fff",
        p: { xs: 2.5, md: 3 },
        textAlign: "center",
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#D4A574",
                    boxShadow: "0 10px 30px rgba(212,165,116,0.35)",
        },
    }}>
    <Box
        sx={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "#F9F7F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        mb: 2,
        }}
        >
        <Image src={item.icon} alt="" width={26} height={26} />
        </Box>

        <Typography
        sx={{
        fontFamily: '"Playfair Display", serif',
        fontWeight: 600,
        fontSize: { xs: "17px", md: "19px" },
        lineHeight: "26px",
        color: "#1A2847",
        mb: 2,
        }}>
        {item.title}
    </Typography>

        <Typography
        sx={{
        fontFamily: inter.style.fontFamily,
        fontSize: { xs: "13.5px", md: "15px" },
        lineHeight: { xs: "20px", md: "22px" },
        color: "#6B7280",
        }}>
        {item.desc}
    </Typography>
    </Box>
);
};

const WhyBecomeMember = () => {
return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "#FFF" }}>
    <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }} alignItems="stretch" textAlign="center">

            <Typography
            sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "26px", sm: "30px", md: "36px" },
            lineHeight: { xs: "34px", md: "40px" },
            fontWeight: 700,
            color: "#1A2847",
            }}
        >
            Why Become a Member?
        </Typography>

        <Box
            sx={{
            display: "grid",
            gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 1fr)",
            },
            gap: { xs: 7.5, md: 3 },
            width: "100%",
            }}>
            {whyData.map((item, i) => (
            <WhyCard key={i} item={item} />
            ))}

            <Box
            sx={{
                gridColumn: "1 / -1",
                mt: { xs: 2, md: 3 },
                borderRadius: "16px",
                p: { xs: 3, sm: 4, md: 6 },
                background: "linear-gradient(90deg, #1A2847 0%, #1B3B2B 100%)",
                color: "#fff",
                textAlign: "center",
                transform: { md: "translateY(20px)" },
                boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
            }}
            >
            <Typography
                sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: "22px", sm: "26px", md: "30px" },
                lineHeight: { xs: "30px", md: "36px" },
                fontWeight: 700,
                mb: 2,
                }}
            >
                Ready to Join the IAIRE Community?
            </Typography>

            <Typography
                sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                lineHeight: { xs: "22px", md: "28px" },
                mb: 4,
                maxWidth: "700px",
                mx: "auto",
                }}
            >
                Take the first step toward recognition, resources, and opportunities
                that will transform your IRE journey.
            </Typography>

            <BeamButton
                sx={{
                    background: "#D4A574",
                    borderRadius: "8px",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1, md: 1.2 },
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#1A2847",
                    textTransform: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "gap 0.2s ease",
                    "&:hover": {
                    background: "#c7955e",
                },
                "&:hover .arrow": {
                transform: "translateX(4px)",
                },
                }}
            >
                Apply for Membership <ArrowForwardIcon className="arrow" sx={{ fontSize: 18,transition:"transform 0.3s ease" }} />
            </BeamButton>
            </Box>
        </Box>

        </Stack>
    </Container>
    </Box>
);
};

export default WhyBecomeMember;