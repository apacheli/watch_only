document.addEventListener("yt-navigate-finish", () => {
  const index = location.pathname.indexOf("/shorts/");
  if (index > -1) {
    const videoId = location.pathname.substring(8);
    location.replace(`https://www.youtube.com/watch?v=${videoId}`);
  }
});
