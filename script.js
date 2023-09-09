let x = 'Hello';
let c = 'insta: deathawaitts';
alert(x);
alert(c);


const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');
const statusMessage = document.getElementById('statusMessage');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'إيقاف';
    statusMessage.textContent = 'الصوت قيد التشغيل';
  } else {
    audio.pause();
    playButton.textContent = 'تشغيل';
    statusMessage.textContent = 'الصوت متوقف';
  }
});