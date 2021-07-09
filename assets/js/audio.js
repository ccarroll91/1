const sounds = [
  'audio1',
  'audio2',
  'audio3',
  'audio4',
  'audio5',
  'audio6',
  'audio7',
  'audio8',
  'audio9',
  'audio10',
  'audio11',
  'audio12',
  'audio13',
  'audio14',
  'audio15',
  'audio16',
  'audio17',
  'audio18',
  'audio19',
  'audio20',
  'audio21',
  'audio22',
  'audio23',
  'audio24',
  'audio25',
  'audio26',
  'audio27',
]

sounds.forEach((sound) => {
  const item;
  item.classList.add('item');

  item.addEventListener('click'), ()=>{
    stopSongs();
    document.getElementById(sound).play();
  }

  function stopSongs() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);

      song.pause();
      song.currentTime = 0;
    });
  }


})

/*---------------------------------------------------audio

document.getElementById('play1').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio1').play();
  });
  
  document.getElementById('play2').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio2').play();
  });
  
  document.getElementById('play3').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio3').play();
  });
  
  document.getElementById('play4').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio4').play();
  });
  
  document.getElementById('play5').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio5').play();
  });
  
  document.getElementById('play6').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio6').play();
  });
  
  document.getElementById('play7').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio7').play();
  });
  
  document.getElementById('play8').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio8').play();
  });
  
  document.getElementById('play9').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio9').play();
  });
  
  document.getElementById('play10').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio10').play();
  });
  
  document.getElementById('play11').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio11').play();
  });
  
  document.getElementById('play12').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio12').play();
  });
  
  document.getElementById('play13').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio13').play();
  });
  
  document.getElementById('play14').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio14').play();
  });
  
  document.getElementById('play15').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio15').play();
  });
  
  document.getElementById('play16').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio16').play();
  });
  
  document.getElementById('play17').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio17').play();
  });
  
  document.getElementById('play18').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio18').play();
  });
  
  document.getElementById('play19').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio19').play();
  });
  
  document.getElementById('play20').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio20').play();
  });
  
  document.getElementById('play21').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio21').play();
  });
  
  document.getElementById('play22').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio22').play();
  });
  
  document.getElementById('play23').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio23').play();
  });
  
  document.getElementById('play24').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio24').play();
  });
  
  document.getElementById('play25').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio25').play();
  });
  
  document.getElementById('play26').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio26').play();
  });
  
  document.getElementById('play27').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio27').play();
  });
  */
