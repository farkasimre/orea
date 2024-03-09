/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
!function(e,t,i,s){i.swipebox=function(o,n){var a,r,l={useCSS:!0,useSVG:!0,initialIndexOnArray:0,removeBarsOnMobile:!0,hideCloseButtonOnMobile:!1,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"cccccc",beforeOpen:null,afterOpen:null,afterClose:null,afterMedia:null,nextSlide:null,prevSlide:null,loopAtEnd:!1,autoplayVideos:!1,queryStringData:{},toggleClassOnLoad:"",selector:null},d=this,p=[],c=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),b=null!==c||t.createTouch!==s||"ontouchstart"in e||"onmsgesturechange"in e||navigator.msMaxTouchPoints,u=!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,h=e.innerWidth?e.innerWidth:i(e).width(),g=e.innerHeight?e.innerHeight:i(e).height(),f=0;d.settings={},i.swipebox.close=function(){a.closeSlide()},i.swipebox.extend=function(){return a},d.init=function(){d.settings=i.extend({},l,n),i.isArray(o)?(p=o,a.target=i(e),a.init(d.settings.initialIndexOnArray)):i(o).on("click",d.settings.selector,function(e){if("slide current"===e.target.parentNode.className)return!1;var t,s,n;a.destroy(),r=null===d.settings.selector?i(o):i(o).find(d.settings.selector),p=[],n||(s="data-rel",n=i(this).attr(s)),n||(s="rel",n=i(this).attr(s)),n&&""!==n&&"nofollow"!==n&&(r=r.filter("["+s+'="'+n+'"]')),r.each(function(){var e=null,t=null;i(this).attr("title")&&(e=i(this).attr("title")),i(this).attr("href")&&(t=i(this).attr("href")),p.push({href:t,title:e})}),t=r.index(i(this)),e.preventDefault(),e.stopPropagation(),a.target=i(e.target),a.init(t)})},a={init:function(e){d.settings.beforeOpen&&d.settings.beforeOpen(),this.target.trigger("swipebox-start"),i.swipebox.isOpen=!0,this.build(),this.openSlide(e),this.openMedia(e),this.preloadMedia(e+1),this.preloadMedia(e-1),d.settings.afterOpen&&d.settings.afterOpen(e)},build:function(){var e,t=this;i("body").append('<div id="swipebox-overlay">\t\t\t\t\t<div id="swipebox-container">\t\t\t\t\t\t<div id="swipebox-slider"></div>\t\t\t\t\t\t<div id="swipebox-top-bar">\t\t\t\t\t\t\t<div id="swipebox-title"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div id="swipebox-bottom-bar">\t\t\t\t\t\t\t<div id="swipebox-arrows">\t\t\t\t\t\t\t\t<a id="swipebox-prev"></a>\t\t\t\t\t\t\t\t<a id="swipebox-next"></a>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a id="swipebox-close"></a>\t\t\t\t\t</div>\t\t\t</div>'),u&&!0===d.settings.useSVG&&(e=(e=i("#swipebox-close").css("background-image")).replace("png","svg"),i("#swipebox-prev, #swipebox-next, #swipebox-close").css({"background-image":e})),c&&d.settings.removeBarsOnMobile&&i("#swipebox-bottom-bar, #swipebox-top-bar").remove(),i.each(p,function(){i("#swipebox-slider").append('<div class="slide"></div>')}),t.setDim(),t.actions(),b&&t.gesture(),t.keyboard(),t.animBars(),t.resize()},setDim:function(){var t,s,o;"onorientationchange"in e?e.addEventListener("orientationchange",function(){0===e.orientation?(t=h,s=g):90!==e.orientation&&-90!==e.orientation||(t=g,s=h)},!1):(t=e.innerWidth?e.innerWidth:i(e).width(),s=e.innerHeight?e.innerHeight:i(e).height()),o={width:t,height:s},i("#swipebox-overlay").css(o)},resize:function(){var t=this;i(e).resize(function(){t.setDim()}).resize()},supportTransition:function(){var e,i="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(e=0;e<i.length;e++)if(t.createElement("div").style[i[e]]!==s)return i[e];return!1},doCssTrans:function(){if(d.settings.useCSS&&this.supportTransition())return!0},gesture:function(){var e,t,s,o,n,a,r=this,l=!1,d=!1,c={},b={},u=i("#swipebox-top-bar, #swipebox-bottom-bar"),g=i("#swipebox-slider");u.addClass("visible-bars"),r.setTimeout(),i("body").bind("touchstart",function(r){return i(this).addClass("touching"),e=i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current")),b=r.originalEvent.targetTouches[0],c.pageX=r.originalEvent.targetTouches[0].pageX,c.pageY=r.originalEvent.targetTouches[0].pageY,i("#swipebox-slider").css({"-webkit-transform":"translate3d("+f+"%, 0, 0)",transform:"translate3d("+f+"%, 0, 0)"}),i(".touching").bind("touchmove",function(r){if(r.preventDefault(),r.stopPropagation(),b=r.originalEvent.targetTouches[0],!d&&(n=s,s=b.pageY-c.pageY,Math.abs(s)>=50||l)){var u=.75-Math.abs(s)/g.height();g.css({top:s+"px"}),g.css({opacity:u}),l=!0}o=t,t=b.pageX-c.pageX,a=100*t/h,!d&&!l&&Math.abs(t)>=10&&(i("#swipebox-slider").css({"-webkit-transition":"",transition:""}),d=!0),d&&(0<t?0===e?i("#swipebox-overlay").addClass("leftSpringTouch"):(i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),i("#swipebox-slider").css({"-webkit-transform":"translate3d("+(f+a)+"%, 0, 0)",transform:"translate3d("+(f+a)+"%, 0, 0)"})):0>t&&(p.length===e+1?i("#swipebox-overlay").addClass("rightSpringTouch"):(i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),i("#swipebox-slider").css({"-webkit-transform":"translate3d("+(f+a)+"%, 0, 0)",transform:"translate3d("+(f+a)+"%, 0, 0)"}))))}),!1}).bind("touchend",function(e){if(e.preventDefault(),e.stopPropagation(),i("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease",transition:"transform 0.4s ease"}),s=b.pageY-c.pageY,t=b.pageX-c.pageX,a=100*t/h,l)if(l=!1,Math.abs(s)>=100&&Math.abs(s)>Math.abs(n)){var p=s>0?g.height():-g.height();g.animate({top:p+"px",opacity:0},300,function(){r.closeSlide()})}else g.animate({top:0,opacity:1},300);else d?(d=!1,t>=10&&t>=o?r.getPrev():t<=-10&&t<=o&&r.getNext()):u.hasClass("visible-bars")?(r.clearTimeout(),r.hideBars()):(r.showBars(),r.setTimeout());i("#swipebox-slider").css({"-webkit-transform":"translate3d("+f+"%, 0, 0)",transform:"translate3d("+f+"%, 0, 0)"}),i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),i(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(d.settings.hideBarsDelay>0){var t=this;t.clearTimeout(),t.timeout=e.setTimeout(function(){t.hideBars()},d.settings.hideBarsDelay)}},clearTimeout:function(){e.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var e=i("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.addClass("visible-bars"):(i("#swipebox-top-bar").animate({top:0},500),i("#swipebox-bottom-bar").animate({bottom:0},500),setTimeout(function(){e.addClass("visible-bars")},1e3))},hideBars:function(){var e=i("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.removeClass("visible-bars"):(i("#swipebox-top-bar").animate({top:"-50px"},500),i("#swipebox-bottom-bar").animate({bottom:"-50px"},500),setTimeout(function(){e.removeClass("visible-bars")},1e3))},animBars:function(){var e=this,t=i("#swipebox-top-bar, #swipebox-bottom-bar");t.addClass("visible-bars"),e.setTimeout(),i("#swipebox-slider").click(function(){t.hasClass("visible-bars")||(e.showBars(),e.setTimeout())}),i("#swipebox-bottom-bar").hover(function(){e.showBars(),t.addClass("visible-bars"),e.clearTimeout()},function(){d.settings.hideBarsDelay>0&&(t.removeClass("visible-bars"),e.setTimeout())})},keyboard:function(){var t=this;i(e).bind("keyup",function(e){e.preventDefault(),e.stopPropagation(),37===e.keyCode?t.getPrev():39===e.keyCode?t.getNext():27===e.keyCode&&t.closeSlide()})},actions:function(){var e=this,t="touchend click";p.length<2?(i("#swipebox-bottom-bar").hide(),s===p[1]&&i("#swipebox-top-bar").hide()):(i("#swipebox-prev").bind(t,function(t){t.preventDefault(),t.stopPropagation(),e.getPrev(),e.setTimeout()}),i("#swipebox-next").bind(t,function(t){t.preventDefault(),t.stopPropagation(),e.getNext(),e.setTimeout()})),i("#swipebox-close").bind(t,function(){e.closeSlide()})},setSlide:function(e,t){t=t||!1;var s=i("#swipebox-slider");f=100*-e,this.doCssTrans()?s.css({"-webkit-transform":"translate3d("+100*-e+"%, 0, 0)",transform:"translate3d("+100*-e+"%, 0, 0)"}):s.animate({left:100*-e+"%"}),i("#swipebox-slider .slide").removeClass("current"),i("#swipebox-slider .slide").eq(e).addClass("current"),this.setTitle(e),t&&s.fadeIn(),i("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===e?i("#swipebox-prev").addClass("disabled"):e===p.length-1&&!0!==d.settings.loopAtEnd&&i("#swipebox-next").addClass("disabled")},openSlide:function(t){i("html").addClass("swipebox-html"),b?(i("html").addClass("swipebox-touch"),d.settings.hideCloseButtonOnMobile&&i("html").addClass("swipebox-no-close-button")):i("html").addClass("swipebox-no-touch"),i(e).trigger("resize"),this.setSlide(t,!0)},preloadMedia:function(e){var t=this,i=null;p[e]!==s&&(i=p[e].href),t.isVideo(i)?t.openMedia(e):setTimeout(function(){t.openMedia(e)},1e3)},openMedia:function(e){var t,o;if(p[e]!==s&&(t=p[e].href),e<0||e>=p.length)return!1;o=i("#swipebox-slider .slide").eq(e),this.isVideo(t)?(o.html(this.getVideo(t)),d.settings.afterMedia&&d.settings.afterMedia(e)):(o.addClass("slide-loading"),this.loadMedia(t,function(){o.removeClass("slide-loading"),o.html(this),d.settings.afterMedia&&d.settings.afterMedia(e)}))},setTitle:function(e){var t=null;i("#swipebox-title").empty(),p[e]!==s&&(t=p[e].title),t?(i("#swipebox-top-bar").show(),i("#swipebox-title").append(t)):i("#swipebox-top-bar").hide()},isVideo:function(e){if(e){if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/vimeo\.com\/([0-9]*)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(e.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},parseUri:function(e,s){var o=t.createElement("a"),n={};return o.href=decodeURIComponent(e),o.search&&(n=JSON.parse('{"'+o.search.toLowerCase().replace("?","").replace(/&/g,'","').replace(/=/g,'":"')+'"}')),i.isPlainObject(s)&&(n=i.extend(n,s,d.settings.queryStringData)),i.map(n,function(e,t){if(e&&e>"")return encodeURIComponent(t)+"="+encodeURIComponent(e)}).join("&")},getVideo:function(e){var t="",i=e.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),s=e.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),o=e.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),n="";return i||s?(s&&(i=s),n=a.parseUri(e,{autoplay:d.settings.autoplayVideos?"1":"0",v:""}),t='<iframe width="560" height="315" src="//'+i[1]+"/embed/"+i[2]+"?"+n+'" frameborder="0" allowfullscreen></iframe>'):o?(n=a.parseUri(e,{autoplay:d.settings.autoplayVideos?"1":"0",byline:"0",portrait:"0",color:d.settings.vimeoColor}),t='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+o[1]+"?"+n+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'):t='<iframe width="560" height="315" src="'+e+'" frameborder="0" allowfullscreen></iframe>','<div class="swipebox-video-container" style="max-width:'+d.settings.videoMaxWidth+'px"><div class="swipebox-video">'+t+"</div></div>"},loadMedia:function(e,t){if(0===e.trim().indexOf("#"))t.call(i("<div>",{class:"swipebox-inline-container"}).append(i(e).clone().toggleClass(d.settings.toggleClassOnLoad)));else if(!this.isVideo(e)){var s=i("<img>").on("load",function(){t.call(s)});s.attr("src",e)}},getNext:function(){var e,t=this,s=i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current"));s+1<p.length?(e=i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"),i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src",e),s++,t.setSlide(s),t.preloadMedia(s+1),d.settings.nextSlide&&d.settings.nextSlide(s)):!0===d.settings.loopAtEnd?(e=i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"),i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src",e),s=0,t.preloadMedia(s),t.setSlide(s),t.preloadMedia(s+1),d.settings.nextSlide&&d.settings.nextSlide(s)):(i("#swipebox-overlay").addClass("rightSpring"),setTimeout(function(){i("#swipebox-overlay").removeClass("rightSpring")},500))},getPrev:function(){var e,t=i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current"));t>0?(e=i("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src"),i("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src",e),t--,this.setSlide(t),this.preloadMedia(t-1),d.settings.prevSlide&&d.settings.prevSlide(t)):(i("#swipebox-overlay").addClass("leftSpring"),setTimeout(function(){i("#swipebox-overlay").removeClass("leftSpring")},500))},nextSlide:function(e){},prevSlide:function(e){},closeSlide:function(){i("html").removeClass("swipebox-html"),i("html").removeClass("swipebox-touch"),i(e).trigger("resize"),this.destroy()},destroy:function(){i(e).unbind("keyup"),i("body").unbind("touchstart"),i("body").unbind("touchmove"),i("body").unbind("touchend"),i("#swipebox-slider").unbind(),i("#swipebox-overlay").remove(),i.isArray(o)||o.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),i.swipebox.isOpen=!1,d.settings.afterClose&&d.settings.afterClose()}},d.init()},i.fn.swipebox=function(e){if(!i.data(this,"_swipebox")){var t=new i.swipebox(this,e);this.data("_swipebox",t)}return this.data("_swipebox")}}(window,document,jQuery);


/*! lightslider - v1.1.6 - 2016-10-25
* https://github.com/sachinchoolur/lightslider
* Copyright (c) 2016 Sachin N; Licensed MIT */
!function(a,b){"use strict";var c={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(a){},onSliderLoad:function(a){},onBeforeSlide:function(a,b){},onAfterSlide:function(a,b){},onBeforeNextSlide:function(a,b){},onBeforePrevSlide:function(a,b){}};a.fn.lightSlider=function(b){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).lightSlider(b)}),this;var d={},e=a.extend(!0,{},c,b),f={},g=this;d.$el=this,"fade"===e.mode&&(e.vertical=!1);var h=g.children(),i=a(window).width(),j=null,k=null,l=0,m=0,n=!1,o=0,p="",q=0,r=e.vertical===!0?"height":"width",s=e.vertical===!0?"margin-bottom":"margin-right",t=0,u=0,v=0,w=0,x=null,y="ontouchstart"in document.documentElement,z={};return z.chbreakpoint=function(){if(i=a(window).width(),e.responsive.length){var b;if(e.autoWidth===!1&&(b=e.item),i<e.responsive[0].breakpoint)for(var c=0;c<e.responsive.length;c++)i<e.responsive[c].breakpoint&&(j=e.responsive[c].breakpoint,k=e.responsive[c]);if("undefined"!=typeof k&&null!==k)for(var d in k.settings)k.settings.hasOwnProperty(d)&&(("undefined"==typeof f[d]||null===f[d])&&(f[d]=e[d]),e[d]=k.settings[d]);if(!a.isEmptyObject(f)&&i>e.responsive[0].breakpoint)for(var g in f)f.hasOwnProperty(g)&&(e[g]=f[g]);e.autoWidth===!1&&t>0&&v>0&&b!==e.item&&(q=Math.round(t/((v+e.slideMargin)*e.slideMove)))}},z.calSW=function(){e.autoWidth===!1&&(v=(o-(e.item*e.slideMargin-e.slideMargin))/e.item)},z.calWidth=function(a){var b=a===!0?p.find(".lslide").length:h.length;if(e.autoWidth===!1)m=b*(v+e.slideMargin);else{m=0;for(var c=0;b>c;c++)m+=parseInt(h.eq(c).width())+e.slideMargin}return m},d={doCss:function(){var a=function(){for(var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;c<a.length;c++)if(a[c]in b.style)return!0};return e.useCSS&&a()?!0:!1},keyPress:function(){e.keyPress&&a(document).on("keyup.lightslider",function(b){a(":focus").is("input, textarea")||(b.preventDefault?b.preventDefault():b.returnValue=!1,37===b.keyCode?g.goToPrevSlide():39===b.keyCode&&g.goToNextSlide())})},controls:function(){e.controls&&(g.after('<div class="lSAction"><a class="lSPrev">'+e.prevHtml+'</a><a class="lSNext">'+e.nextHtml+"</a></div>"),e.autoWidth?z.calWidth(!1)<o&&p.find(".lSAction").hide():l<=e.item&&p.find(".lSAction").hide(),p.find(".lSAction a").on("click",function(b){return b.preventDefault?b.preventDefault():b.returnValue=!1,"lSPrev"===a(this).attr("class")?g.goToPrevSlide():g.goToNextSlide(),!1}))},initialStyle:function(){var a=this;"fade"===e.mode&&(e.autoWidth=!1,e.slideEndAnimation=!1),e.auto&&(e.slideEndAnimation=!1),e.autoWidth&&(e.slideMove=1,e.item=1),e.loop&&(e.slideMove=1,e.freeMove=!1),e.onBeforeStart.call(this,g),z.chbreakpoint(),g.addClass("lightSlider").wrap('<div class="lSSlideOuter '+e.addClass+'"><div class="lSSlideWrapper"></div></div>'),p=g.parent(".lSSlideWrapper"),e.rtl===!0&&p.parent().addClass("lSrtl"),e.vertical?(p.parent().addClass("vertical"),o=e.verticalHeight,p.css("height",o+"px")):o=g.outerWidth(),h.addClass("lslide"),e.loop===!0&&"slide"===e.mode&&(z.calSW(),z.clone=function(){if(z.calWidth(!0)>o){for(var b=0,c=0,d=0;d<h.length&&(b+=parseInt(g.find(".lslide").eq(d).width())+e.slideMargin,c++,!(b>=o+e.slideMargin));d++);var f=e.autoWidth===!0?c:e.item;if(f<g.find(".clone.left").length)for(var i=0;i<g.find(".clone.left").length-f;i++)h.eq(i).remove();if(f<g.find(".clone.right").length)for(var j=h.length-1;j>h.length-1-g.find(".clone.right").length;j--)q--,h.eq(j).remove();for(var k=g.find(".clone.right").length;f>k;k++)g.find(".lslide").eq(k).clone().removeClass("lslide").addClass("clone right").appendTo(g),q++;for(var l=g.find(".lslide").length-g.find(".clone.left").length;l>g.find(".lslide").length-f;l--)g.find(".lslide").eq(l-1).clone().removeClass("lslide").addClass("clone left").prependTo(g);h=g.children()}else h.hasClass("clone")&&(g.find(".clone").remove(),a.move(g,0))},z.clone()),z.sSW=function(){l=h.length,e.rtl===!0&&e.vertical===!1&&(s="margin-left"),e.autoWidth===!1&&h.css(r,v+"px"),h.css(s,e.slideMargin+"px"),m=z.calWidth(!1),g.css(r,m+"px"),e.loop===!0&&"slide"===e.mode&&n===!1&&(q=g.find(".clone.left").length)},z.calL=function(){h=g.children(),l=h.length},this.doCss()&&p.addClass("usingCss"),z.calL(),"slide"===e.mode?(z.calSW(),z.sSW(),e.loop===!0&&(t=a.slideValue(),this.move(g,t)),e.vertical===!1&&this.setHeight(g,!1)):(this.setHeight(g,!0),g.addClass("lSFade"),this.doCss()||(h.fadeOut(0),h.eq(q).fadeIn(0))),e.loop===!0&&"slide"===e.mode?h.eq(q).addClass("active"):h.first().addClass("active")},pager:function(){var a=this;if(z.createPager=function(){w=(o-(e.thumbItem*e.thumbMargin-e.thumbMargin))/e.thumbItem;var b=p.find(".lslide"),c=p.find(".lslide").length,d=0,f="",h=0;for(d=0;c>d;d++){"slide"===e.mode&&(e.autoWidth?h+=(parseInt(b.eq(d).width())+e.slideMargin)*e.slideMove:h=d*(v+e.slideMargin)*e.slideMove);var i=b.eq(d*e.slideMove).attr("data-thumb");if(f+=e.gallery===!0?'<li style="width:100%;'+r+":"+w+"px;"+s+":"+e.thumbMargin+'px"><a href="#"><img src="'+i+'" /></a></li>':'<li><a href="#">'+(d+1)+"</a></li>","slide"===e.mode&&h>=m-o-e.slideMargin){d+=1;var j=2;e.autoWidth&&(f+='<li><a href="#">'+(d+1)+"</a></li>",j=1),j>d?(f=null,p.parent().addClass("noPager")):p.parent().removeClass("noPager");break}}var k=p.parent();k.find(".lSPager").html(f),e.gallery===!0&&(e.vertical===!0&&k.find(".lSPager").css("width",e.vThumbWidth+"px"),u=d*(e.thumbMargin+w)+.5,k.find(".lSPager").css({property:u+"px","transition-duration":e.speed+"ms"}),e.vertical===!0&&p.parent().css("padding-right",e.vThumbWidth+e.galleryMargin+"px"),k.find(".lSPager").css(r,u+"px"));var l=k.find(".lSPager").find("li");l.first().addClass("active"),l.on("click",function(){return e.loop===!0&&"slide"===e.mode?q+=l.index(this)-k.find(".lSPager").find("li.active").index():q=l.index(this),g.mode(!1),e.gallery===!0&&a.slideThumb(),!1})},e.pager){var b="lSpg";e.gallery&&(b="lSGallery"),p.after('<ul class="lSPager '+b+'"></ul>');var c=e.vertical?"margin-left":"margin-top";p.parent().find(".lSPager").css(c,e.galleryMargin+"px"),z.createPager()}setTimeout(function(){z.init()},0)},setHeight:function(a,b){var c=null,d=this;c=e.loop?a.children(".lslide ").first():a.children().first();var f=function(){var d=c.outerHeight(),e=0,f=d;b&&(d=0,e=100*f/o),a.css({height:d+"px","padding-bottom":e+"%"})};f(),c.find("img").length?c.find("img")[0].complete?(f(),x||d.auto()):c.find("img").on("load",function(){setTimeout(function(){f(),x||d.auto()},100)}):x||d.auto()},active:function(a,b){this.doCss()&&"fade"===e.mode&&p.addClass("on");var c=0;if(q*e.slideMove<l){a.removeClass("active"),this.doCss()||"fade"!==e.mode||b!==!1||a.fadeOut(e.speed),c=b===!0?q:q*e.slideMove;var d,f;b===!0&&(d=a.length,f=d-1,c+1>=d&&(c=f)),e.loop===!0&&"slide"===e.mode&&(c=b===!0?q-g.find(".clone.left").length:q*e.slideMove,b===!0&&(d=a.length,f=d-1,c+1===d?c=f:c+1>d&&(c=0))),this.doCss()||"fade"!==e.mode||b!==!1||a.eq(c).fadeIn(e.speed),a.eq(c).addClass("active")}else a.removeClass("active"),a.eq(a.length-1).addClass("active"),this.doCss()||"fade"!==e.mode||b!==!1||(a.fadeOut(e.speed),a.eq(c).fadeIn(e.speed))},move:function(a,b){e.rtl===!0&&(b=-b),this.doCss()?a.css(e.vertical===!0?{transform:"translate3d(0px, "+-b+"px, 0px)","-webkit-transform":"translate3d(0px, "+-b+"px, 0px)"}:{transform:"translate3d("+-b+"px, 0px, 0px)","-webkit-transform":"translate3d("+-b+"px, 0px, 0px)"}):e.vertical===!0?a.css("position","relative").animate({top:-b+"px"},e.speed,e.easing):a.css("position","relative").animate({left:-b+"px"},e.speed,e.easing);var c=p.parent().find(".lSPager").find("li");this.active(c,!0)},fade:function(){this.active(h,!1);var a=p.parent().find(".lSPager").find("li");this.active(a,!0)},slide:function(){var a=this;z.calSlide=function(){m>o&&(t=a.slideValue(),a.active(h,!1),t>m-o-e.slideMargin?t=m-o-e.slideMargin:0>t&&(t=0),a.move(g,t),e.loop===!0&&"slide"===e.mode&&(q>=l-g.find(".clone.left").length/e.slideMove&&a.resetSlide(g.find(".clone.left").length),0===q&&a.resetSlide(p.find(".lslide").length)))},z.calSlide()},resetSlide:function(a){var b=this;p.find(".lSAction a").addClass("disabled"),setTimeout(function(){q=a,p.css("transition-duration","0ms"),t=b.slideValue(),b.active(h,!1),d.move(g,t),setTimeout(function(){p.css("transition-duration",e.speed+"ms"),p.find(".lSAction a").removeClass("disabled")},50)},e.speed+100)},slideValue:function(){var a=0;if(e.autoWidth===!1)a=q*(v+e.slideMargin)*e.slideMove;else{a=0;for(var b=0;q>b;b++)a+=parseInt(h.eq(b).width())+e.slideMargin}return a},slideThumb:function(){var a;switch(e.currentPagerPosition){case"left":a=0;break;case"middle":a=o/2-w/2;break;case"right":a=o-w}var b=q-g.find(".clone.left").length,c=p.parent().find(".lSPager");"slide"===e.mode&&e.loop===!0&&(b>=c.children().length?b=0:0>b&&(b=c.children().length));var d=b*(w+e.thumbMargin)-a;d+o>u&&(d=u-o-e.thumbMargin),0>d&&(d=0),this.move(c,d)},auto:function(){e.auto&&(clearInterval(x),x=setInterval(function(){g.goToNextSlide()},e.pause))},pauseOnHover:function(){var b=this;e.auto&&e.pauseOnHover&&(p.on("mouseenter",function(){a(this).addClass("ls-hover"),g.pause(),e.auto=!0}),p.on("mouseleave",function(){a(this).removeClass("ls-hover"),p.find(".lightSlider").hasClass("lsGrabbing")||b.auto()}))},touchMove:function(a,b){if(p.css("transition-duration","0ms"),"slide"===e.mode){var c=a-b,d=t-c;if(d>=m-o-e.slideMargin)if(e.freeMove===!1)d=m-o-e.slideMargin;else{var f=m-o-e.slideMargin;d=f+(d-f)/5}else 0>d&&(e.freeMove===!1?d=0:d/=5);this.move(g,d)}},touchEnd:function(a){if(p.css("transition-duration",e.speed+"ms"),"slide"===e.mode){var b=!1,c=!0;t-=a,t>m-o-e.slideMargin?(t=m-o-e.slideMargin,e.autoWidth===!1&&(b=!0)):0>t&&(t=0);var d=function(a){var c=0;if(b||a&&(c=1),e.autoWidth)for(var d=0,f=0;f<h.length&&(d+=parseInt(h.eq(f).width())+e.slideMargin,q=f+c,!(d>=t));f++);else{var g=t/((v+e.slideMargin)*e.slideMove);q=parseInt(g)+c,t>=m-o-e.slideMargin&&g%1!==0&&q++}};a>=e.swipeThreshold?(d(!1),c=!1):a<=-e.swipeThreshold&&(d(!0),c=!1),g.mode(c),this.slideThumb()}else a>=e.swipeThreshold?g.goToPrevSlide():a<=-e.swipeThreshold&&g.goToNextSlide()},enableDrag:function(){var b=this;if(!y){var c=0,d=0,f=!1;p.find(".lightSlider").addClass("lsGrab"),p.on("mousedown",function(b){return o>m&&0!==m?!1:void("lSPrev"!==a(b.target).attr("class")&&"lSNext"!==a(b.target).attr("class")&&(c=e.vertical===!0?b.pageY:b.pageX,f=!0,b.preventDefault?b.preventDefault():b.returnValue=!1,p.scrollLeft+=1,p.scrollLeft-=1,p.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(x)))}),a(window).on("mousemove",function(a){f&&(d=e.vertical===!0?a.pageY:a.pageX,b.touchMove(d,c))}),a(window).on("mouseup",function(g){if(f){p.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),f=!1,d=e.vertical===!0?g.pageY:g.pageX;var h=d-c;Math.abs(h)>=e.swipeThreshold&&a(window).on("click.ls",function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopImmediatePropagation(),b.stopPropagation(),a(window).off("click.ls")}),b.touchEnd(h)}})}},enableTouch:function(){var a=this;if(y){var b={},c={};p.on("touchstart",function(a){c=a.originalEvent.targetTouches[0],b.pageX=a.originalEvent.targetTouches[0].pageX,b.pageY=a.originalEvent.targetTouches[0].pageY,clearInterval(x)}),p.on("touchmove",function(d){if(o>m&&0!==m)return!1;var f=d.originalEvent;c=f.targetTouches[0];var g=Math.abs(c.pageX-b.pageX),h=Math.abs(c.pageY-b.pageY);e.vertical===!0?(3*h>g&&d.preventDefault(),a.touchMove(c.pageY,b.pageY)):(3*g>h&&d.preventDefault(),a.touchMove(c.pageX,b.pageX))}),p.on("touchend",function(){if(o>m&&0!==m)return!1;var d;d=e.vertical===!0?c.pageY-b.pageY:c.pageX-b.pageX,a.touchEnd(d)})}},build:function(){var b=this;b.initialStyle(),this.doCss()&&(e.enableTouch===!0&&b.enableTouch(),e.enableDrag===!0&&b.enableDrag()),a(window).on("focus",function(){b.auto()}),a(window).on("blur",function(){clearInterval(x)}),b.pager(),b.pauseOnHover(),b.controls(),b.keyPress()}},d.build(),z.init=function(){z.chbreakpoint(),e.vertical===!0?(o=e.item>1?e.verticalHeight:h.outerHeight(),p.css("height",o+"px")):o=p.outerWidth(),e.loop===!0&&"slide"===e.mode&&z.clone(),z.calL(),"slide"===e.mode&&g.removeClass("lSSlide"),"slide"===e.mode&&(z.calSW(),z.sSW()),setTimeout(function(){"slide"===e.mode&&g.addClass("lSSlide")},1e3),e.pager&&z.createPager(),e.adaptiveHeight===!0&&e.vertical===!1&&g.css("height",h.eq(q).outerHeight(!0)),e.adaptiveHeight===!1&&("slide"===e.mode?e.vertical===!1?d.setHeight(g,!1):d.auto():d.setHeight(g,!0)),e.gallery===!0&&d.slideThumb(),"slide"===e.mode&&d.slide(),e.autoWidth===!1?h.length<=e.item?p.find(".lSAction").hide():p.find(".lSAction").show():z.calWidth(!1)<o&&0!==m?p.find(".lSAction").hide():p.find(".lSAction").show()},g.goToPrevSlide=function(){if(q>0)e.onBeforePrevSlide.call(this,g,q),q--,g.mode(!1),e.gallery===!0&&d.slideThumb();else if(e.loop===!0){if(e.onBeforePrevSlide.call(this,g,q),"fade"===e.mode){var a=l-1;q=parseInt(a/e.slideMove)}g.mode(!1),e.gallery===!0&&d.slideThumb()}else e.slideEndAnimation===!0&&(g.addClass("leftEnd"),setTimeout(function(){g.removeClass("leftEnd")},400))},g.goToNextSlide=function(){var a=!0;if("slide"===e.mode){var b=d.slideValue();a=b<m-o-e.slideMargin}q*e.slideMove<l-e.slideMove&&a?(e.onBeforeNextSlide.call(this,g,q),q++,g.mode(!1),e.gallery===!0&&d.slideThumb()):e.loop===!0?(e.onBeforeNextSlide.call(this,g,q),q=0,g.mode(!1),e.gallery===!0&&d.slideThumb()):e.slideEndAnimation===!0&&(g.addClass("rightEnd"),setTimeout(function(){g.removeClass("rightEnd")},400))},g.mode=function(a){e.adaptiveHeight===!0&&e.vertical===!1&&g.css("height",h.eq(q).outerHeight(!0)),n===!1&&("slide"===e.mode?d.doCss()&&(g.addClass("lSSlide"),""!==e.speed&&p.css("transition-duration",e.speed+"ms"),""!==e.cssEasing&&p.css("transition-timing-function",e.cssEasing)):d.doCss()&&(""!==e.speed&&g.css("transition-duration",e.speed+"ms"),""!==e.cssEasing&&g.css("transition-timing-function",e.cssEasing))),a||e.onBeforeSlide.call(this,g,q),"slide"===e.mode?d.slide():d.fade(),p.hasClass("ls-hover")||d.auto(),setTimeout(function(){a||e.onAfterSlide.call(this,g,q)},e.speed),n=!0},g.play=function(){g.goToNextSlide(),e.auto=!0,d.auto()},g.pause=function(){e.auto=!1,clearInterval(x)},g.refresh=function(){z.init()},g.getCurrentSlideCount=function(){var a=q;if(e.loop){var b=p.find(".lslide").length,c=g.find(".clone.left").length;a=c-1>=q?b+(q-c):q>=b+c?q-b-c:q-c}return a+1},g.getTotalSlideCount=function(){return p.find(".lslide").length},g.goToSlide=function(a){q=e.loop?a+g.find(".clone.left").length-1:a,g.mode(!1),e.gallery===!0&&d.slideThumb()},g.destroy=function(){g.lightSlider&&(g.goToPrevSlide=function(){},g.goToNextSlide=function(){},g.mode=function(){},g.play=function(){},g.pause=function(){},g.refresh=function(){},g.getCurrentSlideCount=function(){},g.getTotalSlideCount=function(){},g.goToSlide=function(){},g.lightSlider=null,z={init:function(){}},g.parent().parent().find(".lSAction, .lSPager").remove(),g.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),g.children().removeAttr("style"),h.removeClass("lslide active"),g.find(".clone").remove(),h=null,x=null,n=!1,q=0)},setTimeout(function(){e.onSliderLoad.call(this,g)},10),a(window).on("resize orientationchange",function(a){setTimeout(function(){a.preventDefault?a.preventDefault():a.returnValue=!1,z.init()},200)}),this}}(jQuery);