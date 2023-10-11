(function() {
  'use strict';

  let content;
  let searchResults;

  const highlightOptions = { className: 'search-highlight', element: 'span' };
  const index = new lunr.Index();

  index.ref('id');
  index.field('title', { boost: 10 });
  index.field('body');
  index.pipeline.add(lunr.trimmer, lunr.stopWordFilter);

  $(populate);
  $(bind);

  function populate() {
    $('h1, h2').each(function() {
      const title = $(this);
      const body = title.nextUntil('h1, h2');
      index.add({
        body: body.text(),
        id: title.prop('id'),
        title: title.text()
      });
    });
  }

  function bind() {
    content = $('.content');
    searchResults = $('.search-results');

    $('#input-search').on('keyup', search);
  }

  function search(event) {
    unhighlight();
    searchResults.addClass('visible');

    // ESC clears the field
    if (event.keyCode === 27) this.value = '';

    if (this.value) {
      const results = index.search(this.value).filter(function(r) {
        return r.score > 0.0001;
      });

      if (results.length > 0) {
        searchResults.empty();
        $.each(results, function(index, result) {
          const element = document.querySelector('#' + result.ref);
          searchResults.append('<li><a href="#' + result.ref + '">' + $(element).text() + '</a></li>');
        });
        highlight.call(this);
      } else {
        searchResults.html('<li></li>');
        $('.search-results li').text('No Results Found for "' + this.value + '"');
      }
    } else {
      unhighlight();
      searchResults.removeClass('visible');
    }
  }

  function highlight() {
    if (this.value) content.highlight(this.value, highlightOptions);
  }

  function unhighlight() {
    content.unhighlight(highlightOptions);
  }
})();
