(function() {
  var posts = [
      ['How to track scroll depth with Komito Analytics',
       'https://komito.net/posts/track-scroll-depth/track-scroll-depth.jpg'],
      ['How to integrate Komito Analytics using Google Tag Manager',
       'https://komito.net/integration/google-tag-manager/google-tag-manager.jpg'],
      ['How to integrate Komito Analytics using plugin for WordPress',
       'https://komito.net/integration/wordpress/komito-analytics-wordpress-plugin.jpg']
  ];
  posts.sort(function(a, b){return 0.5 - Math.random()});

  var page = location.href.split('?')[0];
  var html = '';
  // var pixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  var pixel = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg"/>');

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    var href = post[1].split('/').slice(0, -1).join('/') + '/';

    if (href != page) {
      html += '<div class="card">' +
              '  <a href="' + href + '" title="' + post[0] + '">' +
              '    <img src="' + pixel + '" ' +
              '         data-src="' + post[1] + '" width="100%"' +
              '         alt="' + post[0] + '">' +
              //'    <span style="background-image:url('+post[1]+')"></span>' +
              '    <b>' + post[0] + '</b>' +
              '  </a>' +
              '</div>';
    }
  }

  html += '<div class="card info">' +
          'Privacy is not a question: Komito Analytics does not store any data.<br><br>' +
          'Why? Because it\'s an extension for the most popular web analytics software, not a service.</div>';

  html +='<a class="twitter-timeline" data-chrome="nofooter" data-tweet-limit="3" ' +
         'href="https://twitter.com/KomitoAnalytics?ref_src=twsrc%5Etfw">Tweets by KomitoAnalytics</a>';

  insertAdjacentHTMLContent(document.currentScript, '<aside>' + html + '</aside>');
  document.getElementsByTagName('aside')[0].appendChild(
    document.createElement('script')).src='https://platform.twitter.com/widgets.js';
})();
