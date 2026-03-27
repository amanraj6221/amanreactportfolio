import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  cdac,
  suretrust,
  salesforce,
  edunet,
  jobit,
  tripguide,
} from "../assets";

// ✅ IMPORT CERTIFICATE IMAGES
import dce from "../assets/dce.jpg";
import cybersecurity from "../assets/cybersecurity.jpg";
import cisco from "../assets/cisco.jpg";
import python from "../assets/python.jpg";
import oraclefoundation from "../assets/oraclefoundation.jpg";
import oraclefoundation2 from "../assets/oraclefoundation2.jpg";
import techno from "../assets/techno.jpg";
import SIH2 from "../assets/SIH2.jpg";
import SIH3 from "../assets/SIH3.jpg";
import SIH4 from "../assets/SIH4.jpg";


// =======================
// 🔗 NAVIGATION
// =======================
export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "certificates", title: "Certificates" },
  { id: "contact", title: "Contact" },
];

// =======================
// 💼 SERVICES
// =======================
export const services = [
  { title: "Full Stack Developer", icon: web },
  { title: "Python Developer", icon: backend },
  { title: "React Developer", icon: mobile },
  { title: "Backend Developer (Node/PHP)", icon: creator },
];

// =======================
// 🛠️ TECHNOLOGIES
// =======================
export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mongodb },
  { name: "Firebase", icon: docker },
  { name: "PHP", icon: typescript },
  { name: "Cybersecurity", icon: git },
];

// =======================
// 💼 EXPERIENCE
// =======================
export const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "C-DAC, Kolkata",
    icon: cdac,
    iconBg: "#383E56",
    date: "April 2025 - September 2025",
    points: [
      "Engineered a Secure Validation System using QR + OCR for document verification",
      "Built Admin & User dashboards with real-time logs and analytics",
      "Improved monitoring efficiency by 60% using Chart.js visualizations",
      "Developed document scanning pipeline with high accuracy for low-quality inputs",
      "Enabled export in PDF, Excel, and Word formats",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Sure Trust",
    icon: suretrust,
    iconBg: "#383E56",
    date: "Dec 2024 - April 2025",
    points: [
      "Developed full-stack platform with chatbot integration",
      "Built AI chatbot using Dialogflow + Python",
      "Integrated chatbot with MERN stack",
      "Improved user engagement through automation",
    ],
  },
  {
    title: "AI & Cloud Intern",
    company_name: "Edunet Foundation",
    icon: edunet,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Built cloud-integrated ML models using Python",
      "Worked with AWS, IBM Cloud, and Google Cloud",
      "Implemented ML pipelines using Scikit-learn and Pandas",
    ],
  },
  {
    title: "Salesforce Developer Intern",
    company_name: "Salesforce (SmartInternz)",
    icon: salesforce,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developed Lightning Web Components (LWC)",
      "Automated workflows using Apex and Process Builder",
      "Integrated Git and CI/CD pipelines",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "Edunet Foundation",
    icon: edunet,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Built secure communication system using steganography",
      "Implemented AES encryption for data security",
      "Developed UI for healthcare professionals",
    ],
  },
];

// =======================
// 🎓 EDUCATION
// =======================
export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electrical and Electronics Engineering",
    institution: "Darbhanga College of Engineering",
    duration: "2021 – 2025",
    grade: "CGPA: 7.3",
    icon: dce,   // ✅ FIXED
  },
];

// =======================
// 📜 CERTIFICATES
// =======================
export const certificates = [
  {
    title: "Python Programming",
    issuer: "Cisco Networking Academy",
    image: python,
    link: "https://drive.google.com/file/d/1TOQNmEH6dpw1nz4wHdMn0rKU4gO5H75j/view?usp=sharing",
  },
  {
    title: "Cybersecurity Skilling Program",
    issuer: "IIT Kanpur",
    image: cybersecurity,
    link: "https://drive.google.com/file/d/1ha2Pupj9PE_GnwR7NWh7S3TKTaiqGsri/view?usp=sharing",
  },
  {
    title: "Oracle Certified AI Foundation Associate",
    issuer: "Oracle",
    image: oraclefoundation,
    link: "https://drive.google.com/file/d/1-pO0jkxJ7w5SSoCmq7V2BB6_nR2Tranu/view?usp=sharing",
  },

  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    image: oraclefoundation2,
    link: "https://drive.google.com/file/d/1-mqvdFivCge5yM66VuD2EaNEQ0IEz4I1/view?usp=sharing",
  },
  
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    image: cisco,
    link: "https://drive.google.com/file/d/1An2nhJ85__3O3VgbCcfcGc9YG9U3I2Am/view?usp=sharing",
  },
  {
    title: "Techno Workshop Series'23 ",
    issuer: "IIT PATNA",
    image: techno,
    link: "https://drive.google.com/file/d/1KzSXifTa7jXDtkTnMujXYWupgf4h9r88/view?usp=sharing",
  },
  {
    title: "Smart India Hackathon - 2024 Finalist",
    issuer: "SIH",
    image: SIH4,
    link: "https://drive.google.com/file/d/1IOT-sCEfVgV1tnj1xgWi3VzV2uL7LgfM/view?usp=sharing",
  },
  {
    title: "Smart India Hackathon - 2023 Finalist",
    issuer: "SIH",
    image: SIH3,
    link: "https://drive.google.com/file/d/1L7WTQQvYDYLs8gOF6aJre1RpXgOMttr_/view?usp=sharing",
  },
  {
    title: "Smart India Hackathon - 2022 Finalist",
    issuer: "SIH",
    image: SIH2,
    link: "https://drive.google.com/file/d/1L6F7VAI0xYF9U9DRZ8knTz7IubMU6oXt/view?usp=sharing",
  },
];

// =======================
// 🚀 PROJECTS
// =======================
export const projects = [
  {
    name: "PMSSS Scholarship Portal",
    description:
      "Built a secure full-stack system using QR + OCR validation, real-time dashboards, and automated reporting.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/amanraj6221/sihpmsss-1728-",
  },
  {
    name: "Inter-state Student Verification",
    description:
      "Developed a multi-state scholarship verification system with ML-based eligibility checks.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/amanraj6221/interstate-schlorship-portal.git",
  },
];