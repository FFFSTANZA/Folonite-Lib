export default function Header({ name }) {
  return `
    <header style="text-align: center; padding: 20px; background-color: #333; color: white;">
      <h1>${name}</h1>
      <nav>
        <a href="#about" style="margin: 0 10px; color: white; text-decoration: none;">About</a>
        <a href="#skills" style="margin: 0 10px; color: white; text-decoration: none;">Skills</a>
        <a href="#projects" style="margin: 0 10px; color: white; text-decoration: none;">Projects</a>
        <a href="#contact" style="margin: 0 10px; color: white; text-decoration: none;">Contact</a>
      </nav>
    </header>
  `;
}
