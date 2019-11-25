;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*!
 * jQuery mmenu v7.2.2
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(h){var n,p,o,a,t,f="mmenu",e="7.2.2";h[f]&&h[f].version>e||(h[f]=function(t,e,n){return this.$menu=t,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=e,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},h[f].version=e,h[f].uniqueId=0,h[f].wrappers={},h[f].addons={},h[f].defaults={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},h[f].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,language:null,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},h[f].prototype={getInstance:function(){return this},initPanels:function(t){this._initPanels(t)},openPanel:function(t,e){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+p.panel)||(t=t.closest("."+p.panel)),t.is("."+p.panel))){var n=this;if("boolean"!=typeof e&&(e=!0),t.parent("."+p.listitem+"_vertical").length)t.parents("."+p.listitem+"_vertical").addClass(p.listitem+"_opened").children("."+p.panel).removeClass(p.hidden),this.openPanel(t.parents("."+p.panel).not(function(){return h(this).parent("."+p.listitem+"_vertical").length}).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(p.panel+"_opened"))return;var i=this.$pnls.children("."+p.panel),s=this.$pnls.children("."+p.panel+"_opened");if(!h[f].support.csstransitions)return s.addClass(p.hidden).removeClass(p.panel+"_opened"),t.removeClass(p.hidden).addClass(p.panel+"_opened"),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);i.not(t).removeClass(p.panel+"_opened-parent");for(var a=t.data(o.parent);a;)(a=a.closest("."+p.panel)).parent("."+p.listitem+"_vertical").length||a.addClass(p.panel+"_opened-parent"),a=a.data(o.parent);i.removeClass(p.panel+"_highest").not(s).not(t).addClass(p.hidden),t.removeClass(p.hidden);var r=function(){s.removeClass(p.panel+"_opened"),t.addClass(p.panel+"_opened"),t.hasClass(p.panel+"_opened-parent")?(s.addClass(p.panel+"_highest"),t.removeClass(p.panel+"_opened-parent")):(s.addClass(p.panel+"_opened-parent"),t.addClass(p.panel+"_highest")),n.trigger("openPanel:start",t)},l=function(){s.removeClass(p.panel+"_highest").addClass(p.hidden),t.removeClass(p.panel+"_highest"),n.trigger("openPanel:finish",t)};e&&!t.hasClass(p.panel+"_noanimation")?setTimeout(function(){n.__transitionend(t,function(){l()},n.conf.transitionDuration),r()},n.conf.openingInterval):(r(),l())}this.trigger("openPanel:after",t)}},closePanel:function(t){this.trigger("closePanel:before",t);var e=t.parent();e.hasClass(p.listitem+"_vertical")&&(e.removeClass(p.listitem+"_opened"),t.addClass(p.hidden),this.trigger("closePanel",t)),this.trigger("closePanel:after",t)},closeAllPanels:function(t){this.trigger("closeAllPanels:before"),this.$pnls.find("."+p.listview).children().removeClass(p.listitem+"_selected").filter("."+p.listitem+"_vertical").removeClass(p.listitem+"_opened");var e=this.$pnls.children("."+p.panel),n=t&&t.length?t:e.first();this.$pnls.children("."+p.panel).not(n).removeClass(p.panel+"_opened").removeClass(p.panel+"_opened-parent").removeClass(p.panel+"_highest").addClass(p.hidden),this.openPanel(n,!1),this.trigger("closeAllPanels:after")},togglePanel:function(t){var e=t.parent();e.hasClass(p.listitem+"_vertical")&&this[e.hasClass(p.listitem+"_opened")?"closePanel":"openPanel"](t)},setSelected:function(t){this.trigger("setSelected:before",t),this.$menu.find("."+p.listitem+"_selected").removeClass(p.listitem+"_selected"),t.addClass(p.listitem+"_selected"),this.trigger("setSelected:after",t)},bind:function(t,e){this.cbck[t]=this.cbck[t]||[],this.cbck[t].push(e)},trigger:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.cbck[e])for(var n=0,i=this.cbck[e].length;n<i;n++)this.cbck[e][n].apply(this,t)},matchMedia:function(t,e,n){var i={yes:e,no:n};this.mtch[t]=this.mtch[t]||[],this.mtch[t].push(i)},i18n:function(t){return h[f].i18n(t,this.conf.language)},_initHooks:function(){for(var t in this.opts.hooks)this.bind(t,this.opts.hooks[t])},_initWrappers:function(){this.trigger("initWrappers:before");for(var t=0;t<this.opts.wrappers.length;t++){var e=h[f].wrappers[this.opts.wrappers[t]];"function"==typeof e&&e.call(this)}this.trigger("initWrappers:after")},_initAddons:function(){var t;for(t in this.trigger("initAddons:before"),h[f].addons)h[f].addons[t].add.call(this),h[f].addons[t].add=function(){};for(t in h[f].addons)h[f].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;for(var t in this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions}),this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?p.menu+"_"+this.opts.extensions[t].join(" "+p.menu+"_"):"",this.opts.extensions[t]&&function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){h(this).attr("id",p.mm(h(this).attr("id")))})),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=h('<div class="'+p.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.addClass(p.menu).parent().addClass(p.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var i=h(),s=this,a=function(t){t.filter(s.conf.panelNodetype).each(function(t){var e=s._initPanel(h(this));if(e){s._initNavbar(e),s._initListview(e),i=i.add(e);var n=e.children("."+p.listview).children("li").children(s.conf.panelNodetype).add(e.children("."+s.conf.classNames.panel));n.length&&a(n)}})};a(t),this.trigger("initPanels:after",i)},_initPanel:function(t){this.trigger("initPanel:before",t);if(t.hasClass(p.panel))return t;if(this.__refactorClass(t,this.conf.classNames.panel,p.panel),this.__refactorClass(t,this.conf.classNames.nopanel,p.nopanel),this.__refactorClass(t,this.conf.classNames.inset,p.listview+"_inset"),t.filter("."+p.listview+"_inset").addClass(p.nopanel),t.hasClass(p.nopanel))return!1;var e=t.hasClass(this.conf.classNames.vertical)||!this.opts.slidingSubmenus;t.removeClass(this.conf.classNames.vertical);var n=t.attr("id")||this.__getUniqueId();t.is("ul, ol")&&(t.removeAttr("id"),t.wrap("<div />"),t=t.parent()),t.attr("id",n),t.addClass(p.panel+" "+p.hidden);var i=t.parent("li");return e?i.addClass(p.listitem+"_vertical"):t.appendTo(this.$pnls),i.length&&(i.data(o.child,t),t.data(o.parent,i)),this.trigger("initPanel:after",t),t},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+p.navbar).length){var e=t.data(o.parent),n=h('<div class="'+p.navbar+'" />'),i=this.__getPanelTitle(t,this.opts.navbar.title),s="";if(e&&e.length){if(e.hasClass(p.listitem+"_vertical"))return;if(e.parent().is("."+p.listview))var a=e.children("a, span").not("."+p.btn+"_next");else a=e.closest("."+p.panel).find('a[href="#'+t.attr("id")+'"]');var r=(e=(a=a.first()).closest("."+p.panel)).attr("id");switch(i=this.__getPanelTitle(t,h("<span>"+a.text()+"</span>").text()),this.opts.navbar.titleLink){case"anchor":s=a.attr("href");break;case"parent":s="#"+r}n.append('<a class="'+p.btn+" "+p.btn+"_prev "+p.navbar+'__btn" href="#'+r+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(p.panel+"_has-navbar"),n.append('<a class="'+p.navbar+'__title"'+(s.length?' href="'+s+'"':"")+">"+i+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var e=this.__childAddBack(t,"ul, ol");this.__refactorClass(e,this.conf.classNames.nolistview,p.nolistview);var n=e.not("."+p.nolistview).addClass(p.listview).children().addClass(p.listitem);this.__refactorClass(n,this.conf.classNames.selected,p.listitem+"_selected"),this.__refactorClass(n,this.conf.classNames.divider,p.listitem+"_divider"),this.__refactorClass(n,this.conf.classNames.spacer,p.listitem+"_spacer"),n.children("a, span").not("."+p.btn).addClass(p.listitem+"__text");var i=t.data(o.parent);if(i&&i.is("."+p.listitem)&&!i.children("."+p.btn).length){var s=i.children("a, span").first(),a=h('<a class="'+p.btn+" "+p.btn+"_next "+p.listitem+'__btn" href="#'+t.attr("id")+'" />');a.insertAfter(s),s.is("span")&&(a.addClass(p.listitem+"__text").html(s.html()),s.remove())}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var t=this.$pnls.find("."+p.listitem+"_selected").removeClass(p.listitem+"_selected").last().addClass(p.listitem+"_selected"),e=t.length?t.closest("."+p.panel):this.$pnls.children("."+p.panel).first();this.openPanel(e,!1),this.trigger("initOpened:after")},_initAnchors:function(){this.trigger("initAnchors:before");var c=this;t.$body.on(a.click+"-oncanvas","a[href]",function(t){var e=h(this),n=e.attr("href"),i=c.$menu.find(e).length,s=e.is("."+p.listitem+" > a"),a=e.is('[rel="external"]')||e.is('[target="_blank"]');if(i&&1<n.length&&"#"==n.slice(0,1))try{var r=c.$menu.find(n);if(r.is("."+p.panel))return c[e.parent().hasClass(p.listitem+"_vertical")?"togglePanel":"openPanel"](r),void t.preventDefault()}catch(t){}var l={close:null,setSelected:null,preventDefault:"#"==n.slice(0,1)};for(var o in h[f].addons){var d=h[f].addons[o].clickAnchor.call(c,e,i,s,a);if(d){if("boolean"==typeof d)return void t.preventDefault();"object"==typeof d&&(l=h.extend({},l,d))}}i&&s&&!a&&(c.__valueOrFn(e,c.opts.onClick.setSelected,l.setSelected)&&c.setSelected(h(t.target).parent()),c.__valueOrFn(e,c.opts.onClick.preventDefault,l.preventDefault)&&t.preventDefault(),c.__valueOrFn(e,c.opts.onClick.close,l.close)&&c.opts.offCanvas&&"function"==typeof c.close&&c.close())}),this.trigger("initAnchors:after")},_initMatchMedia:function(){var n=this;for(var i in this.mtch)!function(){var e=i,t=window.matchMedia(e);n._fireMatchMedia(e,t),t.addListener(function(t){n._fireMatchMedia(e,t)})}()},_fireMatchMedia:function(t,e){for(var n=e.matches?"yes":"no",i=0;i<this.mtch[t].length;i++)this.mtch[t][i][n].call(this)},_getOriginalMenuId:function(){var t=this.$menu.attr("id");return this.conf.clone&&t&&t.length&&(t=p.umm(t)),t},__api:function(){var n=this,i={};return h.each(this._api,function(t){var e=this;i[e]=function(){var t=n[e].apply(n,arguments);return void 0===t?i:t}}),i},__valueOrFn:function(t,e,n){if("function"==typeof e){var i=e.call(t[0]);if(void 0!==i)return i}return"function"!=typeof e&&void 0!==e||void 0===n?e:n},__getPanelTitle:function(t,e){var n;return"function"==typeof this.opts.navbar.title&&(n=this.opts.navbar.title.call(t[0])),void 0===n&&(n=t.data(o.title)),void 0!==n?n:"string"==typeof e?this.i18n(e):this.i18n(h[f].defaults.navbar.title)},__refactorClass:function(t,e,n){return t.filter("."+e).removeClass(e).addClass(n)},__findAddBack:function(t,e){return t.find(e).add(t.filter(e))},__childAddBack:function(t,e){return t.children(e).add(t.filter(e))},__filterListItems:function(t){return t.not("."+p.listitem+"_divider").not("."+p.hidden)},__filterListItemAnchors:function(t){return this.__filterListItems(t).children("a").not("."+p.btn+"_next")},__openPanelWoAnimation:function(t){t.hasClass(p.panel+"_noanimation")||(t.addClass(p.panel+"_noanimation"),this.__transitionend(t,function(){t.removeClass(p.panel+"_noanimation")},this.conf.openingInterval),this.openPanel(t))},__transitionend:function(e,n,t){var i=!1,s=function(t){void 0!==t&&t.target!=e[0]||(i||(e.off(a.transitionend),e.off(a.webkitTransitionEnd),n.call(e[0])),i=!0)};e.on(a.transitionend,s),e.on(a.webkitTransitionEnd,s),setTimeout(s,1.1*t)},__getUniqueId:function(){return p.mm(h[f].uniqueId++)}},h.fn[f]=function(n,i){!function(){if(h[f].glbl)return;t={$wndw:h(window),$docu:h(document),$html:h("html"),$body:h("body")},p={},o={},a={},h.each([p,o,a],function(t,i){i.add=function(t){t=t.split(" ");for(var e=0,n=t.length;e<n;e++)i[t[e]]=i.mm(t[e])}}),p.mm=function(t){return"mm-"+t},p.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"),p.umm=function(t){return"mm-"==t.slice(0,3)&&(t=t.slice(3)),t},o.mm=function(t){return"mm-"+t},o.add("parent child title"),a.mm=function(t){return t+".mm"},a.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),h[f]._c=p,h[f]._d=o,h[f]._e=a,h[f].glbl=t}(),n=h.extend(!0,{},h[f].defaults,n),i=h.extend(!0,{},h[f].configuration,i);var s=h();return this.each(function(){var t=h(this);if(!t.data(f)){var e=new h[f](t,n,i);e.$menu.data(f,e.__api()),s=s.add(e.$menu)}}),s},h[f].i18n=(n={},function(t,e){switch(typeof t){case"object":return"string"==typeof e&&(void 0===n[e]&&(n[e]={}),h.extend(n[e],t)),n;case"string":return"string"==typeof e&&void 0!==n[e]&&n[e][t]||t;case"undefined":default:return n}}),h[f].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:"undefined"==typeof Modernizr||void 0===Modernizr.csstransitions||Modernizr.csstransitions})}(jQuery);
!function(r){var s,i,o,a,t="mmenu",p="offCanvas";r[t].addons[p]={setup:function(){if(this.opts[p]){var e=this.opts[p],i=this.conf[p];a=r[t].glbl,this._api=r.merge(this._api,["open","close","setPage"]),"object"!=typeof e&&(e={}),e=this.opts[p]=r.extend(!0,{},r[t].defaults[p],e),"string"!=typeof i.page.selector&&(i.page.selector="> "+i.page.nodetype),this.vars.opened=!1;var o=[s.menu+"_offcanvas"];this.bind("initMenu:after",function(){var e=this;this._initBlocker(),this.setPage(a.$page),this["_initWindow_"+p](),this.$menu.addClass(o.join(" ")).parent("."+s.wrapper).removeClass(s.wrapper),this.$menu[i.menu.insertMethod](i.menu.insertSelector);var t=window.location.hash;if(t){var n=this._getOriginalMenuId();n&&n==t.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("setPage:after",function(e){a.$blck&&a.$blck.children("a").attr("href","#"+e.attr("id"))}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initBlocker:after:sr-text",function(){a.$blck.children("a").html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu)))})}},add:function(){s=r[t]._c,i=r[t]._d,o=r[t]._e,s.add("slideout page no-csstransforms3d"),i.add("style")},clickAnchor:function(e,t){var n=this;if(this.opts[p]){var i=this._getOriginalMenuId();if(i&&e.is('[href="#'+i+'"]')){if(t)return this.open(),!0;var o=e.closest("."+s.menu);if(o.length){var r=o.data("mmenu");if(r&&r.close)return r.close(),n.__transitionend(o,function(){n.open()},n.conf.transitionDuration),!0}return this.open(),!0}if(a.$page)return(i=a.$page.first().attr("id"))&&e.is('[href="#'+i+'"]')?(this.close(),!0):void 0}}},r[t].defaults[p]={blockUI:!0,moveBackground:!0},r[t].configuration[p]={menu:{insertMethod:"prependTo",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[],wrapIfNeeded:!0}},r[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},r[t].prototype._openSetup=function(){var e=this,t=this.opts[p];this.closeAllOthers(),a.$page.each(function(){r(this).data(i.style,r(this).attr("style")||"")}),a.$wndw.trigger(o.resize+"-"+p,[!0]);var n=[s.wrapper+"_opened"];t.blockUI&&n.push(s.wrapper+"_blocking"),"modal"==t.blockUI&&n.push(s.wrapper+"_modal"),t.moveBackground&&n.push(s.wrapper+"_background"),a.$html.addClass(n.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.menu+"_opened")},r[t].prototype._openFinish=function(){var e=this;this.__transitionend(a.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),a.$html.addClass(s.wrapper+"_opening")},r[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(a.$page.first(),function(){t.$menu.removeClass(s.menu+"_opened");var e=[s.wrapper+"_opened",s.wrapper+"_blocking",s.wrapper+"_modal",s.wrapper+"_background"];a.$html.removeClass(e.join(" ")),a.$page.each(function(){var e=r(this).data(i.style);r(this).attr("style",e)}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),a.$html.removeClass(s.wrapper+"_opening"),this.trigger("close:after")}},r[t].prototype.closeAllOthers=function(){a.$body.find("."+s.menu+"_offcanvas").not(this.$menu).each(function(){var e=r(this).data(t);e&&e.close&&e.close()})},r[t].prototype.setPage=function(e){this.trigger("setPage:before",e);var t=this,n=this.conf[p];e&&e.length||(e=a.$body.find(n.page.selector).not("."+s.menu).not("."+s.wrapper+"__blocker"),n.page.noSelector.length&&(e=e.not(n.page.noSelector.join(", "))),1<e.length&&n.page.wrapIfNeeded&&(e=e.wrapAll("<"+this.conf[p].page.nodetype+" />").parent())),e.addClass(s.page+" "+s.slideout).each(function(){r(this).attr("id",r(this).attr("id")||t.__getUniqueId())}),a.$page=e,this.trigger("setPage:after",e)},r[t].prototype["_initWindow_"+p]=function(){a.$wndw.off(o.keydown+"-"+p).on(o.keydown+"-"+p,function(e){if(a.$html.hasClass(s.wrapper+"_opened")&&9==e.keyCode)return e.preventDefault(),!1});var i=0;a.$wndw.off(o.resize+"-"+p).on(o.resize+"-"+p,function(e,t){if(1==a.$page.length&&(t||a.$html.hasClass(s.wrapper+"_opened"))){var n=a.$wndw.height();(t||n!=i)&&(i=n,a.$page.css("minHeight",n))}})},r[t].prototype._initBlocker=function(){var t=this,e=this.opts[p],n=this.conf[p];this.trigger("initBlocker:before"),e.blockUI&&(a.$blck||(a.$blck=r('<div class="'+s.wrapper+"__blocker "+s.slideout+'" />').append("<a />")),a.$blck.appendTo(n.menu.insertSelector).off(o.touchstart+"-"+p+" "+o.touchmove+"-"+p).on(o.touchstart+"-"+p+" "+o.touchmove+"-"+p,function(e){e.preventDefault(),e.stopPropagation(),a.$blck.trigger(o.mousedown+"-"+p)}).off(o.mousedown+"-"+p).on(o.mousedown+"-"+p,function(e){e.preventDefault(),a.$html.hasClass(s.wrapper+"_modal")||(t.closeAllOthers(),t.close())}),this.trigger("initBlocker:after"))}}(jQuery);
!function(n){var s,o,i="mmenu",e="screenReader";n[i].addons[e]={setup:function(){var r=this,t=this.opts[e],a=this.conf[e];n[i].glbl,"boolean"==typeof t&&(t={aria:t,text:t}),"object"!=typeof t&&(t={}),(t=this.opts[e]=n.extend(!0,{},n[i].defaults[e],t)).aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+s.listview).children().each(function(){r.__sr_aria(n(this),"hidden",n(this).is("."+s.hidden))})}),this.bind("openPanel:start",function(t){var i=this.$menu.find("."+s.panel).not(t).not(t.parents("."+s.panel)),n=t.add(t.find("."+s.listitem+"_vertical ."+s.listitem+"_opened").children("."+s.panel));this.__sr_aria(i,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(t){var i=t.find("."+s.btn).each(function(){r.__sr_aria(n(this),"owns",n(this).attr("href").replace("#",""))});this.__sr_aria(i,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar);this.__sr_aria(i,"hidden",!t.hasClass(s.panel+"_has-navbar"))}),t.text&&"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar),n=!!i.children("."+s.btn+"_prev").length;this.__sr_aria(i.children("."+s.title),"hidden",n)})),t.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])}),this.bind("initBlocker:after",function(){this.trigger("initBlocker:after:sr-text")})}),this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar),n=this.i18n(a.text.closeSubmenu);i.children("."+s.btn+"_prev").html(this.__sr_text(n))}),this.bind("initListview:after",function(t){var i=t.data(o.parent);if(i&&i.length){var n=i.children("."+s.btn+"_next"),e=this.i18n(a.text[n.parent().is("."+s.listitem+"_vertical")?"toggleSubmenu":"openSubmenu"]);n.append(r.__sr_text(e))}}))},add:function(){s=n[i]._c,o=n[i]._d,n[i]._e,s.add("sronly")},clickAnchor:function(t,i){}},n[i].defaults[e]={aria:!0,text:!0},n[i].configuration[e]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},n[i].prototype.__sr_aria=function(t,i,n){t.prop("aria-"+i,n)[n?"attr":"removeAttr"]("aria-"+i,n)},n[i].prototype.__sr_role=function(t,i){t.prop("role",i)[i?"attr":"removeAttr"]("role",i)},n[i].prototype.__sr_text=function(t){return'<span class="'+s.sronly+'">'+t+"</span>"}}(jQuery);
!function(n){var e,r,s,t="mmenu",i="scrollBugFix";n[t].addons[i]={setup:function(){var o=this.opts[i];this.conf[i];s=n[t].glbl,n[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof o&&(o={fix:o}),"object"!=typeof o&&(o={}),(o=this.opts[i]=n.extend(!0,{},n[t].defaults[i],o)).fix&&(this.bind("open:start",function(){this.$pnls.children("."+e.panel+"_opened").scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+i]()})))},add:function(){e=n[t]._c,n[t]._d,r=n[t]._e},clickAnchor:function(o,t){}},n[t].defaults[i]={fix:!0},n[t].prototype["_initWindow_"+i]=function(){var o=this;n(document).off(r.touchmove+"-"+i).on(r.touchmove+"-"+i,function(o){s.$html.hasClass(e.wrapper+"_opened")&&o.preventDefault()});var t=!1;s.$body.off(r.touchstart+"-"+i).on(r.touchstart+"-"+i,"."+e.panels+"> ."+e.panel,function(o){s.$html.hasClass(e.wrapper+"_opened")&&(t||(t=!0,0===o.currentTarget.scrollTop?o.currentTarget.scrollTop=1:o.currentTarget.scrollHeight===o.currentTarget.scrollTop+o.currentTarget.offsetHeight&&(o.currentTarget.scrollTop-=1),t=!1))}).off(r.touchmove+"-"+i).on(r.touchmove+"-"+i,"."+e.panels+"> ."+e.panel,function(o){s.$html.hasClass(e.wrapper+"_opened")&&n(this)[0].scrollHeight>n(this).innerHeight()&&o.stopPropagation()}),s.$wndw.off(r.orientationchange+"-"+i).on(r.orientationchange+"-"+i,function(){o.$pnls.children("."+e.panel+"_opened").scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}}(jQuery);
!function(s){var a,e="mmenu",i="autoHeight";s[e].addons[i]={setup:function(){var h=this.opts[i];this.conf[i];if(s[e].glbl,"boolean"==typeof h&&h&&(h={height:"auto"}),"string"==typeof h&&(h={height:h}),"object"!=typeof h&&(h={}),"auto"==(h=this.opts[i]=s.extend(!0,{},s[e].defaults[i],h)).height||"highest"==h.height){this.bind("initMenu:after",function(){this.$menu.addClass(a.menu+"_autoheight")});var t=function(t){if(!this.opts.offCanvas||this.vars.opened){var e=Math.max(parseInt(this.$pnls.css("top"),10),0)||0,i=Math.max(parseInt(this.$pnls.css("bottom"),10),0)||0,n=0;this.$menu.addClass(a.menu+"_autoheight-measuring"),"auto"==h.height?((t=t||this.$pnls.children("."+a.panel+"_opened")).parent("."+a.listitem+"_vertical").length&&(t=t.parents("."+a.panel).not(function(){return s(this).parent("."+a.listitem+"_vertical").length})),t.length||(t=this.$pnls.children("."+a.panel)),n=t.first().outerHeight()):"highest"==h.height&&this.$pnls.children("."+a.panel).each(function(){var t=s(this);t.parent("."+a.listitem+"_vertical").length&&(t=t.parents("."+a.panel).not(function(){return s(this).parent("."+a.listitem+"_vertical").length})),n=Math.max(n,t.first().outerHeight())}),this.$menu.height(n+e+i).removeClass(a.menu+"_autoheight-measuring")}};this.opts.offCanvas&&this.bind("open:start",t),"highest"==h.height&&this.bind("initPanels:after",t),"auto"==h.height&&(this.bind("updateListview",t),this.bind("openPanel:start",t),this.bind("closePanel",t))}},add:function(){a=s[e]._c,s[e]._d,s[e]._e.add("resize")},clickAnchor:function(t,e){}},s[e].defaults[i]={height:"default"}}(jQuery);
!function(s){var a,h="mmenu",c="backButton";s[h].addons[c]={setup:function(){if(this.opts.offCanvas){var o=this,n=this.opts[c];this.conf[c];s[h].glbl,"boolean"==typeof n&&(n={close:n}),"object"!=typeof n&&(n={}),n=s.extend(!0,{},s[h].defaults[c],n);var e="#"+this.$menu.attr("id");if(n.close){var i=[];function t(){i=[e],this.$pnls.children("."+a.panel+"_opened-parent").add(o.$pnls.children("."+a.panel+"_opened")).each(function(){i.push("#"+s(this).attr("id"))})}this.bind("open:finish",function(){history.pushState(null,document.title,e)}),this.bind("open:finish",t),this.bind("openPanel:finish",t),this.bind("close:finish",function(){i=[],history.back(),history.pushState(null,document.title,location.pathname+location.search)}),s(window).on("popstate",function(n){if(o.vars.opened&&i.length){var t=(i=i.slice(0,-1))[i.length-1];t==e?o.close():(o.openPanel(s(t)),history.pushState(null,document.title,e))}})}n.open&&s(window).on("popstate",function(n){o.vars.opened||location.hash!=e||o.open()})}},add:function(){window.history&&window.history.pushState?(a=s[h]._c,s[h]._d,s[h]._e):s[h].addons[c].setup=function(){}},clickAnchor:function(n,t){}},s[h].defaults[c]={close:!1,open:!1}}(jQuery);
!function(t){var o,d,n="mmenu",p="columns";t[n].addons[p]={setup:function(){var i=this.opts[p];this.conf[p];if(t[n].glbl,"boolean"==typeof i&&(i={add:i}),"number"==typeof i&&(i={add:!0,visible:i}),"object"!=typeof i&&(i={}),"number"==typeof i.visible&&(i.visible={min:i.visible,max:i.visible}),(i=this.opts[p]=t.extend(!0,{},t[n].defaults[p],i)).add){i.visible.min=Math.max(1,Math.min(6,i.visible.min)),i.visible.max=Math.max(i.visible.min,Math.min(6,i.visible.max));for(var a="",s="",e=0;e<=i.visible.max;e++)a+=" "+o.menu+"_columns-"+e,s+=" "+o.panel+"_columns-"+e;a.length&&(a=a.slice(1),s=s.slice(1));var l=s+" "+o.panel+"_opened "+o.panel+"_opened-parent "+o.panel+"_highest";this.bind("openPanel:before",function(e){var n=e.data(d.parent);if(n&&(n=n.closest("."+o.panel)).length){var i=n.attr("class");if(i&&(i=i.split(o.panel+"_columns-")[1]))for(i=parseInt(i.split(" ")[0],10)+1;0<i;){var a=this.$pnls.children("."+o.panel+"_columns-"+i);if(!a.length){i=-1;break}i++,a.removeClass(l).addClass(o.hidden)}}}),this.bind("openPanel:start",function(e){var n=this.$pnls.children("."+o.panel+"_opened-parent").length;e.hasClass(o.panel+"_opened-parent")||n++,n=Math.min(i.visible.max,Math.max(i.visible.min,n)),this.$menu.removeClass(a).addClass(o.menu+"_columns-"+n),this.$pnls.children("."+o.panel).removeClass(s).filter("."+o.panel+"_opened-parent").add(e).slice(-i.visible.max).each(function(e){t(this).addClass(o.panel+"_columns-"+e)})})}},add:function(){o=t[n]._c,d=t[n]._d,t[n]._e},clickAnchor:function(e,n){}},t[n].defaults[p]={add:!1,visible:{min:1,max:3}}}(jQuery);
!function(a){var s,d,n="mmenu",c="counters";a[n].addons[c]={setup:function(){var i=this,e=this.opts[c];this.conf[c];if(a[n].glbl,"boolean"==typeof e&&(e={add:e,update:e}),"object"!=typeof e&&(e={}),e=this.opts[c]=a.extend(!0,{},a[n].defaults[c],e),this.bind("initListview:after",function(t){var n=this.conf.classNames[c].counter;this.__refactorClass(t.find("."+n),n,s.counter)}),e.add&&this.bind("initListview:after",function(t){var n;switch(e.addTo){case"panels":n=t;break;default:n=t.filter(e.addTo)}n.each(function(){var t=a(this).data(d.parent);t&&(t.find("."+s.counter).length||t.children("."+s.btn).prepend(a('<span class="'+s.counter+'" />')))})}),e.update){var t=function(t){(t=t||this.$pnls.children("."+s.panel)).each(function(){var t=a(this),n=t.data(d.parent);if(n){var e=n.find("."+s.counter);e.length&&(t=t.children("."+s.listview)).length&&e.html(i.__filterListItems(t.children()).length)}})};this.bind("initListview:after",t),this.bind("updateListview",t)}},add:function(){s=a[n]._c,d=a[n]._d,a[n]._e,s.add("counter")},clickAnchor:function(t,n){}},a[n].defaults[c]={add:!1,addTo:"panels",count:!1},a[n].configuration.classNames[c]={counter:"Counter"}}(jQuery);
!function(d){var l,i,t="mmenu",a="dividers";d[t].addons[a]={setup:function(){var e=this,n=this.opts[a];this.conf[a];if(d[t].glbl,"boolean"==typeof n&&(n={add:n,fixed:n}),"object"!=typeof n&&(n={}),(n=this.opts[a]=d.extend(!0,{},d[t].defaults[a],n)).type&&this.bind("initMenu:after",function(){this.$menu.addClass(l.menu+"_"+a+"-"+n.type)}),n.add&&this.bind("initListview:after",function(i){var t;switch(n.addTo){case"panels":t=i;break;default:t=i.filter(n.addTo)}t.length&&(t.children("."+l.listitem+"_divider").remove(),t.find("."+l.listview).each(function(){var t="";e.__filterListItems(d(this).children()).each(function(){var i=d.trim(d(this).children("a, span").text()).slice(0,1).toLowerCase();i!=t&&i.length&&(t=i,d('<li class="'+l.listitem+" "+l.listitem+'_divider">'+i+"</li>").insertBefore(this))})}))}),n.fixed){this.bind("initPanels:after",function(){void 0===this.$fixeddivider&&(this.$fixeddivider=d('<ul class="'+l.listview+" "+l.listview+'_fixeddivider"><li class="'+l.listitem+" "+l.listitem+'_divider"></li></ul>').appendTo(this.$pnls).children())});var s=function(i){if(!(i=i||this.$pnls.children("."+l.panel+"_opened")).is(":hidden")){var t=i.find("."+l.listitem+"_divider").not("."+l.hidden),e=i.scrollTop()||0,n="";t.each(function(){d(this).position().top+e<e+1&&(n=d(this).text())}),this.$fixeddivider.text(n),this.$pnls[n.length?"addClass":"removeClass"](l.panel+"_dividers")}};this.bind("open:start",s),this.bind("openPanel:start",s),this.bind("updateListview",s),this.bind("initPanel:after",function(t){t.off(i.scroll+"-"+a+" "+i.touchmove+"-"+a).on(i.scroll+"-"+a+" "+i.touchmove+"-"+a,function(i){t.hasClass(l.panel+"_opened")&&s.call(e,t)})})}},add:function(){l=d[t]._c,d[t]._d,(i=d[t]._e).add("scroll")},clickAnchor:function(i,t){}},d[t].defaults[a]={add:!1,addTo:"panels",fixed:!1,type:null}}(jQuery);
!function(y){var x,p,o,n="mmenu",O="drag";function $(n,e,t){return n<e&&(n=e),t<n&&(n=t),n}y[n].addons[O]={setup:function(){if(this.opts.offCanvas){var e=this.opts[O],t=this.conf[O];o=y[n].glbl,"boolean"==typeof e&&(e={menu:e,panels:e}),"object"!=typeof e&&(e={}),"boolean"==typeof e.menu&&(e.menu={open:e.menu}),"object"!=typeof e.menu&&(e.menu={}),"boolean"==typeof e.panels&&(e.panels={close:e.panels}),"object"!=typeof e.panels&&(e.panels={}),(e=this.opts[O]=y.extend(!0,{},y[n].defaults[O],e)).menu.open&&this.bind("setPage:after",function(){(function(e,t,o){var i,a,s,r,p=this,c={events:"panleft panright",typeLower:"x",typeUpper:"X",open_dir:"right",close_dir:"left",negative:!1},d="width",u=c.open_dir,f=function(n){n<=e.maxStartPos&&(m=1)},l=function(){return y("."+x.slideout)},m=0,h=0,g=0,n=this.opts.extensions.all,_=void 0===n?"left":-1<n.indexOf(x.menu+"_position-right")?"right":-1<n.indexOf(x.menu+"_position-top")?"top":-1<n.indexOf(x.menu+"_position-bottom")?"bottom":"left",v=void 0===n?"back":-1<n.indexOf(x.menu+"_position-top")||-1<n.indexOf(x.menu+"_position-bottom")||-1<n.indexOf(x.menu+"_position-front")?"front":"back";switch(_){case"top":case"bottom":c.events="panup pandown",c.typeLower="y",c.typeUpper="Y",d="height"}switch(_){case"right":case"bottom":c.negative=!0,f=function(n){n>=o.$wndw[d]()-e.maxStartPos&&(m=1)}}switch(_){case"right":c.open_dir="left",c.close_dir="right";break;case"top":c.open_dir="down",c.close_dir="up";break;case"bottom":c.open_dir="up",c.close_dir="down"}switch(v){case"front":l=function(){return p.$menu}}var b=this.__valueOrFn(this.$menu,e.node,o.$page);"string"==typeof b&&(b=y(b));var w=new Hammer(b[0],this.opts[O].vendors.hammer);w.on("panstart",function(n){f(n.center[c.typeLower]),r=l(),u=c.open_dir}),w.on(c.events+" panend",function(n){0<m&&n.preventDefault()}),w.on(c.events,function(n){if(i=n["delta"+c.typeUpper],c.negative&&(i=-i),i!=h&&(u=h<=i?c.open_dir:c.close_dir),(h=i)>e.threshold&&1==m){if(o.$html.hasClass(x.wrapper+"_opened"))return;m=2,p._openSetup(),p.trigger("open:start"),o.$html.addClass(x.dragging),g=$(o.$wndw[d]()*t[d].perc,t[d].min,t[d].max)}2==m&&(a=$(h,10,g)-("front"==v?g:0),c.negative&&(a=-a),s="translate"+c.typeUpper+"("+a+"px )",r.css({"-webkit-transform":"-webkit-"+s,transform:s}))}),w.on("panend",function(n){2==m&&(o.$html.removeClass(x.dragging),r.css("transform",""),p[u==c.open_dir?"_openFinish":"close"]()),m=0})}).call(this,e.menu,t.menu,o)}),e.panels.close&&this.bind("initPanel:after",function(n){(function(n,e,t,o){var i=this,a=n.data(p.parent);if(a){a=a.closest("."+x.panel);var s=new Hammer(n[0],i.opts[O].vendors.hammer),r=null;s.on("panright",function(n){r||(i.openPanel(a),r=setTimeout(function(){clearTimeout(r),r=null},i.conf.openingInterval+i.conf.transitionDuration))})}}).call(this,n,e.panels,t.panels,o)})}},add:function(){if("function"!=typeof Hammer||Hammer.VERSION<2)return y[n].addons[O].add=function(){},void(y[n].addons[O].setup=function(){});x=y[n]._c,p=y[n]._d,y[n]._e,x.add("dragging")},clickAnchor:function(n,e){}},y[n].defaults[O]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},y[n].configuration[O]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}}}(jQuery);
!function(n){var $,s,a,y,t="mmenu",f="dropdown";n[t].addons[f]={setup:function(){if(this.opts.offCanvas){var o=this,x=this.opts[f],b=this.conf[f];if(y=n[t].glbl,"boolean"==typeof x&&x&&(x={drop:x}),"object"!=typeof x&&(x={}),"string"==typeof x.position&&(x.position={of:x.position}),(x=this.opts[f]=n.extend(!0,{},n[t].defaults[f],x)).drop){var g;this.bind("initMenu:after",function(){if(this.$menu.addClass($.menu+"_"+f),"string"!=typeof x.position.of){var t=this._getOriginalMenuId();t&&t.length&&(x.position.of='[href="#'+t+'"]')}"string"==typeof x.position.of&&(g=n(x.position.of),x.event=x.event.split(" "),1==x.event.length&&(x.event[1]=x.event[0]),"hover"==x.event[0]&&g.on(a.mouseenter+"-"+f,function(){o.open()}),"hover"==x.event[1]&&this.$menu.on(a.mouseleave+"-"+f,function(){o.close()}))}),this.bind("open:start",function(){this.$menu.data(s.style,this.$menu.attr("style")||""),y.$html.addClass($.wrapper+"_dropdown")}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(s.style)),y.$html.removeClass($.wrapper+"_dropdown")});var e=function(t,o){var e,i,n=o[0],s=o[1],a="x"==t?"scrollLeft":"scrollTop",f="x"==t?"outerWidth":"outerHeight",r="x"==t?"left":"top",p="x"==t?"right":"bottom",l="x"==t?"width":"height",h="x"==t?"maxWidth":"maxHeight",u=null,d=y.$wndw[a](),c=g.offset()[r]-=d,m=c+g[f](),v=y.$wndw[l](),w=b.offset.button[t]+b.offset.viewport[t];if(x.position[t])switch(x.position[t]){case"left":case"bottom":u="after";break;case"right":case"top":u="before"}return null===u&&(u=c+(m-c)/2<v/2?"after":"before"),"after"==u?(i=v-((e="x"==t?c:m)+w),n[r]=e+b.offset.button[t],n[p]="auto",x.tip&&s.push($.menu+"_tip-"+("x"==t?"left":"top"))):(i=(e="x"==t?m:c)-w,n[p]="calc( 100% - "+(e-b.offset.button[t])+"px )",n[r]="auto",x.tip&&s.push($.menu+"_tip-"+("x"==t?"right":"bottom"))),x.fitViewport&&(n[h]=Math.min(b[l].max,i)),[n,s]},i=function(t){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(s.style));var o=[{},[]];o=e.call(this,"y",o),o=e.call(this,"x",o),this.$menu.css(o[0]),x.tip&&this.$menu.removeClass($.tipleft+" "+$.tipright+" "+$.tiptop+" "+$.tipbottom).addClass(o[1].join(" "))}};this.bind("open:start",i),y.$wndw.on(a.resize+"-"+f,function(t){i.call(o)}),this.opts.offCanvas.blockUI||y.$wndw.on(a.scroll+"-"+f,function(t){i.call(o)})}}},add:function(){$=n[t]._c,s=n[t]._d,a=n[t]._e,$.add("dropdown"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(t,o){}},n[t].defaults[f]={drop:!1,fitViewport:!0,event:"click",position:{},tip:!0},n[t].configuration[f]={offset:{button:{x:-5,y:5},viewport:{x:20,y:20}},height:{max:880},width:{max:440}}}(jQuery);
!function(c){var f,a,s="mmenu",d="fixedElements";c[s].addons[d]={setup:function(){if(this.opts.offCanvas){this.opts[d];var o=this.conf[d];a=c[s].glbl;this.bind("setPage:after",function(s){var t=this.conf.classNames[d].fixed,i=s.find("."+t);this.__refactorClass(i,t,f.slideout),i[o.elemInsertMethod](o.elemInsertSelector);var e=this.conf.classNames[d].sticky,n=s.find("."+e);this.__refactorClass(n,e,f.sticky),(n=s.find("."+f.sticky)).length&&(this.bind("open:start",function(){if("hidden"==a.$html.css("overflow")){var s=a.$wndw.scrollTop()+o.sticky.offset;n.each(function(){c(this).css("top",parseInt(c(this).css("top"),10)+s)})}}),this.bind("close:finish",function(){n.css("top","")}))})}},add:function(){f=c[s]._c,c[s]._d,c[s]._e,f.add("sticky")},clickAnchor:function(s,t){}},c[s].configuration[d]={sticky:{offset:0},elemInsertMethod:"appendTo",elemInsertSelector:"body"},c[s].configuration.classNames[d]={fixed:"Fixed",sticky:"Sticky"}}(jQuery);
!function(c){var d,s,a,n="mmenu",t="iconbar";c[n].addons[t]={setup:function(){var e=this,o=this.opts[t];this.conf[t];if(c[n].glbl,o instanceof Array&&(o={add:!0,top:o}),o.add){var r=null;if(c.each(["top","bottom"],function(a,n){var t=o[n];t instanceof Array||(t=[t]);for(var e=c('<div class="'+d.iconbar+"__"+n+'" />'),i=0,s=t.length;i<s;i++)e.append(t[i]);e.children().length&&(r||(r=c('<div class="'+d.iconbar+'" />')),r.append(e))}),r&&(this.bind("initMenu:after",function(){var a=d.menu+"_iconbar";o.size&&(a+=" "+d.menu+"_iconbar-"+o.size),this.$menu.addClass(a).prepend(r)}),"tabs"==o.type)){r.addClass(d.iconbar+"_tabs");var i=r.find("a");i.on(a.click+"-"+t,function(a){var n=c(this);if(n.hasClass(d.iconbar+"__tab_selected"))a.stopImmediatePropagation();else try{var t=c(n.attr("href"));t.hasClass(d.panel)&&(a.preventDefault(),a.stopImmediatePropagation(),e.openPanel(t,!1))}catch(a){}}),this.bind("openPanel:start",function a(n){i.removeClass(d.iconbar+"__tab_selected");var t=i.filter('[href="#'+n.attr("id")+'"]');if(t.length)t.addClass(d.iconbar+"__tab_selected");else{var e=n.data(s.parent);e&&e.length&&a(e.closest("."+d.panel))}})}}},add:function(){d=c[n]._c,s=c[n]._d,a=c[n]._e,d.add(t)},clickAnchor:function(a,n){}},c[n].defaults[t]={add:!1,top:[],bottom:[]},c[n].configuration[t]={}}(jQuery);
!function(s){var d,r="mmenu",o="iconPanels";s[r].addons[o]={setup:function(){var n=this,a=this.opts[o],t=(this.conf[o],!1);s[r].glbl,"boolean"==typeof a&&(a={add:a}),"number"!=typeof a&&"string"!=typeof a||(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),"first"==a.visible&&(t=!0,a.visible=1),(a=this.opts[o]=s.extend(!0,{},s[r].defaults[o],a)).visible=Math.min(3,Math.max(1,a.visible)),a.visible++;var l="";if(!t){for(var e=0;e<=a.visible;e++)l+=" "+d.panel+"_iconpanel-"+e;l.length&&(l=l.slice(1))}if(a.add){var i=function(e){if(!e.parent("."+d.listitem+"_vertical").length){var i=n.$pnls.children("."+d.panel);t?i.removeClass(d.panel+"_iconpanel-first").first().addClass(d.panel+"_iconpanel-first"):i.removeClass(l).filter("."+d.panel+"_opened-parent").removeClass(d.hidden).not(function(){return s(this).parent("."+d.listitem+"_vertical").length}).add(e).slice(-a.visible).each(function(e){s(this).addClass(d.panel+"_iconpanel-"+e)})}};this.bind("initMenu:after",function(){var e=[d.menu+"_iconpanel"];a.size&&e.push(d.menu+"_iconpanel-"+a.size),a.hideNavbar&&e.push(d.menu+"_hidenavbar"),a.hideDivider&&e.push(d.menu+"_hidedivider"),this.$menu.addClass(e.join(" "))}),this.bind("openPanel:start",i),this.bind("initPanels:after",function(e){i.call(n,n.$pnls.children("."+d.panel+"_opened"))}),this.bind("initListview:after",function(e){!a.blockPanel||e.parent("."+d.listitem+"_vertical").length||e.children("."+d.panel+"__blocker").length||e.prepend('<a href="#'+e.closest("."+d.panel).attr("id")+'" class="'+d.panel+'__blocker" />')})}},add:function(){d=s[r]._c,s[r]._d,s[r]._e},clickAnchor:function(e,i){}},s[r].defaults[o]={add:!1,blockPanel:!0,hideDivider:!1,hideNavbar:!0,visible:3}}(jQuery);
!function(s){var o,d,a,i,r="mmenu",c="keyboardNavigation";s[r].addons[c]={setup:function(){if(!s[r].support.touch){var e=this.opts[c];this.conf[c];if(i=s[r].glbl,"boolean"!=typeof e&&"string"!=typeof e||(e={enable:e}),"object"!=typeof e&&(e={}),(e=this.opts[c]=s.extend(!0,{},s[r].defaults[c],e)).enable){var n=s('<button class="'+o.tabstart+'" />'),t=s('<button class="'+o.tabend+'" />'),a=s('<button class="'+o.tabend+'" />');this.bind("initMenu:after",function(){e.enhance&&this.$menu.addClass(o.menu+"_keyboardfocus"),this["_initWindow_"+c](e.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(n).append(t).children("."+o.mm("navbars-top")+", ."+o.mm("navbars-bottom")).children("."+o.navbar).children("a."+o.title).attr("tabindex",-1)}),this.bind("initBlocker:after",function(){i.$blck.append(a).children("a").addClass(o.tabstart)}),this.bind("open:finish",function(){f.call(this,null,e.enable)}),this.bind("openPanel:finish",function(n){f.call(this,n,e.enable)}),this.bind("initOpened:after:sr-aria",function(){var n=this.$menu.add(i.$blck).children("."+o.tabstart+", ."+o.tabend);this.__sr_aria(n,"hidden",!0),this.__sr_role(n,"presentation")})}}},add:function(){o=s[r]._c,d=s[r]._d,a=s[r]._e,o.add("tabstart tabend"),a.add("focusin keydown")},clickAnchor:function(n,e){}},s[r].defaults[c]={enable:!1,enhance:!1},s[r].configuration[c]={},s[r].prototype["_initWindow_"+c]=function(n){i.$wndw.off(a.keydown+"-offCanvas"),i.$wndw.off(a.focusin+"-"+c).on(a.focusin+"-"+c,function(n){if(i.$html.hasClass(o.wrapper+"_opened")){var e=s(n.target);if(e.is("."+o.tabend)){var t=s();e.parent().is("."+o.menu)&&i.$blck&&(t=i.$blck),e.parent().is("."+o.wrapper+"__blocker")&&(t=i.$body.find("."+o.menu+"_offcanvas").filter("."+o.menu+"_opened")),t.length||(t=e.parent()),t.children("."+o.tabstart).focus()}}}),i.$wndw.off(a.keydown+"-"+c).on(a.keydown+"-"+c,function(n){var e=s(n.target),t=e.closest("."+o.menu);if(t.length){t.data("mmenu");if(e.is("input, textarea"));else switch(n.keyCode){case 13:(e.is(".mm-toggle")||e.is(".mm-check"))&&e.trigger(a.click);break;case 32:case 37:case 38:case 39:case 40:n.preventDefault()}}}),n&&i.$wndw.off(a.keydown+"-"+c).on(a.keydown+"-"+c,function(n){var e=s(n.target),t=e.closest("."+o.menu);if(t.length){var a=t.data("mmenu");if(e.is("input"))switch(n.keyCode){case 27:e.val("")}else switch(n.keyCode){case 8:var i=t.find("."+o.panel+"_opened").data(d.parent);i&&i.length&&a.openPanel(i.closest("."+o.panel));break;case 27:t.hasClass(o.menu+"_offcanvas")&&a.close()}}})};var l="input, select, textarea, button, label, a[href]";function f(n,e){n=n||this.$pnls.children("."+o.panel+"_opened");var t=s(),a=this.$menu.children("."+o.mm("navbars_top")+", ."+o.mm("navbars_bottom")).children("."+o.navbar);a.find(l).filter(":focus").length||("default"==e&&((t=n.children("."+o.listview).find("a[href]").not("."+o.hidden)).length||(t=n.find(l).not("."+o.hidden)),t.length||(t=a.find(l).not("."+o.hidden))),t.length||(t=this.$menu.children("."+o.tabstart)),t.first().focus())}}(jQuery);
!function(e){var i,l="mmenu",t="lazySubmenus";e[l].addons[t]={setup:function(){var n=this.opts[t];this.conf[t];e[l].glbl,"boolean"==typeof n&&(n={load:n}),"object"!=typeof n&&(n={}),(n=this.opts[t]=e.extend(!0,{},e[l].defaults[t],n)).load&&(this.bind("initMenu:after",function(){this.$pnls.find("li").children(this.conf.panelNodetype).not("."+i.inset).not("."+i.nolistview).not("."+i.nopanel).addClass(i.panel+"_lazysubmenu "+i.nolistview+" "+i.nopanel)}),this.bind("initPanels:before",function(n){n=n||this.$pnls.children(this.conf.panelNodetype),this.__findAddBack(n,"."+i.panel+"_lazysubmenu").not("."+i.panel+"_lazysubmenu ."+i.panel+"_lazysubmenu").removeClass(i.panel+"_lazysubmenu "+i.nolistview+" "+i.nopanel)}),this.bind("initOpened:before",function(){var n=this.$pnls.find("."+this.conf.classNames.selected).parents("."+i.panel+"_lazysubmenu");n.length&&(n.removeClass(i.panel+"_lazysubmenu "+i.nolistview+" "+i.nopanel),this.initPanels(n.last()))}),this.bind("openPanel:before",function(n){var e=this.__findAddBack(n,"."+i.panel+"_lazysubmenu").not("."+i.panel+"_lazysubmenu ."+i.panel+"_lazysubmenu");e.length&&this.initPanels(e)}))},add:function(){i=e[l]._c,e[l]._d,e[l]._e},clickAnchor:function(n,e){}},e[l].defaults[t]={load:!1},e[l].configuration[t]={}}(jQuery);
!function(b){var p,h="mmenu",m="navbars";b[h].addons[m]={setup:function(){var d=this,l=this.opts[m],v=this.conf[m];if(b[h].glbl,void 0!==l){l instanceof Array||(l=[l]);var f={},u={};l.length&&(b.each(l,function(n){var t=l[n];"boolean"==typeof t&&t&&(t={}),"object"!=typeof t&&(t={}),void 0===t.content&&(t.content=["prev","title"]),t.content instanceof Array||(t.content=[t.content]),t=b.extend(!0,{},d.opts.navbar,t);var a=b('<div class="'+p.navbar+'" />'),e=t.height;"number"!=typeof e?e=1:1<(e=Math.min(4,Math.max(1,e)))&&a.addClass(p.navbar+"_size-"+e);var o=t.position;switch(o){case"bottom":break;default:o="top"}f[o]||(f[o]=0),f[o]+=e,u[o]||(u[o]=b('<div class="'+p.navbars+"_"+o+'" />')),u[o].append(a);for(var r=0,s=t.content.length;r<s;r++){var i=b[h].addons[m][t.content[r]]||null;i?i.call(d,a,t,v):((i=t.content[r])instanceof b||(i=b(t.content[r])),a.append(i))}var c=b[h].addons[m][t.type]||null;c&&c.call(d,a,t,v),a.children("."+p.btn).length&&a.addClass(p.navbar+"_has-btns")}),this.bind("initMenu:after",function(){for(var n in f)this.$menu.addClass(p.menu+"_navbar_"+n+"-"+f[n]),this.$menu["bottom"==n?"append":"prepend"](u[n])}))}},add:function(){p=b[h]._c,b[h]._d,b[h]._e,p.add(m)},clickAnchor:function(n,t){}},b[h].configuration[m]={breadcrumbs:{separator:"/",removeFirst:!1}},b[h].configuration.classNames[m]={}}(jQuery);
!function(f){var o,i,a,c="mmenu",d="pageScroll";f[c].addons[d]={setup:function(){var n=this,t=this.opts[d],s=this.conf[d];if(a=f[c].glbl,"boolean"==typeof t&&(t={scroll:t}),(t=this.opts[d]=f.extend(!0,{},f[c].defaults[d],t)).scroll&&this.bind("close:finish",function(){h(s.scrollOffset)}),t.update){var e=[],r=[];(n=this).bind("initListview:after",function(t){n.__filterListItemAnchors(t.find("."+o.listview).children("li")).each(function(){var t=f(this).attr("href");p(t)&&e.push(t)}),r=e.reverse()});var l=-1;a.$wndw.on(i.scroll+"-"+d,function(t){for(var e=a.$wndw.scrollTop(),i=0;i<r.length;i++)if(f(r[i]).offset().top<e+s.updateOffset){l!==i&&(l=i,n.setSelected(n.__filterListItemAnchors(n.$pnls.children("."+o.panel+"_opened").find("."+o.listview).children("li")).filter('[href="'+r[i]+'"]').parent()));break}})}},add:function(){o=f[c]._c,f[c]._d,i=f[c]._e},clickAnchor:function(t,e,i){if(s=!1,e&&i&&this.opts.offCanvas&&this.opts[d].scroll&&a.$page&&a.$page.length){var n=t.attr("href");if(p(n)){if(s=f(n),!this.$menu.is("."+o.menu+"_sidebar-expanded")||!a.$html.is("."+o.wrapper+"_sidebar-expanded"))return{close:!0};h(this.conf[d].scrollOffset)}}}},f[c].defaults[d]={scroll:!1,update:!1};var s=!(f[c].configuration[d]={scrollOffset:0,updateOffset:50});function h(t){s&&s.length&&s.is(":visible")&&a.$html.add(a.$body).animate({scrollTop:s.offset().top+t}),s=!1}function p(t){try{return!("#"==t||"#"!=t.slice(0,1)||!a.$page.find(t).length)}catch(t){return!1}}}(jQuery);
!function(o){var f,u,h,n="mmenu",_="searchfield";function l(e,n){if(n)for(var s in n)e.attr(s,n[s])}o[n].addons[_]={setup:function(){var a=this,t=this.opts[_],e=this.conf[_];o[n].glbl,"boolean"==typeof t&&(t={add:t}),"object"!=typeof t&&(t={}),"boolean"==typeof t.panel&&(t.panel={add:t.panel}),"object"!=typeof t.panel&&(t.panel={}),t.add&&("panel"==t.addTo&&(t.panel.add=!0),t.panel.add&&(t.showSubPanels=!1,t.panel.splash&&(t.cancel=!0)),t=this.opts[_]=o.extend(!0,{},o[n].defaults[_],t),e=this.conf[_]=o.extend(!0,{},o[n].configuration[_],e),this.bind("close:start",function(){this.$menu.find("."+f.searchfield).children("input").blur()}),this.bind("initPanels:after",function(e){var n,s=o();switch(t.panel.add&&(s=this._initSearchPanel(e)),t.addTo){case"panels":n=e;break;case"panel":n=s;break;default:n=this.$menu.find(t.addTo)}(n.each(function(){var e=a._initSearchfield(o(this));t.search&&e.length&&a._initSearching(e)}),t.noResults)&&(t.panel.add?s:e).each(function(){a._initNoResultsMsg(o(this))})}))},add:function(){f=o[n]._c,u=o[n]._d,h=o[n]._e,f.add("searchfield"),u.add("searchfield"),h.add("input focus blur")},clickAnchor:function(e,n){if(e.hasClass(f.searchfield+"__btn")){if(e.hasClass(f.btn+"_close")){var s=e.closest("."+f.searchfield).find("input");return s.val(""),this.search(s),!0}if(e.hasClass(f.btn+"_next"))return e.closest("."+f.searchfield).submit(),!0}}},o[n].defaults[_]={add:!1,addTo:"panels",noResults:"No results found.",placeholder:"Search",panel:{add:!1,dividers:!0,fx:"none",id:null,splash:null,title:"Search"},search:!0,showTextItems:!1,showSubPanels:!0},o[n].configuration[_]={clear:!1,form:!1,input:!1,submit:!1},o[n].prototype._initSearchPanel=function(e){var n=this.opts[_];this.conf[_];if(this.$pnls.children("."+f.panel+"_search").length)return o();var s=o('<div class="'+f.panel+'_search " />').append("<ul />").appendTo(this.$pnls);switch(n.panel.id&&s.attr("id",n.panel.id),n.panel.title&&s.attr("data-mm-title",n.panel.title),n.panel.fx){case!1:break;case"none":s.addClass(f.panel+"_noanimation");break;default:s.addClass(f.panel+"_fx-"+n.panel.fx)}return n.panel.splash&&s.append('<div class="'+f.panel+'__searchsplash">'+n.panel.splash+"</div>"),this._initPanels(s),s},o[n].prototype._initSearchfield=function(e){var n=this.opts[_],s=this.conf[_];if(e.parent("."+f.listitem+"_vertical").length)return o();if(e.find("."+f.searchfield).length)return e.find("."+f.searchfield);var a=o("<"+(s.form?"form":"div")+' class="'+f.searchfield+'" />'),t=o('<div class="'+f.searchfield+'__input" />'),i=o('<input placeholder="'+this.i18n(n.placeholder)+'" type="text" autocomplete="off" />');return t.append(i).appendTo(a),e.prepend(a),e.hasClass(f.panel)&&e.addClass(f.panel+"_has-searchfield"),l(i,s.input),s.clear&&o('<a class="'+f.btn+" "+f.btn+"_close "+f.searchfield+'__btn" href="#" />').appendTo(t),l(a,s.form),s.form&&s.submit&&!s.clear&&o('<a class="'+f.btn+" "+f.btn+"_next "+f.searchfield+'__btn" href="#" />').appendTo(t),n.cancel&&o('<a href="#" class="'+f.searchfield+'__cancel">'+this.i18n("cancel")+"</a>").appendTo(a),a},o[n].prototype._initSearching=function(e){var n=this,s=this.opts[_],a=(this.conf[_],{});e.closest("."+f.panel+"_search").length?(a.$pnls=this.$pnls.find("."+f.panel),a.$nrsp=e.closest("."+f.panel)):e.closest("."+f.panel).length?(a.$pnls=e.closest("."+f.panel),a.$nrsp=a.$pnls):(a.$pnls=this.$pnls.find("."+f.panel),a.$nrsp=this.$menu),a.$pnls=a.$pnls.not(function(){return o(this).parent("."+f.listitem+"_vertical").length}),s.panel.add&&(a.$pnls=a.$pnls.not("."+f.panel+"_search"));var t=e.find("input"),i=e.find("."+f.searchfield+"__cancel"),l=this.$pnls.children("."+f.panel+"_search"),d=a.$pnls.find("."+f.listitem);a.$itms=d.not("."+f.listitem+"_divider"),a.$dvdr=d.filter("."+f.listitem+"_divider"),s.panel.add&&s.panel.splash&&t.off(h.focus+"-"+_+"-splash").on(h.focus+"-"+_+"-splash",function(e){n.openPanel(l)}),s.cancel&&(t.off(h.focus+"-"+_+"-cancel").on(h.focus+"-"+_+"-cancel",function(e){i.addClass(f.searchfield+"__cancel-active")}),i.off(h.click+"-"+_+"-splash").on(h.click+"-"+_+"-splash",function(e){e.preventDefault(),o(this).removeClass(f.searchfield+"__cancel-active"),l.hasClass(f.panel+"_opened")&&n.openPanel(n.$pnls.children("."+f.panel+"_opened-parent").last())})),s.panel.add&&"panel"==s.addTo&&this.bind("openPanel:finish",function(e){e[0]===l[0]&&t.focus()}),t.data(u.searchfield,a).off(h.input+"-"+_).on(h.input+"-"+_,function(e){(function(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1})(e.keyCode)||n.search(t)}),this.search(t)},o[n].prototype._initNoResultsMsg=function(e){var n=this.opts[_];this.conf[_];if(e.closest("."+f.panel).length||(e=this.$pnls.children("."+f.panel).first()),!e.children("."+f.panel+"__noresultsmsg").length){var s=e.children("."+f.listview).first(),a=o('<div class="'+f.panel+"__noresultsmsg "+f.hidden+'" />').append(this.i18n(n.noResults));s.length?a.insertAfter(s):a.prependTo(e)}},o[n].prototype.search=function(a,s){var t=this,i=this.opts[_];this.conf[_];a=a||this.$menu.find("."+f.searchfield).chidren("input").first(),s=(s=s||a.val()).toLowerCase().trim();var e=a.data(u.searchfield),n=a.closest("."+f.searchfield).find("."+f.btn),l=this.$pnls.children("."+f.panel+"_search"),d=e.$pnls,h=e.$itms,r=e.$dvdr,c=e.$nrsp;if(h.removeClass(f.listitem+"_nosubitems").find("."+f.btn+"_fullwidth-search").removeClass(f.btn+"_fullwidth-search "+f.btn+"_fullwidth"),l.children("."+f.listview).empty(),d.scrollTop(0),s.length){if(h.add(r).addClass(f.hidden),h.each(function(){var e=o(this),n="a";(i.showTextItems||i.showSubPanels&&e.find("."+f.btn+"_next"))&&(n="a, span"),-1<e.children(n).not("."+f.btn+"_next").text().toLowerCase().indexOf(s)&&e.removeClass(f.hidden)}),i.panel.add){var p=o();d.each(function(){var e=t.__filterListItems(o(this).find("."+f.listitem)).clone(!0);e.length&&(i.panel.dividers&&(p=p.add('<li class="'+f.listitem+" "+f.listitem+'_divider">'+o(this).find("."+f.navbar+"__title").text()+"</li>")),p=p.add(e))}),p.find("."+f.mm("toggle")).remove().end().find("."+f.mm("check")).remove().end().find("."+f.btn).remove(),l.children("."+f.listview).append(p),this.openPanel(l)}else i.showSubPanels&&d.each(function(e){var n=o(this);t.__filterListItems(n.find("."+f.listitem)).each(function(){var e=o(this).data(u.child);e&&e.find("."+f.listview).children().removeClass(f.hidden)})}),o(d.get().reverse()).each(function(e){var n=o(this),s=n.data(u.parent);s&&(t.__filterListItems(n.find("."+f.listitem)).length?s.hasClass(f.hidden)&&s.removeClass(f.hidden).children("."+f.btn+"_next").not("."+f.btn+"_fullwidth").addClass(f.btn+"_fullwidth").addClass(f.btn+"_fullwidth-search"):a.closest("."+f.panel).length||((n.hasClass(f.panel+"_opened")||n.hasClass(f.panel+"_opened-parent"))&&setTimeout(function(){t.openPanel(s.closest("."+f.panel))},(e+1)*(1.5*t.conf.openingInterval)),s.addClass(f.listitem+"_nosubitems")))}),this.__filterListItems(d.find("."+f.listitem)).each(function(){o(this).prevAll("."+f.listitem+"_divider").first().removeClass(f.hidden)});n.removeClass(f.hidden),c.find("."+f.panel+"__noresultsmsg")[h.not("."+f.hidden).length?"addClass":"removeClass"](f.hidden),i.panel.add&&(i.panel.splash&&l.find("."+f.panel+"__searchsplash").addClass(f.hidden),h.add(r).removeClass(f.hidden))}else h.add(r).removeClass(f.hidden),n.addClass(f.hidden),c.find("."+f.panel+"__noresultsmsg").addClass(f.hidden),i.panel.add&&(i.panel.splash?l.find("."+f.panel+"__searchsplash").removeClass(f.hidden):a.closest("."+f.panel+"_search").length||this.openPanel(this.$pnls.children("."+f.panel+"_opened-parent").last()));this.trigger("updateListview")}}(jQuery);
!function(d){var h,t,e="mmenu",o="sectionIndexer";d[e].addons[o]={setup:function(){var s=this,i=this.opts[o];this.conf[o];d[e].glbl,"boolean"==typeof i&&(i={add:i}),"object"!=typeof i&&(i={}),i=this.opts[o]=d.extend(!0,{},d[e].defaults[o],i);var r=null;this.bind("initPanels:after",function(e){if(i.add){var a;switch(i.addTo){case"panels":a=e;break;default:a=(a=d(i.addTo,this.$menu)).filter("."+h.panel)}a.find("."+h.listitem+"_divider").closest("."+h.panel).addClass(h.panel+"_has-sectionindexer"),r||(r=d('<div class="'+h.sectionindexer+'" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>')).on(t.mouseover+"-"+o+" "+t.touchstart+"-"+o,"a",function(e){var a=d(e.target).attr("href").slice(1),n=s.$pnls.children("."+h.panel+"_opened"),i=n.find("."+h.listview),r=-1,t=n.scrollTop();n.scrollTop(0),i.children("."+h.listitem+"_divider").not("."+h.hidden).each(function(){r<0&&a==d(this).text().slice(0,1).toLowerCase()&&(r=d(this).position().top)}),n.scrollTop(-1<r?r:t)});var n=function(e){e=e||this.$pnls.children("."+h.panel+"_opened"),this.$menu[(e.hasClass(h.panel+"_has-sectionindexer")?"add":"remove")+"Class"](h.menu+"_has-sectionindexer")};this.bind("openPanel:start",n),this.bind("initPanels:after",n)}})},add:function(){h=d[e]._c,d[e]._d,t=d[e]._e,h.add("sectionindexer"),t.add("mouseover")},clickAnchor:function(e,a){if(e.parent().is("."+h.indexer))return!0}},d[e].defaults[o]={add:!1,addTo:"panels"}}(jQuery);
!function(t){var s,a,l="mmenu",r="setSelected";t[l].addons[r]={setup:function(){var n=this,e=this.opts[r];this.conf[r];if(t[l].glbl,"boolean"==typeof e&&(e={hover:e,parent:e}),"object"!=typeof e&&(e={}),"detect"==(e=this.opts[r]=t.extend(!0,{},t[l].defaults[r],e)).current){var i=function(e){e=e.split("?")[0].split("#")[0];var t=n.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');t.length?n.setSelected(t.parent(),!0):(e=e.split("/").slice(0,-1)).length&&i(e.join("/"))};this.bind("initMenu:after",function(){i(window.location.href)})}else e.current||this.bind("initListview:after",function(e){e.find("."+s.listview).children("."+s.listitem+"_selected").removeClass(s.listitem+"_selected")});e.hover&&this.bind("initMenu:after",function(){this.$menu.addClass(s.menu+"_selected-hover")}),e.parent&&(this.bind("openPanel:finish",function(e){this.$pnls.find("."+s.listview).find("."+s.listitem+"_selected-parent").removeClass(s.listitem+"_selected-parent");for(var t=e.data(a.parent);t;)t.not("."+s.listitem+"_vertical").addClass(s.listitem+"_selected-parent"),t=t.closest("."+s.panel).data(a.parent)}),this.bind("initMenu:after",function(){this.$menu.addClass(s.menu+"_selected-parent")}))},add:function(){s=t[l]._c,a=t[l]._d,t[l]._e},clickAnchor:function(e,t){}},t[l].defaults[r]={current:!0,hover:!1,parent:!1}}(jQuery);
!function(a){var n,t,l="mmenu",i="sidebar";a[l].addons[i]={setup:function(){if(this.opts.offCanvas){var e=this.opts[i];this.conf[i];t=a[l].glbl,("string"==typeof e||"boolean"==typeof e&&e||"number"==typeof e)&&(e={expanded:e}),"object"!=typeof e&&(e={}),"boolean"==typeof e.collapsed&&e.collapsed&&(e.collapsed="all"),"string"!=typeof e.collapsed&&"number"!=typeof e.collapsed||(e.collapsed={use:e.collapsed}),"object"!=typeof e.collapsed&&(e.collapsed={}),"number"==typeof e.collapsed.use&&(e.collapsed.use="(min-width: "+e.collapsed.use+"px)"),"boolean"==typeof e.expanded&&e.expanded&&(e.expanded="all"),"string"!=typeof e.expanded&&"number"!=typeof e.expanded||(e.expanded={use:e.expanded}),"object"!=typeof e.expanded&&(e.expanded={}),"number"==typeof e.expanded.use&&(e.expanded.use="(min-width: "+e.expanded.use+"px)"),e=this.opts[i]=a.extend(!0,{},a[l].defaults[i],e);var d=n.wrapper+"_sidebar-collapsed";e.collapsed.size&&(d+=" "+n.wrapper+"_sidebar-collapsed-"+e.collapsed.size);var s=n.wrapper+"_sidebar-expanded";e.expanded.size&&(s+=" "+n.wrapper+"_sidebar-expanded-"+e.expanded.size),e.collapsed.use&&(this.bind("initMenu:after",function(){this.$menu.addClass(n.menu+"_sidebar-collapsed"),e.collapsed.blockMenu&&this.opts.offCanvas&&!this.$menu.children("."+n.menu+"__blocker").length&&this.$menu.prepend('<a class="'+n.menu+'__blocker" href="#'+this.$menu.attr("id")+'" />'),e.collapsed.hideNavbar&&this.$menu.addClass(n.menu+"_hidenavbar"),e.collapsed.hideDivider&&this.$menu.addClass(n.menu+"_hidedivider")}),"boolean"==typeof e.collapsed.use?this.bind("initMenu:after",function(){t.$html.addClass(d)}):this.matchMedia(e.collapsed.use,function(){t.$html.addClass(d)},function(){t.$html.removeClass(d)})),e.expanded.use&&(this.bind("initMenu:after",function(){this.$menu.addClass(n.menu+"_sidebar-expanded")}),"boolean"==typeof e.expanded.use?this.bind("initMenu:after",function(){t.$html.addClass(s),this.open()}):this.matchMedia(e.expanded.use,function(){t.$html.addClass(s),t.$html.hasClass(n.wrapper+"_sidebar-closed")||this.open()},function(){t.$html.removeClass(s),this.close()}),this.bind("close:start",function(){t.$html.hasClass(s)&&t.$html.addClass(n.wrapper+"_sidebar-closed")}),this.bind("open:start",function(){t.$html.removeClass(n.wrapper+"_sidebar-closed")}))}},add:function(){n=a[l]._c,a[l]._d,a[l]._e},clickAnchor:function(e,d,s){if(this.opts[i].expanded.use&&t.$html.is("."+n.wrapper+"_sidebar-expanded")&&d&&s)return{close:!1}}},a[l].defaults[i]={collapsed:{use:!1,blockMenu:!0,hideDivider:!1,hideNavbar:!0},expanded:{use:!1}},a[l].configuration[i]={}}(jQuery);
!function(n){var l,t="mmenu",e="toggles";n[t].addons[e]={setup:function(){var s=this;this.opts[e],this.conf[e];n[t].glbl,this.bind("initPanels:after",function(t){this.__refactorClass(t.find("input"),this.conf.classNames[e].toggle,l.toggle),this.__refactorClass(t.find("input"),this.conf.classNames[e].check,l.check),t.find("input."+l.toggle+", input."+l.check).each(function(){var t=n(this),e=t.closest("li"),c=t.hasClass(l.toggle)?"toggle":"check",i=t.attr("id")||s.__getUniqueId();e.children('label[for="'+i+'"]').length||(t.attr("id",i),e.prepend(t),n('<label for="'+i+'" class="'+l[c]+'"></label>').insertAfter(e.children("."+l.listitem+"__text").last()))})})},add:function(){l=n[t]._c,n[t]._d,n[t]._e,l.add("toggle check")},clickAnchor:function(t,e){}},n[t].configuration.classNames[e]={toggle:"Toggle",check:"Check"}}(jQuery);
!function(d){var s="mmenu";d[s].addons.navbars.breadcrumbs=function(a,r,i){var n=this,b=d[s]._c,c=d[s]._d;b.add("separator");var e=d('<span class="'+b.navbar+'__breadcrumbs" />').appendTo(a);this.bind("initNavbar:after",function(a){if(!a.children("."+b.navbar).children("."+b.navbar+"__breadcrumbs").length){a.removeClass(b.panel+"_has-navbar");for(var r=[],n=d('<span class="'+b.navbar+'__breadcrumbs"></span>'),e=a,s=!0;e&&e.length;){if(e.is("."+b.panel)||(e=e.closest("."+b.panel)),!e.parent("."+b.listitem+"_vertical").length){var t=e.children("."+b.navbar).children("."+b.navbar+"__title").text();t.length&&r.unshift(s?"<span>"+t+"</span>":'<a href="#'+e.attr("id")+'">'+t+"</a>"),s=!1}e=e.data(c.parent)}i.breadcrumbs.removeFirst&&r.shift(),n.append(r.join('<span class="'+b.separator+'">'+i.breadcrumbs.separator+"</span>")).appendTo(a.children("."+b.navbar))}}),this.bind("openPanel:start",function(a){var r=a.find("."+b.navbar+"__breadcrumbs");r.length&&e.html(r.html()||"")}),this.bind("initNavbar:after:sr-aria",function(a){a.children("."+b.navbar).children("."+b.breadcrumbs).children("a").each(function(){n.__sr_aria(d(this),"owns",d(this).attr("href").slice(1))})})}}(jQuery);
!function(s){var r="mmenu";s[r].addons.navbars.close=function(t,e){var n=s[r]._c;s[r].glbl;n.add("close");var a=s('<a class="'+n.btn+" "+n.btn+"_close "+n.navbar+'__btn" href="#" />').appendTo(t);this.bind("setPage:after",function(t){a.attr("href","#"+t.attr("id"))}),this.bind("setPage:after:sr-text",function(t){a.html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(a,"owns",a.attr("href").slice(1))})}}(jQuery);
!function(h){var d="mmenu",o="navbars";h[d].addons[o].next=function(a,n){var t,e,s,r=h[d]._c,i=h('<a class="'+r.btn+" "+r.btn+"_next "+r.navbar+'__btn" href="#" />').appendTo(a);this.bind("openPanel:start",function(a){t=a.find("."+this.conf.classNames[o].panelNext),e=t.attr("href"),s=t.html(),e?i.attr("href",e):i.removeAttr("href"),i[e||s?"removeClass":"addClass"](r.hidden),i.html(s)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(i,"hidden",i.hasClass(r.hidden)),this.__sr_aria(i,"owns",(i.attr("href")||"").slice(1))})},h[d].configuration.classNames[o].panelNext="Next"}(jQuery);
!function(h){var l="mmenu",d="navbars";h[l].addons[d].prev=function(a,n){var r,e,t,i=h[l]._c,s=h('<a class="'+i.btn+" "+i.btn+"_prev "+i.navbar+'__btn" href="#" />').appendTo(a);this.bind("initNavbar:after",function(a){a.removeClass(i.panel+"_has-navbar")}),this.bind("openPanel:start",function(a){a.parent("."+i.listitem+"_vertical").length||((r=a.find("."+this.conf.classNames[d].panelPrev)).length||(r=a.children("."+i.navbar).children("."+i.btn+"_prev")),e=r.attr("href"),t=r.html(),e?s.attr("href",e):s.removeAttr("href"),s[e||t?"removeClass":"addClass"](i.hidden),s.html(t))}),this.bind("initNavbar:after:sr-aria",function(a){var n=a.children("."+i.navbar);this.__sr_aria(n,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(s,"hidden",s.hasClass(i.hidden)),this.__sr_aria(s,"owns",(s.attr("href")||"").slice(1))})},h[l].configuration.classNames[d].panelPrev="Prev"}(jQuery);
!function(t){var a="mmenu";t[a].addons.navbars.searchfield=function(s,e){t[a]._c;"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=s}}(jQuery);
!function(i){var o="mmenu",c="navbars";i[o].addons[c].tabs=function(a,e,t){var s=i[o]._c,r=i[o]._d,n=i[o]._e,l=this,d=a.children("a");a.addClass(s.navbar+"_tabs").parent().addClass(s.navbars+"_has-tabs"),d.on(n.click+"-"+c,function(a){a.preventDefault();var e=i(this);if(e.hasClass(s.navbar+"__tab_selected"))a.stopImmediatePropagation();else try{l.openPanel(i(e.attr("href")),!1),a.stopImmediatePropagation()}catch(a){}}),this.bind("openPanel:start",function a(e){d.removeClass(s.navbar+"__tab_selected");var t=d.filter('[href="#'+e.attr("id")+'"]');if(t.length)t.addClass(s.navbar+"__tab_selected");else{var n=e.data(r.parent);n&&n.length&&a(n.closest("."+s.panel))}})}}(jQuery);
!function(h){var d="mmenu",o="navbars";h[d].addons[o].title=function(t,a){var e,n,i,r,s=h[d]._c,l=h('<a class="'+s.navbar+'__title" />').appendTo(t);this.bind("openPanel:start",function(t){t.parent("."+s.listitem+"_vertical").length||((i=t.find("."+this.conf.classNames[o].panelTitle)).length||(i=t.children("."+s.navbar).children("."+s.navbar+"__title")),e=i.attr("href"),n=i.html()||a.title,e?l.attr("href",e):l.removeAttr("href"),l[e||n?"removeClass":"addClass"](s.hidden),l.html(n))}),this.bind("openPanel:start:sr-aria",function(t){if(this.opts.screenReader.text&&(r||(r=this.$menu.children("."+s.navbars+"_top, ."+s.navbars+"_bottom").children("."+s.navbar).children("."+s.btn+"_prev")),r.length)){var a=!0;"parent"==this.opts.navbar.titleLink&&(a=!r.hasClass(s.hidden)),this.__sr_aria(l,"hidden",a)}})},h[d].configuration.classNames[o].panelTitle="Title"}(jQuery);
jQuery.mmenu.wrappers.angular=function(){this.opts.onClick={close:!0,preventDefault:!1,setSelected:!0}};
!function(a){a.mmenu.wrappers.bootstrap3=function(){if(this.$menu.hasClass("navbar-collapse")){this.conf.classNames.selected="active",this.conf.classNames.divider="divider",this.conf.clone=!0,this.opts.hooks=this.opts.hooks||{};for(var n="",a=["nav-tabs","nav-pills","navbar-nav"],e=0;e<a.length;e++)if(this.$menu.find("."+a[e]).length){n=a[e];break}n.length&&(this.opts.hooks["initMenu:before"]=function(){"navbar-nav"==n&&this.$menu.wrapInner("<div />")},this.opts.hooks["initMenu:after"]=function(){t.menu.call(this),t.dropdown.call(this),t[n.split("nav-").join("").split("-nav").join("")].call(this)})}};var t={menu:function(){this.$menu.find(".nav").removeClass("nav").end().find(".sr-only").remove().end().find(".divider:empty").remove();for(var n=["role","aria-haspopup","aria-expanded"],a=0;a<n.length;a++)this.$menu.find("["+n[a]+"]").removeAttr(n[a])},dropdown:function(){var n=this.$menu.find(".dropdown");n.removeClass("dropdown"),n.children(".dropdown-toggle").find(".caret").remove().end().each(function(){a(this).replaceWith("<span>"+a(this).html()+"</span>")}),n.children(".dropdown-menu").removeClass("dropdown-menu")},tabs:function(){this.$menu.find(".nav-tabs").removeClass("nav-tabs")},pills:function(){this.$menu.find(".nav-pills").removeClass("nav-pills")},navbar:function(){var a=this;this.$menu.removeClass("collapse navbar-collapse").find('[class*="navbar-"]').removeClass("navbar-left navbar-right navbar-nav navbar-text navbar-btn");var n=this.$menu.find(".navbar-form");this.conf.searchform={form:{action:n.attr("action"),method:n.attr("method")},input:{name:n.find("input").attr("name")},submit:!0},n.remove(),(this.$orig||this.$menu).closest(".navbar").find(".navbar-header").find(".navbar-toggle").off("click").on("click",function(n){a.open(),n.stopImmediatePropagation(),n.preventDefault()})}}}(jQuery);
!function(i){function s(n){for(var a=i("<a />"),e=["href","title","target"],t=0;t<e.length;t++)void 0!==n.attr(e[t])&&a.attr(e[t],n.attr(e[t]));return a.html(n.html()),a.find(".sr-only").remove(),a}function o(n){var e=i("<ul />");return n.children().each(function(){var n=i(this),a=i("<li />");n.hasClass("dropdown-divider")?a.addClass("Divider"):n.hasClass("dropdown-item")&&a.append(s(n)),e.append(a)}),e}i.mmenu.wrappers.bootstrap4=function(){var e=this;if(this.$menu.hasClass("navbar-collapse")){this.conf.clone=!1;var n=i("<nav />"),r=i("<div />");n.append(r),this.$menu.children().each(function(){var n,t,a=i(this);switch(!0){case a.hasClass("navbar-nav"):r.append((n=a,t=i("<ul />"),n.find(".nav-item").each(function(){var n=i(this),a=i("<li />");if(n.hasClass("active")&&a.addClass("Selected"),!n.hasClass("nav-link")){var e=n.children(".dropdown-menu");e.length&&a.append(o(e)),n=n.children(".nav-link")}a.prepend(s(n)),t.append(a)}),t));break;case a.hasClass("dropdown-menu"):r.append(o(a));break;case a.hasClass("form-inline"):e.conf.searchfield.form={action:a.attr("action")||null,method:a.attr("method")||null},e.conf.searchfield.input={name:a.find("input").attr("name")||null},e.conf.searchfield.clear=!1,e.conf.searchfield.submit=!0;break;default:r.append(a.clone(!0))}}),this.bind("initMenu:before",function(){n.prependTo("body"),this.$menu=n}),this.$menu.parent().find(".navbar-toggler").removeAttr("data-target").removeAttr("aria-controls").off("click").on("click",function(n){n.preventDefault(),n.stopImmediatePropagation(),e[e.vars.opened?"close":"open"]()})}}}(jQuery);
!function(n){n.mmenu.wrappers.jqueryMobile=function(){var t=this;this.opts.onClick.close=!1,this.conf.offCanvas.page.selector="div.ui-page-active",n("body").on("pagecontainerchange",function(e,n){"function"==typeof t.close&&(t.close(),t.setPage(n.toPage))}),this.bind("initAnchors:after",function(){n("body").on("click",".mm-listview a",function(e){e.isDefaultPrevented()||(e.preventDefault(),n("body").pagecontainer("change",n(this).attr("href")))})})}}(jQuery);
jQuery.mmenu.wrappers.magento=function(){this.conf.classNames.selected="active"};
jQuery.mmenu.wrappers.olark=function(){this.conf.offCanvas.page.noSelector.push("#olark")};
!function(o){var r="mmenu";o[r].wrappers.turbolinks=function(){var n,t;o(document).on("turbolinks:before-visit",function(){t=o("html"),n=t.attr("class"),n=o.grep(n.split(/\s+/),function(n){return!/mm-/.test(n)}).join(" ")}).on("turbolinks:load",function(){void 0!==t&&(t.attr("class",n),o[r].glbl=!1)})}}(jQuery);
!function(s){s.mmenu.wrappers.wordpress=function(){this.conf.classNames.selected="current-menu-item",s("#wpadminbar").css("position","fixed").addClass("mm-slideout")}}(jQuery);
jQuery.mmenu.i18n({Menu:"Menü"},"de");
jQuery.mmenu.i18n({"Close menu":"Menü schließen","Close submenu":"Untermenü schließen","Open submenu":"Untermenü öffnen","Toggle submenu":"Untermenü wechseln"},"de");
jQuery.mmenu.i18n({Search:"Suche","No results found.":"Keine Ergebnisse gefunden.",cancel:"beenden"},"de");
jQuery.mmenu.i18n({Menu:"Menu"},"nl");
jQuery.mmenu.i18n({"Close menu":"Menu sluiten","Close submenu":"Submenu sluiten","Open submenu":"Submenu openen","Toggle submenu":"Submenu wisselen"},"nl");
jQuery.mmenu.i18n({Search:"Zoeken","No results found.":"Geen resultaten gevonden.",cancel:"annuleren"},"nl");
jQuery.mmenu.i18n({Menu:"Меню"},"ru");
jQuery.mmenu.i18n({"Close menu":"Закрыть меню","Close submenu":"Закрыть подменю","Open submenu":"Открыть подменю","Toggle submenu":"Переключить подменю"},"ru");
jQuery.mmenu.i18n({Search:"Найти","No results found.":"Ничего не найдено.","Search results":"Результаты поиска"},"ru");
return true;
}));

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()});b.$results.find(".select2-results__option[aria-selected]").each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):h-g<0&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");if("true"===c.attr("aria-selected"))return void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{}));d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2");a(".select2.select2-container--open").each(function(){var b=a(this);this!=d[0]&&b.data("element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===e.$search.val()){var b=e.$searchContainer.prev(".select2-selection__choice");if(b.length>0){var d=b.data("data");e.searchRemoveChoice(d),a.preventDefault()}}});var f=document.documentMode,g=f&&f<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(g)return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),void 0!==a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(null!=(b=c.data(a[0],"data")))return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
;$(function() {


  // $('[data-title]').on('click', function() {
  //   $('[name="feedback_models_FeedbackModel[hidden]"]').val($(this).data('title'));
  // });

  $('.learn-slider-content').slick({
    dots: true,
    appendDots: '.learn-slider-dots',
    appendArrows: '.learn-slider-arrows',
    prevArrow: '<i class="fas fa-play slick-prev"></i>',
    nextArrow: '<i class="fas fa-play slick-next"></i>',
    speed: 800,
    autoplay: true,
  });

  $('.learn-teachers-slider-content').slick({
    appendArrows: '.learn-teachers-slider-arrows',
    prevArrow: '<i class="fas fa-play slick-prev"></i>',
    nextArrow: '<i class="fas fa-play slick-next"></i>',
    speed: 800,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          adaptiveHeight: true,
        }
      },
    ]
  });

  $('.learn-gallery-slider-content').slick({
  dots: true,
  appendDots: '.learn-gallery-slider-dots',
  appendArrows: '.learn-gallery-slider-arrows',
  prevArrow: '<i class="fas fa-play slick-prev"></i>',
  nextArrow: '<i class="fas fa-play slick-next"></i>',
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  // draggable:false,
  speed: 350,
  // infinite: true,
  // cssEase: 'linear',
  // infinite: false,
  // variableWidth: true,
  // infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
        draggable:true,
      }
    },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToShow: 1
    //   }
    // }
  ]
});

$('.entertain-about-slider-content').slick({
  dots: true,
  nextArrow: $('.entertain-about-slider-arrows .slick-next'),
  prevArrow: $('.entertain-about-slider-arrows .slick-prev'),
  appendDots: '.entertain-about-slider-dots',
  // appendArrows: '.entertain-about-slider-arrows',
  // prevArrow: '<i class="fas fa-play slick-prev"></i>',
  // nextArrow: '<i class="fas fa-play slick-next"></i>',
  // speed: 800,
  autoplay: true,
});

  var $menu = $("#nav-menu").mmenu({
    extensions: [
      "fx-menu-slide",
      "pagedim-black",
      // "position-right"
    ],
    // slidingSubmenus: false,
    navbar: {
      title: '<a href="/"><img src="/images/m-logo.png"/></a>',
    },
   //  navbars: [
   //    {
   //       "position": "bottom",
   //       "content": [
   //         navbar
   //       ]
   //    },
   //    {
   //       "position": "top",
   //       "content": [
   //         navbar2
   //       ]
   //    }
   // ]
  }, {
      clone: true,
  });

  var $hamburger = $(".header-hamburger");
  var apiMmenu = $menu.data( "mmenu" );

  if (apiMmenu) {
    $hamburger.on( "click", function() {
      if ($(this).find('.hamburger').hasClass("is-active")) {
        apiMmenu.close();
      } else {
        apiMmenu.open();
      }
    });
    //
    apiMmenu.bind( "open:finish", function() {
       setTimeout(function() {
          $hamburger.find('.hamburger').addClass( "is-active" );
       }, 100);
    });
    apiMmenu.bind( "close:finish", function() {
       setTimeout(function() {
          $hamburger.find('.hamburger').removeClass( "is-active" );
       }, 100);
    });

    $('.mm-listview li a').click(function() {
      apiMmenu.close();
    });
  }

  $("#nav-menu a, .mm-listitem a").click(function() {
    link = $(this).attr("href").split('/');
    link = link[link.length - 1];

      $("html, body").animate({
         scrollTop: $(link).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

});
