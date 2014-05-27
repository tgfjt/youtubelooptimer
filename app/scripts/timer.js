/* global opt:false*/
(function() {
  'use strict';

  if (opt.check || opt.val === '') {
    return;
  }

  var minutes = opt.val * 60 * 1000;

  setTimeout(function() {
    location.href = location.href.replace(/play=1/, 'play=0');
  }, minutes);
})();
