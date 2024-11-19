export default function PortfolioPage({ projects }) {

  const skills = `
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Folonite.js</li>
      <li>Node.js</li>
    </ul>
  `;

  // Build project cards manually
  let projectCards = '';
  for (let project of projects) {
    projectCards += `
      <div style="border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 5px; text-align: left;">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" style="color: blue; text-decoration: underline;">View Project</a>
      </div>
    `;
  }

  // Return the full HTML for the portfolio page
  return `
    <header style="text-align: center; padding: 20px; background-color: #333; color: white;">
      <h1>Your Name</h1>
      <nav>
        <a href="#about" style="margin: 0 10px; color: white; text-decoration: none;">About</a>
        <a href="#skills" style="margin: 0 10px; color: white; text-decoration: none;">Skills</a>
        <a href="#projects" style="margin: 0 10px; color: white; text-decoration: none;">Projects</a>
        <a href="#contact" style="margin: 0 10px; color: white; text-decoration: none;">Contact</a>
      </nav>
    </header>

    <main style="padding: 20px;">
      <!-- About Me Section -->
      <section id="about" style="margin-bottom: 20px;">
        <h2>About Me</h2>
        <p>Hello! I'm a passionate web developer focused on creating beautiful and functional websites.</p>
      </section>

      <!-- Skills Section -->
      <section id="skills" style="margin-bottom: 20px;">
        <h2>Skills</h2>
        ${skills}
      </section>

      <!-- Projects Section -->
      <section id="projects" style="margin-bottom: 20px;">
        <h2>Projects</h2>
        ${projectCards}
      </section>

      <!-- Contact Section -->
      <section id="contact" style="margin-bottom: 20px;">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:yourname@example.com">yourname@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourname" target="_blank">linkedin.com/in/yourname</a></p>
      </section>
    </main>

    <footer style="text-align: center; padding: 10px; background-color: #333; color: white;">
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
  `;
}
