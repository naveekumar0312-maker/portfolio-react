export default function Contact() {
  return (
    <section id="contact" className="container my-5">
      <div className="glass p-5 text-center">

        {/* Heading */}
        <h2 className="fw-bold mb-3">
          Let’s <span className="gradient-text">Work Together</span>
        </h2>

        {/* Sub text */}
        <p className="text-secondary fs-5 mb-4">
          Available for <strong>freelance</strong> and{" "}
          <strong>full-time</strong> roles
        </p>

        {/* CTA Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/7010790395"
            target="_blank"
            rel="noreferrer"
            className="btn btn-glow px-5 py-2"
          >
            <i className="bi bi-whatsapp me-2"></i>
            WhatsApp Me
          </a>

          {/* Email – Desktop + Mobile Safe */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=naveekumar0312@gmail.com&su=Freelance%20Inquiry&body=Hi%20Naveen,%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project.%0A%0ARegards,"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light px-5 py-2"
          >
            <i className="bi bi-envelope-fill me-2"></i>
            Email Me
          </a>

        </div>

        {/* Divider */}
        <div
          className="mx-auto my-4"
          style={{
            width: "70px",
            height: "3px",
            background: "linear-gradient(90deg,#38bdf8,#a78bfa)",
            borderRadius: "3px",
          }}
        ></div>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4 fs-3">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon text-info"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/naveekumar0312-maker"
            target="_blank"
            rel="noreferrer"
            className="social-icon text-light"
            title="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-4 text-secondary" style={{ fontSize: "0.95rem" }}>
          Fast response • Clean communication • Production-ready code
        </p>

      </div>
    </section>
  );
}
