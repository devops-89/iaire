import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import PersonIcon from "@mui/icons-material/Person";
import CookieIcon from "@mui/icons-material/Cookie";
import ShareIcon from "@mui/icons-material/Share";
import GavelIcon from "@mui/icons-material/Gavel";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PublicIcon from "@mui/icons-material/Public";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import StorageIcon from "@mui/icons-material/Storage";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import UpdateIcon from "@mui/icons-material/Update";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { Body, BulletList, SubSection } from "./primitives";

export interface PolicySection {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactCard = () => (
  <Box
    sx={{
      mt: 2,
      p: 3,
      borderRadius: "16px",
      background: "linear-gradient(135deg, #EFF6FF 0%, #E0F2FE 100%)",
      border: "1px solid #BFDBFE",
    }}
  >
    <Stack spacing={1}>
      <Typography sx={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: "15px", color: COLORS.PRIMARY_NAVY }}>
        International Association for Innovation, Research &amp; Entrepreneurship (IAIRE)
      </Typography>
      <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px", color: "#4B5563" }}>
        🌐 Website:{" "}
        <a href="https://iaire.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.PRIMARY_NAVY, fontWeight: 600 }}>
          https://iaire.vercel.app
        </a>
      </Typography>
      <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "14px", color: "#4B5563" }}>
        📧 Email:{" "}
        <a href="mailto:privacy@iaire.org" style={{ color: COLORS.PRIMARY_NAVY, fontWeight: 600 }}>
          privacy@iaire.org
        </a>
      </Typography>
    </Stack>
  </Box>
);

export const SECTIONS: PolicySection[] = [
  {
    id: 1,
    icon: <PersonIcon />,
    title: "Information We Collect",
    content: (
      <>
        <Body>We may collect the following categories of information:</Body>
        <SubSection title="Personal Information" items={["Full Name", "Email Address", "Phone Number", "Organization or Institution", "Designation", "Country and Location", "Profile Photograph (if uploaded)", "Educational and Professional Information"]} />
        <SubSection title="Membership Information" items={["Membership Category", "Institution Details", "Professional Credentials", "Areas of Expertise", "Research Interests", "Innovation Activities", "Payment Information (processed securely through third-party payment providers)"]} />
        <SubSection title="Student Information" items={["Student Name", "School/College Name", "Grade/Class", "Parent or Guardian Information (where required)", "Project Details", "Competition Submissions", "Innovation Portfolio"]} />
        <SubSection title="Technical Information" items={["IP Address", "Browser Type", "Device Information", "Operating System", "Pages Visited", "Time Spent on Website", "Referral Source", "Cookies and Similar Technologies"]} />
      </>
    ),
  },
  {
    id: 2,
    icon: <AdminPanelSettingsIcon />,
    title: "How We Use Your Information",
    content: (
      <>
        <Body>We use your information to:</Body>
        <BulletList items={["Process membership applications", "Manage user accounts", "Deliver educational programs", "Organize competitions and events", "Process registrations", "Provide certificates", "Publish research participation records (where applicable)", "Respond to inquiries", "Send important updates", "Improve our website and services", "Ensure platform security", "Comply with legal obligations"]} />
      </>
    ),
  },
  {
    id: 3,
    icon: <NotificationsIcon />,
    title: "Communications",
    content: (
      <>
        <Body>We may send:</Body>
        <BulletList items={["Membership updates", "Event notifications", "Training announcements", "Competition information", "Newsletters", "Research opportunities", "Platform updates"]} />
        <Box sx={{ mt: 2 }}>
          <Body>You may unsubscribe from promotional communications at any time by following the unsubscribe link or contacting us directly.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 4,
    icon: <CookieIcon />,
    title: "Cookies",
    content: (
      <>
        <Body>Our website uses cookies and similar technologies to:</Body>
        <BulletList items={["Improve website performance", "Remember user preferences", "Analyze website traffic", "Enhance user experience", "Maintain secure login sessions"]} />
        <Box sx={{ mt: 2 }}>
          <Body>You can disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 5,
    icon: <ShareIcon />,
    title: "Sharing of Information",
    content: (
      <>
        <Body><strong>We do not sell your personal information.</strong></Body>
        <Box sx={{ mt: 1.5 }}><Body>We may share your information with:</Body></Box>
        <BulletList items={["Educational institutions participating in IAIRE programs", "Event partners", "Research collaborators", "Technology service providers", "Payment gateway providers", "Cloud hosting providers", "Government or regulatory authorities when legally required"]} />
        <Box sx={{ mt: 2 }}>
          <Body>All third-party service providers are expected to maintain appropriate confidentiality and security measures.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 6,
    icon: <SecurityIcon />,
    title: "Data Security",
    content: (
      <>
        <Body>We implement appropriate administrative, technical, and organizational safeguards to protect your information against:</Body>
        <BulletList items={["Unauthorized access", "Loss", "Misuse", "Alteration", "Disclosure", "Destruction"]} />
        <Box sx={{ mt: 2 }}>
          <Body>While we strive to protect your information, no method of electronic transmission or storage is completely secure.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 7,
    icon: <StorageIcon />,
    title: "Data Retention",
    content: (
      <>
        <Body>We retain personal information only for as long as necessary to:</Body>
        <BulletList items={["Maintain membership records", "Deliver our services", "Meet legal and regulatory requirements", "Resolve disputes", "Enforce our agreements"]} />
        <Box sx={{ mt: 2 }}>
          <Body>When information is no longer required, it will be securely deleted or anonymized.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 8,
    icon: <GavelIcon />,
    title: "Your Rights",
    content: (
      <>
        <Body>
          Depending on applicable laws, including the{" "}
          <strong>Digital Personal Data Protection Act, 2023 (India)</strong>, you may have the right to:
        </Body>
        <BulletList items={["Access your personal information", "Correct inaccurate information", "Update your profile", "Request deletion of your data", "Withdraw consent where applicable", "Request information about how your data is processed", "Lodge complaints with applicable authorities"]} />
        <Box sx={{ mt: 2 }}>
          <Body>To exercise these rights, please contact us using the details provided below.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 9,
    icon: <ChildCareIcon />,
    title: "Children's Privacy",
    content: (
      <>
        <Body>Some IAIRE programs are designed for school students. Where legally required, parental or guardian consent may be obtained before collecting personal information from minors.</Body>
        <Box sx={{ mt: 1.5 }}>
          <Body>We encourage parents, guardians, and educational institutions to supervise students&apos; use of our services.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 10,
    icon: <PublicIcon />,
    title: "Third-Party Services",
    content: (
      <>
        <Body>Our website may include links to third-party websites or services, including:</Body>
        <BulletList items={["Payment gateways", "Social media platforms", "Video platforms", "Educational resources", "External registration systems"]} />
        <Box sx={{ mt: 2 }}>
          <Body>We are not responsible for the privacy practices or content of third-party websites.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 11,
    icon: <PublicIcon />,
    title: "International Users",
    content: (
      <Body>
        If you access our website from outside India, your information may be transferred, stored, and processed in jurisdictions where our service providers operate. By using our services, you consent to such transfers in accordance with applicable data protection laws.
      </Body>
    ),
  },
  {
    id: 12,
    icon: <UpdateIcon />,
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <Body>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated Effective Date.</Body>
        <Box sx={{ mt: 1.5 }}>
          <Body>Continued use of the website after changes become effective constitutes acceptance of the revised Privacy Policy.</Body>
        </Box>
      </>
    ),
  },
  {
    id: 13,
    icon: <ContactMailIcon />,
    title: "Contact Us",
    content: (
      <>
        <Body>If you have questions regarding this Privacy Policy or your personal information, please contact us:</Body>
        <ContactCard />
        <Box sx={{ mt: 2 }}>
          <Body>For data protection or privacy-related requests, please include sufficient details so we can verify your identity and respond appropriately.</Body>
        </Box>
      </>
    ),
  },
];
