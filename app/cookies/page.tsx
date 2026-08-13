import LegalLayout from "@/components/layouts/legal/LegalLayout";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { inter } from "@/utils/fonts";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h6"
    sx={{
      fontFamily: inter.style.fontFamily,
      fontWeight: 700,
      color: "#0B1727",
      mt: 4,
      mb: 2,
    }}
  >
    {children}
  </Typography>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="subtitle1"
    sx={{
      fontFamily: inter.style.fontFamily,
      fontWeight: 700,
      color: "#0B1727",
      mt: 3,
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
);

const P = ({ children, sx = {} }: { children: React.ReactNode; sx?: any }) => (
  <Typography
    sx={{
      fontFamily: inter.style.fontFamily,
      fontSize: "15px",
      lineHeight: 1.8,
      color: "#4B5563",
      mb: 2,
      ...sx,
    }}
  >
    {children}
  </Typography>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <ListItem sx={{ py: 0, px: 0, alignItems: "flex-start" }}>
    <Box sx={{ minWidth: "12px", pt: "8px" }}>
      <Box
        sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#4B5563" }}
      />
    </Box>
    <ListItemText
      primary={children}
      primaryTypographyProps={{
        fontFamily: inter.style.fontFamily,
        fontSize: "15px",
        lineHeight: 1.8,
        color: "#4B5563",
      }}
    />
  </ListItem>
);

const CookieSettingsPage = () => {
  return (
    <Box>
      <LegalLayout title="Cookie Settings">
        <P sx={{ fontWeight: 600 }}>Last Updated: August 13, 2026</P>

        <P>
          The International Academy of Innovation, Research and Entrepreneurship
          ("IAIRE," "we," "us," or "our") uses cookies and similar technologies
          on our website and digital platforms (collectively, the "Services") to
          provide essential functionality, improve website performance,
          understand how visitors use our Services, and enhance the overall user
          experience.
        </P>
        <P>
          This Cookie Settings notice explains what cookies are, how we use
          them, and how you can manage your cookie preferences.
        </P>

        <H2>1. What Are Cookies?</H2>
        <P>
          Cookies are small text files placed on your device when you visit a
          website. They allow websites to remember information about your visit,
          recognize returning visitors, maintain certain preferences, and
          provide functionality that may not otherwise be available.
        </P>
        <P>
          We may also use similar technologies, such as pixels, tags, local
          storage, and analytics technologies, which may operate in a similar
          manner to cookies.
        </P>

        <H2>2. How We Use Cookies</H2>
        <P>
          IAIRE may use cookies and similar technologies for the following
          purposes:
        </P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>
            To operate and secure essential website functionality.
          </Bullet>
          <Bullet>To remember your preferences and settings.</Bullet>
          <Bullet>To maintain login and session information.</Bullet>
          <Bullet>To understand how visitors interact with our website.</Bullet>
          <Bullet>
            To measure website performance and improve our Services.
          </Bullet>
          <Bullet>
            To identify technical issues and improve website reliability.
          </Bullet>
          <Bullet>
            To support relevant communications and website functionality where
            applicable.
          </Bullet>
        </List>

        <H2>3. Types of Cookies We Use</H2>

        <H3>3.1 Strictly Necessary Cookies</H3>
        <P>
          These cookies are essential for the website to function properly. They
          may support features such as:
        </P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Account login and authentication.</Bullet>
          <Bullet>Session management.</Bullet>
          <Bullet>Security and fraud prevention.</Bullet>
          <Bullet>Form submissions.</Bullet>
          <Bullet>User preferences necessary for website functionality.</Bullet>
          <Bullet>Load balancing and technical operations.</Bullet>
        </List>
        <P>
          Because these cookies are necessary for the operation of the website,
          they generally cannot be disabled through our cookie preference tool.
        </P>

        <H3>3.2 Functional Cookies</H3>
        <P>
          Functional cookies allow the website to remember choices you make and
          provide enhanced functionality.
        </P>
        <P>For example, they may remember:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Language preferences.</Bullet>
          <Bullet>Region or location preferences.</Bullet>
          <Bullet>Display preferences.</Bullet>
          <Bullet>Previously selected website settings.</Bullet>
        </List>
        <P>
          If you disable these cookies, some website functionality or
          personalization may not work as intended.
        </P>

        <H3>3.3 Analytics and Performance Cookies</H3>
        <P>These cookies help us understand how visitors use our website.</P>
        <P>They may collect information such as:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Pages visited.</Bullet>
          <Bullet>Approximate time spent on pages.</Bullet>
          <Bullet>Navigation patterns.</Bullet>
          <Bullet>Browser and device information.</Bullet>
          <Bullet>Website interactions.</Bullet>
          <Bullet>General performance information.</Bullet>
        </List>
        <P>
          This information helps us understand website usage and improve the
          structure, content, performance, and usability of our Services.
        </P>
        <P>
          Where applicable, analytics services may process information according
          to their own privacy policies.
        </P>

        <H3>3.4 Marketing and Advertising Cookies</H3>
        <P>
          Where used, marketing or advertising cookies may help us understand
          interactions with our communications, campaigns, or promotional
          content.
        </P>
        <P>These technologies may be used to:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Measure campaign effectiveness.</Bullet>
          <Bullet>Understand engagement with promotional content.</Bullet>
          <Bullet>Provide more relevant communications.</Bullet>
          <Bullet>Measure conversions or referrals.</Bullet>
        </List>
        <P>
          IAIRE will only use such technologies where permitted by applicable
          law and according to the user's applicable consent preferences.
        </P>

        <H2>4. Third-Party Cookies</H2>
        <P>
          Some cookies may be placed by third-party service providers that
          support our website or Services.
        </P>
        <P>These third parties may include providers of:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Website analytics.</Bullet>
          <Bullet>Authentication services.</Bullet>
          <Bullet>Payment processing.</Bullet>
          <Bullet>Embedded content.</Bullet>
          <Bullet>Security services.</Bullet>
          <Bullet>Communication tools.</Bullet>
          <Bullet>Performance monitoring.</Bullet>
          <Bullet>Other website functionality.</Bullet>
        </List>
        <P>
          Third-party providers may process information according to their own
          privacy policies and terms.
        </P>
        <P>
          IAIRE does not control the cookie practices of third-party websites or
          services that are not operated by IAIRE.
        </P>

        <H2>5. Your Cookie Choices</H2>
        <P>
          When you visit the IAIRE website, you may be presented with a cookie
          consent or preference interface where available.
        </P>
        <P>Depending on the available options, you may be able to:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>
            <strong>Accept All Cookies</strong> — Allow all available cookie
            categories.
          </Bullet>
          <Bullet>
            <strong>Reject Non-Essential Cookies</strong> — Disable optional
            cookies while allowing strictly necessary cookies.
          </Bullet>
          <Bullet>
            <strong>Manage Preferences</strong> — Select individual cookie
            categories according to your preferences.
          </Bullet>
        </List>
        <P>
          Your choices may be stored in a cookie or similar technology so that
          we can remember your preferences.
        </P>

        <H2>6. Managing Cookies Through Your Browser</H2>
        <P>
          You can also manage or delete cookies through your browser settings.
        </P>
        <P>Most modern browsers allow you to:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>View stored cookies.</Bullet>
          <Bullet>Delete existing cookies.</Bullet>
          <Bullet>Block cookies.</Bullet>
          <Bullet>Allow cookies from specific websites.</Bullet>
          <Bullet>Receive notifications before cookies are stored.</Bullet>
        </List>
        <P>
          Disabling certain cookies may affect the availability or functionality
          of some parts of the IAIRE website.
        </P>

        <H2>7. Cookie Retention</H2>
        <P>
          Different cookies may remain on your device for different periods.
        </P>
        <P>
          Some cookies are <strong>session cookies</strong>, which are deleted
          when you close your browser.
        </P>
        <P>
          Other cookies are <strong>persistent cookies</strong>, which remain on
          your device for a specified period or until you delete them.
        </P>
        <P>
          The retention period may vary depending on the purpose of the cookie
          and the service provider responsible for placing it.
        </P>

        <H2>8. Changes to Cookie Settings</H2>
        <P>
          IAIRE may update its use of cookies and similar technologies from time
          to time as our Services, technology, or legal requirements change.
        </P>
        <P>
          If we make material changes, we may update this Cookie Settings notice
          and the "Last Updated" date.
        </P>
        <P>
          We encourage you to review this page periodically to stay informed
          about how cookies are used.
        </P>

        <H2>9. Privacy</H2>
        <P>
          Cookies may involve the collection or processing of information that
          can be associated with your device or online activity.
        </P>
        <P>
          For information about how IAIRE collects, uses, stores, and protects
          personal information, please refer to our{" "}
          <strong>Privacy Policy</strong>.
        </P>

        <H2>10. Contact Us</H2>
        <P>
          If you have questions about our use of cookies or your cookie
          preferences, please contact us:
        </P>
        <Box sx={{ mb: 4, mt: 2 }}>
          <P sx={{ mb: 1 }}>
            <strong>
              International Academy of Innovation, Research and Entrepreneurship
              (IAIRE)
            </strong>
          </P>
          <P sx={{ mb: 1 }}>
            <strong>Email:</strong> [Official IAIRE Contact Email]
          </P>
          <P sx={{ mb: 1 }}>
            <strong>Address:</strong> [Official Registered/Business Address]
          </P>
          <P sx={{ mb: 1 }}>
            <strong>Website:</strong> https://iaire.vercel.app/
          </P>
        </Box>

        <H3>Cookie Preference Summary</H3>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            border: "1px solid #E2E8F0",
            borderRadius: "12px",
            mb: 4,
            mt: 2,
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="cookie preference table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F1F5F9" }}>
                <TableCell
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 700,
                    color: "#0B1727",
                  }}
                >
                  Cookie Category
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 700,
                    color: "#0B1727",
                  }}
                >
                  Purpose
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 700,
                    color: "#0B1727",
                  }}
                >
                  Can You Disable It?
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#4B5563",
                    fontWeight: 600,
                  }}
                >
                  Strictly Necessary
                </TableCell>
                <TableCell
                  sx={{ fontFamily: inter.style.fontFamily, color: "#4B5563" }}
                >
                  Website operation, security, authentication, and essential
                  functionality
                </TableCell>
                <TableCell
                  sx={{ fontFamily: inter.style.fontFamily, color: "#4B5563" }}
                >
                  Generally No
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#4B5563",
                    fontWeight: 600,
                  }}
                >
                  Functional
                </TableCell>
                <TableCell
                  sx={{ fontFamily: inter.style.fontFamily, color: "#4B5563" }}
                >
                  Preferences and enhanced functionality
                </TableCell>
                <TableCell
                  sx={{ fontFamily: inter.style.fontFamily, color: "#4B5563" }}
                >
                  Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#4B5563",
                    fontWeight: 600,
                  }}
                >
                  Analytics & Performance
                </TableCell>
                <TableCell
                  sx={{ fontFamily: inter.style.fontFamily, color: "#4B5563" }}
                >
                  Website analytics and performance improvement
                </TableCell>
                <TableCell
                  sx={{ fontFamily: inter.style.fontFamily, color: "#4B5563" }}
                >
                  Yes
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    color: "#4B5563",
                    fontWeight: 600,
                  }}
                >
                  Marketing & Advertising
                </TableCell>
                <TableCell
                  sx={{ fontFamily: inter.style.fontFamily, color: "#4B5563" }}
                >
                  Campaign measurement and relevant promotional activities,
                  where applicable
                </TableCell>
                <TableCell
                  sx={{ fontFamily: inter.style.fontFamily, color: "#4B5563" }}
                >
                  Yes
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 4 }} />

        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "15px",
            fontWeight: 600,
            color: "#0B1727",
            textAlign: "center",
          }}
        >
          Your privacy matters to us. You can change your cookie preferences at
          any time through the available cookie settings controls on our
          website.
        </Typography>
      </LegalLayout>
    </Box>
  );
};

export default CookieSettingsPage;
