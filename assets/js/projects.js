// projects.js
// Render project cards on portfolio page and featured projects on home page

(function () {
    if (typeof projects === "undefined") {
      console.warn("projects.js not loaded or 'projects' is undefined.");
      return;
    }
  
    const projectListEl = document.getElementById("projectList"); // portfolio.html
    const homeProjectsEl = document.getElementById("homeProjects"); // index.html (optional)
  
    function renderProjectCard(project) {
      const article = document.createElement("article");
      article.className = "card project-card";
  
      const imgUrl = project.featuredImage || "assets/images/project-placeholder.jpg";
      const techText = project.tech && project.tech.length ? project.tech.join(", ") : "";
  
      article.innerHTML = `
        <div class="blog-card-image">
          <img src="${imgUrl}" alt="${project.title}" loading="lazy">
        </div>
        <h2>${project.title}</h2>
        <p class="project-meta">
          ${project.year} · ${project.role}
        </p>
        <p>${project.summary}</p>
        ${
          project.tags && project.tags.length
            ? `<div class="tag-list-inline">
                ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
              </div>`
            : ""
        }
        ${
          techText
            ? `<p class="project-meta">Tech: ${techText}</p>`
            : ""
        }
        <a href="project.html?slug=${encodeURIComponent(project.slug)}" class="card-link">
          View details →
        </a>
      `;
      return article;
    }
  
    // Render all projects on portfolio.html
    function renderProjectList() {
      if (!projectListEl) return;
  
      projectListEl.innerHTML = "";
  
      projects
        .slice()
        .sort((a, b) => b.year - a.year) // newest first
        .forEach((project) => {
          const card = renderProjectCard(project);
          projectListEl.appendChild(card);
        });
    }
  
    // Render featured projects on home page (top 3 by year)
    function renderHomeProjects() {
      if (!homeProjectsEl) return;
  
      homeProjectsEl.innerHTML = "";
  
      projects
        .slice()
        .sort((a, b) => b.year - a.year)
        .slice(0, 3)
        .forEach((project) => {
          const card = renderProjectCard(project);
          homeProjectsEl.appendChild(card);
        });
    }
  
    // Initialize
    renderProjectList();
    renderHomeProjects();
  })();
  