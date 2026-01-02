import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme || "dark"
  );

  /* SCROLL EFFECT */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["projects", "skills", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* THEME TOGGLE */
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-glass shadow-sm" : "navbar-transparent"
      }`}
    >
      <div className="container">

        {/* BRAND */}
        <a
          href="#home"
          className="navbar-brand fw-bold gradient-text"
          onClick={() => {
            setOpen(false);
            setActive("home");
          }}
        >
          Naveen.dev
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 mt-4 mt-lg-0">

            {/* PROJECTS */}
            <li className="nav-item">
              <a
                className={`nav-link nav-premium ${
                  active === "projects" ? "active-link" : ""
                }`}
                href="#projects"
                onClick={() => {
                  setOpen(false);
                  setActive("projects");
                }}
              >
                <i className="bi bi-folder2-open me-2"></i>
                Projects
              </a>
            </li>

            {/* SKILLS */}
            <li className="nav-item">
              <a
                className={`nav-link nav-premium ${
                  active === "skills" ? "active-link" : ""
                }`}
                href="#skills"
                onClick={() => {
                  setOpen(false);
                  setActive("skills");
                }}
              >
                <i className="bi bi-lightning-fill me-2"></i>
                Skills
              </a>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <a
                className={`nav-link nav-premium ${
                  active === "contact" ? "active-link" : ""
                }`}
                href="#contact"
                onClick={() => {
                  setOpen(false);
                  setActive("contact");
                }}
              >
                <i className="bi bi-chat-dots-fill me-2"></i>
                Contact
              </a>
            </li>

            {/* THEME TOGGLE */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button
                onClick={toggleTheme}
                className="btn btn-outline-light btn-sm"
                title="Toggle theme"
              >
                <i
                  className={`bi ${
                    theme === "dark"
                      ? "bi-sun-fill"
                      : "bi-moon-stars-fill"
                  }`}
                ></i>
              </button>
            </li>

            {/* CTA */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href="#contact"
                className="btn btn-glow px-4 py-2"
                onClick={() => {
                  setOpen(false);
                  setActive("contact");
                }}
              >
                <i className="bi bi-briefcase-fill me-2"></i>
                Hire Me
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
