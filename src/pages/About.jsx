import profile from "../assets/fahmi.png";

function About() {
  return (
    <div className="about-page">


      <div className="about-layout">


        <div className="about-content fade-in-delay-about">

          <h1>About Me</h1>

          <h1>Fahmi Aji Pranata</h1>
          <h3>Software Developer</h3>

          <p>
            Automotive engineer turned software developer currently based
            in Kobe, Japan. I specialize in building web applications
            and experimenting with AI systems.
          </p>

        <p className="location">
          📍 Kobe, Japan
        </p>

        <h2>Skills</h2>

        <div className="skills">

          <span>React</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>FastAPI</span>
          <span>Machine Learning</span>
          <span>AI Systems</span>
        </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>  
              <div className="timeline-content">
                <h3>1997</h3>
                <p>
                Born  
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015 — Vocational School</h3>
                <p>
                  Studied automotive engineering. Became head of the journalism club
                  and won several photography competitions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2018 — Astra Polytechnic</h3>
                <p>
                  Built an excavator over-travel prevention system using Arduino
                  and C++ as my final diploma project.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2018 — Japan</h3>
                <p>
                  Studied Japanese in Hokkaido. Won first place in a Japanese
                  speech contest and obtained a Japanese driving license.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024 — Master Degree</h3>
                <p>
                  Completed a master’s degree at the University of Indonesia
                  focusing on online advertising behavior.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Present</h3>
                <p>
                  Working in Kobe while studying software development and AI
                  engineering every day.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="about-photo">
          <img
            src={profile}
            alt="Fahmi Aji Pranata"
          />
        </div>    

      </div>
    </div>
  );
}

export default About;