import React from "react";
import { Lightbulb, Search, Gavel, School } from "@mui/icons-material";

export interface ResourceTemplate {
  title: string;
  desc: string;
  details: string[];
  type: string;
  tag: string;
  timeToComplete: string;
  fileUrl: string;
}

export interface StepItem {
  number: string;
  title: string;
  phase: string;
  description: string;
  actionTip: string;
}

export interface CaseStudy {
  title: string;
  student: string;
  school: string;
  sector: string;
  problem: string;
  solution: string;
  impact: string;
  badgeColor: string;
}

export const innovationTemplates: ResourceTemplate[] = [
  {
    title: "Student Innovation Disclosure Template",
    desc: "Formally document the genesis of your invention, including problem definition, novelty search findings, and design blueprints.",
    details: [
      "Prerequisite for official IAIRE certification",
      "Features step-by-step drafting prompts",
      "Format: Guided PDF / DOCX",
    ],
    type: "Template",
    tag: "Ideation & Design",
    timeToComplete: "2-3 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Brainstorming & Feasibility Matrix",
    desc: "Evaluate the societal impact, target audience viability, and technical complexity of your product concept.",
    details: [
      "Helps screen and narrow multiple ideas",
      "Quantifies effort vs. market value",
      "Format: Interactive Spreadsheet",
    ],
    type: "Workbook",
    tag: "Validation",
    timeToComplete: "1-2 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Prototype Specification Sheet",
    desc: "Formulate hardware requirements, micro-controller code architectures, electrical diagrams, and assembly safety checks.",
    details: [
      "Ideal for IoT, electrical, and mechanical ideas",
      "Includes general lab safety checks",
      "Format: Structured Document",
    ],
    type: "Technical Spec",
    tag: "Engineering",
    timeToComplete: "3-4 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Student Pitch Deck Checklist",
    desc: "Organize your startup story slide-by-slide, covering the problem, solution, market validation, and implementation timeline.",
    details: [
      "Standardized 10-slide structure",
      "Features presentation best practices",
      "Format: PPTX Template",
    ],
    type: "Presentation",
    tag: "Pitching",
    timeToComplete: "2 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

export const researchTemplates: ResourceTemplate[] = [
  {
    title: "Prior Art & Novelty Search Log",
    desc: "Systematically track keywords, databases queried (USPTO, Espacenet, Google Scholar), and results to substantiate novelty.",
    details: [
      "Essential foundation for patent applications",
      "Precludes duplicates or plagiarisms",
      "Format: Search Log sheet",
    ],
    type: "Log Sheet",
    tag: "Prior Art",
    timeToComplete: "3-5 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Literature Review Synthesis Matrix",
    desc: "Organize academic citations, methodologies, sample sizes, and major arguments to outline your research paper.",
    details: [
      "Reduces final drafting timeline",
      "Includes standard citation templates",
      "Format: Spreadsheet / Table",
    ],
    type: "Matrix",
    tag: "Synthesis",
    timeToComplete: "4-6 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Research Methodology Planner",
    desc: "Map your experimental hypothesis, control/dependent variables, participant criteria, and mathematical analytics plans.",
    details: [
      "Aligns with scientific-method guidelines",
      "Prevents confirmation bias in datasets",
      "Format: Formatted Document",
    ],
    type: "Planner",
    tag: "Design",
    timeToComplete: "2-3 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "IAIRE High-School Journal Format",
    desc: "Pre-formatted publication template including Abstract, Introduction, Methods, Results, Discussion, and Bibliography.",
    details: [
      "Matches academic journal requirements",
      "Pre-configured font styles and margins",
      "Format: MS Word / LaTeX files",
    ],
    type: "Template",
    tag: "Writing",
    timeToComplete: "Ongoing",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

export const ipSteps: StepItem[] = [
  {
    number: "01",
    phase: "Research",
    title: "Prior Art & Novelty Verification",
    description:
      "Search international patent databases (USPTO, WIPO, Espacenet) and scientific indexes to guarantee that your invention is genuinely original.",
    actionTip:
      "Avoid presenting details publicly before this search — public disclosure can invalidate patent rights.",
  },
  {
    number: "02",
    phase: "Governance",
    title: "Inventorship & Contribution Agreement",
    description:
      "Formulate a clear agreement about who contributed what. Outlining ownership, co-inventor listings, and school-mentor credits guarantees IP harmony.",
    actionTip:
      "Use the 'Co-Inventor Contribution Log' in the member dashboard to record hours and milestones.",
  },
  {
    number: "03",
    phase: "Filing",
    title: "Provisional Patent Application (PPA)",
    description:
      "Submit a provisional patent application to establish a global 'Priority Date'. You get 12 months to finalize prototypes before a full utility patent.",
    actionTip:
      "IAIRE legal fellows review student disclosures and assist in PPA drafting for certified teams.",
  },
  {
    number: "04",
    phase: "Dissemination",
    title: "Peer-Reviewed Publication",
    description:
      "Synthesize your research methodology and experimental validations into an academic paper. Submit to IAIRE symposia or peer-reviewed journals.",
    actionTip:
      "Ensure your manuscript references your PPA filing number if the paper describes patentable materials.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "EcoFilter: Solar IoT Water Turbidity System",
    student: "Aarav Mehta, Riya Sen & Team",
    school: "Greenwood International School, Bangalore",
    sector: "Environmental / IoT",
    problem:
      "Rural wells lacked cost-effective, real-time water quality tracking.",
    solution:
      "Solar-powered, 3D-printed filtration nozzle with ESP32 sensor streaming real-time turbidity logs and SMS alerts.",
    impact:
      "Deployed in 3 villages; reduced waterborne complaints by 40%. Secured a provisional patent.",
    badgeColor: "#10B981",
  },
  {
    title: "SargassumBio: Biodegradable Food Film",
    student: "Sophia Chen",
    school: "Vanguard Science Academy, California",
    sector: "Materials Science",
    problem:
      "Sargassum seaweed blooms polluting coastlines alongside petrochemical plastic degradation.",
    solution:
      "Alginate extracted from seaweed biomass combined with organic starch plasticizers for home-compostable film.",
    impact:
      "Decomposes within 14 days. Published in J. of Student Research; IAIRE Innovation Gold Medal.",
    badgeColor: "#F59E0B",
  },
  {
    title: "AgriTrack: Hyperlocal Crop-Demand Mapper",
    student: "Kofi Mensah & Jane Appiah",
    school: "Accra Science & Technology Academy, Ghana",
    sector: "Software / Agritech",
    problem:
      "Smallholder farmers lacked visibility into urban wholesale markets.",
    solution:
      "USSD interface and web dashboard mapping live harvest forecasts to school kitchens and bulk buyers.",
    impact:
      "Connects 45 farms; cut spoilage by 28%, margins up 35%. Approved for incubator seed grants.",
    badgeColor: "#3B82F6",
  },
];

export const sections = [
  {
    id: "innovation",
    badge: "Innovation Resources",
    title: "Innovation Templates &",
    titleAccent: "Design Frameworks",
    subtitle:
      "Disclosure, feasibility, specification, and pitch templates — everything a student team needs to move from idea to structured innovation documentation.",
    icon: <Lightbulb sx={{ fontSize: 19 }} />,
    items: innovationTemplates,
    type: "templates" as const,
    bgColor: "#FFFFFF",
  },
  {
    id: "research",
    badge: "Research Resources",
    title: "Research Templates &",
    titleAccent: "Academic Toolkits",
    subtitle:
      "Prior-art search logs, literature synthesis matrices, methodology planners, and pre-formatted journal templates — designed to accelerate scholarly output.",
    icon: <Search sx={{ fontSize: 19 }} />,
    items: researchTemplates,
    type: "templates" as const,
    bgColor: "#F8F9FC",
  },
  {
    id: "ip",
    badge: "IP & Publication Pathway",
    title: "From Idea to",
    titleAccent: "Protected Asset",
    subtitle:
      "A step-by-step roadmap covering prior-art research, inventorship agreements, provisional patent filing, and peer-reviewed publication — the full lifecycle.",
    icon: <Gavel sx={{ fontSize: 19 }} />,
    items: ipSteps,
    type: "timeline" as const,
    bgColor: "#FFFFFF",
  },
  {
    id: "cases",
    badge: "Student Success Stories",
    title: "Real Innovation",
    titleAccent: "Case Studies",
    subtitle:
      "See how IAIRE students transformed classroom ideas into patents, publications, and real-world impact — across IoT, materials science, and agritech.",
    icon: <School sx={{ fontSize: 19 }} />,
    items: caseStudies,
    type: "cases" as const,
    bgColor: "#F8F9FC",
  },
];
