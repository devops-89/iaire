export interface BoardMember {
  slug: string;
  name: string;
  title: string;
  role: string;
  location?: string;
  image: string;
  bio: string[];
}

import zisis from "@/images/about/board/Zizis-Kozlakidis.jpg";
import omar from "@/images/about/board/omar-syed.jpg";
import hashima from "@/images/about/board/hashima-hasan.webp";
import sanjay from "@/images/about/board/sanjay-soni.jpg";
import darshan from "@/images/about/board/Darshan-Gandhi.jpg";
import medhat from "@/images/about/board/medhat-aksar.jpg";
import sudhir from "@/images/about/board/sunandan-sudhir.jpg";
import peter from "@/images/about/board/peter-guida.jpeg";

export const BOARD_MEMBER_PLACEHOLDER = "/images/about/board/placeholder.svg";

export const boardMembers: BoardMember[] = [
  {
    slug: "zisis-kozlakidis",
    name: "Dr. Zisis Kozlakidis",
    title: "World Health Organization, United Nations",
    role: "President, Scientific & Innovation Board",
    location: "Paris, France",
    image: zisis.src,
    bio: [
      "Dr. Zisis Kozlakidis is the Head of Laboratory Services and Biobanking at the International Agency for Research on Cancer (IARC), part of the World Health Organization (WHO), United Nations. A highly accomplished senior healthcare professional, he brings decades of experience in biomedical research, innovation strategy, and global health consulting.",
      "With a unique blend of scientific expertise and business acumen, he has led international projects focused on the integration of cutting-edge technologies into healthcare systems, fostering collaborations with major global players like Intel and Illumina. Dr. Kozlakidis has served as President of the International Society for Biological and Environmental Repositories (ISBER) from 2017 to 2018 and co-founded the Cass Health Innovation Club at Cass Business School, promoting interdisciplinary innovation in life sciences and medicine.",
      "His contributions span virology, biobanking, and digital health, earning him numerous international awards. He is a Fellow of the Linnean Society of London and serves on several high-level international boards and committees that shape policy on medical ethics, innovation, and healthcare startup strategy.",
      "With work experience across the UK, US, China, Vietnam, Indonesia, and Greece, Dr. Kozlakidis continues to drive global impact by advising on the implementation and scalability of healthcare solutions, while mentoring the next generation of scientific leaders.",
    ],
  },
  {
    slug: "omar-syed",
    name: "Omar Syed",
    title:
      "NASA Glenn Research Center | Systems Architect | AI Pioneer | Blockchain Innovator",
    role: "Vice-President, Scientific & Innovation Board",
    image: omar.src,
    bio: [
      "Omar Syed is a distinguished technology leader, inventor, entrepreneur, and systems architect whose career spans more than three decades at the forefront of advanced computing and large-scale software systems. During his career, he has contributed to technology initiatives at NASA Glenn Research Center, Yahoo, Zynga, and numerous innovative startups, where he helped design and develop scalable, fault-tolerant, distributed systems for mission-critical applications.",
      "Widely recognized for his expertise in artificial intelligence, distributed computing, blockchain technologies, and software architecture, Mr. Syed has consistently worked on technologies that push the boundaries of scalability, performance, and innovation. His contributions have ranged from enterprise-scale computing platforms to pioneering research initiatives that have influenced both academia and industry.",
      "Mr. Syed holds both Bachelor of Science and Master of Science degrees from Case Western Reserve University, where he specialized in Artificial Intelligence during the formative years of the field. His longstanding interest in machine intelligence, decision-making systems, and computational strategy has remained a defining theme throughout his professional and entrepreneurial journey.",
      "In addition to his work with major technology organizations, Mr. Syed has been actively involved in entrepreneurship and technology innovation. He participated in several pioneering internet ventures during the early growth of the World Wide Web, including projects recognized among the first online matrimonial platforms and early stock sentiment analysis systems.",
      "Mr. Syed is widely known within the artificial intelligence community as the co-inventor of the strategy board game Arimaa, which he developed together with his son, Aamir Syed. Arimaa was specifically designed to be intuitive for humans while presenting significant challenges to computer programs, thereby creating a platform for advancing artificial intelligence research. To accelerate innovation in AI, he established the internationally recognized Arimaa Challenge Prize, a competition that attracted researchers from around the world.",
      "Recognizing the transformative potential of decentralized technologies, Mr. Syed founded Unblocked Inc. in 2016, a blockchain consulting and research company focused on distributed systems and emerging technologies. Building upon decades of experience in large-scale systems engineering, he subsequently organized the Shardus Project, an ambitious initiative aimed at developing linearly scalable blockchain infrastructure capable of supporting global-scale decentralized applications.",
      "As a member of the IAIRE scientific and innovation board, Mr. Syed oversees artificial intelligence, distributed computing, blockchain technologies, entrepreneurship, software architecture, and innovation strategy. Through his mentorship, students gain exposure not only to cutting-edge technologies but also to the entrepreneurial mindset, systems thinking, and innovation leadership required to solve some of the world's most complex challenges.",
    ],
  },
  {
    slug: "hashima-hasan",
    name: "Dr. Hashima Hasan",
    title: "Program Scientist, NASA, Washington DC",
    role: "Chair, Scientific Research & Innovation Assessment Committee",
    location: "Washington DC, USA",
    image: hashima.src,
    bio: [
      "Dr. Hashima Hasan is the NuSTAR, IXPE and W.M. Keck Observatory (WMKO) Program Scientist and the Education and Public Outreach Lead for Astrophysics at NASA. In her role as Program Scientist, Dr. Hasan works on monitoring and managing the science program for NuSTAR, IXPE, NASA partnership on WMKO. She makes sure that their missions remain possible and true to NASA strategic objectives.",
      "Dr. Hasan has been the program scientist for many of NASA missions, such as the James Webb Space Telescope, Wide-field Infrared Survey Explorer, Gravity and Extreme Magnetism SMEX (GEMS), Stratospheric Observatory for Infrared Astronomy, Hubble Space Telescope, Explorer Program and more.",
      "From 2001-2006, Dr. Hasan also served as the Lead for Astronomy and Physics Research and Analysis (R&A) programs. She was responsible for setting the policy for all R&A programs, overseeing the entire R&A budget and reorganizing research programs to align them with NASA's strategic needs.",
      "In 1976 Dr. Hasan received a doctorate from the University of Oxford, U.K., in Theoretical Nuclear Physics. Till 1985 Dr. Hasan conducted post-doctoral research and held teaching positions in the areas of Theoretical Nuclear Physics, and in Environmental Science. She was the Optical Telescope Assembly Scientist at Space Telescope Science Institute, Baltimore, till 1994, when she joined NASA Headquarters. She received certification as Senior Executive Fellow of Kennedy School of Government, Harvard University in 2003.",
      "Dr. Hasan has published articles in various peer reviewed journals, such as the Astrophysical Journal, Icarus, Publications of the Astronomical Society of the Pacific and other top aerospace and astrophysics research journals. She has been honored with prestigious awards and fellowships throughout her outstanding career, including the NASA HQ Exceptional Performance Award in 2008.",
      "Raised in Lucknow, India, Dr. Hasan completed her doctoral studies at the University of Oxford before returning to India to begin her academic and research career. She served as a postdoctoral researcher at the Tata Institute of Fundamental Research (TIFR), held faculty appointments in physics and environmental science, taught postgraduate students at the University of Poona, and conducted nuclear physics research at the Bhabha Atomic Research Centre (BARC), Mumbai.",
    ],
  },
  {
    slug: "peter-guida",
    name: "Dr. Peter Guida",
    title: "NASA, Brookhaven National Lab (USA)",
    role: "Vice-Chair, Scientific Research & Innovation Assessment Committee",
    location: "Upton, New York, USA",
    image: peter.src,
    bio: [
      "Dr. Peter Guida is a NASA-based molecular biologist who specializes in the field of radiation biology. He graduated from the Albert Einstein College of Medicine in 1999 with a Ph.D. in developmental and molecular biology. He then completed a 3-year post-doctoral fellowship at Brookhaven National Laboratory (BNL) in New York in the field of accelerator-based radiation biology.",
      "In 2003 he joined the scientific staff at BNL and is currently a Full Scientist running a laboratory that investigates the effects of radiation on human neuronal cells. In addition, he serves as NASA's Liaison Biologist for the NASA Space Radiation Laboratory Program, which examines the potential health risks to astronauts from exposure to the charged particle radiation that is found in space.",
      "He has published many research papers and is a peer reviewer for numerous journals in the radiation and neuroscience fields. Dr. Guida brings extensive knowledge of molecular signaling pathways and DNA repair to DiscoverSTEM.",
    ],
  },
  {
    slug: "sanjay-soni",
    name: "Sanjay Soni",
    title:
      "Founder & Managing Director, IZMO Limited | Technology, Defense Manufacturing & Entrepreneurship Leader",
    role: "Chair, Innovation, Product Design & Commercialization and Entrepreneurship Committee",
    location: "Goa, India",
    image: sanjay.src,
    bio: [
      "Mr. Sanjay Soni is a distinguished entrepreneur, business leader, and technology pioneer with more than three decades of experience spanning information technology, advanced electronics, defense manufacturing, and entrepreneurship. He is the Founder and Managing Director of IZMO Limited, a publicly listed technology company on the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) of India, recognized globally for its digital retailing, e-commerce, and software solutions for the automotive industry.",
      "An early advocate of computer science education in India, Mr. Soni authored several books on Computer Science and Information Technology during the formative years of India's technology revolution. His contributions to promoting computer education earned him a letter of commendation from the late Shri Rajiv Gandhi, then Prime Minister of India.",
      "Mr. Soni is also the founder of several successful technology and manufacturing ventures. He founded Si2 Microsystems, a leading Indian company specializing in high-end electronics, embedded systems, and advanced solutions for space, aerospace, and defense applications. He subsequently founded Hughes Precision Manufacturing Pvt. Ltd., India's first private-sector manufacturer of military-caliber ammunition.",
      "A graduate of Sydenham College of Commerce and Economics, Mumbai, Mr. Soni earned his MBA from the Indian Institute of Management Bangalore (IIM Bangalore). Throughout his entrepreneurial journey, Mr. Soni has led organizations that have received significant national and international recognition, including Deloitte Technology Fast 50 and Deloitte Fast 500 rankings.",
      "Beyond his corporate achievements, Mr. Soni actively contributes to industry and public policy initiatives. He has served on the Defence Advisory Committee of the Confederation of Indian Industry (CII) South India and the MSME Advisory Committee of the Federation of Indian Chambers of Commerce and Industry (FICCI) South India.",
      "A passionate mentor and advocate for youth entrepreneurship, Mr. Soni dedicates considerable time to guiding students, innovators, and startup founders. Mr. Soni is also the Hon. Consul of Bahrain in India.",
    ],
  },
  {
    slug: "darshan-gandhi",
    name: "Dr. Darshan Gandhi",
    title:
      "Oncologist | Healthcare Innovator | Entrepreneur | Venture Investor | Healthcare Executive",
    role: "Chair, Healthcare Innovation & Biotechnology Committee",
    location: "Dallas, Texas, USA",
    image: darshan.src,
    bio: [
      "Dr. Darshan Gandhi is a distinguished oncologist, healthcare executive, entrepreneur, investor, and innovation leader whose career spans clinical medicine, biotechnology, healthcare strategy, venture investing, and entrepreneurship. Widely recognized for his work at the intersection of oncology, life sciences, healthcare delivery, and innovation, Dr. Gandhi has dedicated his career to advancing personalized cancer care through the integration of cutting-edge biology, data science, technology, and entrepreneurship.",
      "Board-certified in Hematology and Medical Oncology, Dr. Gandhi combines deep clinical expertise with extensive business and leadership experience. As Executive Director of Innovation and Ventures for Methodist Health System, a multi-billion-dollar healthcare system in Dallas, Texas, he led strategic innovation initiatives, venture investments, startup partnerships, and technology commercialization efforts.",
      "Prior to this, Dr. Gandhi served in leadership roles within multiple oncology-focused biotechnology and drug development companies, where he co-founded and led organizations dedicated to discovering and developing novel cancer therapies. In addition to his operational and entrepreneurial achievements, Dr. Gandhi has extensive experience in healthcare investment and venture strategy.",
      "Dr. Gandhi has also played a significant role in shaping healthcare policy and clinical decision-making at a national level. He previously served on the National Pharmacy and Therapeutics (P&T) Committee for UnitedHealthcare and OptumRx and contributed as a member of the Oncology Pathways Committee for UnitedHealthcare.",
      "Beyond industry and clinical leadership, Dr. Gandhi remains deeply engaged with some of the world's most respected innovation and academic ecosystems. He serves as a Mentor and Advisor at Harvard Innovation Labs and maintains active involvement with the Harvard Business School alumni community, the Broad Institute, and innovation initiatives associated with leading research institutions.",
      "Dr. Gandhi completed the prestigious Advanced Management Program (AMP) at Harvard Business School, where he was elected Class Secretary. He also earned an MBA from the Isenberg School of Management at the University of Massachusetts and completed his medical training at the University of Iowa Hospitals and Clinics.",
      "As a member of the DiscoverSTEM and IAIRE scientific and innovation ecosystem, Dr. Gandhi provides students with invaluable mentorship in healthcare innovation, biotechnology, entrepreneurship, venture creation, leadership, and translational medicine.",
    ],
  },
  {
    slug: "medhat-askar",
    name: "Dr. Medhat Askar",
    title:
      "Global Leader in Transplant Immunology, Histocompatibility, Cell & Gene Therapy",
    role: "Chair, Standards, Certification & Fellowship Committee",
    location: "Boston, Massachusetts & Dallas, Texas, USA",
    image: medhat.src,
    bio: [
      "Dr. Medhat Askar, MD, PhD, MSHPE, FRCPath, is an internationally recognized physician scientist, educator, and thought leader in the fields of transplant immunology, histocompatibility, immunogenetics, and cell and gene therapy. Widely regarded as one of the foremost experts in transplantation sciences, Dr. Askar has dedicated more than three decades to advancing the science and practice of organ transplantation, donor-recipient matching, cellular therapies, laboratory medicine, and healthcare education.",
      "Dr. Askar currently serves as Professor of Pathology and Laboratory Medicine and has held senior leadership positions at several of the world's most respected medical institutions. He previously served as Director of Transplant Immunology, Hematopoietic Cell Processing, and COVID-19 Testing Laboratories at Baylor University Medical Center, Dallas, Texas.",
      "After earning his M.D. and Ph.D., Dr. Askar completed advanced training in transplant immunology at the renowned Thomas E. Starzl Transplantation Institute at the University of Pittsburgh. Throughout his career, Dr. Askar has held some of the highest leadership positions within the global transplantation and immunogenetics community, including serving as President of the American Society for Histocompatibility and Immunogenetics (ASHI) and President of the American Board for Histocompatibility and Immunogenetics (ABHI).",
      "His influence extends well beyond the United States. Dr. Askar has served on the Boards and Executive Committees of the United Network for Organ Sharing (UNOS) and the Organ Procurement and Transplantation Network (OPTN). He has represented North America as a Councilor of The Transplantation Society (TTS) and contributed extensively to global transplantation policy, standards, accreditation, and professional development.",
      "Dr. Askar's contributions have also been recognized through appointments to numerous international scientific and advisory bodies, including the World Health Organization (WHO) Expert Advisory Panel on Donation and Transplantation and the Worldwide Network for Blood and Marrow Transplantation.",
      "DiscoverSTEM students have the unique opportunity to conduct research activities under the guidance of Dr. Askar and his team through a formal research collaboration established between DiscoverSTEM and Dr. Askar's laboratory. Dr. Medhat is Vice Chair of Tufts Medical School and is based in Boston, Massachusetts with a second home in Dallas, Texas.",
    ],
  },
  {
    slug: "sanandan-sudhir",
    name: "Sanandan Sudhir",
    title:
      "Inventor | Industrial Designer | Entrepreneur | Founder, InventIndia",
    role: "Vice-Chair, Innovation, Product Design & Commercialization and Entrepreneurship Committee",
    image: sudhir.src,
    bio: [
      "SanandanSudhir is an internationally recognized inventor, entrepreneur, industrial designer, and innovation leader with more than two decades of experience spanning product innovation, intellectual property strategy, industrial design, engineering, manufacturing, commercialization, and organizational transformation.",
      "As the Founder and President of InventIndia Innovations Pvt. Ltd., Sandy has built one of India's most respected product innovation and industrial design firms. Under his leadership, InventIndia has become a comprehensive innovation platform that supports organizations throughout the entire product development lifecycle—from ideation and intellectual property strategy to industrial design, engineering, prototyping, certification, manufacturing, supply chain development, and commercialization.",
      "An inventor at heart, Sandy holds 17 granted international patents and has filed more than 50 additional patent applications across multiple technology domains. One of his most celebrated innovations is On2Cook, a revolutionary cooking technology designed to significantly reduce cooking time and energy consumption. The invention received international recognition and was selected into the prestigious BRINC Food Technology Accelerator in Hong Kong and gained global attention at CES in Las Vegas.",
      "Sandy's expertise has been sought by numerous global and national organizations across diverse industries, including GE, Dell, Haier, Shell, Tata, Godrej, Voltas, Michelin, Clorox, Eureka Forbes, GSK, and many other leading brands.",
      "Under Sandy's leadership, the Invent Group has received more than 25 national and international awards and recognitions for innovation, industrial design, entrepreneurship, and business excellence, including the iF Design Award, Design Intelligence Award (DIA), International Design Award (IDA), and National Entrepreneurship Award (NEA).",
      "As a member of the IAIRE scientific and innovation ecosystem, Sandy provides students with invaluable mentorship in product innovation, industrial design, entrepreneurship, intellectual property, manufacturing, and commercialization.",
    ],
  },
];

export const getBoardMemberBySlug = (slug: string): BoardMember | undefined =>
  boardMembers.find((member) => member.slug === slug);
