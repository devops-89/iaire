import WelcomeBanner from "@/components/widgets/Dashboard/WelcomeBanner";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Card,
  CircularProgress,
} from "@mui/material";
import React from "react";
import StatsBox from "./components/dashboard/StatsBox";
import { DASHBOARD_STAT_CARDS } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  School,
  Groups,
  Lightbulb,
  WorkspacePremium,
  ArrowForward,
} from "@mui/icons-material";
import Link from "next/link";
import { useSchoolDashboard } from "@/hooks/school/useSchoolDashboard";

const InstitutionDashboards = () => {
  const { dashboardData, loading } = useSchoolDashboard();

  // Helper function to safely extract values from API response (supporting flat or nested shapes)
  const getApiValue = (keys: string[], fallback: string | number) => {
    if (!dashboardData) return String(fallback);
    for (const key of keys) {
      if (key.includes(".")) {
        const parts = key.split(".");
        let current = dashboardData;
        for (const part of parts) {
          if (
            current &&
            current[part] !== undefined &&
            current[part] !== null
          ) {
            current = current[part];
          } else {
            current = undefined;
            break;
          }
        }
        if (current !== undefined) {
          return String(current);
        }
      } else {
        if (dashboardData[key] !== undefined && dashboardData[key] !== null) {
          return String(dashboardData[key]);
        }
      }
    }
    return String(fallback);
  };

  // Dynamically map API response keys to target counts
  const dynamicStatsCards = DASHBOARD_STAT_CARDS.map((section) => {
    let updatedData = [...section.data];

    if (section.title === "Educators") {
      updatedData = [
        {
          ...section.data[0],
          count: getApiValue(
            [
              "educators.total",
              "totalTeachers",
              "teachersCount",
              "totalNumberOfTeachers",
              "noOfTeachers",
            ],
            section.data[0].count,
          ),
        },
        {
          ...section.data[1],
          count: getApiValue(
            [
              "educators.members",
              "totalMemberTeachers",
              "memberTeachersCount",
              "memberTeachers",
              "totalMemberEducators",
            ],
            section.data[1].count,
          ),
        },
        {
          ...section.data[2],
          count: getApiValue(
            [
              "educators.trainedInnovation",
              "totalTrainedTeachersInInnovation",
              "trainedTeachersInInnovation",
              "trainedTeachersInnovation",
              "teachersTrainedInInnovation",
            ],
            section.data[2].count,
          ),
        },
        {
          ...section.data[3],
          count: getApiValue(
            [
              "educators.trainedResearch",
              "totalTrainedTeachersInResearch",
              "trainedTeachersInResearch",
              "trainedTeachersResearch",
              "teachersTrainedInResearch",
            ],
            section.data[3].count,
          ),
        },
      ];
    } else if (section.title === "Students") {
      updatedData = [
        {
          ...section.data[0],
          count: getApiValue(
            [
              "students.trainedInnovation",
              "studentsTrainedOnInnovation",
              "studentsTrainedInInnovation",
              "trainedStudentsInnovation",
              "totalStudentsTrainedOnInnovation",
            ],
            section.data[0].count,
          ),
        },
        {
          ...section.data[1],
          count: getApiValue(
            [
              "students.trainedResearch",
              "studentsTrainedOnResearch",
              "studentsTrainedInResearch",
              "trainedStudentsResearch",
              "totalStudentsTrainedOnResearch",
            ],
            section.data[1].count,
          ),
        },
        {
          ...section.data[2],
          count: getApiValue(
            [
              "students.launchedStartups",
              "studentsLaunchedStartups",
              "totalStudentsLaunchedStartups",
              "studentsLaunchedStartup",
              "startupsLaunchedByStudents",
            ],
            section.data[2].count,
          ),
        },
        {
          ...section.data[3],
          count: getApiValue(
            [
              "students.assistantMentors",
              "studentsWorkingAsAssistantMentors",
              "assistantMentorsCount",
              "totalAssistantMentors",
              "assistantMentors",
            ],
            section.data[3].count,
          ),
        },
      ];
    } else if (section.title === "Patent") {
      updatedData = section.data.map((card) => {
        if (card.title.toLowerCase().includes("pending")) {
          return {
            ...card,
            count: getApiValue(
              [
                "patents.pending",
                "patentPending",
                "totalPatentPending",
                "patentsPending",
                "patentPendingCount",
              ],
              card.count,
            ),
          };
        } else if (card.title.toLowerCase().includes("granted")) {
          return {
            ...card,
            count: getApiValue(
              [
                "patents.granted",
                "patentGranted",
                "totalPatentGranted",
                "patentsGranted",
                "patentGrantedCount",
              ],
              card.count,
            ),
          };
        }
        return card;
      });
    } else if (section.title === "Research Submission") {
      updatedData = section.data.map((card) => {
        if (card.title.toLowerCase().includes("submitted")) {
          return {
            ...card,
            count: getApiValue(
              [
                "researchSubmissions.submitted",
                "researchSubmitted",
                "totalResearchSubmitted",
                "submittedResearch",
                "researchSubmissionsCount",
              ],
              card.count,
            ),
          };
        } else if (card.title.toLowerCase().includes("accepted")) {
          return {
            ...card,
            count: getApiValue(
              [
                "researchSubmissions.accepted",
                "researchAccepted",
                "totalResearchAccepted",
                "acceptedResearch",
              ],
              card.count,
            ),
          };
        } else if (card.title.toLowerCase().includes("pending")) {
          return {
            ...card,
            count: getApiValue(
              [
                "researchSubmissions.pending",
                "researchPending",
                "totalResearchPending",
                "pendingResearch",
              ],
              card.count,
            ),
          };
        } else if (
          card.title.toLowerCase().includes("granted") ||
          card.title.toLowerCase().includes("published")
        ) {
          return {
            ...card,
            count: getApiValue(
              [
                "researchSubmissions.granted",
                "researchSubmissions.published",
                "researchGranted",
                "totalResearchGranted",
                "grantedResearch",
                "researchPublished",
                "publishedResearch",
              ],
              card.count,
            ),
          };
        }
        return card;
      });
    } else if (section.title === "Startups") {
      updatedData = [
        {
          ...section.data[0],
          count: getApiValue(
            [
              "startups.launched",
              "startupsLaunched",
              "totalStartupsLaunched",
              "startupsCount",
              "launchedStartups",
            ],
            section.data[0].count,
          ),
        },
        {
          ...section.data[1],
          count: getApiValue(
            [
              "startups.funded",
              "startupsFunded",
              "totalStartupsFunded",
              "fundedStartups",
            ],
            section.data[1].count,
          ),
        },
        {
          ...section.data[2],
          count: getApiValue(
            [
              "startups.nonFunded",
              "startupsNonFunded",
              "totalStartupsNonFunded",
              "nonFundedStartups",
            ],
            section.data[2].count,
          ),
        },
        {
          ...section.data[3],
          count: getApiValue(
            [
              "startups.activeMentorships",
              "activeMentorships",
              "totalActiveMentorships",
              "mentorshipsCount",
            ],
            section.data[3].count,
          ),
        },
      ];
    }

    return {
      ...section,
      data: updatedData,
    };
  });

  const quickActions = [
    {
      title: "Membership Management",
      desc: "Manage dues and view certificate",
      icon: <WorkspacePremium sx={{ fontSize: 24 }} />,
      href: "/dashboard/institution/membership-management",
      color: "#C5A059",
      bgColor: "rgba(223, 186, 115, 0.15)",
    },
    {
      title: "Educator Management",
      desc: "View and coordinate teachers",
      icon: <School sx={{ fontSize: 24 }} />,
      href: "/dashboard/institution/educator-management",
      color: COLORS.PRIMARY_NAVY,
      bgColor: "rgba(11, 23, 39, 0.08)",
    },
    {
      title: "Team Management",
      desc: "Manage student-mentor groups",
      icon: <Groups sx={{ fontSize: 24 }} />,
      href: "/dashboard/institution/team-management",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.12)",
    },
    {
      title: "Log Innovation",
      desc: "Submit new student innovations",
      icon: <Lightbulb sx={{ fontSize: 24 }} />,
      href: "/dashboard/institution/innovation-submission",
      color: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.12)",
    },
  ];

  return (
    <Stack spacing={4} sx={{ width: "100%", pb: 4 }}>
      {/* Premium Header */}
      <Box>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: { xs: 28, md: 36 },
            fontWeight: 800,
            color: COLORS.PRIMARY_NAVY,
            letterSpacing: "-0.5px",
          }}
        >
          Institution Dashboard
        </Typography>
        <Typography
          sx={{
            fontFamily: montserrat.style.fontFamily,
            fontSize: { xs: 13, md: 15 },
            color: "rgba(0,0,0,0.5)",
            mt: 0.5,
            fontWeight: 500,
          }}
        >
          Manage your educators, student teams, innovations, and institutional
          membership.
        </Typography>
      </Box>

      {/* Welcome Banner Card & Tier Progress (side by side) */}
      <WelcomeBanner />

      {/* Quick Actions Section */}
      <Box>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 20,
            fontWeight: 800,
            color: COLORS.PRIMARY_NAVY,
            mb: 2,
          }}
        >
          Quick Actions
        </Typography>
        <Grid container spacing={3}>
          {quickActions.map((action, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Link href={action.href} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f6f8fb 100%)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.02)",
                    border: "1px solid rgba(0,0,0,0.03)",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    height: "100%",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 10px 25px ${action.bgColor}`,
                      borderColor: action.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      bgcolor: action.bgColor,
                      color: action.color,
                      display: "flex",
                    }}
                  >
                    {action.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: COLORS.PRIMARY_NAVY,
                        fontSize: 14,
                        fontFamily: montserrat.style.fontFamily,
                      }}
                    >
                      {action.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(0,0,0,0.5)",
                        fontSize: 11,
                        mt: 0.5,
                        fontFamily: montserrat.style.fontFamily,
                      }}
                    >
                      {action.desc}
                    </Typography>
                  </Box>
                  <ArrowForward
                    sx={{ color: "rgba(0,0,0,0.2)", fontSize: 16 }}
                  />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Main Statistics Sections */}
      <Box sx={{ position: "relative" }}>
        {loading && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(2px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              borderRadius: "24px",
              minHeight: "200px",
            }}
          >
            <CircularProgress sx={{ color: COLORS.PRIMARY_NAVY }} />
          </Box>
        )}
        {dynamicStatsCards.map((val, i) => (
          <StatsBox title={val.title} data={val.data} key={i} />
        ))}
      </Box>
    </Stack>
  );
};

export default InstitutionDashboards;
