// post.js
// Render individual post based on ?slug= in the URL
// + back button + recommended posts

(function () {
  if (typeof posts === "undefined") {
    console.warn("posts.js not loaded or 'posts' is undefined.");
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

  // Get recommended posts: prioritize shared tags, then newest
  function getRecommendedPosts(currentPost, limit = 3) {
    const others = posts.filter((p) => p.slug !== currentPost.slug);

    const scored = others.map((p) => {
      const sharedTags =
        currentPost.tags && p.tags
          ? p.tags.filter((t) => currentPost.tags.includes(t)).length
          : 0;
      return {
        post: p,
        score: sharedTags,
      };
    });

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.date) - new Date(a.post.date);
    });

    return scored
      .map((x) => x.post)
      .slice(0, limit);
  }

  function renderPost(post) {
    const dateStr = new Date(post.date).toLocaleDateString();
    const recommended = getRecommendedPosts(post, 3);

    const recommendedHtml =
      recommended.length > 0
        ? `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">You might also enjoy</h2>
            <a href="blog.html" class="section-link">View all posts →</a>
          </div>
          <div class="grid-3">
            ${recommended
              .map(
                (r) => `
              <article class="card blog-card">
                <div class="blog-card-image">
                  <img src="${
                    r.featuredImage || "assets/images/blog-placeholder.jpg"
                  }" alt="${r.title}" loading="lazy">
                </div>
                <div class="blog-card-meta">
                  <span>${new Date(r.date).toLocaleDateString()}</span> ·
                  <span>${r.author}</span>
                </div>
                <h3>${r.title}</h3>
                <p>${r.excerpt}</p>
                <a class="card-link" href="post.html?slug=${encodeURIComponent(
                  r.slug
                )}">Read more →</a>
              </article>
            `
              )
              .join("")}
          </div>
        </div>
      </section>
    `
        : "";

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
          <p>
            <a href="blog.html" class="btn secondary">← Back to all posts</a>
          </p>
        </div>
      </section>

      ${recommendedHtml}
    `;

    // Update meta tags for SEO / sharing
    const titleEl = document.getElementById("postPageTitle");
    const descEl = document.getElementById("postMetaDescription");
    const ogTitle = document.getElementById("postOgTitle");
    const ogDesc = document.getElementById("postOgDescription");
    const ogUrl = document.getElementById("postOgUrl");
    const ogImage = document.getElementById("postOgImage");

    const pageTitle = `${post.title} — Gamaliel Tun`;

    if (titleEl) titleEl.textContent = pageTitle;
    if (descEl) descEl.setAttribute("content", post.excerpt || "");
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);
    if (ogDesc) ogDesc.setAttribute("content", post.excerpt || "");
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);
    if (ogImage && post.featuredImage) {
      ogImage.setAttribute("content", post.featuredImage);
    }
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
