// src/models/jobModel.js

const jobs = [
  {
    id: 1,
    job_designation: "Frontend Developer",
    company_name: "Google",
    job_location: "Bangalore, India",
    experience: "0-2 years",
    salary: "₹6 – ₹10 LPA",
    employees: "10k+ employees",
    job_posted: "2 days ago",
    featured: true,
    logo: "/images/google.png",
    skills_required: ["HTML", "CSS", "JavaScript", "React"],
    job_type: "Full-time",
    experience_level: "Entry"
  },
  {
    id: 2,
    job_designation: "Backend Developer",
    company_name: "Amazon",
    job_location: "Hyderabad, India",
    experience: "2-4 years",
    salary: "₹10 – ₹15 LPA",
    employees: "50k+ employees",
    job_posted: "5 days ago",
    featured: false,
    logo: "/images/google.png",
    skills_required: ["Node.js", "Express", "MongoDB"],
    job_type: "Remote",
    experience_level: "Associate"
  }
];

export default jobs;
