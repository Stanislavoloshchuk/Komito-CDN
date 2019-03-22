/* @license http://www.apache.org/licenses/LICENSE-2.0 */
(function(){
var h=document,l=window,ba=navigator,m=(h.charset||h.characterSet||"utf-8").toLowerCase();function n(a){return a?h.createElement(a):null}function p(a){return h&&h.getElementsByTagName(a)}function t(a,b,d){a.attachEvent?a.attachEvent("on"+b,d):a.addEventListener(b,d,!1)}function u(a,b,d){a.attachEvent?a.detachEvent("on"+b,d):a.removeEventListener(b,d,!1)}function v(a){a=a||l.event;return a.target||a.srcElement}
function w(a,b){var d=n("SCRIPT"),c=!1,f;d.src=a;d.onload=d.onreadystatechange=function(){f=d.readyState||"complete";c||"loaded"!==f&&"complete"!==f||(c=!0,d.onload=d.onreadystatechange=null,d&&d.parentNode&&d.parentNode.removeChild(d),b&&b())};y.parentNode.appendChild(d)}var y,z=p("SCRIPT");y=z[z.length-1];function ca(){function a(a,c,f,e){c=c.replace(/^\/+/,"/");c+=(~c.indexOf("?")?"&":"?")+"nocache="+ +new da;B++;var d=l.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");d.onreadystatechange=function(){4===d.readyState&&(B--,f(d))};d.open(a,c,!0);d.send(b(d,a,e));return d}function b(a,c,b){for(var d in C)a.setRequestHeader(d,C[d]);a.setRequestHeader("X-Requested-With","XMLHttpRequest");b&&"object"==typeof b?(a.setRequestHeader("Content-Type","application/json; charset="+m),b=
D(b)):"POST"==c&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset="+m);return b}this.a=function(b,c){a("HEAD",b,c)};B=B||0}var B,C={};var ea=Array.prototype.slice;function E(a,b){var d;d|=0;a=F(a);var c=a.length,f=a.indexOf,e=f?f.call(a,b,d):-1;if(!f)for(;d<c&&!~e;d++)e=a[d]===b?d:e;return e}function G(a){var b=Array.isArray;return b?b(a):"[object Array]"===Object.prototype.toString.call(a)}function H(a,b){a=F(a);var d=a.length,c=0,f=0,e=a.filter,g=e?e.call(a,b,void 0):[];if(!e)for(;c<d;)e=a[c++],b.call(void 0,e,c,a)&&(g[f++]=e);return g}
function fa(a,b){a=F(a);var d=a.length,c=0,f=a.forEach;if(f)f.call(a,b,void 0);else for(;c<d;)b.call(void 0,a[c],c++,a)}function F(a){return G(a)?a:ea.call(a)};var da=Date;var D=l.JSON?JSON.stringify:function(a){var b=typeof a,d=[],c;if("object"!==b||null===a)a="string"===b?'"'+a+'"':""+a;else{var f=G(a);for(c in a){var e=a[c];b=typeof e;"string"===b?e='"'+e+'"':"object"===b&&null!==e&&(e=D(e));d.push((f?"":'"'+c+'":')+e)}a=(f?"[":"{")+d+(f?"]":"}")}return a};var I={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,trackOrientation:1,trackAdblock:0,trackErrorPages:0,sendHeartbeat:0,nonInteraction:"form print scroll video orientation adblock heartbeat".split(" "),debugMode:/[?&]debug=1/.test(location.search)},J=/\.([0-9a-z]+)(?:[\?#]|$)/i,K=l.GoogleAnalyticsObject||"ga";
function L(a){var b=F(arguments);b[0]=b[0]?"social":"event";ha(b);var d=l.TagLoader;var c=l.s;var f=[],e=1;if(d&&c&&c instanceof d){for(;e<b.length;e++)d="prop"+e,f.push(d),c[d]=b[e];c.linkTrackEvents="None";c.linkTrackVars=f.join(",");M([c],"tl",[c,"download"===b[1]?"d":"o",b[0]])}c=[].concat(b);"social"===c[0]&&(c[1]="social:"+c.splice(2,1,c[1])[0]);c=c.slice(1);M([l],"ClickTaleEvent",[c.join(":")]);M([l],"__utmTrackEvent",c);l._hmt&&M([l._hmt],"push",[["_trackEvent"].concat(c)]);if(l._gat||l._gaq)c=
l._gat&&l._gat._getTrackers&&l._gat._getTrackers(),f=N(b)?b.concat([1]):b,f[0]={social:"_trackSocial",event:"_trackEvent"}[f[0]],c?M(c,f[0],f.slice(1)):l._gaq&&M([l._gaq],"push",[f]);c=[];f="params";for(var g in l)0==g.indexOf("yaCounter")&&c.push(l[g]);g=b[1];"outbound"===g?(f="extLink",b=[b.pop()]):"download"===g&&(f="file",b=[b.pop()]);M(c,f,b)}
function ia(){if(!O){var a=function(){P=l._komito||{};for(b in I)b in P||(P[b]=I[b]);Q&&new Q;R&&new R;S&&new S;T&&new T;U&&new U;V&&new V;ja();ka();P.trackMedia&&(W&&new W,X&&new X,Y&&new Y);var a={trackFacebook:la,trackLinkedIn:ma,trackTwitter:na,trackUsers:oa},c;for(c in a)P[c]&&new a[c]};O=1;var b=h.readyState;"interactive"===b||"complete"===b?setTimeout(a,1E3):t(l,"DOMContentLoaded",a)}}
function ha(a){if("function"===typeof l[K]){var b=l[K].getAll&&l[K].getAll(),d=P.trackingIds,c={};b&&d&&(G(d)||(d=[""+d]),b=H(b,function(a){a=a.get("trackingId");return 0<=E(d,a)}));b=H(b,function(a){a=a.get("trackingId");var b=!c[a];c[a]=!0;return b});a=N(a)?a.concat([{nonInteraction:1}]):a;b&&M(b,"send",a)}}function M(a,b,d){var c=a.length;for(pa(b,d);c;){var f=a[--c];"function"===typeof f[b]&&f[b].apply(f,d)}}function pa(a){var b=l.console;P.debugMode&&b&&b.log.apply(b,arguments)}
function N(a){return 0<=E(P.nonInteraction,a[1].split(/\W/)[0])}var P={},O;"web.archive.org"!==location.hostname&&ia();function ja(){var a=+P.sendHeartbeat;if(a){var b;a=Math.max(a,30);t(h,"visibilitychange",function(){"visible"===h.visibilityState?b=setInterval(function(){L(0,"heartbeat",a+"s")},1E3*a):b&&clearInterval(b)})}}function ka(){var a=P.trackErrorPages&&location.href;a&&(new ca).a(a,function(b){399<b.status&&L(0,"errors",b.status,a)})};function V(){(function(){if(P.trackAdblock){var a=h.body.appendChild(n("DIV"));a.id="ad-container";a.style.position="absolute";a.innerHTML='<img src="data:image/svg+xml,%3Csvg/%3E" id="ad" class="banner" height="5" width="5">';setTimeout(function(){5>a.offsetHeight&&L(0,"adblock","pageview",location.href);a&&a.parentNode&&a.parentNode.removeChild(a)},1E3)}})()};function Q(){function a(d){d=v(d);var c=d.elements,f=c.length,e=0,g=d.getAttribute("action"),k;if(!(k=d.getAttribute("name")||d.getAttribute("id")||d.className.replace(/\W+/g,"-"))&&(k=g)){k=0;for(var A=g.length,q=0,r=0;r<A;)k^=g.charCodeAt(r++)<<q,q+=8,q%=24;k=k.toString(36).toUpperCase()}for(g=k||"form-"+ ++b;e<f;)k=c[e++],k.name&&L(0,"form",g,k.name+":"+(k.type||k.tagName));u(d,"submit",a)}var b=0;(function(){if(P.trackForms)for(var b=h.forms,c=b.length;c;)t(b[--c],"submit",a)})()};function R(){function a(b){b=c(b);var d="outbound",g=b.hostname,k=b.pathname.split("/"),x=f(b),aa=e[g.replace(/^www\./,"")];L(0,d,g,x);aa&&("twitter.com"===g.substr(-11)&&"intent"===k[k.length-2]&&(d="intent-"+k.pop()),L(1,aa,d,x));u(b,"mousedown",a)}function b(a){a=c(a);var d=f(a),e=(d.match(J)||[""]).pop().toLowerCase();L(0,"download",e,d);u(a,"mousedown",b)}function d(a){a=c(a);var b=a.protocol.slice(0,-1),e=f(a);g.test(e)||(L(0,"cta:"+b,e.slice(b.length+1).split("?")[0],e),u(a,"mousedown",d))}
function c(a){for(a=v(a);a&&"A"!==a.tagName;)a=a.parentNode;return a}function f(a){return a.href||a.getAttribute("href")||""}var e={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube",
"twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},g=/^(https?:)?\/\//;(function(){for(var c=p("A"),e=c.length;e;){var q=c[--e],r=f(q),x=g.test(r);r=(r.match(J)||[""]).pop().toLowerCase();P.trackOutbound&&x&&!~q.hostname.indexOf(location.hostname)&&t(q,"mousedown",a);P.trackDownloads&&r&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,".indexOf(","+
r+",")&&t(q,"mousedown",b);P.trackActions&&!x&&t(q,"mousedown",d)}})()};function U(){function a(a){L(0,"orientation","change",b(a))}function b(a){var b=screen.orientation||screen.mozOrientation||screen.msOrientation;return(b?b.type:a.matches?"portrait":"landscape").split("-")[0]}var d;(function(){if((ba.maxTouchPoints||"ontouchstart"in h)&&P.trackOrientation){var c=l.matchMedia;d=c&&c("(orientation: portrait)");L(0,"orientation","initial",b(d));d?d.addListener(a):t(l,"orientationchange",a)}})()};function S(){function a(){L(0,"print",h.title,location.href);b?b.removeListener(a):u(l,"afterprint",a);b=a=null}var b;(function(){if(P.trackPrint){var d=l.matchMedia;(b=d&&d("print"))?b.addListener(a):t(l,"afterprint",a)}})()};function T(){(function(){if(P.trackScroll){var a={25:0,50:0,75:0,100:0},b=h.documentElement,d=h.body,c;t(l,"scroll",function(){(c=25*~~((b.scrollTop||d.scrollTop)/((b.scrollHeight||d.offsetHeight)-(b.clientHeight||l.innerHeight))*100/25))&&c in a&&!a[c]&&(a[c]=1,L(0,"scroll","depth",c+"%"))})}})()};function W(){function a(a){for(var b=[],c=arguments.length,f,e;c;)for(f=p(arguments[--c]),e=0;e<f.length;)b.push(f[e++]);return b}(function(){function b(a){e=v(a);g=a.type;~g.indexOf("fullscreen")&&(g=h.fullScreen||h.mozFullScreen||h.webkitIsFullScreen?"fullscreen":"");g&&L(0,e.tagName.toLowerCase()+":html5",g,e.currentSrc||e.src)}for(var d="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),c=a("AUDIO","VIDEO"),f=c.length,e,g,k;f--;)for(e=c[f],k=0;6>k;)t(e,d[k++],
b)})()};function X(){function a(a){var c=l.Vimeo&&l.Vimeo.Player;if(c)for(var d=a.length,g;d;)g=a[--d],b(new c(g),g.src.split("?")[0])}function b(a,b){a.on("ended",function(){L(0,"video:vimeo","ended",b)});a.on("play",function(){L(0,"video:vimeo","play",b)});a.on("pause",function(){L(0,"video:vimeo","pause",b)})}var d=/^(https?:)?\/\/player\.vimeo\.com\/video\/\d+/;(function(){for(var b=p("IFRAME"),f=b.length,e=[],g;f;)g=b[--f],d.test(g.src)&&e.push(g);e.length&&(l.Vimeo&&l.Vimeo.Player?a(e):w("https://player.vimeo.com/api/player.js",
function(){a(e)}))})()};function Y(){function a(a){var b=["ended","play","pause"][a.data];b&&L(0,"video:youtube",b,a.target.getVideoUrl())}var b=/^(https?:)?\/\/(www\.)?youtube(\-nocookie)?\.com\/(embed|watch|v)/;(function(){for(var d=p("IFRAME"),c=d.length,f=0,e=[],g,k;f<c;)g=d[f++],k=g.src,b.test(k)&&(0>k.indexOf("enablejsapi")&&(g.src+=(~k.indexOf("?")?"&":"?")+"enablejsapi=1"),e.push(g));if(c=e.length)l.onYouTubeIframeAPIReady=function(){for(f=0;f<c;)t(new l.YT.Player(e[f++]),"onStateChange",a)},l.YT||w("https://www.youtube.com/iframe_api")})()}
;function la(){function a(){if(9>d++){var c=l.FB;if(c=c&&c.Event&&c.Event.subscribe)try{c("edge.create",function(){b("like")}),c("edge.remove",function(){b("unlike")}),c("message.send",function(){b("message")})}catch(f){}else setTimeout(a,5E3)}}function b(a){L(1,"Facebook",a,location.href)}var d=0;qa(a)}var Z;
function qa(a){if(!l.FB){var b=Z;if(!b){if(b=P.trackFacebook)if(b=""+b,9>b.length)for(var d=F(p("META")),c=d.length,f;c--;)if(f=d[c],"fb:app_id"==f.getAttribute("property")){b=f.getAttribute("content");break}Z=9>b.length?"":b}if(b=Z)d=n("SCRIPT"),d.async=1,d.id="facebook-jssdk",d.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId="+b+"&status=1&cookie=1",h.body.appendChild(d),setTimeout(a,3E3)}b||a()};function ma(){function a(a,c){function d(){b[c]||(b[c]=1,L(1,"LinkedIn",c,location.href),g&&u(g,"click",d))}var e=["cb_onsuccess",c,+new Date].join("_"),g;a.onsuccess=(a.onsuccess?a.onsuccess+",":"")+e;a.setAttribute("data-onsuccess",e);l[e]=d;setTimeout(function(){(g=a.previousSibling)&&"IN-widget"===g.className&&t(g,"click",d)},1E3)}var b={};(function(){for(var b=p("SCRIPT"),c=b.length,f=0,e,g;f<c;)e=b[f++],g=(e.getAttribute("type")||"").toLowerCase(),g.indexOf("in/")||a(e,g.substr(3).split("+")[0])})()}
;function na(){function a(){9>c++&&(l.twttr&&l.twttr.ready?l.twttr.ready(function(a){var c=P.trackTwitter,e,A,q;c=G(c)?c:b;fa(c,function(b){a.events.bind(b,function(a){e=a.type;f[e]||(f[e]=1,A=(q=d[e])&&a.data&&a.data[q]||location.href,L(1,"Twitter",e,A))})})}):setTimeout(a,5E3))}var b=["tweet","retweet","like","follow"],d={follow:"screen_name",retweet:"source_tweet_id",like:"tweet_id",tweet:"url"},c=0,f={};a()};function oa(){var a={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1"};(function(){function b(b,c){t(b,"load",function(){L(1,c,"pageview",location.href)});b.src=a[c]}function d(a){a(function(a){a&&"unknown"!==a.status&&!f++&&L(1,"Facebook",
"pageview",location.href)})}function c(){var a=l.FB&&l.FB.getLoginStatus;a?(d(a),t(l,"message",function(b){try{"facebook.com"===b.origin.substr(-12)&&b.data&&~b.data.indexOf("xd_action=proxy_ready")&&d(a)}catch(r){}})):--e&&setTimeout(c,2E3)}var f=0,e=5,g;for(g in a){var k=new Image(1,1);b(k,g)}qa(c)})()};
})();
