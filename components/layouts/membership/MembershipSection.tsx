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
        icon:"/images/icon/education.png",
        bg: "#EFEAF7",
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
        benefits: [
        "Official IAIRE member certificate and credentials",
        "Access to grant and funding opportunities",
        "Eligibility for Top Young Innovators recognition",
        "Networking with peers and mentors globally",
        "Exclusive resources and learning materials",
    ],
    },
];

const MembershipCard = ({ item }: any) => {
return (
    <Box
    sx={{
        width:{xs:"auto",md:"1152px"},
        height:{xs:"auto",md:"280px"},
        display: "flex",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #E5E7EB",
        background: "#fff",
        transition: "all 0.3s ease",
        "&:hover": {
        borderColor: "#D4A574",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
        },
    }}
    >
    <Box
        sx={{
            width:{xs:"auto",md:"366px"},
            height:{xs:"auto",md:"280px"},
            background: item.bg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
        }}>
        <Box
        sx={{
            width: 80,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}>
    <Box
    sx={{
        width: "100px",
        height: "100px",
        position: "relative",
    }}
>
    <Image
    src={item.icon}
    alt={item.title}
    fill
    style={{ objectFit: "contain" }}
    />
    </Box>
</Box>

        <Typography
            sx={{
            width:{xs:"auto",md:"fit-content"},
            height:"auto",
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: "24px",
            lineHeight:"32px",
            mb: 1,
            }}
        >
            {item.title}
        </Typography>

        <Typography
            sx={{
            width:{xs:"auto",md:"303px"},
            height:{xs:"auto",md:"40px"},
            mx:"auto",
            fontFamily:inter.style.fontFamily,
            fontWeight:400,
            fontSize: "14px",
            lineHeight:"20px",
            color: "#6B7280",
            }}
        >
        {item.desc}
        </Typography>
    </Box>

    <Box
        sx={{
        flex: 1,
        p: 5,
        }}
    >
        <Typography
        sx={{
            width:{xs:"auto",md:"200px"},
            height:{xs:"auto",md:"28px"},
            fontWeight: 600,
            fontSize:"18px",
            lineHeight:"28px",
            fontFamily:inter.style.fontFamily,
            color:"#1A2847",
            mb: 2,
        }}
        >
        Membership Benefits:
        </Typography>

        {item.benefits.map((b: string, i: number) => (
        <Box key={i} sx={{ display: "flex", mb: 1,alignItems:"center" }}>
            <Box
            sx={{
                width: 20,
                height: 20,
                position: "relative",
                mr: 1,
                flexShrink: 0,
                }}>
        <Image
        src="/membership/rightIcon.png"
        alt="check"
        fill
        style={{ objectFit: "contain" }}
        />
        </Box>

            <Typography
            sx={{
                width:{xs:"auto",md:"450px"},
                height:{xs:"auto",md:"24px"},
                fontFamily:inter.style.fontFamily,
                lineHeight:"24px",
                fontSize: "16px",
                fontWeight:400,
                color: "#6B7280",
                mb:0.5,
                }}>
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
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F9F7F5" }}>
    <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
        <Typography
            sx={{
                width:{xs:"auto",md:"380px"},
                height:{xs:"auto",md:"40px"},
                fontFamily: '"Playfair Display", serif',
                fontSize: "36px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
                color:"#1A2847",
                lineHeight:"40px",
                fontWeight: 800,
                mb: 2,
                mx:"auto"
            }}
        >
            Types of Membership
        </Typography>

        <Typography
            sx={{
                width:{xs:"auto",md:"672px"},
                height:{xs:"auto",md:"56px"},
                fontFamily: inter,
                fontWeight:400,
                lineHeight:"28px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
                color: "#6B7280",
                fontSize: "18px",
                mx:"auto",
            }}
        >
            Choose the membership that best fits your journey in innovation,
            research, and entrepreneurship
        </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {membershipData.map((item, index) => (
            <MembershipCard key={index} item={item} />
        ))}
        </Box>
    </Container>
    </Box>
);
};

export default MembershipSection;