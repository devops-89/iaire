"use client";

import { inter } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const membershipData = [
{
    title: "Institution Membership",
    desc: "For schools and educational institutions committed to fostering IRE culture",
    icon: "/images/icon/institute.png",
    bg: "#E9EEF5",
    accent: "#5B7DBF",
    benefits: [
    "Official IAIRE accreditation and certification",
    "Access to comprehensive IRE curriculum and resources",
    "Priority placement for teacher training programs",
    "Exclusive networking with other member institutions",
    "Annual recognition and awards eligibility",
    ],
},
{
    title: "Educator Membership",
    desc: "For teachers and mentors who guide young minds in innovation and research",
    icon: "/images/icon/education.png",
    bg: "#EFEAF7",
    accent: "#7C5CC4",
    benefits: [
    "IAIRE Certified Educator designation",
    "Access to teaching resources and training modules",
    "Invitations to exclusive educator webinars",
    "Mentorship matching with experienced educators",
    "Eligibility for Teacher of the Year Award",
    ],
},
{
    title: "Student Membership",
    desc: "For exceptional young innovators, researchers, and entrepreneurs",
    icon: "/images/icon/student.png",
    bg: "#F6F1E7",
    accent: "#C89B3C",
    benefits: [
    "Official IAIRE member certificate and credentials",
    "Access to grant and funding opportunities",
    "Eligibility for Top Young Innovators recognition",
    "Networking with peers and mentors globally",
    "Exclusive resources and learning materials",
    ],
},
];

type MembershipItem = {
                    title: string;
                    desc: string;
                    icon: string;
                    bg: string;
                    benefits: string[];
                    accent: string;
                    };

type MembershipCardProps = {
                            item: MembershipItem;
                            };
const MembershipCard = ({ item }:MembershipCardProps) => {
return (
    <Box
    sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "12px",
        width:"100%",
        maxWidth: { xs: "360px", md: "100%" },
        mx: "auto",
        overflow: "hidden",
        border: "1px solid #E5E7EB",
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
        width: { xs: "85%", md: "30%" },
        maxWidth: { xs: "600px", md: "none" },
        minHeight: { xs: "auto", md: "260px" },
        background: item.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: { xs: 4, md: 4 },
        }}
    >
        <Box sx={{ width: 80, height: 80, position: "relative", mb: 2 ,mx:"auto"}}>
        <Image src={item.icon} alt={item.title} fill style={{ objectFit: "contain" }} />
        </Box>

        <Typography
        sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: "20px", md: "24px" },
            lineHeight: "32px",
            mb: 1,
            mx:"auto",
            textAlign:"center",
        }}
        >
        {item.title}
        </Typography>

        <Typography
        sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: { xs: "14px", md: "15px" },
            lineHeight: "20px",
            color: "#6B7280",
            maxWidth: "300px",
            mx:"auto",
            textAlign:"center"
        }}
        >
        {item.desc}
        </Typography>
    </Box>

    <Box
        sx={{
        flex: 1,
        p: { xs: 3, md: 5 },
        }}
    >
        <Typography
        sx={{
            fontWeight: 600,
            fontSize: { xs: "16px", md: "18px" },
            fontFamily: inter.style.fontFamily,
            color: "#1A2847",
            mb: 2,
        }}
        >
        Membership Benefits:
        </Typography>

        {item.benefits.map((b, i) => (
        <Box key={i} sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
            <Box
            sx={{
                width: 20,
                height: 20,
                position: "relative",
                mr: 1,
                flexShrink: 0,
                mt: "3px",
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
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "22px",
                color: "#6B7280",
            }}
            >
            {b}
            </Typography>
        </Box>
        ))}
    </Box>
    </Box>
);
};

const MembershipSection = () => {
return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "#F9F7F5" }}>
    <Container maxWidth="lg">
        
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
        <Typography
            sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "26px", md: "36px" },
            lineHeight: { xs: "34px", md: "40px" },
            fontWeight: 800,
            color: "#1A2847",
            mb: 2,
            }}
        >
            Types of Membership
        </Typography>

        <Typography
            sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: { xs: "14px", md: "18px" },
            lineHeight: { xs: "22px", md: "28px" },
            color: "#6B7280",
            maxWidth: "650px",
            mx: "auto",
            px: { xs: 1 },
            }}
        >
            Choose the membership that best fits your journey in innovation,
            research, and entrepreneurship
        </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column",alignItems:"center", gap: { xs: 3, md: 4 } }}>
        {membershipData.map((item, index) => (
            <MembershipCard key={index} item={item} />
        ))}
        </Box>
    </Container>
    </Box>
);
};

export default MembershipSection;