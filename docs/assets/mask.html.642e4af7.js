import{_ as o,r as n,o as s,c as h,a as e,b as t,w as i,e as l,d as r}from"./app.45c0737b.js";const d={},p=l('<h1 id="stagemask" tabindex="-1"><a class="header-anchor" href="#stagemask" aria-hidden="true">#</a> StageMask</h1><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> core</h3>',3),c=e("strong",null,"\u7C7B\u578B\uFF1A",-1),u=r(),g=r("StageCore"),m=e("li",null,[e("p",null,[e("strong",null,"\u8BE6\u60C5\uFF1A")])],-1),f=l('<p>StageCore\u5B9E\u4F8B</p><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><h3 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> content</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLDivElement</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u8499\u5C42\u7684Dom\u8282\u70B9</p><h3 id="wrapper" tabindex="-1"><a class="header-anchor" href="#wrapper" aria-hidden="true">#</a> wrapper</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLDivElement</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u8499\u5C42\u7684\u5BB9\u5668Dom\u8282\u70B9\uFF0C\u7528\u4E8E\u5B9E\u73B0\u6EDA\u52A8</p><h3 id="core-1" tabindex="-1"><a class="header-anchor" href="#core-1" aria-hidden="true">#</a> core</h3>',9),_=e("strong",null,"\u7C7B\u578B\uFF1A",-1),x=r(),b=r("StageCore"),w=e("li",null,[e("p",null,[e("strong",null,"\u8BE6\u60C5\uFF1A")])],-1),v=l('<p>StageCore\u5B9E\u4F8B</p><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLElement | null</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u5F53\u524D\u9875\u9762\u7EC4\u4EF6Dom\u8282\u70B9</p><h3 id="pagescrollparent" tabindex="-1"><a class="header-anchor" href="#pagescrollparent" aria-hidden="true">#</a> pageScrollParent</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> HTMLElement | null</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u9875\u9762\u7EC4\u4EF6\u7684\u6EDA\u52A8\u7236\u8282\u70B9</p><h3 id="scrolltop" tabindex="-1"><a class="header-anchor" href="#scrolltop" aria-hidden="true">#</a> scrollTop</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u5782\u76F4\u6EDA\u52A8\u4F4D\u79FB</p><h3 id="scrollleft" tabindex="-1"><a class="header-anchor" href="#scrollleft" aria-hidden="true">#</a> scrollLeft</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u6C34\u5E73\u6EDA\u52A8\u4F4D\u79FB</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u8499\u5C42\u5BBD\u5EA6\uFF0C\u4E0D\u5E94\u8BE5\u624B\u52A8\u8BBE\u7F6E\uFF0C\u4F1A\u81EA\u52A8\u540C\u6B65<a href="#page">page</a></p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u8499\u5C42\u9AD8\u5EA6\uFF0C\u4E0D\u5E94\u8BE5\u624B\u52A8\u8BBE\u7F6E\uFF0C\u4F1A\u81EA\u52A8\u540C\u6B65<a href="#page">page</a></p><h3 id="wrapperheight" tabindex="-1"><a class="header-anchor" href="#wrapperheight" aria-hidden="true">#</a> wrapperHeight</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u8499\u5C42\u5BB9\u5668\u9AD8\u5EA6</p><h3 id="wrapperwidth" tabindex="-1"><a class="header-anchor" href="#wrapperwidth" aria-hidden="true">#</a> wrapperWidth</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u8499\u5C42\u5BB9\u5668\u5BBD\u5EA6</p><h3 id="maxscrolltop" tabindex="-1"><a class="header-anchor" href="#maxscrolltop" aria-hidden="true">#</a> maxScrollTop</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u6700\u5927\u5782\u76F4\u6EDA\u52A8\u4F4D\u79FB</p><h3 id="maxscrollleft" tabindex="-1"><a class="header-anchor" href="#maxscrollleft" aria-hidden="true">#</a> maxScrollLeft</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> number</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p></li></ul><p>\u6700\u5927\u6C34\u5E73\u6EDA\u52A8\u4F4D\u79FB</p><h2 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h2><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h3><ul><li><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>{HTMLDivElement} el</code> \u5C06\u8499\u5C42\u6302\u8F7D\u5230\u8BE5Dom\u8282\u70B9\u4E0A</li></ul></li><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u6302\u8F7DDom\u8282\u70B9</p></li></ul><h3 id="scrollintoview" tabindex="-1"><a class="header-anchor" href="#scrollintoview" aria-hidden="true">#</a> scrollIntoView</h3><ul><li><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>{Element} el</code> \u9700\u8981\u6EDA\u52A8\u7684\u8282\u70B9</li></ul></li><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u5C06\u6307\u5B9A\u8282\u70B9\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF</p></li></ul><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><ul><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u9500\u6BC1\u5B9E\u4F8B</p></li></ul><h3 id="setlayout" tabindex="-1"><a class="header-anchor" href="#setlayout" aria-hidden="true">#</a> setLayout</h3><ul><li><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>{Element} el</code></li></ul></li><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u6839\u636E\u8282\u70B9\u8BBE\u7F6E\u6A21\u5F0F\uFF0C\u56FA\u5B9A\u6A21\u5F0Fwrap\u4E0Econtent\u5BBD\u9AD8\u4FDD\u6301\u4E00\u76F4</p></li></ul>',40);function L(k,S){const a=n("RouterLink");return s(),h("div",null,[p,e("ul",null,[e("li",null,[e("p",null,[c,u,t(a,{to:"/api/stage/core.html"},{default:i(()=>[g]),_:1})])]),m]),f,e("ul",null,[e("li",null,[e("p",null,[_,x,t(a,{to:"/api/stage/core.html"},{default:i(()=>[b]),_:1})])]),w]),v])}var E=o(d,[["render",L],["__file","mask.html.vue"]]);export{E as default};
