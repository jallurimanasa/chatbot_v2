// Knowledge Base Types
export type KnowledgeEntry = {
  keywords: string[];
  question: string;
  answer: string;
  category?: string;
};

// Sample knowledge base - Replace this with your own data
export const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    question: 'Greeting',
    answer: "Hello! I'm your AI assistant. How can I help you today?",
  },
  {
    keywords: ['help', 'support', 'assist'],
    question: 'Request for help',
    answer: "I'm here to help! I can provide information about various topics. Feel free to ask any question.",
  },
  {
    keywords: ['courses', 'programs', 'study', 'education'],
    question: 'Available courses',
    answer: "We offer various courses in Computer Science, Information Technology, and related fields. Our programs include undergraduate and graduate levels with specializations in AI, Data Science, and Software Engineering.",
  },
  {
    keywords: ['admission', 'apply', 'enrollment', 'join'],
    question: 'Admission process',
    answer: "The admission process involves submitting your academic records, entrance exam scores, and completing an interview. Applications are typically accepted between January and April each year.",
  },
  {
    keywords: ['fees', 'cost', 'tuition', 'payment'],
    question: 'Fee structure',
    answer: "Tuition fees vary by program. We offer flexible payment plans and scholarship opportunities for eligible students. Contact our financial aid office for detailed information.",
  },
  {
    keywords: ['faculty', 'teachers', 'professors', 'staff'],
    question: 'Faculty information',
    answer: "Our faculty consists of experienced professors and industry experts with extensive knowledge in their respective fields. Many hold PhDs and have significant research experience.",
  },
  {
    "keywords": ["kmit", "engineering college", "best college", "top college"],
    "question": "About KMIT",
    "answer": "Keshav Memorial Institute of Technology (KMIT) was established in 2007 and is one of the premier engineering colleges in Telangana. It is approved by AICTE, affiliated with JNTU Hyderabad, and recognized by the Govt. of Telangana."
  },
  {
    "keywords": ["courses", "programs", "study", "education"],
    "question": "Available courses",
    "answer": "KMIT offers undergraduate programs in Computer Science, Information Technology, Artificial Intelligence & Machine Learning, and Data Science."
  },
  {
    "keywords": ["admission", "apply", "enrollment", "join"],
    "question": "Admission process",
    "answer": "Admissions to KMIT are based on EAPCET and ECET scores. The application process involves submitting academic records and entrance exam scores."
  },
  {
    "keywords": ["fees", "cost", "tuition", "payment"],
    "question": "Fee structure",
    "answer": "Tuition fees vary based on the program. Detailed fee structures and payment options can be accessed through the official website."
  },
  {
    "keywords": ["faculty", "teachers", "professors", "staff"],
    "question": "Faculty information",
    "answer": "KMIT has a team of experienced professors and industry experts specializing in various domains of engineering and technology."
  },
  {
    "keywords": ["placements", "jobs", "career", "recruitment"],
    "question": "Placement opportunities",
    "answer": "KMIT provides excellent placement support with top companies visiting the campus for recruitment. Many students secure jobs in leading MNCs."
  },
  {
    "keywords": ["research", "projects", "innovation", "labs"],
    "question": "Research and Innovation",
    "answer": "KMIT supports research through incubation centers and sponsored projects. Students can participate in research initiatives and collaborations."
  },
  {
    "keywords": ["contact", "address", "phone", "email"],
    "question": "Contact Information",
    "answer": "KMIT is located at 3-5-1026, Narayanguda, Hyderabad-29. You can reach them at info@kmit.in or call 040-23261407."
  },
  {
    "keywords": ["events", "news", "announcements", "updates"],
    "question": "Recent News & Events",
    "answer": "KMIT regularly conducts workshops, hackathons, and conferences. For the latest updates, visit the official website."
  }
  // Add your custom entries here in the same format
];

export const fallbackResponses = [
  "I'm not sure I understand. Could you please rephrase your question?",
  "I don't have specific information about that. Could you try asking something else?",
  "I'm still learning. Could you try asking about a different topic?",
];

export const getInitialMessage = (): string => {
  const categories = [...new Set(knowledgeBase.map(entry => entry.category).filter(Boolean))];
  return `Hello! I'm your AI assistant. I can help you with ${categories.join(', ')}. What would you like to know?`;
};