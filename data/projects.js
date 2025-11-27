// data/projects.js
// Simple file-based CMS for projects

// Each project:
// id, slug, title, role, year, tags [array], tech [array], summary, description (HTML), featuredImage, links

const projects = [
    {
      id: 1,
      slug: "personal-portfolio-website",
      title: "Personal Portfolio Website",
      role: "Designer & Developer",
      year: 2025,
      tags: ["Web", "Frontend"],
      tech: ["HTML", "CSS", "JavaScript"],
      summary:
        "A fast, fully static portfolio site with a file-based blog, dark theme, and responsive layout.",
      featuredImage: "assets/images/project-portfolio.jpg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
        <p>
          This site is my central hub on the internet. I wanted something simple, fast,
          and fully under my control without relying on heavy frameworks.
        </p>
        <p>
          The project uses a file-based content approach: blog posts and projects are stored as JavaScript
          arrays (<code>posts.js</code> and <code>projects.js</code>). The pages are then rendered
          dynamically with vanilla JavaScript.
        </p>
        <p>
          Key features include:
        </p>
        <ul>
          <li>Responsive, dark-only design</li>
          <li>File-based blog and projects</li>
          <li>SEO-friendly structure</li>
        </ul>
      `,
    },
    {
      id: 2,
      slug: "microcontroller-robotics-project",
      title: "Microcontroller Robotics Project",
      role: "Embedded Developer",
      year: 2024,
      tags: ["Hardware", "Education"],
      tech: ["Arduino", "C/C++", "Sensors"],
      summary:
        "An educational robotics project that uses microcontrollers and sensors to teach basic electronics and programming.",
      featuredImage: "assets/images/project-robotics.jpg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
        <p>
          This project focuses on making robotics more approachable for beginners by combining
          hands-on hardware with clear visual feedback.
        </p>
        <p>
          Students use pre-designed kits with motors, sensors, and LEDs to build simple robots,
          then program them to react to the environment.
        </p>
      `,
    },
    {
      id: 3,
      slug: "student-expense-tracker",
      title: "Student Expense Tracker",
      role: "Full-Stack Developer",
      year: 2024,
      tags: ["Web App", "Productivity"],
      tech: ["HTML", "CSS", "JavaScript"],
      summary:
        "A lightweight web app that helps students track daily expenses and view simple analytics.",
      featuredImage: "assets/images/project-expense.jpg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
        <p>
          The Student Expense Tracker is a small web app built to help manage day-to-day spending.
          It focuses on clarity: quick input, clean summaries, and simple charts.
        </p>
        <p>
          The UI is optimized for mobile so it can be used quickly after each purchase.
        </p>
      `,
    },
  ];
  