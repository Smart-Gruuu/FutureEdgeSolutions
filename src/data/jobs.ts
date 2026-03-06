export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedAt: string;
}

export const jobs: Job[] = [
  {
    id: "senior-cybersecurity-engineer",
    title: "Senior Cybersecurity Engineer",
    department: "Security",
    location: "Remote (US/India)",
    type: "Full-time",
    description: "Lead security assessments, threat modeling, and implementation of enterprise-grade security frameworks for our training and consulting engagements.",
    responsibilities: [
      "Design and deliver cybersecurity training modules for enterprise clients",
      "Conduct threat assessments and vulnerability analyses",
      "Develop compliance frameworks (NIST, ISO 27001) for rural and SMB clients",
      "Mentor junior security analysts and contribute to internal security posture",
    ],
    requirements: [
      "5+ years in cybersecurity or related role",
      "Relevant certifications (CISSP, CEH, or equivalent)",
      "Experience with threat modeling and risk assessment",
      "Strong communication skills for training and client work",
    ],
    postedAt: "2024-02-15",
  },
  {
    id: "ai-ml-engineer",
    title: "AI / Machine Learning Engineer",
    department: "AI & Innovation",
    location: "Remote (US/India)",
    type: "Full-time",
    description: "Build and deploy ML models and AI solutions that power our training platforms and help rural communities adopt AI responsibly.",
    responsibilities: [
      "Develop ML pipelines and models for education and assessment tools",
      "Implement AI solutions for enterprise consulting projects",
      "Create reusable components for AI training workshops",
      "Collaborate with curriculum team on AI/ML course content",
    ],
    requirements: [
      "3+ years experience with Python, TensorFlow/PyTorch, or similar",
      "Experience deploying models in production",
      "Interest in education and democratizing AI access",
      "Strong problem-solving and documentation skills",
    ],
    postedAt: "2024-02-20",
  },
  {
    id: "technical-trainer",
    title: "Technical Trainer — Cybersecurity & AI",
    department: "Education",
    location: "Remote (US/India)",
    type: "Full-time",
    description: "Deliver world-class technical training to professionals and rural learners in AI and Cybersecurity, both online and in-person.",
    responsibilities: [
      "Deliver workshops and bootcamps in cybersecurity and AI fundamentals",
      "Adapt content for diverse audiences (enterprise, rural, students)",
      "Create labs, exercises, and assessments",
      "Provide feedback to improve curriculum and materials",
    ],
    requirements: [
      "2+ years in technical training or teaching",
      "Hands-on experience in cybersecurity and/or AI/ML",
      "Excellent presentation and facilitation skills",
      "Willingness to travel occasionally for in-person sessions",
    ],
    postedAt: "2024-02-25",
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Product",
    location: "Remote (US/India)",
    type: "Full-time",
    description: "Build engaging, accessible learning platforms and internal tools that help us scale our impact across rural America and India.",
    responsibilities: [
      "Develop and maintain web applications for learning and assessment",
      "Implement responsive, accessible UIs with modern frameworks",
      "Collaborate with design and backend teams on new features",
      "Ensure performance and accessibility standards",
    ],
    requirements: [
      "3+ years with React, Next.js, or similar",
      "Strong CSS and responsive design skills",
      "Experience with accessibility (a11y) best practices",
      "Comfort with TypeScript and component-based architecture",
    ],
    postedAt: "2024-03-01",
  },
  {
    id: "program-manager",
    title: "Program Manager — Rural Initiatives",
    department: "Operations",
    location: "Remote (US) or Hybrid",
    type: "Full-time",
    description: "Own program delivery and partnerships for our rural education initiatives in the US and India, ensuring quality and impact.",
    responsibilities: [
      "Manage end-to-end delivery of rural training programs",
      "Build and maintain partnerships with schools, NGOs, and local orgs",
      "Track metrics, outcomes, and learner success",
      "Coordinate with curriculum, delivery, and support teams",
    ],
    requirements: [
      "4+ years in program or project management",
      "Experience in education, skilling, or community programs",
      "Strong organizational and stakeholder management skills",
      "Passion for rural development and equitable access to tech",
    ],
    postedAt: "2024-03-05",
  },
  {
    id: "devops-intern",
    title: "DevOps / Cloud Engineering Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    description: "Support our infrastructure and CI/CD pipelines that power training platforms and internal tools. Great opportunity to learn cloud and automation.",
    responsibilities: [
      "Assist with AWS/GCP deployment and monitoring",
      "Improve CI/CD and developer tooling",
      "Document runbooks and processes",
      "Participate in on-call and incident response",
    ],
    requirements: [
      "Currently pursuing or recently completed degree in CS or related",
      "Familiarity with Linux, Docker, and at least one cloud provider",
      "Eagerness to learn and contribute in a mission-driven team",
    ],
    postedAt: "2024-03-05",
  },
];
