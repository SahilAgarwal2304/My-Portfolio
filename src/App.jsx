import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth scroll and navbar hiding logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        setIsScrolled(false);
      } else {
        setIsHidden(false);
        setIsScrolled(currentScrollY > 50);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className={`${isHidden ? 'hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <a href="#home" className="logo">SAHIL <span className="accent">AGARWAL</span></a>
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
              <li><a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</a></li>
              <li><a href="#certifications" onClick={() => setIsMobileMenuOpen(false)}>Certs</a></li>
              <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
              <li><a href="#blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</a></li>
              <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
            </ul>
            <button className="hamburger" onClick={toggleMobileMenu}>
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-subtitle">Computer Engineer (AIML Honors)</p>
              <h1 className="hero-title">Hello, I'm <br/><span className="accent">Sahil Agarwal</span></h1>
              <p className="hero-description">Full-Stack Developer passionate about building scalable backends, clean databases, intuitive UIs, and integrating Machine Learning systems.</p>
              
              <div className="cta-buttons">
                <a href="/assets/resumes/Resume.pdf" className="btn btn-primary" download>
                  <i className="fas fa-download"></i> Download CV
                </a>
                <a href="#projects" className="btn btn-secondary">
                  View Projects
                </a>
              </div>
              
              <div className="social-icons">
                <a href="https://github.com/SahilAgarwal2304" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/sahil-agarwal2304" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://sahilagarwal.hashnode.dev" target="_blank" rel="noreferrer"><i className="fas fa-blog"></i></a>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="profile-wrapper">
                <img src="/assets/images/profile/sahil-profile.png" alt="Sahil Agarwal" className="profile-pic" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
            <h2 className="section-title">About <span className="accent">Me</span></h2>
            <div className="about-content">
                <div className="about-text" style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "900px", margin: "0 auto" }}>
                    <p style={{ marginBottom: "20px" }}>I'm Sahil Agarwal, a Computer Engineer pursuing AIML Honors with a deep interest in building systems that function smoothly across every layer. I'm fascinated by how software works end-to-end — from UI/UX and frontend interactions to backend architecture, databases, networks, and security.</p>
                    <p style={{ marginBottom: "20px" }}>For me, engineering isn't just about writing code; it's about understanding how every component fits into the bigger picture. I started my journey by building simple UI layouts, which slowly grew into a passion for full-stack development.</p>
                    <p style={{ marginBottom: "20px" }}>Today, I enjoy designing clean, modern interfaces, structuring backend logic, creating APIs, and organizing data flow across SQL, PostgreSQL, and MongoDB. I think in terms of clarity, scalability, and maintainability — I like knowing why something works, not just how to make it work.</p>
                    <p style={{ marginBottom: "20px" }}>I’ve also contributed to my college’s E-Cell website and the Ciphers Community website, helping refine their UI and improve the overall user experience. I worked on frontend components, small feature enhancements, and general improvements to make the sites cleaner and more functional.</p>
                    <p style={{ marginBottom: "20px" }}>Along the way, I also developed a strong interest in Computer Networks and Cybersecurity. Understanding how packets move, how protocols communicate, and how security vulnerabilities arise helps me design smarter, safer systems.</p>
                    <p>I'm equally invested in exploring AI/ML fundamentals through my AIML Honors track. I enjoy understanding how models learn, the role of data, and how Gen-AI can improve user experience and productivity. My goal is to blend full-stack engineering with AIML concepts to build intelligent, practical solutions.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
            <h2 className="section-title">Education <span className="accent">Journey</span></h2>
            <div className="timeline">
                <div className="timeline-line"></div>
                
                {/* 10th Standard */}
                <div className="timeline-item">
                    <div className="timeline-node"></div>
                    <div className="education-card right">
                        <div className="education-icon"><i className="fas fa-book"></i></div>
                        <div className="education-year">2019</div>
                        <h3 className="education-degree">10th Standard (ICSE)</h3>
                        <p className="education-school">The Bishop's Co-Ed School KLN</p>
                        <p className="education-details">Percentage: 91%</p>
                        <p className="education-description">Strong academic foundation with early exposure to computers and logical thinking. Developed fundamental problem-solving skills.</p>
                    </div>
                </div>

                {/* 12th Standard */}
                <div className="timeline-item">
                    <div className="timeline-node"></div>
                    <div className="education-card left">
                        <div className="education-icon"><i className="fas fa-school"></i></div>
                        <div className="education-year">2019-2021</div>
                        <h3 className="education-degree">12th Standard (HSC)</h3>
                        <p className="education-school">Sant Mai Junior College</p>
                        <p className="education-details">Percentage: 64%</p>
                        <p className="education-description">Began exploring programming basics, with curiosity into software and web development sparked during this period.</p>
                    </div>
                </div>

                {/* Undergraduate */}
                <div className="timeline-item">
                    <div className="timeline-node"></div>
                    <div className="education-card right">
                        <div className="education-icon"><i className="fas fa-graduation-cap"></i></div>
                        <div className="education-year">2021-2025</div>
                        <h3 className="education-degree">B.E. Computer Engineering (AIML Honors)</h3>
                        <p className="education-school">AISSMS College of Engineering, Pune</p>
                        <p className="education-details">SGPA: 7.42 | 7.36 | 7.82 | 8.05 | 7.82</p>
                        <p className="education-description">Full-stack development, AIML theory, cyber security fundamentals, networking, operating systems, DBMS, DSA. Specializing in Artificial Intelligence & Machine Learning.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <div className="container">
            <h2 className="section-title">Certifications & <span className="accent">Achievements</span></h2>
            <div className="certifications-grid">
                
                <a href="/assets/Certificates/hackerrank-python.pdf" className="card cert-card" download>
                    <div className="cert-icon"><i className="fab fa-python"></i></div>
                    <h3>Python Certification</h3>
                    <p className="cert-platform">HackerRank</p>
                    <p className="cert-description">Demonstrated proficiency in Python fundamentals and applied problem-solving.</p>
                    <div className="download-badge"><i className="fas fa-download"></i> Download</div>
                </a>

                <a href="/assets/Certificates/hackerrank-problem-solving-intermediate.pdf" className="card cert-card" download>
                    <div className="cert-icon"><i className="fas fa-laptop-code"></i></div>
                    <h3>Problem Solving (Intermediate)</h3>
                    <p className="cert-platform">HackerRank</p>
                    <p className="cert-description">Advanced algorithmic thinking and complex problem-solving capabilities.</p>
                    <div className="download-badge"><i className="fas fa-download"></i> Download</div>
                </a>

                <a href="/assets/Certificates/hackerrank-problem-solving-basic.pdf" className="card cert-card" download>
                    <div className="cert-icon"><i className="fas fa-code"></i></div>
                    <h3>Problem Solving (Basic)</h3>
                    <p className="cert-platform">HackerRank</p>
                    <p className="cert-description">Fundamental problem-solving skills and basic algorithmic thinking.</p>
                    <div className="download-badge"><i className="fas fa-download"></i> Download</div>
                </a>

                <a href="/assets/Certificates/hackerrank-css-basics.pdf" className="card cert-card" download>
                    <div className="cert-icon"><i className="fab fa-css3-alt"></i></div>
                    <h3>CSS Basics Certification</h3>
                    <p className="cert-platform">HackerRank</p>
                    <p className="cert-description">Proficiency in CSS fundamentals, styling, and responsive design principles.</p>
                    <div className="download-badge"><i className="fas fa-download"></i> Download</div>
                </a>

                <a href="/assets/Certificates/iucce-generative-ai.pdf" className="card cert-card" download>
                    <div className="cert-icon"><i className="fas fa-brain"></i></div>
                    <h3>Generative AI Mastermind</h3>
                    <p className="cert-platform">IUCEE</p>
                    <p className="cert-description">Comprehensive understanding of Generative AI fundamentals, architectures, and practical applications.</p>
                    <div className="download-badge"><i className="fas fa-download"></i> Download</div>
                </a>

                <a href="/assets/Certificates/outskill-agentic-ai.pdf" className="card cert-card" download>
                    <div className="cert-icon"><i className="fas fa-robot"></i></div>
                    <h3>Agentic AI Mastermind</h3>
                    <p className="cert-platform">OutSkill</p>
                    <p className="cert-description">Advanced training in agentic AI systems, autonomous workflows, and intelligent automation.</p>
                    <div className="download-badge"><i className="fas fa-download"></i> Download</div>
                </a>

                <a href="/assets/Certificates/unstop-weekly-challenges.pdf" className="card cert-card" download>
                    <div className="cert-icon"><i className="fas fa-trophy"></i></div>
                    <h3>Weekly Coding Challenges</h3>
                    <p className="cert-platform">Unstop</p>
                    <p className="cert-description">Participated in 10 weekly competitive coding contests to improve logic, speed, and algorithmic thinking.</p>
                    <div className="download-badge"><i className="fas fa-download"></i> Download</div>
                </a>

            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills & <span className="accent">Technologies</span></h2>
          <div className="skills-grid">
            
            <div className="card">
              <i className="fas fa-code skill-icon"></i>
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML/CSS</span>
                <span className="skill-item">AngularJS</span>
              </div>
            </div>

            <div className="card">
              <i className="fas fa-server skill-icon"></i>
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Express.js</span>
                <span className="skill-item">Django</span>
                <span className="skill-item">Python</span>
              </div>
            </div>

            <div className="card">
              <i className="fas fa-database skill-icon"></i>
              <h3>Databases & Auth</h3>
              <div className="skill-items">
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">Firebase Auth</span>
                <span className="skill-item">Firestore</span>
              </div>
            </div>

            <div className="card">
              <i className="fas fa-brain skill-icon"></i>
              <h3>AI & Data</h3>
              <div className="skill-items">
                <span className="skill-item">Data Science</span>
                <span className="skill-item">Machine Learning</span>
                <span className="skill-item">Data Analytics</span>
                <span className="skill-item">Gen-AI</span>
              </div>
            </div>

            <div className="card">
              <i className="fas fa-cloud skill-icon"></i>
              <h3>Tools & Cloud</h3>
              <div className="skill-items">
                <span className="skill-item">AWS (Basics)</span>
                <span className="skill-item">Vercel</span>
                <span className="skill-item">Git/GitHub</span>
                <span className="skill-item">Linux</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
          <div className="projects-grid">
            
            {/* New Projects */}
            <div className="card">
              <div className="project-content">
                <h3 className="project-title">Credit Card Fraud Detection</h3>
                <p className="project-description">A machine learning model built to accurately identify fraudulent credit card transactions, involving data preprocessing and supervised learning algorithms.</p>
                <div className="project-tech">
                  <span className="tech-tag">#Python</span>
                  <span className="tech-tag">#MachineLearning</span>
                  <span className="tech-tag">#DataScience</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://youtu.be/239TaYSQI-s?si=g_AWS-sr8wb8j_in" target="_blank" rel="noreferrer" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="#" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            <div className="card">
              <div className="project-content">
                <h3 className="project-title">BudgetBliss</h3>
                <p className="project-description">A complete finance-tracking UI with budgets, expenses, and goals. Built with scalable architecture utilizing modern backend routing and cloud databases.</p>
                <div className="project-tech">
                  <span className="tech-tag">#Flask</span>
                  <span className="tech-tag">#MongoDB</span>
                  <span className="tech-tag">#Firebase</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://sahilagarwal2304.github.io/BudgetBliss/" target="_blank" rel="noreferrer" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="https://github.com/SahilAgarwal2304/BudgetBliss" target="_blank" rel="noreferrer" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            <div className="card">
              <div className="project-content">
                <h3 className="project-title">Onyq Tech</h3>
                <p className="project-description">Developed a professional agency website featuring a modern React UI, responsive layout, and an integrated automated Web3Forms contact system.</p>
                <div className="project-tech">
                  <span className="tech-tag">#React</span>
                  <span className="tech-tag">#Node.js</span>
                  <span className="tech-tag">#Web3Forms</span>
                </div>
              </div>
              <div className="project-links">
                <a href="#" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="#" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            <div className="card">
              <div className="project-content">
                <h3 className="project-title">Library Management System</h3>
                <p className="project-description">A secure management platform featuring Google Firebase Authentication, role-based access control, and Firestore for robustly tracking book issuances.</p>
                <div className="project-tech">
                  <span className="tech-tag">#JavaScript</span>
                  <span className="tech-tag">#FirebaseAuth</span>
                  <span className="tech-tag">#Firestore</span>
                </div>
              </div>
              <div className="project-links">
                <a href="#" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="#" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            <div className="card">
              <div className="project-content">
                <h3 className="project-title">Hunt the Wumpus</h3>
                <p className="project-description">A logic-based classic terminal game where the player navigates a complex cave system to find the Wumpus while avoiding hazards. Demonstrates strong OOP architecture.</p>
                <div className="project-tech">
                  <span className="tech-tag">#Java</span>
                  <span className="tech-tag">#OOP</span>
                  <span className="tech-tag">#Algorithms</span>
                </div>
              </div>
              <div className="project-links">
                <a href="#" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="#" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            {/* Original Projects */}
            <div className="card">
              <div className="project-content">
                <h3 className="project-title">Amazon UI Clone</h3>
                <p className="project-description">Responsive UI clone of the Amazon homepage focusing on grid design, layout accuracy, and modern CSS techniques.</p>
                <div className="project-tech">
                  <span className="tech-tag">#HTML</span>
                  <span className="tech-tag">#CSS</span>
                  <span className="tech-tag">#JavaScript</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://sahilagarwal2304.github.io/WebDevJourney/AmazonCloneUI/" target="_blank" rel="noreferrer" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="https://github.com/SahilAgarwal2304/WebDevJourney/tree/main/AmazonCloneUI" target="_blank" rel="noreferrer" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            <div className="card">
              <div className="project-content">
                <h3 className="project-title">Netflix UI Clone</h3>
                <p className="project-description">Modern, responsive landing page matching the original Netflix design structure with CSS flexbox and media queries.</p>
                <div className="project-tech">
                  <span className="tech-tag">#HTML</span>
                  <span className="tech-tag">#CSS</span>
                  <span className="tech-tag">#JavaScript</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://sahilagarwal2304.github.io/WebDevJourney/Netflix-UI-Clone/" target="_blank" rel="noreferrer" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="https://github.com/SahilAgarwal2304/WebDevJourney/tree/main/Netflix-UI-Clone" target="_blank" rel="noreferrer" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            <div className="card">
              <div className="project-content">
                <h3 className="project-title">DrumKit</h3>
                <p className="project-description">JavaScript-based interactive sound kit triggered by keyboard events.</p>
                <div className="project-tech">
                  <span className="tech-tag">#HTML</span>
                  <span className="tech-tag">#CSS</span>
                  <span className="tech-tag">#JavaScript</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://sahilagarwal2304.github.io/WebDevJourney/DrumKit/" target="_blank" rel="noreferrer" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="https://github.com/SahilAgarwal2304/WebDevJourney/tree/main/DrumKit" target="_blank" rel="noreferrer" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            <div className="card">
              <div className="project-content">
                <h3 className="project-title">Love-or-Run Game</h3>
                <p className="project-description">Fun mini-game built with JS logic, randomness, and DOM interactions.</p>
                <div className="project-tech">
                  <span className="tech-tag">#HTML</span>
                  <span className="tech-tag">#CSS</span>
                  <span className="tech-tag">#JavaScript</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://sahilagarwal2304.github.io/WebDevJourney/love-or-run/" target="_blank" rel="noreferrer" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="https://github.com/SahilAgarwal2304/WebDevJourney/tree/main/love-or-run" target="_blank" rel="noreferrer" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

            <div className="card">
              <div className="project-content">
                <h3 className="project-title">WebDev Journey Components</h3>
                <p className="project-description">A set of layout experiments, UI patterns, and frontend practice components showcasing my learning journey.</p>
                <div className="project-tech">
                  <span className="tech-tag">#HTML</span>
                  <span className="tech-tag">#CSS</span>
                  <span className="tech-tag">#JavaScript</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://sahilagarwal2304.github.io/WebDevJourney/" target="_blank" rel="noreferrer" className="btn btn-secondary"><i className="fas fa-external-link-alt"></i> Live</a>
                <a href="https://github.com/SahilAgarwal2304/WebDevJourney" target="_blank" rel="noreferrer" className="btn btn-primary"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs">
        <div className="container">
            <h2 className="section-title">My <span className="accent">Blogs</span></h2>
            <div className="blogs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '30px' }}>
                
                <a href="https://sahilagarwal.hashnode.dev/javas-comfort-cs-control-picking-the-right-tool-when-performance-is-paramount" className="card blog-card" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="blog-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <h3 className="blog-title" style={{ marginBottom: '15px', color: 'var(--text-main)' }}>Java's Comfort vs C's Control: Picking the Right Tool When Performance Is Paramount</h3>
                        <p className="blog-description" style={{ color: 'var(--text-muted)', flexGrow: '1', marginBottom: '20px' }}>A deep dive into the eternal debate between Java and C — performance vs abstraction. This blog explains how each language handles memory, execution, and low-level control.</p>
                        <div className="blog-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--accent-primary)', fontWeight: '500' }}>
                            <span>Read Blog →</span>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </a>

                <a href="https://sahilagarwal.hashnode.dev/tackling-cc-pitfalls-with-java-a-smarter-approach-to-memory-and-concurrency" className="card blog-card" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div className="blog-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <h3 className="blog-title" style={{ marginBottom: '15px', color: 'var(--text-main)' }}>Tackling C/C++ Pitfalls With Java: A Smarter Approach to Memory and Concurrency</h3>
                        <p className="blog-description" style={{ color: 'var(--text-muted)', flexGrow: '1', marginBottom: '20px' }}>A clean breakdown of common memory and concurrency issues in C/C++, and how Java solves these with safer abstractions. Covers pointers, memory leaks, and race conditions.</p>
                        <div className="blog-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--accent-primary)', fontWeight: '500' }}>
                            <span>Read Blog →</span>
                            <i className="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </a>

            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
          <div className="contact-wrapper">
            
            <div className="card">
              <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="text" name="name" className="contact-input" placeholder="Your Name" required />
                <input type="email" name="email" className="contact-input" placeholder="Your Email" required />
                <textarea name="message" className="contact-input" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="btn btn-primary" style={{alignSelf: "flex-start"}}>Send Message</button>
              </form>
            </div>

            <div className="contact-grid">
              <a href="https://linkedin.com/in/sahil-agarwal2304" className="card contact-card" target="_blank" rel="noreferrer">
                <div className="social-icons"><i className="fab fa-linkedin"></i></div>
                <div>
                  <h3>LinkedIn</h3>
                  <p style={{color: "var(--text-muted)", fontSize: "0.9rem"}}>sahil-agarwal2304</p>
                </div>
              </a>
              <a href="https://github.com/SahilAgarwal2304" className="card contact-card" target="_blank" rel="noreferrer">
                <div className="social-icons"><i className="fab fa-github"></i></div>
                <div>
                  <h3>GitHub</h3>
                  <p style={{color: "var(--text-muted)", fontSize: "0.9rem"}}>SahilAgarwal2304</p>
                </div>
              </a>
              <a href="https://sahilagarwal.hashnode.dev" className="card contact-card" target="_blank" rel="noreferrer">
                <div className="social-icons"><i className="fas fa-blog"></i></div>
                <div>
                  <h3>Blog</h3>
                  <p style={{color: "var(--text-muted)", fontSize: "0.9rem"}}>sahilagarwal.hashnode.dev</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p className="copyright">© 2026 Sahil Agarwal. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;