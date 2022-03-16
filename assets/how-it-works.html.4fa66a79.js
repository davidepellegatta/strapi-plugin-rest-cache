import{f as t,b as r,c as o,h as c,i as n,F as i,j as e,k as d,t as s}from"./app.2a4bcf8c.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const l={},p=e('<h1 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h1><p>This plugin inject a <strong>recv</strong> middleware that caches incoming <code>GET</code> requests on the strapi API, based on query params and Content-Type UID. The cache is automatically busted everytime a <code>PUT</code>, <code>PATCH</code>, <code>POST</code>, or <code>DELETE</code> request comes in or when an entity is updated through the admin panel. It can also be programmatically cleared via exposed services or admin routes.</p><h2 id="journey-to-the-cache" tabindex="-1"><a class="header-anchor" href="#journey-to-the-cache" aria-hidden="true">#</a> Journey to the cache</h2><p>Here is a sequence of the events that happen when a <code>GET</code> request comes in:</p>',4),S=d(s(`
sequenceDiagram
  Client->>Strapi: [GET] /api/restaurants/1
  Note over Strapi: Check HITPASS
  opt HITPASS=true
    Note over Strapi: Call original controller
    Strapi->>Client: Return fresh data
  end
  opt HITPASS=false
    Note over Strapi: Generate cache key:<br />/api/restaurants/1?&
    Strapi->>Cache Store: Has cache?
    alt HIT
      Cache Store->>Strapi: Yes: HIT
      Strapi->>Client: Return cached data
    else MISS
      Cache Store->>Strapi: No: MISS
      Note over Strapi: Call original controller
      Strapi-->>Cache Store: Status between 200 and 300:<br />Store data in cache
      Strapi->>Client: Return fresh data
    end
  end
`)),u=e('<h2 id="cache-key-generation" tabindex="-1"><a class="header-anchor" href="#cache-key-generation" aria-hidden="true">#</a> Cache key generation</h2><h2 id="cache-hit-miss-and-hitpass" tabindex="-1"><a class="header-anchor" href="#cache-hit-miss-and-hitpass" aria-hidden="true">#</a> Cache <code>HIT</code>, <code>MISS</code> and <code>HITPASS</code></h2><h2 id="using-etag-and-if-none-match-headers" tabindex="-1"><a class="header-anchor" href="#using-etag-and-if-none-match-headers" aria-hidden="true">#</a> Using <code>ETag</code> and <code>If-None-Match</code> headers</h2>',3);function m(f,g){const a=t("mermaid");return r(),o(i,null,[p,c(a,{id:"recv-middleware"},{default:n(()=>[S]),_:1}),u],64)}var C=h(l,[["render",m]]);export{C as default};
