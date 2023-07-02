(function(global) {
  'use strict';

  const closeToc = function() {
    $('.tocify-wrapper').removeClass('open');
    $('#nav-button').removeClass('open');
  };

  const makeToc = function() {
    global.toc = $('#toc').tocify({
      selectors: 'h1, h2, h3',
      extendPage: false,
      theme: 'none',
      smoothScroll: false,
      showEffectSpeed: 0,
      hideEffectSpeed: 180,
      ignoreSelector: '.toc-ignore',
      highlightOffset: 60,
      scrollTo: -1,
      scrollHistory: true,
      hashGenerator: function(text, element) {
        return element.prop('id');
      }
    }).data('toc-tocify');

    $('#nav-button').click(function() {
      $('.tocify-wrapper').toggleClass('open');
      $('#nav-button').toggleClass('open');
      return false;
    });

    $('.page-wrapper').click(closeToc);
    $('.tocify-item').click(closeToc);
  };

  // Hack to make already open sections to start opened,
  // instead of displaying an ugly animation
  function animate() {
    setTimeout(function() {
      global.toc.setOption('showEffectSpeed', 180);
    }, 50);
  }

  $(function() {
    makeToc();
    animate();
    $('.content').imagesLoaded(function() {
      global.toc.calculateHeights();
    });
  });
})(window);
