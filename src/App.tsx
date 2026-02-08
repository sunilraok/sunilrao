import React, { useState } from 'react';
import twitterLogo from './images/twitter.324dwr32.png';
import githubLogo from './images/octocat.d2ggb5d9.png';
import hashnodeLogo from './images/hashnode_logo.png';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">SR</div>
        <ul className="nav-menu">
          <li className={activeSection === 'home' ? 'active' : ''}>
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Sunil Rao</h1>
            <div className="hero-designation">
              Software Engineer at <a target="_blank" href='https://www.microsoft.com' className="microsoft-link" rel="noopener noreferrer">Microsoft</a>
            </div>
            <p className="hero-tagline">Passionate about Systems and Artificial Intelligence</p>
            <div className="hero-social">
              <a className="social-link" href="https://twitter.com/sunilrao_k" target="_blank" rel="noopener noreferrer">
                <img src={twitterLogo} alt="Twitter"/>
              </a>
              <a className="social-link" href="https://github.com/sunilraok" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub"/>
              </a>
              <a className="social-link" href="https://blog.sunilrao.in" target="_blank" rel="noopener noreferrer">
                <img src={hashnodeLogo} alt="Blog"/>
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a Software Engineer at Microsoft with a deep passion for building scalable systems and exploring the frontiers of Artificial Intelligence. My journey in tech has been driven by curiosity and a desire to solve complex problems that make a real impact.</p>
              <p>I specialize in developing robust full-stack systems and creating efficient algorithms that power modern applications. When I'm not coding, you can find me exploring the latest advances in AI and distributed systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Present</div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <h4>Microsoft</h4>
                <p>Working on cutting-edge systems and AI solutions at scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project Coming Soon</h3>
              <p>Exciting projects in the pipeline. Stay tuned for updates!</p>
              <div className="project-tags">
                <span className="tag">In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Go</span>
                <span className="skill-tag">C++</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Azure</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI/ML</h3>
              <div className="skill-tags">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">Computer Vision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always interested in hearing about new opportunities, collaborations, or just having a conversation about technology and AI. Feel free to reach out!</p>
            <div className="contact-info">
              <a href="mailto:your-email@example.com" className="contact-link">Send me an email</a>
              <div className="contact-social">
                <a className="social-link large" href="https://twitter.com/sunilrao_k" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="Twitter"/>
                </a>
                <a className="social-link large" href="https://github.com/sunilraok" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub"/>
                </a>
                <a className="social-link large" href="https://blog.sunilrao.in" target="_blank" rel="noopener noreferrer">
                  <img src={hashnodeLogo} alt="Blog"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Sunil Rao. Built with React and TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}

// App Id: 24e462d1-d621-4fdf-9bde-40f589cd9086

export default App;
