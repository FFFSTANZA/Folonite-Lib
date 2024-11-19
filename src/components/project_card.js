export default function ProjectCard({ title, description, link }) {
  return `
    <div style="border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 5px; text-align: left;">
      <h3>${title}</h3>
      <p>${description}</p>
      <a href="${link}" target="_blank" style="color: blue; text-decoration: underline;">View Project</a>
    </div>
  `;
}
