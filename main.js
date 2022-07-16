document.addEventListener("yt-navigate-start", () => {
  if (location.pathname.startsWith("/shorts/")) {
    location.replace(`https://www.youtube.com/watch?v=${location.pathname.substring(8)}`);
  }
});
