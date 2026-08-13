import LegalLayout from "@/components/layouts/legal/LegalLayout";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
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

const TermsofServicePage = () => {
  return (
    <Box>
      <LegalLayout title="Terms of Service">
        <P sx={{ fontWeight: 600 }}>Last Updated: August 13, 2026</P>

        <P>
          Welcome to IAIRE — the International Academy of Innovation, Research
          and Entrepreneurship ("IAIRE," "we," "us," or "our"). These Terms of
          Service ("Terms") govern your access to and use of the IAIRE website,
          membership platform, programs, services, resources, certifications,
          fellowships, and related digital services (collectively, the
          "Services").
        </P>
        <P>
          By accessing or using our Services, you acknowledge that you have
          read, understood, and agree to be bound by these Terms. If you do not
          agree with these Terms, please do not use the Services.
        </P>

        <H2>1. About IAIRE</H2>
        <P>
          IAIRE is an independent U.S.-based nonprofit academic and professional
          society dedicated to advancing innovation, research, and
          entrepreneurship education through standards development,
          certification frameworks, fellowship recognition, mentorship,
          professional development, and quality-assurance mechanisms.
        </P>
        <P>
          IAIRE brings together educational institutions, educators, students,
          researchers, scientists, inventors, entrepreneurs, and other
          professionals to support innovation, research, intellectual property
          development, and entrepreneurship education.
        </P>
        <P>
          IAIRE is not a government agency, statutory regulator, licensing
          authority, degree-granting institution, or substitute for any
          governmental or regulatory function. IAIRE certifications,
          memberships, fellowships, and recognitions are voluntary academic and
          professional recognitions based on applicable IAIRE standards,
          criteria, review processes, and demonstrated achievements.
        </P>

        <H2>2. Eligibility</H2>
        <P>
          You may use the Services only if you are legally capable of entering
          into a binding agreement under applicable law.
        </P>
        <P>
          If you are under the age of legal majority in your jurisdiction, you
          may use certain IAIRE Services only with the involvement and consent
          of a parent, legal guardian, school, educational institution, or other
          authorized adult, where required by applicable law.
        </P>
        <P>
          When registering on behalf of an institution, school, organization, or
          other entity, you represent that you have the authority to act on
          behalf of that entity.
        </P>

        <H2>3. Account Registration</H2>
        <P>
          Certain IAIRE Services may require you to create an account or submit
          registration information.
        </P>
        <P>You agree to:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Provide accurate, complete, and current information.</Bullet>
          <Bullet>
            Maintain the confidentiality of your login credentials.
          </Bullet>
          <Bullet>Keep your account information updated.</Bullet>
          <Bullet>
            Not share your account credentials with unauthorized individuals.
          </Bullet>
          <Bullet>
            Notify IAIRE promptly of any unauthorized access or suspected
            security breach.
          </Bullet>
          <Bullet>
            Accept responsibility for activity conducted through your account,
            except where caused by IAIRE's own failure to maintain reasonable
            security.
          </Bullet>
        </List>
        <P>
          IAIRE reserves the right to suspend or terminate accounts containing
          false, misleading, fraudulent, or materially incomplete information.
        </P>

        <H2>4. Membership</H2>
        <P>
          IAIRE may offer different categories of membership, including
          institutional, educator, student, professional, or other membership
          categories.
        </P>
        <P>
          Membership eligibility, benefits, duration, fees, application
          requirements, and renewal conditions may vary according to the
          applicable membership category and may be communicated during the
          application or enrollment process.
        </P>
        <P>
          Membership does not automatically guarantee certification, fellowship,
          awards, recognition, admission to a particular program, publication,
          patent support, or any other specific outcome.
        </P>
        <P>
          IAIRE may review membership applications and may approve, decline,
          suspend, or terminate membership where permitted under applicable
          policies and law.
        </P>

        <H2>5. Programs, Certifications and Fellowships</H2>
        <P>
          IAIRE may provide educational programs, training, certifications,
          mentor certifications, fellowship pathways, innovation programs,
          research programs, competitions, and other professional or academic
          initiatives.
        </P>
        <P>
          Participation in any program is subject to the applicable eligibility
          criteria, program requirements, assessment procedures, standards,
          deadlines, and policies.
        </P>
        <P>
          Certification or fellowship decisions may be based on demonstrated
          competencies, submitted evidence, achievements, peer review,
          evaluation criteria, institutional requirements, or other applicable
          IAIRE standards.
        </P>
        <P>
          IAIRE reserves the right to update program requirements, evaluation
          criteria, certification standards, or fellowship criteria when
          reasonably necessary to maintain academic and professional quality.
        </P>

        <H2>6. No Guarantee of Outcomes</H2>
        <P>
          IAIRE provides frameworks, educational resources, guidance,
          mentorship, evaluation, and recognition opportunities. However,
          participation in IAIRE Services does not guarantee:
        </P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Admission to an educational institution or program;</Bullet>
          <Bullet>Employment or career advancement;</Bullet>
          <Bullet>Business or entrepreneurial success;</Bullet>
          <Bullet>Research publication;</Bullet>
          <Bullet>Patent grant or registration;</Bullet>
          <Bullet>Funding or investment;</Bullet>
          <Bullet>Competition placement or awards;</Bullet>
          <Bullet>Government approval or regulatory recognition;</Bullet>
          <Bullet>Academic credit;</Bullet>
          <Bullet>Professional licensure; or</Bullet>
          <Bullet>
            Any particular educational, commercial, professional, or financial
            outcome.
          </Bullet>
        </List>
        <P>Results depend on numerous factors outside IAIRE's control.</P>

        <H2>7. Intellectual Property and User Submissions</H2>
        <P>
          You retain ownership of intellectual property that you independently
          create and submit through IAIRE Services, except where otherwise
          agreed in writing or required by applicable program-specific terms.
        </P>
        <P>
          By submitting content to IAIRE, including project descriptions,
          research materials, photographs, documents, presentations,
          applications, videos, or other materials ("User Content"), you
          represent that:
        </P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>
            You own or have the necessary rights to submit the content;
          </Bullet>
          <Bullet>
            The submission does not knowingly infringe the intellectual property
            or other rights of another person;
          </Bullet>
          <Bullet>
            You have obtained necessary permissions for any third-party material
            included in the submission; and
          </Bullet>
          <Bullet>
            The submission complies with applicable laws and IAIRE policies.
          </Bullet>
        </List>
        <P>
          You grant IAIRE a non-exclusive, worldwide, royalty-free license to
          use, reproduce, store, process, display, and communicate User Content
          solely as reasonably necessary to operate, administer, evaluate,
          promote, document, and improve the applicable IAIRE Services, subject
          to applicable privacy policies and any specific terms communicated for
          the relevant program.
        </P>
        <P>
          Where a program contains specific intellectual-property rules, those
          program-specific rules will apply in addition to these Terms.
        </P>

        <H2>8. Intellectual Property Guidance</H2>
        <P>
          IAIRE may provide educational information, templates, resources,
          mentorship, or general guidance relating to intellectual property,
          patents, research, publications, innovation, and entrepreneurship.
        </P>
        <P>
          Such information is provided for educational and informational
          purposes and does not constitute legal advice, patent prosecution
          services, or a guarantee that an invention or application will be
          patentable, registered, published, accepted, or granted.
        </P>
        <P>
          Users are responsible for obtaining professional legal or
          intellectual-property advice where appropriate.
        </P>

        <H2>9. Website Content and Resources</H2>
        <P>
          The IAIRE website may provide standards, rubrics, templates, articles,
          educational resources, research resources, guidance documents,
          graphics, videos, logos, and other materials.
        </P>
        <P>
          Unless otherwise stated, these materials are owned by or licensed to
          IAIRE and may not be copied, modified, distributed, republished, sold,
          or commercially exploited without prior written permission.
        </P>
        <P>
          You may access and use publicly available resources for legitimate
          educational and non-commercial purposes, subject to these Terms and
          any additional license terms accompanying the relevant resource.
        </P>

        <H2>10. Prohibited Activities</H2>
        <P>You agree not to:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>
            Use the Services for unlawful, fraudulent, or abusive purposes;
          </Bullet>
          <Bullet>Provide false, misleading, or fraudulent information;</Bullet>
          <Bullet>Impersonate another person or organization;</Bullet>
          <Bullet>
            Attempt to gain unauthorized access to accounts, systems, or data;
          </Bullet>
          <Bullet>
            Interfere with the operation or security of the website or platform;
          </Bullet>
          <Bullet>Upload malicious software, viruses, or harmful code;</Bullet>
          <Bullet>
            Scrape, copy, reproduce, or systematically extract website data
            without authorization;
          </Bullet>
          <Bullet>Circumvent access controls or security mechanisms;</Bullet>
          <Bullet>
            Submit plagiarized, fabricated, or materially misleading research or
            project information;
          </Bullet>
          <Bullet>
            Manipulate evaluations, competitions, rankings, certifications, or
            recognition processes;
          </Bullet>
          <Bullet>
            Infringe another person's intellectual-property, privacy, or other
            legal rights; or
          </Bullet>
          <Bullet>
            Use IAIRE's name, trademarks, certifications, badges, or
            recognitions in a misleading manner.
          </Bullet>
        </List>

        <H2>11. Competitions, Awards and Recognition</H2>
        <P>
          IAIRE may conduct innovation competitions, research competitions,
          awards, rankings, fellowships, certifications, and other recognition
          activities.
        </P>
        <P>
          Eligibility, judging criteria, submission requirements, deadlines,
          review procedures, and award conditions may vary by program.
        </P>
        <P>
          IAIRE reserves the right to disqualify submissions that violate
          applicable rules, contain fraudulent or plagiarized material, or
          otherwise compromise the integrity of an evaluation or competition.
        </P>
        <P>
          Judging and recognition decisions made under applicable program rules
          may be final, subject to any appeal or review process expressly
          provided for that program.
        </P>

        <H2>12. Third-Party Services and Links</H2>
        <P>
          The Services may contain links to third-party websites, applications,
          platforms, payment processors, educational resources, or other
          services.
        </P>
        <P>
          IAIRE does not control and is not responsible for the content,
          availability, security, privacy practices, or terms of third-party
          services.
        </P>
        <P>
          Your use of third-party services is subject to the terms and policies
          of those third parties.
        </P>

        <H2>13. Payments, Fees and Refunds</H2>
        <P>
          Certain IAIRE Services may require payment of membership fees, program
          fees, certification fees, event fees, or other charges.
        </P>
        <P>
          Applicable pricing, payment terms, renewal conditions, and refund
          policies will be presented at the relevant point of purchase or
          enrollment.
        </P>
        <P>
          Unless otherwise expressly stated, fees are non-transferable and any
          refund eligibility will be determined according to the applicable
          program or payment policy.
        </P>
        <P>
          IAIRE may use third-party payment processors to process transactions.
          IAIRE does not directly store complete payment-card information where
          payment processing is handled by such third-party providers.
        </P>

        <H2>14. Privacy</H2>
        <P>
          Your use of the Services is also subject to the IAIRE Privacy Policy.
        </P>
        <P>
          The Privacy Policy explains how IAIRE may collect, use, store,
          disclose, and protect personal information submitted through the
          website and Services.
        </P>
        <P>
          By using the Services, you acknowledge that you have reviewed the
          applicable Privacy Policy.
        </P>

        <H2>15. Communications</H2>
        <P>
          By registering for an IAIRE account, membership, program, or
          newsletter, you may receive transactional communications, service
          notifications, program updates, administrative notices, and other
          communications necessary to provide the Services.
        </P>
        <P>
          Where required by applicable law, marketing communications will
          provide an appropriate method to unsubscribe or manage communication
          preferences.
        </P>

        <H2>16. Disclaimer of Warranties</H2>
        <P>
          To the maximum extent permitted by applicable law, the Services and
          website are provided on an "as is" and "as available" basis.
        </P>
        <P>IAIRE does not guarantee that:</P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>The website or Services will always be available;</Bullet>
          <Bullet>The Services will be uninterrupted or error-free;</Bullet>
          <Bullet>
            Information on the website will always be complete, current, or
            accurate;
          </Bullet>
          <Bullet>
            Particular program results or outcomes will be achieved; or
          </Bullet>
          <Bullet>
            The website will be free from all security vulnerabilities or
            technical defects.
          </Bullet>
        </List>
        <P>
          Nothing in these Terms excludes any warranty or consumer protection
          right that cannot legally be excluded under applicable law.
        </P>

        <H2>17. Limitation of Liability</H2>
        <P>
          To the maximum extent permitted by applicable law, IAIRE and its
          directors, officers, employees, advisors, volunteers, representatives,
          and affiliates will not be liable for indirect, incidental,
          consequential, special, exemplary, or punitive damages arising from or
          related to your use of the Services.
        </P>
        <P>
          Where liability cannot legally be excluded, IAIRE's liability will be
          limited to the maximum extent permitted by applicable law.
        </P>

        <H2>18. Indemnification</H2>
        <P>
          To the extent permitted by applicable law, you agree to indemnify and
          hold harmless IAIRE and its directors, officers, employees,
          representatives, advisors, volunteers, and affiliates from claims,
          liabilities, damages, losses, costs, and expenses arising from:
        </P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Your violation of these Terms;</Bullet>
          <Bullet>Your misuse of the Services;</Bullet>
          <Bullet>Your User Content;</Bullet>
          <Bullet>Your violation of another person's rights; or</Bullet>
          <Bullet>Your violation of applicable laws or regulations.</Bullet>
        </List>

        <H2>19. Suspension and Termination</H2>
        <P>
          IAIRE may suspend, restrict, or terminate your access to the Services
          if you:
        </P>
        <List sx={{ pt: 0, pb: 2 }}>
          <Bullet>Violate these Terms;</Bullet>
          <Bullet>Provide false or fraudulent information;</Bullet>
          <Bullet>Misuse the Services;</Bullet>
          <Bullet>
            Engage in conduct that threatens the integrity, safety, or
            reputation of IAIRE or its community; or
          </Bullet>
          <Bullet>Violate applicable program or membership rules.</Bullet>
        </List>
        <P>
          IAIRE may also discontinue or modify any Service when reasonably
          necessary.
        </P>
        <P>
          Upon termination, provisions that by their nature should continue to
          apply—including intellectual property, disclaimers, limitation of
          liability, indemnification, and dispute-related provisions—will
          survive.
        </P>

        <H2>20. Changes to These Terms</H2>
        <P>
          IAIRE may update these Terms from time to time to reflect changes to
          its Services, policies, legal requirements, or operational practices.
        </P>
        <P>
          Updated Terms will be posted on this website with a revised "Last
          Updated" date.
        </P>
        <P>
          Your continued use of the Services after updated Terms become
          effective constitutes acceptance of the revised Terms, to the extent
          permitted by applicable law.
        </P>

        <H2>21. Governing Law</H2>
        <P>
          These Terms shall be governed by and interpreted in accordance with
          the laws of <strong>[State], United States</strong>, without regard to
          conflict-of-law principles, except where applicable law requires
          otherwise.
        </P>
        <P>
          Any dispute arising from or relating to these Terms or the Services
          shall be subject to the jurisdiction of the applicable courts located
          in <strong>[State/County], United States</strong>, unless otherwise
          required by applicable law.
        </P>
        <P>
          <em>
            Note: The governing-law and jurisdiction provisions should be
            finalized based on IAIRE's actual legal entity registration and
            principal place of business.
          </em>
        </P>

        <H2>22. Severability</H2>
        <P>
          If any provision of these Terms is determined to be invalid, unlawful,
          or unenforceable, that provision will be interpreted or modified to
          the minimum extent necessary to make it enforceable, and the remaining
          provisions will continue in full force and effect.
        </P>

        <H2>23. Entire Agreement</H2>
        <P>
          These Terms, together with the IAIRE Privacy Policy, Cookie Policy,
          applicable membership terms, program-specific rules, and other
          policies expressly incorporated by reference, constitute the agreement
          between you and IAIRE regarding your use of the Services.
        </P>

        <H2>24. Contact Us</H2>
        <P>
          If you have questions regarding these Terms of Service, membership,
          programs, or other IAIRE Services, please contact us:
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
          By accessing or using the IAIRE website and Services, you acknowledge
          that you have read and agree to these Terms of Service.
        </Typography>
      </LegalLayout>
    </Box>
  );
};

export default TermsofServicePage;
