import todoImg from "../assets/todo.png"
import collabwriteImg from "../assets/collabwrite.jpeg"
import volumeImg from "../assets/volume.jpg"
import vehicleImg from "../assets/vehicle.png"
import aiImg from "../assets/ai_powered.png"
import pollImg from "../assets/poll.png"





export const site = {
  name: "Shubham Kumar",
  role: "Software Engineer",
  tagline: "I build web apps that don’t just work—they flow. With React, Node.js, and a sprinkle of UX magic, I turn ideas into seamless digital experiences that feel fast, reliable, and just a little delightful.",
  location: "Bengaluru, IN",
  email: "shubhamkr6485@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1lxCpvr6L25qdy_JCA0W-Gfic1CPNesGU/view", // put a link to your resume PDF
  socials: {
    github: "https://github.com/shubham731-cmd",
    linkedin: "https://linkedin.com/in/shubhamkr6485",
    twitter: "https://twitter.com/Shubham56080451",
  },
  hero: {
    highlights: [
      "Software Engineer",
      "Full‑Stack Web Developer",
      "Machine Learning Enthusiast",
      "Artificial Intelligence & Data Explorer",
      "Creative Problem Solver",
    ]
  },
  projects: [
    {
      title: "To-Do Dashboard",
      description: "A modern, full-featured dashboard application featuring authentication, role-based access control, todo management, and real-time notifications.",
      tags: ["React","Lucide React", "Nextjs", "HTML", "Tailwind CSS", "Javascript", "Typescript", "Firebase","CRUD Operations","API"],
      links: {
        demo: "https://firebase-todo-dashboard.vercel.app/",
        repo: "https://github.com/shubham731-cmd/firebase-todo-dashboard"
      },
      image: todoImg 

    },
    {
      title: "CollabWrites",
      description: "A real time collaborative text editor with CRDTs and presence indicators.",
      tags: ["React", "Socket.io", "HTML", "CSS", "Javascript", "Typescript", "Quill.js", "Firebase"],
      links: {
        demo: "https://shubham731-cmd.github.io/real_google_docs/",
        repo: "https://github.com/shubham731-cmd/real_google_docs"
      },
      image: collabwriteImg 

    },
    {
       title: "Volume Controller using Hand Gestures",
      description: "A Volume Controller using Hand Gestures is a computer vision project that lets users adjust system volume in real time by detecting and interpreting their hand movements.",
      tags: ["Python", "Numpy", "Mediapipe", "OpenCV"],
      links: { repo: "https://github.com/shubham731-cmd/Volume-Controller-using-Hand-Gestures" }, 
      image: volumeImg  
    },

    {
      title: "Vehicle Registration Dashboard",
      description: "A dashboard for vehicle registration data with filtering, sorting, and visualizations. A Streamlit-based analytics dashboard for investor-grade insights",
      tags: ["Python", "C++", "C","JavaScript", "Streamlit","Plotly"],
      links: { repo: "https://github.com/shubham731-cmd/vehicle-registration-dashboard" },
      image: vehicleImg
    },

    {
      title: "AI-Powered PDF Question Generator",
      description: "AI-Powered PDF Question Generator that transforms documents into intelligent, auto-generated questions.",
      tags: ["Python", "LangChain", "OpenAI", "HuggingFace"],
      links: {
        //demo: "https://example.com/polls",
        repo: "https://github.com/shubham731-cmd/pdf_question_generator"
      },
      image: aiImg
    },

    {
      title: "Live Polling System",
      description: "Teacher/Student personas, live results, time limits, and session-based IDs.",
      tags: ["React", "Express", "Socket.io", "Redis"],
      links: {
        //demo: "https://example.com/polls",
        //repo: "https://github.com/yourhandle/polls"
      },
      image: pollImg
    },
    {
      title: "Smart Helmet for Accident Detection using ESP32",
      description: "An IoT-based smart helmet that detects accidents using sensors and sends real-time alerts with GPS location to emergency contacts via SMS.",
      tags: ["ESP32", "Arduino", "Sensors", "GPS", "GSM"],
      //links: {
        //demo: "https://example.com/polls",
        //repo: """
      //}
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather updates and forecasts using data from a public API.",
      tags: ["HTML", "CSS", "Javascript", "openweathermapAPI"],
      //links: {
        //demo: "https://example.com/polls",
        //repo: "
    }
  ],
  education: [
    {
      org: "Bangalore Institute of Technology, Bengaluru",
      role: "Bachelor of Engineering in ECE",
      period: "2021 – 2025",
      summary: "Bengaluru, India"
    },
    {
      org: "Guru Gobind Singh Public School, Bokaro",
      role: "Higher Secondary Education",
      period: "2019 – 2021",
      summary: "Percentage: 83.4%"
    },
    {
      org: "DAV Public School, Hazaribagh",
      role: "Secondary Education",
      period: "2014 – 2019",
      summary: "CGPA: 10/10"
    }
  ],
  experience: [
    {
      org: "Coincent.ai",
      role: "ML & CV Intern",
      period: "Jan 2022 – Apr 2022",
      summary: "Built computer vision pipelines and improved inference speeds by 30%."
    },
    {
      org: "Bangalore Institute of Technology",
      role: "ECE Student",
      period: "2021 – 2025",
      summary: "Projects in systems, ML, and full‑stack development."
    }
  ],
  skills: [
    "C++","C","Python","SQL","JavaScript","TypeScript","CSS","HTML","TailwindCSS","React","Redux","Node.js","Express.js","Next.js","Socket.io","MongoDB","Mongoose","Firebase","GitHub","Netlify","Bootstrap","Visual Studio Code","Postman","PostgreSQL","MySQL","SQLite","Vite","Jupyter Notebook","NumPy","Pandas","Matplotlib",,"Scikit-learn","TensorFlow","Keras","OpenCV",
    "Tailwind CSS","Docker","Git","Linux"

  ],
  achievements: [
    {
      org: "Leetcode",
      links: {
        demo: "https://leetcode.com/u/_Shubhamkumar_/"
        //repo: "https://github.com/shubham731-cmd/real_google_docs"
      },
      role: "Leetcode 5⭐",
      period: " Maximum Contest Rating: 1450 @Leetcode",
      //summary: "Solved 500+ Data Structures and Algorithmic problems on coding platform such as LeetCode, GFG and CodeChef etc."
      summary: "Achieved a 5-star rating on LeetCode by solving over 500 problems, demonstrating strong problem-solving skills and proficiency in algorithms and data structures."
    },
    
     {
      org: "CodeChef",
      links: {
          demo: "https://www.codechef.com/users/shubham_731"
      },
      role: "CodeChef 2⭐",
      period: " Maximum Contest Rating: 1264 @Codechef",
      summary: "Achieved a global rank of 4040 among 20000+ contestant in a CodeChef contest."
    },
    {
      org: "GeeksforGeeks",
      links: {
          demo: "https://www.geeksforgeeks.org/user/shubhambvyo/"
      },
      role: "GeeksforGeeks",
      //period: " leetcode.com/shubham731-cmd",
      summary: "Achieved a global rank of 315 among 1,00,000+ students in GFG's 30 days of code contest."
    }
    
  ]

}
