// Fade in messages one by one
const messages = document.querySelectorAll('.messages p');
messages.forEach((msg, index) => {
  setTimeout(() => {
    msg.style.opacity = 1;
  }, index * 2000); // 2 seconds delay per message
});

// Heart animation on photo click
const photos = document.querySelectorAll('.photos img');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.className = 'heart';
    document.body.appendChild(heart);

    const rect = photo.getBoundingClientRect();
    heart.style.left = (rect.left + rect.width/2) + 'px';
    heart.style.top = (rect.top) + 'px';

    setTimeout(() => heart.remove(), 1000);
  });
});
