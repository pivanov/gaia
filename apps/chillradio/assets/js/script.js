




var ChillRadio = (function() {
  var radioURL = 'http://195.150.20.243:8000/rmf_chillout';
  var mediaElement = document.createElement('audio');

  mediaElement.setAttribute('src', radioURL);
  mediaElement.load();

  mediaElement.play();
})();
