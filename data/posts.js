// data/posts.js
// Simple file-based "CMS" for blog posts

// Each post:
// id, slug, title, date (YYYY-MM-DD), author, tags [array], excerpt, featuredImage (path), content (full HTML string)

const posts = [
    {
      id: 1,
      slug: "getting-started-with-my-personal-website",
      title: "Getting Started with My Personal Website",
      date: "2025-01-01",
      author: "[Your Name]",
      tags: ["Personal", "Web Development"],
      excerpt:
        "Why I decided to create a simple static site, what tools I used, and how I plan to grow it over time.",
      featuredImage: "assets/images/post-1.jpg",
      content: `
        <p>
          This is my small corner of the internet. I wanted something simple, fast, and easy to maintain —
          without relying on heavy frameworks or complex backends.
        </p>
        <p>
          This site is built with plain HTML, CSS, and JavaScript. Blog posts are stored in a JavaScript file,
          which means I can add or edit content just by updating <code>data/posts.js</code>.
        </p>
        <p>
          Over time, I plan to document my projects, share what I'm learning, and write honestly about the
          journey of growing as a developer.
        </p>
      `,
    },
    {
      id: 2,
      slug: "lessons-from-building-side-projects",
      title: "Lessons from Building Side Projects",
      date: "2025-02-10",
      author: "[Your Name]",
      tags: ["Projects", "Learning"],
      excerpt:
        "Side projects have been my favorite way to learn. Here are a few lessons I’ve picked up from shipping small things.",
      featuredImage: "assets/images/post-2.jpg",
      content: `
        <p>
          Building side projects has taught me more than any single course. The moment you try to ship something
          to real people, you start to see where your gaps are.
        </p>
        <p>
          A few lessons:
        </p>
        <ul>
          <li>Start small. Tiny, shippable projects are better than huge unfinished ideas.</li>
          <li>Decide who you’re building for, even if it's just you in the beginning.</li>
          <li>Accept that the first version will never be perfect — and that's okay.</li>
        </ul>
        <p>
          Most importantly, treat side projects as experiments. They don't all need to become startups. Sometimes
          the outcome is simply that you learned something new.
        </p>
      `,
    },
    {
      id: 3,
      slug: "balancing-learning-building-and-rest",
      title: "Balancing Learning, Building, and Rest",
      date: "2025-03-05",
      author: "[Your Name]",
      tags: ["Personal", "Productivity"],
      excerpt:
        "It’s easy to feel like you should always be doing more. I’m learning how to balance learning, building, and actually resting.",
      featuredImage: "assets/images/post-3.jpg",
      content: `
        <p>
          Tech moves quickly, and it’s easy to fall into the trap of feeling behind. There’s always a new framework,
          a new tutorial, or a new thing you “should” be learning.
        </p>
        <p>
          Lately, I’ve been trying to split my time into three intentional buckets:
        </p>
        <ol>
          <li><strong>Learning</strong> – structured time for courses, reading, or notes.</li>
          <li><strong>Building</strong> – hands-on coding in personal or school projects.</li>
          <li><strong>Resting</strong> – time with no productivity attached.</li>
        </ol>
        <p>
          Rest is not a reward for finishing work. It’s part of being able to keep going.
        </p>
      `,
    },
  ];
  