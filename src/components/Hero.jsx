import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center position-relative"
    >
      {/* Background Image Overlay */}
      <div className="hero-bg-overlay"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="container position-relative"
      >
        <div className="row align-items-center gy-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-7 text-lg-start text-center">

            {/* Name */}
            <h1 className="display-3 fw-bold gradient-text mb-3">
              Naveen Kumar
            </h1>

            {/* Role */}
            <p className="fs-4 text-light mb-3">
              Python Full Stack Developer
            </p>

            {/* Tech Stack */}
            <p className="text-info mb-4">
              React • Django • REST APIs • MySQL • MERN
            </p>

            {/* PROFESSIONAL SUMMARY */}
            <p className="hero-summary mb-4">
              Results-driven <strong>Python Full Stack Developer</strong> with
              hands-on experience in building scalable, secure, and responsive
              web applications. Strong expertise in
              <strong> Django, REST APIs, MySQL</strong> and modern frontend
              development using <strong>React</strong>
            </p>

            {/* CTA BUTTONS */}
            <div className="d-flex flex-wrap gap-3 justify-content-lg-start justify-content-center">
              <a href="#projects" className="btn btn-glow px-5 py-2">
                <i className="bi bi-folder2-open me-2"></i>
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline-light px-5 py-2">
                <i className="bi bi-chat-dots-fill me-2"></i>
                Contact Me
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-4 fs-3 mt-4 justify-content-lg-start justify-content-center">
              <a
                href="https://www.linkedin.com/in/your-linkedin-id"
                target="_blank"
                rel="noreferrer"
                className="social-icon text-info"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://github.com/naveekumar0312-maker"
                target="_blank"
                rel="noreferrer"
                className="social-icon text-light"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="mailto:naveen@email.com"
                className="social-icon text-danger"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 text-center">
            <motion.img
              src="formal.jpg"
              alt="Naveen Kumar"
              className="hero-profile-img"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
