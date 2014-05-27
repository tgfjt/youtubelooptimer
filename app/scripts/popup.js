(function(script) {
  'use strict';

  var run = setTimeout.bind(this, script);

  if (document.readyState !== 'complete') {
    window.addEventListener('load', run, true);
  } else {
    run();
  }
})(function () {
  'use strict';

  function execute() {
    var val = document.querySelector('#js-looptime').value;
    var check = document.querySelector('#js-loopinfinite').checked;

    chrome.tabs.query({
      'active': true,
      'lastFocusedWindow': true
    }, function() {
      var options = {
        val: val,
        check: check
      };

      chrome.tabs.executeScript(null, {
        file: 'scripts/save.js',
      }, function() {
        chrome.tabs.executeScript(null, {
          code: 'var opt = ' + JSON.stringify(options)
        }, function() {
          chrome.tabs.executeScript(null, {
            file: 'scripts/timer.js',
          }, function() {
            window.close();
          });
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var target = document.querySelector('#js-loopstart');

    target.addEventListener('click', function() {
      execute();
    });
  });
});
