import{_ as t,r as i,o as l,c as p,a as n,b as r,e as a,d as s}from"./app.45c0737b.js";const o={},c=a(`<h1 id="m-form" tabindex="-1"><a class="header-anchor" href="#m-form" aria-hidden="true">#</a> m-form</h1><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><h3 id="initvalues" tabindex="-1"><a class="header-anchor" href="#initvalues" aria-hidden="true">#</a> initValues</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> Object</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> {}</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u8868\u5355\u521D\u59CB\u5316\u503C</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>initValues\u5E94\u8BE5\u662F\u4E0Econfig\u4E00\u4E00\u5BF9\u5E94\u7684\uFF0C\u5982\u679CinitValues\u4E2D\u7684key\u6CA1\u6709\u51FA\u73B0\u5728config\u7684name\u4E2D\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u503C\u5C06\u88AB\u4E22\u6389</p></div><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3>`,7),d=n("strong",null,"\u7C7B\u578B\uFF1A",-1),u=s(),h={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts",target:"_blank",rel:"noopener noreferrer"},g=s("FormConfig"),m=n("li",null,[n("p",null,[n("strong",null,"\u9ED8\u8BA4\u503C\uFF1A"),s(" []")])],-1),v=n("li",null,[n("p",null,[n("strong",null,"\u8BE6\u60C5\uFF1A")]),n("p",null,"\u8868\u5355\u914D\u7F6E")],-1),b=n("li",null,[n("p",null,[n("strong",null,"\u793A\u4F8B\uFF1A")])],-1),k=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;multiple&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u591A\u884C\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;switch&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="labelwidth" tabindex="-1"><a class="header-anchor" href="#labelwidth" aria-hidden="true">#</a> labelWidth</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> string | number</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> &#39;200px&#39;</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 &#39;50px&#39;\u3002 \u4F5C\u4E3A Form \u76F4\u63A5\u5B50\u5143\u7D20\u7684 form-item \u4F1A\u7EE7\u627F\u8BE5\u503C\u3002 \u652F\u6301 auto</p></li></ul><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> disabled</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> boolean</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> false</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u662F\u5426\u7981\u7528\u8BE5\u8868\u5355\u5185\u7684\u6240\u6709\u7EC4\u4EF6\u3002 \u82E5\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8868\u5355\u5185\u7EC4\u4EF6\u4E0A\u7684 disabled \u5C5E\u6027\u4E0D\u518D\u751F\u6548</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li></ul><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> string</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> &#39;auto&#39;</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u8868\u5355\u9AD8\u5EA6</p></li></ul><h3 id="stepactive" tabindex="-1"><a class="header-anchor" href="#stepactive" aria-hidden="true">#</a> stepActive</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> string | number</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> 1</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u4F7F\u7528\u4E86 step \u7EC4\u4EF6\u65F6\uFF0C\u9ED8\u8BA4\u7684\u9009\u4E2D\u7684\u6B65\u9AA4\u6570</p></li></ul><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> &#39;medium&#39; | &#39;small&#39; | &#39;mini&#39;</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> &#39;small&#39;</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8</p></li></ul><h3 id="inline" tabindex="-1"><a class="header-anchor" href="#inline" aria-hidden="true">#</a> inline</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> boolean</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> false</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u884C\u5185\u8868\u5355\u6A21\u5F0F</p></li></ul><h3 id="labelposition" tabindex="-1"><a class="header-anchor" href="#labelposition" aria-hidden="true">#</a> labelPosition</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> &#39;right&#39; | &#39;left&#39; | &#39;top&#39;</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> &#39;right&#39;</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C \u5982\u679C\u503C\u4E3A left \u6216\u8005 right \u65F6\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E label-width</p></li></ul><h3 id="keyprop" tabindex="-1"><a class="header-anchor" href="#keyprop" aria-hidden="true">#</a> keyProp</h3><ul><li><p><strong>\u7C7B\u578B\uFF1A</strong> string</p></li><li><p><strong>\u9ED8\u8BA4\u503C\uFF1A</strong> &#39;__key&#39;</p></li><li><p><strong>\u8BE6\u60C5\uFF1A</strong></p><p>\u4F5C\u4E3A\u8868\u5355\u9879\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u7684key</p></li><li><p><strong>\u793A\u4F8B\uFF1A</strong></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u6587\u672C&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__key</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instance-methods" tabindex="-1"><a class="header-anchor" href="#instance-methods" aria-hidden="true">#</a> instance methods</h2><h3 id="submitform" tabindex="-1"><a class="header-anchor" href="#submitform" aria-hidden="true">#</a> submitForm</h3><ul><li><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><code>{boolean}</code> native</li></ul></li><li><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li><code>{Object}</code> \u6574\u4E2A\u8868\u5355\u7684\u503C</li></ul></li><li><p><strong>\u7528\u6CD5\uFF1A</strong></p><p>\u63D0\u4EA4\u8868\u5355\uFF0C\u83B7\u53D6\u8868\u5355\u7684\u503C</p></li></ul>`,21);function f(_,x){const e=i("ExternalLinkIcon");return l(),p("div",null,[c,n("ul",null,[n("li",null,[n("p",null,[d,u,n("a",h,[g,r(e)])])]),m,v,b]),k])}var j=t(o,[["render",f],["__file","form.html.vue"]]);export{j as default};
