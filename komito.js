/* @license http://www.apache.org/licenses/LICENSE-2.0 */
(function(){
var k=document,n=window,ba=navigator,p=(k.charset||k.characterSet||"utf-8").toLowerCase();function q(a){return a?k.createElement(a):null}function r(a){return k&&k.getElementsByTagName(a)}function v(a,d,b){a.attachEvent?a.attachEvent("on"+d,b):a.addEventListener(d,b,!1)}function w(a,d,b){a.attachEvent?a.detachEvent("on"+d,b):a.removeEventListener(d,b,!1)}function x(a){a=a||n.event;return a.target||a.srcElement}
function y(a,d){var b=q("SCRIPT"),c=!1,e;b.src=a;b.onload=b.onreadystatechange=function(){e=b.readyState||"complete";c||"loaded"!==e&&"complete"!==e||(c=!0,b.onload=b.onreadystatechange=null,b&&b.parentNode&&b.parentNode.removeChild(b),d&&d())};z.parentNode.appendChild(b)}var z,A=r("SCRIPT");z=A&&A[A.length-1];function ca(){function a(b,c,e,f){c=c.replace(/^\/+/,"/");c+=(~c.indexOf("?")?"&":"?")+"nocache="+ +new da;B++;var g=n.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");g.onreadystatechange=function(){4===g.readyState&&(B--,e(g))};g.open(b,c,!0);g.send(d(g,b,f));return g}function d(b,c,e){for(var f in C)b.setRequestHeader(f,C[f]);b.setRequestHeader("X-Requested-With","XMLHttpRequest");e&&"object"==typeof e?(b.setRequestHeader("Content-Type","application/json; charset="+p),e=
D(e)):"POST"==c&&b.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset="+p);return e}this.a=function(b,c){a("HEAD",b,c)};B=B||0}var B,C={};var ea=Array.prototype.slice;function E(a,d){var b;b|=0;a=F(a);var c=a.length,e=a.indexOf,f=e?e.call(a,d,b):-1;if(!e)for(;b<c&&!~f;b++)f=a[b]===d?b:f;return f}function G(a){var d=Array.isArray;return d?d(a):"[object Array]"===Object.prototype.toString.call(a)}function H(a,d){a=F(a);var b=a.length,c=0,e=0,f=a.filter,g=f?f.call(a,d,void 0):[];if(!f)for(;c<b;)f=a[c++],d.call(void 0,f,c,a)&&(g[e++]=f);return g}
function fa(a,d){a=F(a);var b=a.length,c=0,e=a.forEach;if(e)e.call(a,d,void 0);else for(;c<b;)d.call(void 0,a[c],c++,a)}function F(a){return G(a)?a:ea.call(a)};var da=Date;var D=n.JSON?JSON.stringify:function(a){var d=typeof a,b=[],c;if("object"!==d||null===a)a="string"===d?'"'+a+'"':""+a;else{var e=G(a);for(c in a){var f=a[c];d=typeof f;"string"===d?f='"'+f+'"':"object"===d&&null!==f&&(f=D(f));b.push((e?"":'"'+c+'":')+f)}a=(e?"[":"{")+b+(e?"]":"}")}return a};var I={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,trackOrientation:1,trackAdblock:0,trackErrorPages:0,sendHeartbeat:0,nonInteraction:"form print scroll video orientation adblock heartbeat".split(" "),debugMode:/[?&]debug=1/.test(location.search)},J=/\.([0-9a-z]+)(?:[\?#]|$)/i,K=n.GoogleAnalyticsObject||"ga";
function L(a){var d=F(arguments);d[0]=d[0]?"social":"event";ha(d);var b=n.TagLoader||n.AppMeasurement;var c=n.s;var e=[],f=1;if(b&&c&&c instanceof b){for(;f<d.length;f++)b="prop"+f,e.push(b),c[b]=d[f];c.linkTrackEvents="None";c.linkTrackVars=e.join(",");M([c],"tl",[c,"download"===d[1]?"d":"o",d[0]])}c=[].concat(d);"social"===c[0]&&(c[1]="social:"+c.splice(2,1,c[1])[0]);c=c.slice(1);M([n],"ClickTaleEvent",[c.join(":")]);M([n],"__utmTrackEvent",c);n._hmt&&M([n._hmt],"push",[["_trackEvent"].concat(c)]);
if(n._gat||n._gaq)c=n._gat&&n._gat._getTrackers&&n._gat._getTrackers(),e=N(d)?d.concat([1]):d,e[0]={social:"_trackSocial",event:"_trackEvent"}[e[0]],c?M(c,e[0],e.slice(1)):n._gaq&&M([n._gaq],"push",[e]);c=[];e="params";for(var g in n)0==g.indexOf("yaCounter")&&c.push(n[g]);g=d[1];"outbound"===g?(e="extLink",d=[d.pop()]):"download"===g&&(e="file",d=[d.pop()]);M(c,e,d)}
function ia(){if(!O){var a=function(){P=n._komito||{};for(d in I)d in P||(P[d]=I[d]);Q&&new Q;R&&new R;S&&new S;T&&new T;U&&new U;V&&new V;ja();ka();var b=P.trackMedia,c=["html5","vimeo","youtube"],e;if(b)for(G(b)&&(c=b),e=c.length;e--;)b=c[e].toLowerCase(),"html5"==b?W&&new W:"vimeo"==b?X&&new X:"youtube"==b&&Y&&new Y;c={trackFacebook:la,trackLinkedIn:ma,trackTwitter:na,trackUsers:oa};for(var f in c)P[f]&&new c[f]};O=1;var d=k.readyState;"interactive"===d||"complete"===d?setTimeout(a,1E3):v(n,"DOMContentLoaded",
a)}}function ha(a){if("function"===typeof n[K]){var d=n[K].getAll&&n[K].getAll(),b=P.trackingIds,c={};d&&b&&(G(b)||(b=[""+b]),d=H(d,function(e){e=e.get("trackingId");return 0<=E(b,e)}));d=H(d,function(e){e=e.get("trackingId");var f=!c[e];c[e]=!0;return f});a=N(a)?a.concat([{nonInteraction:1}]):a;d&&M(d,"send",a)}}function M(a,d,b){var c=a.length;for(pa(d,b);c;){var e=a[--c];"function"===typeof e[d]&&e[d].apply(e,b)}}function pa(a){var d=n.console;P.debugMode&&d&&d.log.apply(d,arguments)}
function N(a){return 0<=E(P.nonInteraction,a[1].split(/\W/)[0])}var P={},O;"web.archive.org"!==location.hostname&&ia();function ja(){var a=+P.sendHeartbeat;if(a){var d;a=Math.max(a,30);v(k,"visibilitychange",function(){"visible"===k.visibilityState?d=setInterval(function(){L(0,"heartbeat",a+"s")},1E3*a):d&&clearInterval(d)})}}function ka(){var a=P.trackErrorPages&&location.href;a&&(new ca).a(a,function(d){399<d.status&&L(0,"errors",d.status,a)})};function V(){(function(){if(P.trackAdblock){var a=k.body.appendChild(q("DIV"));a.id="ad-container";a.style.position="absolute";a.innerHTML='<img src="data:image/svg+xml,%3Csvg/%3E" id="ad" class="banner" height="5" width="5">';setTimeout(function(){5>a.offsetHeight&&L(0,"adblock","pageview",location.href);a&&a.parentNode&&a.parentNode.removeChild(a)},1E3)}})()};function Q(){function a(b){b=x(b);var c=b.elements,e=c.length,f=0,g=b.getAttribute("action"),h;if(!(h=b.getAttribute("name")||b.getAttribute("id")||b.className.replace(/\W+/g,"-"))&&(h=g)){h=0;for(var l=g.length,m=0,t=0;t<l;)h^=g.charCodeAt(t++)<<m,m+=8,m%=24;h=h.toString(36).toUpperCase()}for(g=h||"form-"+ ++d;f<e;)h=c[f++],h.name&&L(0,"form",g,h.name+":"+(h.type||h.tagName));w(b,"submit",a)}var d=0;(function(){if(P.trackForms)for(var b=k.forms,c=b.length;c;)v(b[--c],"submit",a)})()};function R(){function a(h){h=c(h);var l="outbound",m=h.hostname,t=h.pathname.split("/"),u=e(h),aa=f[m.replace(/^www\./,"")];L(0,l,m,u);aa&&("twitter.com"===m.substr(-11)&&"intent"===t[t.length-2]&&(l="intent-"+t.pop()),L(1,aa,l,u));w(h,"mousedown",a)}function d(h){h=c(h);var l=e(h),m=(l.match(J)||[""]).pop().toLowerCase();L(0,"download",m,l);w(h,"mousedown",d)}function b(h){h=c(h);var l=h.protocol.slice(0,-1),m=e(h);g.test(m)||(L(0,"cta:"+l,m.slice(l.length+1).split("?")[0],m),w(h,"mousedown",b))}
function c(h){for(h=x(h);h&&"A"!==h.tagName;)h=h.parentNode;return h}function e(h){return h.href||h.getAttribute("href")||""}var f={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube",
"twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},g=/^(https?:)?\/\//;(function(){for(var h=r("A"),l=h.length;l;){var m=h[--l],t=e(m),u=g.test(t);t=(t.match(J)||[""]).pop().toLowerCase();P.trackOutbound&&u&&!~m.hostname.indexOf(location.hostname)&&v(m,"mousedown",a);P.trackDownloads&&t&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,".indexOf(","+
t+",")&&v(m,"mousedown",d);P.trackActions&&!u&&v(m,"mousedown",b)}})()};function U(){function a(c){L(0,"orientation","change",d(c))}function d(c){var e=screen.orientation||screen.mozOrientation||screen.msOrientation;return(e?e.type:c.matches?"portrait":"landscape").split("-")[0]}var b;(function(){if((ba.maxTouchPoints||"ontouchstart"in k)&&P.trackOrientation){var c=n.matchMedia;b=c&&c("(orientation: portrait)");L(0,"orientation","initial",d(b));b?b.addListener(a):v(n,"orientationchange",a)}})()};function S(){function a(){L(0,"print",k.title,location.href);d?d.removeListener(a):w(n,"afterprint",a);d=a=null}var d;(function(){if(P.trackPrint){var b=n.matchMedia;(d=b&&b("print"))?d.addListener(a):v(n,"afterprint",a)}})()};function T(){(function(){var a=P.trackScroll;if(a){var d=[25,50,75,100];G(a)&&(d=a);for(var b=k.documentElement,c=k.body,e={},f=d.length;f--;)e[d[f]]=0;v(n,"scroll",function(){(f=25*~~((b.scrollTop||c.scrollTop)/((b.scrollHeight||c.offsetHeight)-(b.clientHeight||n.innerHeight))*100/25))&&f in e&&!e[f]&&(e[f]=1,L(0,"scroll","depth",f+"%"))})}})()};function W(){function a(d){for(var b=[],c=arguments.length,e,f;c;)for(e=r(arguments[--c]),f=0;f<e.length;)b.push(e[f++]);return b}(function(){function d(l){f=x(l);g=l.type;~g.indexOf("fullscreen")&&(g=k.fullScreen||k.mozFullScreen||k.webkitIsFullScreen?"fullscreen":"");g&&L(0,f.tagName.toLowerCase()+":html5",g,f.currentSrc||f.src)}for(var b="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),c=a("AUDIO","VIDEO"),e=c.length,f,g,h;e--;)for(f=c[e],h=0;6>h;)v(f,b[h++],
d)})()};function X(){function a(c){var e=n.Vimeo&&n.Vimeo.Player;if(e)for(var f=c.length,g;f;)g=c[--f],d(new e(g),g.src.split("?")[0])}function d(c,e){c.on("ended",function(){L(0,"video:vimeo","ended",e)});c.on("play",function(){L(0,"video:vimeo","play",e)});c.on("pause",function(){L(0,"video:vimeo","pause",e)})}var b=/^(https?:)?\/\/player\.vimeo\.com\/video\/\d+/;(function(){for(var c=r("IFRAME"),e=c.length,f=[],g;e;)g=c[--e],b.test(g.src)&&f.push(g);f.length&&(n.Vimeo&&n.Vimeo.Player?a(f):y("https://player.vimeo.com/api/player.js",
function(){a(f)}))})()};function Y(){function a(b){var c=["ended","play","pause"][b.data];c&&(b=b.target,b=b.getVideoUrl?b.getVideoUrl():b.getIframe().src.split("?")[0],L(0,"video:youtube",c,b))}var d=/^(https?:)?\/\/(www\.)?youtube(\-nocookie)?\.com\/(embed|watch|v)/;(function(){for(var b=r("IFRAME"),c=b.length,e=[],f,g,h,l;c--;)f=b[c],g=f.src,d.test(g)&&(0>g.indexOf("enablejsapi")&&(f.src+=(~g.indexOf("?")?"&":"?")+"enablejsapi=1"),e.push(f));if(c=e.length)l=n.onYouTubeIframeAPIReady,n.onYouTubeIframeAPIReady=function(){for(l&&
l();c--;)f=e[c],h=n.YT.get(f.id)||new n.YT.Player(f),v(h,"onStateChange",a)},n.YT||y("https://www.youtube.com/iframe_api")})()};function la(){qa(function(){v(n,"blur",function(){var a=k.activeElement;a&&"IFRAME"==a.tagName&&0==a.src.indexOf("https://www.facebook.com/")&&(a=a.title.split(" ")[0],0==a.indexOf("fb:")&&(a=a.slice(3).split("_")[0],L(1,"Facebook",a,location.href)))})})}var Z,ra;
function qa(a){if(!ra&&(ra=1,!n.FB)){var d=Z;if(!d){if(d=P.trackFacebook)if(d=""+d,9>d.length)for(var b=F(r("META")),c=b.length,e;c--;)if(e=b[c],"fb:app_id"==e.getAttribute("property")){d=e.getAttribute("content");break}Z=9>d.length?"":d}if(d=Z)b=q("SCRIPT"),b.async=1,b.id="facebook-jssdk",b.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&status=1&cookie=1&appId="+d,k.body.appendChild(b),setTimeout(a,3E3)}d||a()};function ma(){function a(b,c){function e(){d[c]||(d[c]=1,L(1,"LinkedIn",c,location.href),g&&w(g,"click",e))}var f=["cb_onsuccess",c,+new Date].join("_"),g;b.onsuccess=(b.onsuccess?b.onsuccess+",":"")+f;b.setAttribute("data-onsuccess",f);n[f]=e;setTimeout(function(){(g=b.previousSibling)&&"IN-widget"===g.className&&v(g,"click",e)},1E3)}var d={};(function(){for(var b=r("SCRIPT"),c=b.length,e=0,f,g;e<c;)f=b[e++],g=(f.getAttribute("type")||"").toLowerCase(),g.indexOf("in/")||a(f,g.substr(3).split("+")[0])})()}
;function na(){function a(){9>c++&&(n.twttr&&n.twttr.ready?n.twttr.ready(function(f){var g=P.trackTwitter,h,l,m;g=G(g)?g:d;fa(g,function(t){f.events.bind(t,function(u){h=u.type;e[h]||(e[h]=1,l=(m=b[h])&&u.data&&u.data[m]||location.href,L(1,"Twitter",h,l))})})}):setTimeout(a,5E3))}var d=["tweet","retweet","like","follow"],b={follow:"screen_name",retweet:"source_tweet_id",like:"tweet_id",tweet:"url"},c=0,e={};a()};function oa(){var a={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1"};(function(){function d(l,m){v(l,"load",function(){L(1,m,"pageview",location.href)});l.src=a[m]}function b(l){l(function(m){m&&"unknown"!==m.status&&!e++&&L(1,"Facebook",
"pageview",location.href)},!0)}function c(){var l=n.FB&&n.FB.getLoginStatus;l?(b(l),v(n,"message",function(m){try{"facebook.com"===m.origin.substr(-12)&&m.data&&~m.data.indexOf("xd_action=proxy_ready")&&b(l)}catch(t){}})):--f&&setTimeout(c,2E3)}var e=0,f=5,g;for(g in a){var h=new Image(1,1);d(h,g)}qa(c)})()};
})();
