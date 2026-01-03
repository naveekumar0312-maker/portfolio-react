const projects = [
  {
    title: "Web-based Expense Tracker System",
    description:
      "Daily Expense is a web-based application that helps users track income, monitor daily expenses and manage budgets to control spending and improve savings.",
    tech: ["Python", "Django", "Bootstrap", "JavaScript (ES6)", "MySQL"],
    github: "https://github.com/naveekumar0312-maker/expense_tracker",
  },
  {
    title: "Review-based Product Recommendation System",
    description:
      "Smart web application that recommends suitable products to users based on reviews and ratings.",
    tech: ["Python", "Django", "Bootstrap", "JavaScript (ES6)", "MySQL"],
    github: "https://github.com/naveekumar0312-maker/review_recommendation",
  },
  {
    title: "Employee Attendance Management",
    description:
      "A full-stack HR management system built using React and leave Workflows APIs are are tested and validadted using postman with role-based access for Employees and HR Managers",
    tech: ["React", "Django", "JWT", "MySQL","API Testing - Postman",],
    live: "https://github.com/naveekumar0312-maker/staffsphere-frontend",
    github: "https://github.com/naveekumar0312-maker/staffsphere-backend",
  },
  {
    title: "Travel Website",
    description:
      "Frontend travel website to explore and book Kerala trips.",
    tech: ["HTML", "CSS", "JavaScript (ES6)"],
    live: "https://naveekumar0312-maker.github.io/frontend_travel_website/",
    github: "https://github.com/naveekumar0312-maker/frontend_travel_website",
  },
  {
    title: "Mini LMS (Learning Management System)",
    description:
      "React-based learning platform with user login and course access. Admin can manage courses. Deployed using Netlify.",
    tech: [
      "React",
      "React MUI",
      "JavaScript",
      "LocalStorage",
      "React DOM",
    ],
    live: "https://mini-lms-app.netlify.app/login",
    github: "https://github.com/naveekumar0312-maker/mini-lms-react-mui.git",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern and responsive developer portfolio built using React, Vite, and Bootstrap with premium UI design.",
    tech: ["React", "Vite", "Bootstrap", "CSS"],
    live: "https://navee-portfolio.netlify.app/",
    github: "https://github.com/naveekumar0312-maker/portfolio-react",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container my-5">
      <h2 className="fw-bold mb-4 gradient-text text-center">
        Projects
      </h2>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="glass p-4 card-hover h-100 d-flex flex-column">

              {/* TITLE */}
              <h4 className="fw-bold">{project.title}</h4>

              {/* DESCRIPTION */}
              <p className="text-secondary mt-2">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="d-flex flex-wrap gap-2 my-3">
                {project.tech.map((tech, i) => (
                  <span className="badge bg-dark" key={i}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="d-flex gap-2 mt-auto flex-wrap">

                {/* SHOW LIVE ONLY IF EXISTS */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-info px-3"
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i>
                    Live Demo
                  </a>
                )}

                {/* GITHUB ALWAYS */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-light px-3"
                >
                  <i className="bi bi-github me-1"></i>
                  Project
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
