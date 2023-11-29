import "cookie";
import "kleur/colors";
import "string-width";
import "mime";
import "html-escaper";
import "clsx";
import "./chunks/astro_ed53d9be.mjs";
import { compile } from "path-to-regexp";

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"));
    else if (proc.argv.includes("--silent"));
    else;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments
    .map((segment) => {
      return (
        "/" +
        segment
          .map((part) => {
            if (part.spread) {
              return `:${part.content.slice(3)}(.*)?`;
            } else if (part.dynamic) {
              return `:${part.content}`;
            } else {
              return part.content
                .normalize()
                .replace(/\?/g, "%3F")
                .replace(/#/g, "%23")
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]")
                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
          })
          .join("")
      );
    })
    .join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash,
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes,
  };
}

const manifest = deserializeManifest({
  adapterName: "@astrojs/netlify/functions",
  routes: [
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "endpoint",
        route: "/_image",
        pattern: "^\\/_image$",
        segments: [[{ content: "_image", dynamic: false, spread: false }]],
        params: [],
        component: "node_modules/astro/dist/assets/endpoint/generic.js",
        pathname: "/_image",
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [
        {
          type: "inline",
          value:
            'document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("days"),t=document.getElementById("hours"),e=document.getElementById("minutes"),o=document.getElementById("seconds");let i=new Date("December 02 2023 16:00:00")-new Date;const x=()=>{console.log(i);const v=Math.max(Math.floor(i/1e3/60/60/24)),a=Math.max(Math.floor(i/1e3/60/60)%24),c=Math.max(Math.floor(i/1e3/60)%60),h=Math.max(Math.floor(i/1e3)%60);v===0&&a===0&&c===0&&h===0&&clearInterval(M),n.innerHTML=v,t.innerHTML=a<10?"0"+a:a,e.innerHTML=c<10?"0"+c:c,o.innerHTML=h<10?"0"+h:h},M=setInterval(()=>{x(),i-=1e3,i<0&&(i=0)},1e3)});var g=!0,m="Invariant failed";function d(n,t){if(!n){if(g)throw new Error(m);var e=typeof t=="function"?t():t,o=e?"".concat(m,": ").concat(e):m;throw new Error(o)}}const w=800,P=.1;class T{x;y;z;xPrev;yPrev;constructor(t=0,e=0,o=0){this.x=t,this.y=e,this.z=o,this.xPrev=t,this.yPrev=e}update(t,e,o){this.xPrev=this.x,this.yPrev=this.y,this.z+=o*.0675,this.x+=this.x*(o*.0225)*this.z,this.y+=this.y*(o*.0225)*this.z,(this.x>t/2||this.x<-t/2||this.y>e/2||this.y<-e/2)&&(this.x=Math.random()*t-t/2,this.y=Math.random()*e-e/2,this.xPrev=this.x,this.yPrev=this.y,this.z=0)}draw(t){t.lineWidth=this.z,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.xPrev,this.yPrev),t.stroke()}}const y=Array.from({length:w},()=>new T(0,0,0));let l=0;const s=document.querySelector("#starfield-canvas");d(s,"canvas should not be null");const r=s.getContext("2d"),u=document.querySelector("#starfield");d(u,"container should not be null");const b=new ResizeObserver(p);b.observe(u);function p(){d(r,"canvas context should not be null"),l>0&&cancelAnimationFrame(l);const{clientWidth:n,clientHeight:t}=u,e=window.devicePixelRatio||1;s.width=n*e,s.height=t*e,s.style.width=`${n}px`,s.style.height=`${t}px`,r.scale(e,e);for(const o of y)o.x=Math.random()*n-n/2,o.y=Math.random()*t-t/2,o.z=0;r.translate(n/2,t/2),r.fillStyle="rgba(0, 0, 0, 0.4)",r.strokeStyle="white",l=requestAnimationFrame(f)}function f(){d(r,"canvas context should not be null");const{clientWidth:n,clientHeight:t}=u;for(const e of y)e.update(n,t,P),e.draw(r);r.fillRect(-n/2,-t/2,n,t),l=requestAnimationFrame(f)}\n',
        },
      ],
      styles: [{ type: "external", src: "/_astro/index.b66f6976.css" }],
      routeData: {
        route: "/",
        type: "page",
        pattern: "^\\/$",
        segments: [],
        params: [],
        component: "src/pages/index.astro",
        pathname: "/",
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: "ignore" },
      },
    },
  ],
  site: "https://astro-moon-landing.netlify.app/",
  base: "/",
  trailingSlash: "ignore",
  compressHTML: true,
  componentMetadata: [
    [
      "C:/dev/astro/josue11/src/pages/index.astro",
      { propagation: "none", containsHead: true },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      "idle",
      '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      "load",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      "media",
      '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      "only",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      "visible",
      '(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    "\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
    "\u0000@astro-renderers": "renderers.mjs",
    "\u0000empty-middleware": "_empty-middleware.mjs",
    "/src/pages/index.astro": "chunks/pages/index_518d8dce.mjs",
    "\u0000@astrojs-manifest": "manifest_2ae5cd9f.mjs",
    "\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":
      "chunks/generic_6d9d7a04.mjs",
    "\u0000@astro-page:src/pages/index@_@astro": "chunks/index_977d3769.mjs",
    "/astro/hoisted.js?q=0": "_astro/hoisted.63d245b0.js",
    "astro:scripts/before-hydration.js": "",
  },
  assets: [
    "/_astro/inter-cyrillic-ext-wght-normal.1c3007b8.woff2",
    "/_astro/inter-cyrillic-wght-normal.eba94878.woff2",
    "/_astro/inter-greek-wght-normal.d92c6cbc.woff2",
    "/_astro/inter-greek-ext-wght-normal.81f77e51.woff2",
    "/_astro/inter-latin-wght-normal.88df0b5a.woff2",
    "/_astro/inter-vietnamese-wght-normal.15df7612.woff2",
    "/_astro/inter-latin-ext-wght-normal.a2bfd9fe.woff2",
    "/_astro/logo_fc24.335b4ae0.GIF",
    "/_astro/fc24-logo.28105715.svg",
    "/_astro/moon.e37745fc.jpg",
    "/_astro/josue_fc_card.8b83cb43.png",
    "/_astro/index.b66f6976.css",
    "/favicon.ico",
    "/favicon.svg",
    "/social.jpg",
  ],
});

export { manifest };
