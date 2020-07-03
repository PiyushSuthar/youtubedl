function isYoutube(url) {
  if (url.includes("youtube.com/watch?v=")) {
    return true;
  } else if (url.includes("youtu.be")) {
    return true;
  } else {
    return false;
  }
}

function downloadMp3(url) {
  if (isYoutube(url)) {
    window.location.href = `https://youtubedlbackend.herokuapp.com/mp3?url=${url}`;
  }
}
function downloadMp4(url) {
  if (isYoutube(url)) {
    window.location.href = `https://youtubedlbackend.herokuapp.com/mp4?url=${url}`;
  }
}
