document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');
  const checkbox = document.getElementById('checkboxInput');
  const muteIcon = document.getElementById('mute-icon'); // تأكد عندك عنصر أيقونة

  // بداية: mute حسب checkbox
  audio.muted = checkbox.checked;

  // لما نضغط على checkbox
  checkbox.addEventListener('change', () => {
    audio.muted = checkbox.checked;

    // تبديل الأيقونة
    if (audio.muted) {
      muteIcon.classList.remove("fa-volume-high");
      muteIcon.classList.add("fa-volume-xmark");
    } else {
      muteIcon.classList.remove("fa-volume-xmark");
      muteIcon.classList.add("fa-volume-high");
    }
  });
});
