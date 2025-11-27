// project.js
// Render individual project based on ?slug= in the URL

(function () {
    if (typeof projects === "undefined") {
      console.warn("projects.js not loaded or 'projects' is undefined.");
      return;
    }
  
    const projectContainer = document.getElementById("projectContainer");
    if (!projectContainer) return;
  
    function getSlugFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get("slug");
    }
  
    function findProjectBySlug(slug) {
      return projects.find((p) => p.slug === slug);
    }
  
    function renderProject(project) {
      const techText = project.tech && project.tech.length ? project.tech.join(", ") : "";
      const yearText = project.year ? project.year : "";
      const pageTitle = `${project.title} — [Your Name]`;
  
      projectContainer.innerHTML = `
        <section class="post-header">
          <div class="container">
            <p class="post-meta">
              ${yearText ? `${yearText} · ` : ""}${project.role}
            </p>
            <h1>${project.title}</h1>
            ${
              project.tags && project.tags.length
                ? `<div class="tag-list-inline">
                    ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
                  </div>`
                : ""
            }
          </div>
        </section>
  
        <section>
          <div class="container">
            ${
              project.featuredImage
                ? `<div class="post-hero-image">
                    <img src="${project.featuredImage}" alt="${project.title}">
                  </div>`
                : ""
            }
          </div>
        </section>
  
        <section>
          <div class="container post-body">
            ${project.description}
            ${
              techText
                ? `<p><strong>Tech stack:</strong> ${techText}</p>`
                : ""
            }
            ${
              project.liveUrl || project.repoUrl
                ? `<p>
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener">Live demo</a>` : ""}
                    ${project.liveUrl && project.repoUrl ? " · " : ""}
                    ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noopener">Source code</a>` : ""}
                  </p>`
                : ""
            }
            <p>
              <a href="portfolio.html" class="btn secondary">← Back to projects</a>
            </p>
          </div>
        </section>
      `;
  
      // SEO meta updates
      const titleEl = document.getElementById("projectPageTitle");
      const descEl = document.getElementById("projectMetaDescription");
      const ogTitle = document.getElementById("projectOgTitle");
      const ogDesc = document.getElementById("projectOgDescription");
      const ogUrl = document.getElementById("projectOgUrl");
      const ogImage = document.getElementById("projectOgImage");
  
      if (titleEl) titleEl.textContent = pageTitle;
      if (descEl) descEl.setAttribute("content", project.summary || "");
      if (ogTitle) ogTitle.setAttribute("content", pageTitle);
      if (ogDesc) ogDesc.setAttribute("content", project.summary || "");
      if (ogUrl) ogUrl.setAttribute("content", window.location.href);
      if (ogImage && project.featuredImage) ogImage.setAttribute("content", project.featuredImage);
    }
  
    function renderNotFound() {
      projectContainer.innerHTML = `
        <section class="page-hero">
          <div class="container">
            <h1>Project not found</h1>
            <p>The project you’re looking for doesn’t exist or has moved.</p>
            <a class="btn secondary" href="portfolio.html">← Back to projects</a>
          </div>
        </section>
      `;
    }
  
    const slug = getSlugFromUrl();
    if (!slug) {
      renderNotFound();
      return;
    }
  
    const project = findProjectBySlug(slug);
    if (!project) {
      renderNotFound();
    } else {
      renderProject(project);
    }
  })();
  