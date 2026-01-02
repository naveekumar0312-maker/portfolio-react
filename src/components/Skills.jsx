export default function Skills() {
  return (
    <section id="skills" className="container my-5">

      {/* TITLE */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-secondary mt-2">
          Technologies and tools I use to build scalable applications
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="row g-5">

        {/* LEFT COLUMN */}
        <div className="col-lg-6">

          {/* Programming */}
          <div className="skill-block">
            <h5 className="skill-title">
              <i className="bi bi-code-slash me-2"></i>
              Programming
            </h5>
            <div className="skill-tags">
              <span>Python</span>
              <span>JavaScript (ES6+)</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-block">
            <h5 className="skill-title">
              <i className="bi bi-palette-fill me-2"></i>
              Frontend
            </h5>
            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>React.js</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-block">
            <h5 className="skill-title">
              <i className="bi bi-hdd-network-fill me-2"></i>
              Backend
            </h5>
            <div className="skill-tags">
              <span>Django</span>
              <span>Django REST Framework</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-6">

          {/* Databases */}
          <div className="skill-block">
            <h5 className="skill-title">
              <i className="bi bi-database-fill me-2"></i>
              Databases
            </h5>
            <div className="skill-tags">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>

          {/* Auth & APIs */}
          <div className="skill-block">
            <h5 className="skill-title">
              <i className="bi bi-shield-lock-fill me-2"></i>
              Authentication & APIs
            </h5>
            <div className="skill-tags">
              <span>JWT</span>
              <span>Session Auth</span>
              <span>REST APIs</span>
              <span>CRUD Operations</span>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-block">
            <h5 className="skill-title">
              <i className="bi bi-tools me-2"></i>
              Tools & Practices
            </h5>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>VS Code</span>
              <span>MVC Architecture</span>
              <span>Responsive Design</span>
              <span>Deployment (Netlify)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
