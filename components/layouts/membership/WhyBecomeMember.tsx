"use client";

import { inter } from "@/utils/fonts";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";


// ✅ DATA
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


// ✅ REUSABLE CARD
const WhyCard = ({ item }: any) => {
return (
    <Box
    sx={{
        width:{xs:"auto",md:"340px"},
        height:{xs:"auto",md:"260px"},
        border: "1px solid #E5E7EB",
        borderRadius: "10px",
        background: "#fff",
        p: 4,
        textAlign: "center",
        transition: "0.3s",

        "&:hover": {
        borderColor: "#D4A574",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
        },
    }}
    >

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
            }}>
        <Image src={item.icon} alt="" width={28} height={28} />
        </Box>

        <Typography
        sx={{
            width:{xs:"auto",md:"240px"},
            height:{xs:"auto",md:"28px"},
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            fontSize: "20px",
            lineHeight:"28px",
            letterSpacing:"-0.05em",
            color: "#1A2847",
            mb: 1,
            mx:"auto"
        }}
    >
        {item.title}
    </Typography>

    <Typography
        sx={{
            width:{xs:"auto",md:"314px"},
            height:{xs:"auto",md:"96px"},
            fontFamily: inter.style.fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#6B7280",
            mx:"auto",
            mt:4
        }}
      >
        {item.desc}
      </Typography>
    </Box>
  );
};



const WhyBecomeMember = () => {
    return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFF" }}>
    <Container maxWidth="lg">
    <Stack
          spacing={6}
          alignItems="center"
          textAlign="center"
          sx={{ mb: 8 }}
        >
        <Typography
            sx={{
            width:{xs:"auto",md:"430px"},
            height:{xs:"auto",md:"40px"},
            mx:"auto",
            fontFamily: '"Playfair Display", serif',
            fontSize: "36px",
            lineHeight:"40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#1A2847",
        }}
        >
        Why Become a Member?
        </Typography>

        <Box
        sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
        }}
        >
        {whyData.map((item, i) => (
            <WhyCard key={i} item={item} />
        ))}
        </Box>

        <Box
        sx={{
            width:{xs:"auto",md:"1152px"},
            height:{xs:"auto",md:"250px"},
            borderRadius: "16px",
            p: { xs: 4, md: 6 },
            textAlign: "center",
            background: "linear-gradient(90deg, #1A2847 0%, #1B3B2B 100%)",
            color: "#fff",
            }}
        >
        <Typography
            sx={{
                width:{xs:"auto",md:"520px"},
                height:{xs:"auto",md:"36px"},
                fontFamily: '"Playfair Display", serif',
                fontSize: "30px",
                lineHeight:"36px",
                mx:"auto",
                fontWeight: 700,
                mb: 3,
                mt:4,
            }}
        >
            Ready to Join the IAIRE Community?
        </Typography>

            <Typography
            sx={{
                width:{xs:"auto",md:"672px"},
                height:{xs:"auto",md:"56px"},
                fontFamily: inter.style.fontFamily,
                fontSize: "18px",
                lineHeight:"28px",
                mx:"auto",
                mb: 6,
            }}
        >
            Take the first step toward recognition, resources, and opportunities
            that will transform your IRE journey.
        </Typography>

        <Button
                sx={{
                    width: { xs: "auto", md: "281px" },
                    height: { xs: "auto", md: "48px" },
                    background: "#D4A574",
                    borderRadius: "8px",
                    px: 0,
                    py: 0,
                    "&:hover": {
                    background: "#c7955e",
                    },
                }}>
        <Typography
        sx={{
            width: { xs: "auto", md: "250px" },
            height: { xs: "auto", md: "28px" },
            fontFamily: inter.style.fontFamily,
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "28px",
            color: "#1A2847",
            px: 3,
            py: 1,
            textTransform: "none",
            }}>
            Apply for Membership <span style={{ fontSize: "14px", marginLeft: "6px",fontWeight:900 }}>→</span>
            </Typography>
        </Button>
        </Box>
    </Stack>
    </Container>
    </Box>
    
  );
};

export default WhyBecomeMember;