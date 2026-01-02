export default function About() {
  return (
    <section className="container my-5">
      <div className="glass p-5 text-center">
        <h2 className="fw-bold gradient-text mb-3">
          About Me
        </h2>

        <p className="text-secondary fs-5 mb-4">
          I'm a passionate <span className="text-info">Full Stack Developer</span>{" "}
          who builds modern, scalable and premium web applications.
          I focus on clean architecture, smooth user experience and
          production-ready code.
        </p>

        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="glass p-3">
              <h3 className="fw-bold text-info">5+</h3>
              <p className="text-secondary mb-0">Projects Built</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="glass p-3">
              <h3 className="fw-bold text-info">8+</h3>
              <p className="text-secondary mb-0">Months Learning</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="glass p-3">
              <h3 className="fw-bold text-info">Full Stack</h3>
              <p className="text-secondary mb-0">React • Django</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
