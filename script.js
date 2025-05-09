document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });

  // 프로젝트 로딩
  fetch('projects.json')
    .then(res => res.json())
    .then(projects => {
      const container = document.getElementById('project-list');
      projects.forEach(project => {
        const div = document.createElement('div');
        div.classList.add('project');
        div.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error('프로젝트 로딩 실패:', err);
    });
});
