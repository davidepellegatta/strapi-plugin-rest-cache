import{f as s,b as r,c as i,g as e,h as t,F as c,j as n,k as a}from"./app.2a4bcf8c.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const l={},h=n('<h1 id="configuration-reference" tabindex="-1"><a class="header-anchor" href="#configuration-reference" aria-hidden="true">#</a> Configuration Reference</h1><h2 id="provider" tabindex="-1"><a class="header-anchor" href="#provider" aria-hidden="true">#</a> Provider</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> <code>name</code></h3><p>The name of the provider.<br> Will try to load the package with <code>strapi-rest-cache-provider-&lt;name&gt;</code> and fallback with <code>&lt;name&gt;</code>, so you can either use a package name or an absolute path.</p><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>&#39;memory&#39;</code></li></ul><h3 id="gettimeout" tabindex="-1"><a class="header-anchor" href="#gettimeout" aria-hidden="true">#</a> <code>getTimeout</code></h3><p>Time in milliseconds to wait for the provider to respond on cache lookup requests, if the provider is not responding, the cache will be considered as a miss</p><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <code>500</code></li></ul><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> <code>options</code></h3><p>Object passed to the provider constructor.</p><ul><li><strong>Type:</strong> <code>any</code></li><li><strong>Default:</strong> <code>{}</code></li></ul><h2 id="cachepluginstrategy" tabindex="-1"><a class="header-anchor" href="#cachepluginstrategy" aria-hidden="true">#</a> CachePluginStrategy</h2><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> <code>debug</code></h3>',13),u=a("Enable extra log with "),p={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},g=a("debug"),f=a(" package. This is usefull only when configuring the plugin."),b=n(`<ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>false</code></li></ul><h3 id="enableetag" tabindex="-1"><a class="header-anchor" href="#enableetag" aria-hidden="true">#</a> <code>enableEtag</code></h3><p>Enable etag generation for response. Also enable etag lookup when <code>If-None-Match</code> header is present on requests. This add extra CPU overhead due to the etag computation but save bandwidth by sending <code>304 Not Modified</code> response.</p><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>false</code></li></ul><h3 id="enablexcacheheaders" tabindex="-1"><a class="header-anchor" href="#enablexcacheheaders" aria-hidden="true">#</a> <code>enableXCacheHeaders</code></h3><p>Add extra <code>X-Cache</code> headers to responses. This is usefull when configuring the plugin or when using behind a reverse proxy.</p><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>false</code></li></ul><h3 id="enableadminctbmiddleware" tabindex="-1"><a class="header-anchor" href="#enableadminctbmiddleware" aria-hidden="true">#</a> <code>enableAdminCTBMiddleware</code></h3><p>Register a middleware to handle cache invalidation requests performed using the admin UI.</p><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>true</code></li></ul><h3 id="resetonstartup" tabindex="-1"><a class="header-anchor" href="#resetonstartup" aria-hidden="true">#</a> <code>resetOnStartup</code></h3><p>Delete all cache entries from the provider on startup. This is usefull when performing a migration using an external cache provider.</p><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>false</code></li></ul><h3 id="clearrelatedcache" tabindex="-1"><a class="header-anchor" href="#clearrelatedcache" aria-hidden="true">#</a> <code>clearRelatedCache</code></h3><p>Try to delete all cache entries related to the deleted entry.</p><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>true</code></li></ul><h3 id="keysprefix" tabindex="-1"><a class="header-anchor" href="#keysprefix" aria-hidden="true">#</a> <code>keysPrefix</code></h3><p>Prefix added to the cache keys.</p><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>&#39;&#39;</code></li></ul><h3 id="hitpass" tabindex="-1"><a class="header-anchor" href="#hitpass" aria-hidden="true">#</a> <code>hitpass</code></h3><p>When true, the cache plugin will not lookup for cache and serve fresh response from backend instead. Also, the response is not stored in the cache.</p><ul><li><strong>Type:</strong> <code>(ctx: Context) =&gt; boolean</code></li><li><strong>Default:</strong></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hitpass</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ignore cache when authorization or cookie headers are present</span>
  <span class="token keyword">return</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>
    ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization <span class="token operator">||</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> <code>keys</code></h3><p>Options used to generate the cache keys.</p><ul><li><strong>Type:</strong> <a href="#cachekeysconfig"><code>CacheKeysConfig</code></a></li></ul><h3 id="maxage" tabindex="-1"><a class="header-anchor" href="#maxage" aria-hidden="true">#</a> <code>maxAge</code></h3><p>Default max age for cached entries.</p><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <code>3600000</code> (1 hour)</li></ul><h3 id="contenttypes" tabindex="-1"><a class="header-anchor" href="#contenttypes" aria-hidden="true">#</a> <code>contentTypes</code></h3><p>Specify each content types that should be cached. If a string is provided, default configuration from <a href="#cachecontenttypeconfig"><code>CacheContentTypeConfig</code></a> will be used</p><ul><li><strong>Type:</strong> <a href="#cachecontenttypeconfig"><code>(string|CacheContentTypeConfig)[]</code></a></li><li><strong>Default:</strong> <code>[]</code></li></ul><h2 id="cachecontenttypeconfig" tabindex="-1"><a class="header-anchor" href="#cachecontenttypeconfig" aria-hidden="true">#</a> CacheContentTypeConfig</h2><h3 id="injectdefaultroutes" tabindex="-1"><a class="header-anchor" href="#injectdefaultroutes" aria-hidden="true">#</a> <code>injectDefaultRoutes</code></h3>`,34),m=a("When enabled, inject "),y={href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-endpoints",target:"_blank",rel:"noopener noreferrer"},x=a("default routes"),k=a(" for each content type."),_=n('<ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>true</code></li></ul><h3 id="hitpass-1" tabindex="-1"><a class="header-anchor" href="#hitpass-1" aria-hidden="true">#</a> <code>hitpass</code></h3><p>When true, the cache plugin will not lookup for cache and serve fresh response from backend instead. Also, the response is not stored in the cache.</p><ul><li><strong>Type:</strong> <code>(ctx: Context) =&gt; boolean | boolean</code></li><li><strong>Default:</strong> <em>(inherit from <code>CachePluginStrategy</code> if set)</em></li></ul><h3 id="routes" tabindex="-1"><a class="header-anchor" href="#routes" aria-hidden="true">#</a> <code>routes</code></h3><p>Additionnal routes to register for this content type.</p><ul><li><strong>Type:</strong> <a href="#cacherouteconfig"><code>CacheRouteConfig[]</code></a></li><li><strong>Default:</strong> <code>[]</code></li></ul><h3 id="contenttype" tabindex="-1"><a class="header-anchor" href="#contenttype" aria-hidden="true">#</a> <code>contentType</code></h3><p>Content-Type UID to cache (e.g. <code>api::article.article</code>).</p><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>&#39;&#39;</code></li></ul><h3 id="keys-1" tabindex="-1"><a class="header-anchor" href="#keys-1" aria-hidden="true">#</a> <code>keys</code></h3><p>Options used to generate the cache keys.</p><ul><li><strong>Type:</strong> <a href="#cachekeysconfig"><code>CacheKeysConfig</code></a></li><li><strong>Default:</strong> <em>(inherit from <code>CachePluginStrategy</code> if set)</em></li></ul><h3 id="maxage-1" tabindex="-1"><a class="header-anchor" href="#maxage-1" aria-hidden="true">#</a> <code>maxAge</code></h3><p>Default max age for cached entries.</p><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <em>(inherit from <code>CachePluginStrategy</code> if set)</em></li></ul><h2 id="cacherouteconfig" tabindex="-1"><a class="header-anchor" href="#cacherouteconfig" aria-hidden="true">#</a> CacheRouteConfig</h2><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> <code>path</code></h3>',18),T=a("Refer to an "),C={href:"https://docs.strapi.io/developer-docs/latest/development/backend-customization/routes.html",target:"_blank",rel:"noopener noreferrer"},w=a("existing route path in strapi"),v=a(" on which the cache middleware will be registered."),D=e("br",null,null,-1),A=a(" A warning will be displayed if the path does not exist."),E=e("ul",null,[e("li",null,[e("strong",null,"Type:"),a(),e("code",null,"string")]),e("li",null,[e("strong",null,"Default:"),a(),e("code",null,"GET")])],-1),P=e("h3",{id:"method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#method","aria-hidden":"true"},"#"),a(),e("code",null,"method")],-1),q=a("Refer to an "),j={href:"https://docs.strapi.io/developer-docs/latest/development/backend-customization/routes.html",target:"_blank",rel:"noopener noreferrer"},R=a("existing route method in strapi"),I=a(" on which the cache middleware will be registered."),S=e("br",null,null,-1),N=a(" A warning will be displayed if the path does not exist."),O=n('<ul><li><strong>Type:</strong> <code>&#39;GET&#39; | &#39;POST&#39; | &#39;PUT&#39; | &#39;PATCH&#39; | &#39;DELETE&#39;</code></li><li><strong>Default:</strong> <code>GET</code></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Cache lookup is performed only on <code>GET</code> requests, and cache invalidation is performed on all other requests.</p></div><h3 id="hitpass-2" tabindex="-1"><a class="header-anchor" href="#hitpass-2" aria-hidden="true">#</a> <code>hitpass</code></h3><p>When true, the cache plugin will not lookup for cache and serve fresh response from backend instead. Also, the response is not stored in the cache.</p><ul><li><strong>Type:</strong> <code>(ctx: Context) =&gt; boolean | boolean</code></li><li><strong>Default:</strong> <em>(inherit from <code>CacheContentTypeConfig</code> if set)</em></li></ul><h3 id="keys-2" tabindex="-1"><a class="header-anchor" href="#keys-2" aria-hidden="true">#</a> <code>keys</code></h3><p>Options used to generate the cache keys.</p><ul><li><strong>Type:</strong> <a href="#cachekeysconfig"><code>CacheKeysConfig</code></a></li><li><strong>Default:</strong> <em>(inherit from <code>CacheContentTypeConfig</code> if set)</em></li></ul><h3 id="maxage-2" tabindex="-1"><a class="header-anchor" href="#maxage-2" aria-hidden="true">#</a> <code>maxAge</code></h3><p>Default max age for cached entries.</p><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <em>(inherit from <code>CacheContentTypeConfig</code> if set)</em></li></ul><h2 id="cachekeysconfig" tabindex="-1"><a class="header-anchor" href="#cachekeysconfig" aria-hidden="true">#</a> CacheKeysConfig</h2><h3 id="usequeryparams" tabindex="-1"><a class="header-anchor" href="#usequeryparams" aria-hidden="true">#</a> <code>useQueryParams</code></h3><p>When set to <code>true</code>, all query parameters will be used to generate the cache key. If an array is provided, only the query parameters specified in the array will be used. You can totally disable query parameters by setting this option to <code>false</code>.</p><ul><li><strong>Type:</strong> <code>boolean|string[]</code></li><li><strong>Default:</strong> <code>true</code></li></ul><h3 id="useheaders" tabindex="-1"><a class="header-anchor" href="#useheaders" aria-hidden="true">#</a> <code>useHeaders</code></h3><p>Headers to use to generate the cache key.</p><ul><li><strong>Type:</strong> <code>string[]</code></li><li><strong>Default:</strong> <code>[]</code></li></ul>',18);function W(B,z){const o=s("ExternalLinkIcon");return r(),i(c,null,[h,e("p",null,[u,e("a",p,[g,t(o)]),f]),b,e("p",null,[m,e("a",y,[x,t(o)]),k]),_,e("p",null,[T,e("a",C,[w,t(o)]),v,D,A]),E,P,e("p",null,[q,e("a",j,[R,t(o)]),I,S,N]),O],64)}var K=d(l,[["render",W]]);export{K as default};
