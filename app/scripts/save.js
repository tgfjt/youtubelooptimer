(function() {
  'use strict';

  function getUrl(id) {
    var youtube = 'https://www.youtube.com/v/';
    var param = '?version=3&loop=1&playlist=' + id + '&autoplay=1';

    return youtube + id + param;
  }

  function getYoutubeId(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[7].length === 11) {
      return match[7];
    }

    return;
  }

  var id = getYoutubeId(location.href);

  if (!id) {
    return;
  }

  location.href = getUrl(id);
})();
