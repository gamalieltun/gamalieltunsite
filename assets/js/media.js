const videoContainer = document.getElementById("videoList");
const podcastContainer = document.getElementById("podcastList");

/**
 * Detects the media type and returns embed configuration
 */
function detectMediaType(url) {
  const urlLower = url.toLowerCase();
  
  // YouTube detection
  if (urlLower.includes('youtube.com') || urlLower.includes('youtu.be')) {
    return {
      type: 'youtube',
      embedUrl: convertToYouTubeEmbed(url)
    };
  }
  
  // Spotify detection
  if (urlLower.includes('spotify.com')) {
    return {
      type: 'spotify',
      embedUrl: convertToSpotifyEmbed(url)
    };
  }
  
  // SoundCloud detection
  if (urlLower.includes('soundcloud.com')) {
    return {
      type: 'soundcloud',
      embedUrl: `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    };
  }
  
  // Vimeo detection
  if (urlLower.includes('vimeo.com')) {
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return {
      type: 'vimeo',
      embedUrl: vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : null
    };
  }
  
  // Apple Podcasts detection
  if (urlLower.includes('podcasts.apple.com')) {
    return {
      type: 'apple-podcast',
      embedUrl: url.replace('/podcast/', '/embed/podcast/')
    };
  }
  
  // Generic iframe (fallback for any other embeddable content)
  return {
    type: 'generic',
    embedUrl: url
  };
}

/**
 * Convert any YouTube URL to embed format
 */
function convertToYouTubeEmbed(url) {
  const patterns = [
    /youtu\.be\/([^\?\/]+)/,
    /youtube\.com\/watch\?v=([^\&]+)/,
    /youtube\.com\/embed\/([^\?\/]+)/,
    /youtube\.com\/shorts\/([^\?\/]+)/,
    /youtube\.com\/v\/([^\?\/]+)/
  ];
  
  for (const regex of patterns) {
    const match = url.match(regex);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }
  
  return null;
}

/**
 * Convert any Spotify URL to embed format
 */
function convertToSpotifyEmbed(url) {
  // Already an embed URL
  if (url.includes('/embed/')) {
    return url;
  }
  
  // Convert regular Spotify URL to embed
  // Example: https://open.spotify.com/episode/ABC -> https://open.spotify.com/embed/episode/ABC
  return url.replace('open.spotify.com/', 'open.spotify.com/embed/');
}

/**
 * Create iframe HTML for any media type
 */
function createMediaEmbed(url, title, mediaType) {
  const media = detectMediaType(url);
  
  if (!media.embedUrl) {
    return `<p style="color:red;">Could not create embed for: ${url}</p>`;
  }
  
  // Spotify and audio platforms use different dimensions
  if (media.type === 'spotify' || media.type === 'soundcloud' || media.type === 'apple-podcast') {
    return `
      <div class="audio-wrapper">
        <iframe 
          src="${media.embedUrl}"
          width="100%" 
          height="152" 
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>
    `;
  }
  
  // Video platforms use responsive wrapper
  return `
    <div class="video-wrapper">
      <iframe
        src="${media.embedUrl}"
        title="${title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
  `;
}

/**
 * Render all media items
 */
function renderMedia() {
  if (!videoContainer || !podcastContainer) {
    console.error("Media containers not found!");
    return;
  }
  
  if (typeof mediaItems === 'undefined') {
    console.error("Media data not loaded!");
    videoContainer.innerHTML = '<p style="color:red;">Error: Media data not loaded. Make sure data/media.js is loaded first.</p>';
    return;
  }
  
  // Separate items by category
  const videos = mediaItems.filter(item => item.category === 'video');
  const podcasts = mediaItems.filter(item => item.category === 'podcast');
  
  // Render videos
  videoContainer.innerHTML = videos.length > 0 
    ? videos.map(item => `
        <div class="project-card">
          ${createMediaEmbed(item.url, item.title, 'video')}
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `).join('')
    : '<p>No videos available yet.</p>';
  
  // Render podcasts
  podcastContainer.innerHTML = podcasts.length > 0
    ? podcasts.map(item => `
        <div class="project-card">
          ${createMediaEmbed(item.url, item.title, 'podcast')}
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `).join('')
    : '<p>No podcasts available yet.</p>';
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", renderMedia);
} else {
  renderMedia();
}