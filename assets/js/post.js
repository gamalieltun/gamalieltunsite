// post.js
// Render individual post based on ?slug= in the URL

(function () {
    if (typeof posts === "undefined") {
      return;
    }
  
    const postContainer = document.getElementById("postContainer");
    if (!postContainer) return;
  
    function getSlugFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get("slug");
    }
  
    function findPostBySlug(slug) {
      return posts.find((p) => p.slug === slug);
    }
  
    function renderPost(post) {
      const dateStr = new Date(post.date).toLocaleDateString();
  
      postContainer.innerHTML = `
        <section class="post-header">
          <div class="container">
            <p class="post-meta">${dateStr} · ${post.author}</p>
            <h1>${post.title}</h1>
            <div class="tag-list-inline">
              ${post.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
        </section>
  
        <section>
          <div class="container">
            ${
              post.featuredImage
                ? `<div class="post-hero-image">
                    <img src="${post.featuredImage}" alt="${post.title}">
                  </div>`
                : ""
            }
          </div>
        </section>
  
        <section>
          <div class="container post-body">
            ${post.content}
          </div>
        </section>
      `;
  
      // Update meta tags for SEO / sharing
      const titleEl = document.getElementById("postPageTitle");
      const descEl = document.getElementById("postMetaDescription");
      const ogTitle = document.getElementById("postOgTitle");
      const ogDesc = document.getElementById("postOgDescription");
      const ogUrl = document.getElementById("postOgUrl");
      const ogImage = document.getElementById("postOgImage");
  
      const pageTitle = `${post.title} — [Your Name]`;
  
      if (titleEl) titleEl.textContent = pageTitle;
      if (descEl) descEl.setAttribute("content", post.excerpt);
      if (ogTitle) ogTitle.setAttribute("content", pageTitle);
      if (ogDesc) ogDesc.setAttribute("content", post.excerpt);
      if (ogUrl) ogUrl.setAttribute("content", window.location.href);
      if (ogImage && post.featuredImage) ogImage.setAttribute("content", post.featuredImage);
    }
  
    function renderNotFound() {
      postContainer.innerHTML = `
        <section class="page-hero">
          <div class="container">
            <h1>Post not found</h1>
            <p>The article you’re looking for doesn’t exist or has moved.</p>
            <a class="btn secondary" href="blog.html">← Back to blog</a>
          </div>
        </section>
      `;
    }
  
    const slug = getSlugFromUrl();
    if (!slug) {
      renderNotFound();
      return;
    }
  
    const post = findPostBySlug(slug);
    if (!post) {
      renderNotFound();
    } else {
      renderPost(post);
    }
  })();
  