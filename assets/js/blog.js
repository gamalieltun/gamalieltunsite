// blog.js
// Uses global "posts" array from data/posts.js

(function () {
    // Safety: if posts.js didn't load, stop.
    if (typeof posts === "undefined") {
      console.warn("posts.js not loaded or 'posts' is undefined.");
      return;
    }
  
    const blogListEl = document.getElementById("blogList");
    const searchInput = document.getElementById("blogSearch");
    const tagFilterSelect = document.getElementById("tagFilter");
    const sortOrderSelect = document.getElementById("sortOrder");
    const paginationEl = document.getElementById("pagination");
    const latestPostsEl = document.getElementById("latestPosts"); // for home page
  
    const POSTS_PER_PAGE = 6;
    let currentPage = 1;
    let currentSearch = "";
    let currentTag = "";
    let sortOrder = "newest";
  
    function parseDate(dateStr) {
      return new Date(dateStr);
    }
  
    // Build tag dropdown based on all posts
    function initTagFilter() {
      if (!tagFilterSelect) return;
  
      const tagSet = new Set();
      posts.forEach((p) => {
        (p.tags || []).forEach((t) => tagSet.add(t));
      });
  
      Array.from(tagSet)
        .sort()
        .forEach((tag) => {
          const opt = document.createElement("option");
          opt.value = tag;
          opt.textContent = tag;
          tagFilterSelect.appendChild(opt);
        });
    }
  
    function getFilteredPosts() {
      let filtered = posts.slice();
  
      if (currentSearch) {
        const q = currentSearch.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            p.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
  
      if (currentTag) {
        filtered = filtered.filter((p) => p.tags.includes(currentTag));
      }
  
      filtered.sort((a, b) => {
        const da = parseDate(a.date);
        const db = parseDate(b.date);
        return sortOrder === "newest" ? db - da : da - db;
      });
  
      return filtered;
    }
  
    function renderPosts() {
      // If we're not on blog.html, blogListEl will be null – just skip.
      if (!blogListEl) return;
  
      const all = getFilteredPosts();
      const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
      if (currentPage > totalPages) currentPage = totalPages;
  
      const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
      const pageItems = all.slice(startIdx, startIdx + POSTS_PER_PAGE);
  
      blogListEl.innerHTML = "";
  
      if (!pageItems.length) {
        blogListEl.innerHTML = `<p>No posts found.</p>`;
      } else {
        pageItems.forEach((post) => {
          const article = document.createElement("article");
          article.className = "card blog-card";
  
          const imgUrl = post.featuredImage || "assets/images/blog-placeholder.jpg";
          article.innerHTML = `
            <div class="blog-card-image">
              <img src="${imgUrl}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-card-meta">
              <span>${new Date(post.date).toLocaleDateString()}</span> ·
              <span>${post.author}</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="tag-list-inline">
              ${post.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
            <a class="card-link" href="post.html?slug=${encodeURIComponent(post.slug)}">Read more →</a>
          `;
          blogListEl.appendChild(article);
        });
      }
  
      renderPagination(totalPages);
    }
  
    function renderPagination(totalPages) {
      if (!paginationEl) return;
  
      paginationEl.innerHTML = "";
  
      if (totalPages <= 1) return;
  
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
          currentPage = i;
          renderPosts();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        paginationEl.appendChild(btn);
      }
    }
  
    function initEventListeners() {
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          currentSearch = e.target.value.trim();
          currentPage = 1;
          renderPosts();
        });
      }
  
      if (tagFilterSelect) {
        tagFilterSelect.addEventListener("change", (e) => {
          currentTag = e.target.value;
          currentPage = 1;
          renderPosts();
        });
      }
  
      if (sortOrderSelect) {
        sortOrderSelect.addEventListener("change", (e) => {
          sortOrder = e.target.value;
          currentPage = 1;
          renderPosts();
        });
      }
    }
  
    function renderLatestPosts() {
      // Only used on home page
      if (!latestPostsEl) return;
  
      const sorted = posts
        .slice()
        .sort((a, b) => parseDate(b.date) - parseDate(a.date))
        .slice(0, 3);
  
      latestPostsEl.innerHTML = "";
  
      sorted.forEach((post) => {
        const article = document.createElement("article");
        article.className = "card blog-card";
        const imgUrl = post.featuredImage || "assets/images/blog-placeholder.jpg";
        article.innerHTML = `
          <div class="blog-card-image">
            <img src="${imgUrl}" alt="${post.title}" loading="lazy">
          </div>
          <div class="blog-card-meta">
            <span>${new Date(post.date).toLocaleDateString()}</span> ·
            <span>${post.author}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <a class="card-link" href="post.html?slug=${encodeURIComponent(post.slug)}">Read more →</a>
        `;
        latestPostsEl.appendChild(article);
      });
    }
  
    // Initialize
    initTagFilter();
    initEventListeners();
    renderPosts();       // will only do something on blog.html
    renderLatestPosts(); // will only do something on index.html
  })();
  