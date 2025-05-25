import React from "react";
import "./About.scss";
import "./StarBackground.scss";  // Import star background styles

const About = () => {
  const profilePic = "/upscalemedia-transformed (1) (1).png";
  const about = "I am a Computer Science undergraduate specializing in AI/ML, VR/AR, and generative AI, with extensive experience in product development and management. I have a strong track record of building innovative solutions across education, healthcare, and entertainment, including VR simulations, AI-driven platforms, and multimodal AI applications. Skilled in Unity, Python, and LLMs, I thrive on transforming ideas into scalable, impactful products while leading multidisciplinary teams to push technological boundaries. ";
  const techStack = [
    { logo: "/techlogo/pngwing.com.png", name: "Unity" },
    { logo: "/techlogo/pngwing.com (1).png", name: "Python" },
    { logo: "/techlogo/pngwing.com (2).png", name: "React" },
    { logo: "/techlogo/pngwing.com (3).png", name: "Flutter" },
    { logo: "/techlogo/pngwing.com (4).png", name: "JavaScript"},
  ];

  return (
    <section id="about" className="about-section">
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="container flex justify-between items-start">
        {/* Left Section */}
        <div className="about-box">
          <img
            src={profilePic}
            alt="Avatar"
            className="object-cover object-center w-full rounded-md h-72"
          />
          <div className="mt-6">
            <span className="text-xs">About Me</span>
            <h2 className="text-xl">Hey!</h2>
            <p className="text-gray-800">{about}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="tech-stack">
          <h3 className="tech-title">Tech Stack</h3>
          <div className="tech-cards">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="tech-logo"
                />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="experience-volunteering-section">
        <div className="experience-content">
          <h2 className="experience-title">Experience</h2>
          <div className="experience-item">
            <h3>Developer - InnoXR Labs</h3>
            <p>
            Built various products such as AR/VR-based solutions, chatbots, and AI-powered applications.
            </p>
          </div>
          <div className="experience-item">
            <h3>Internship - Acmegrade</h3>
            <p>
              Built a LLM based chatbot that can curate reponse according to the user's emotion.
            </p>
          </div>
        </div>
        <div className="volunteering-content">
          <h4 className="volunteering-title">Volunteering</h4>
          <div className="experience-item">
            <h3>Chair of Technology Hub SIST</h3>
            <p>Conducted classes on AR & VR and mentored students in various domains.</p>
          </div>
          <div className="experience-item">
            <h3>Tamil Nadu State Design Lead of YUCI</h3>
            <p>Led a specialized core group driving major initiatives across Tamil
            Nadu.</p>
          </div>
          <div className="experience-item">
            <h3>Technical Roles</h3>
            <p>
            Technical Member of GDSC SIST, Hack SIST & Innovation Club SIST – Contributed to projects, organized hackathons, and worked on innovative solutions.
            </p>
          </div>
          <div className="experience-item">
            <h3>Management Roles</h3>
            <p>
            Management Member of ACM SIST & OWASP SIST – Managed events promoted computational learning and cybersecurity awareness Conducted two 24 hour hackathons one national level and one intra college
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
