/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderComponent, F as Fragment, k as renderHead } from '../astro_ed53d9be.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Image } from './generic_1de18fbe.mjs';

const $$Astro$7 = createAstro("https://astro-moon-landing.netlify.app/");
const $$ContentSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ContentSection;
  const { title, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="relative flex flex-col justify-center items-center place-items-center gap-4 z-50"> <div class="flex flex-col items-center gap-4"> ${renderSlot($$result, $$slots["eyebrow"])} <h2 class="gradient-text text-center font-extrabold tracking-tight text-4xl"> ${title} </h2> </div> <p class="max-w-xl text-center font-extrabold text-2xl"> ${renderSlot($$result, $$slots["lead"])} </p> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/dev/astro/josue11/src/components/content-section.astro", void 0);

const $$Astro$6 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "En mi casa", "id": "features" }, { "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
Calle Francisco Villa ${maybeRenderHead()}<span class="text-primary">#800</span>. Col. Libertad
<br> <span class="text-primary">Castaños </span>Coahuila
<br> <span class="text-sm font-light">(Frente a la iglesia de San Judas Tadeo)</span> ` })}` })}`;
}, "C:/dev/astro/josue11/src/components/features.astro", void 0);

const logoFc24_animate = new Proxy({"src":"/_astro/logo_fc24.335b4ae0.GIF","width":1080,"height":1080,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$5 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="relative flex h-64 items-center justify-center"> <div class="absolute inset-0 overflow-hidden"> <h1 class="text-white text-center font-extrabold text-4xl">
NO FALTES!
</h1> </div> ${renderComponent($$result, "Image", $$Image, { "class": "w-44 -mt-6", "src": logoFc24_animate, "loading": "eager", "alt": "FC24" })} </footer>`;
}, "C:/dev/astro/josue11/src/components/footer.astro", void 0);

const $$Astro$4 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "El pr\xF3ximo", "id": "intro" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="countdown" class="flex flex-row gap-3 justify-center"> <div class="flex basis-1/4 flex-col items-center p-3 bg-neutral-800 bg-opacity-25 backdrop-blur-xl rounded"> <h2 class="gradient-text text-5xl font-bold" id="days">00</h2> <small>dias</small> </div> <div class="flex basis-1/4 flex-col items-center p-3 bg-neutral-800 bg-opacity-25 backdrop-blur-xl rounded"> <h2 class="gradient-text text-5xl font-bold" id="hours">00</h2> <small>horas</small> </div> <div class="flex basis-1/4 flex-col items-center p-3 bg-neutral-800 bg-opacity-25 backdrop-blur-xl rounded"> <h2 class="gradient-text text-5xl font-bold" id="minutes">00</h2> <small>minutos</small> </div> <div class="flex basis-1/4 flex-col items-center p-3 bg-neutral-800 bg-opacity-25 backdrop-blur-xl rounded"> <h2 class="gradient-text text-5xl font-bold" id="seconds">00</h2> <small>segundos</small> </div> </div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-44 -mt-6", "src": logoFc24_animate, "loading": "eager", "alt": "FC24" })} `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate` <span class="text-primary">sábado 2 de diciembre</span> a partir de las
<span class="text-primary">4:00 p.m</span> ` })}` })} `;
}, "C:/dev/astro/josue11/src/components/intro.astro", void 0);

const josueCardfc = new Proxy({"src":"/_astro/josue_fc_card.8b83cb43.png","width":1288,"height":1800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const logoFc24 = new Proxy({"src":"/_astro/fc24-logo.28105715.svg","width":142,"height":34,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const moonImage = new Proxy({"src":"/_astro/moon.e37745fc.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://astro-moon-landing.netlify.app/");
const $$HeroImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroImage;
  const widths = [450, 800, 1200];
  const sizes = "100vw";
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": moonImage, "widths": widths, "sizes": sizes, "alt": "The ridged surface of the moon" })}`;
}, "C:/dev/astro/josue11/src/components/hero-image.astro", void 0);

const $$Astro$2 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Starfield = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Starfield;
  return renderTemplate`${maybeRenderHead()}<div id="starfield" class="absolute inset-0"> <canvas id="starfield-canvas"></canvas> </div> `;
}, "C:/dev/astro/josue11/src/components/starfield.astro", void 0);

const $$Astro$1 = createAstro("https://astro-moon-landing.netlify.app/");
const $$Splash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Splash;
  const widths = [450, 800];
  const sizes = "(min-width: 440px) 42vw, 67vw";
  return renderTemplate`${maybeRenderHead()}<section class="relative snap-start h-full bg-neutral-800" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Starfield", $$Starfield, { "data-astro-cid-3egmgwtg": true })} <div id="splash-bg-fallback" class="absolute inset-0 hidden opacity-40" data-astro-cid-3egmgwtg> ${renderComponent($$result, "HeroImage", $$HeroImage, { "data-astro-cid-3egmgwtg": true })} </div> <div class="relative grid h-full place-items-center" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Image", $$Image, { "class": "w-44 mt-6", "src": logoFc24, "loading": "eager", "alt": "FC24", "data-astro-cid-3egmgwtg": true })} <h2 class="flex flex-col gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end -mt-6" data-astro-cid-3egmgwtg> <div class="gradient-text text-center font-extrabold text-3xl" data-astro-cid-3egmgwtg>
Te invito a <span class="text-white" data-astro-cid-3egmgwtg>festejar</span> <br data-astro-cid-3egmgwtg> <span class="text-white" data-astro-cid-3egmgwtg>mi</span> cumpleaños
<br data-astro-cid-3egmgwtg> <span class="text-9xl" data-astro-cid-3egmgwtg>11</span> </div> </h2> <div id="astronaut" class="w-2/5 max-w-2xl self-start sm:w-8/12 sm:self-auto sm:justify-self-start" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": josueCardfc, "widths": widths, "sizes": sizes, "loading": "eager", "alt": "Josue Cruz", "data-astro-cid-3egmgwtg": true })} </div> </div> </section> <noscript> <style>
    #splash-bg-fallback {
      display: block;
    }
  </style> </noscript> `;
}, "C:/dev/astro/josue11/src/components/splash.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-moon-landing.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { generator, site } = Astro2;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full motion-safe:scroll-smooth" data-theme="dark"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="generator"', '><meta name="theme-color" content="#22c55e"><title>JOSUE CRUZ 11 - FC24</title><meta name="description" content="Invitaci\xF3n Josue 11"><!-- initialize theme --><script>\n      const themeSaved = localStorage.getItem("theme");\n\n      if (themeSaved) {\n        document.documentElement.dataset.theme = themeSaved;\n      } else {\n        const prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)",\n        ).matches;\n        document.documentElement.dataset.theme = prefersDark ? "dark" : "light";\n      }\n\n      window\n        .matchMedia("(prefers-color-scheme: dark)")\n        .addEventListener("change", (event) => {\n          if (!localStorage.getItem("theme")) {\n            document.documentElement.dataset.theme = event.matches\n              ? "dark"\n              : "light";\n          }\n        });\n    <\/script>', '</head> <body class="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"> <main class="snap-y snap-mandatory relative w-full h-screen overflow-auto"> ', ` <div class="snap-start h-screen overflow-hidden space-y-24 px-8 py-32 bg-cover bg-center" style="background-image: url('src/assets/bg_triangles.jpg')"> `, ' </div> <div class="snap-start h-screen overflow-hidden space-y-24 px-8 py-32 relative flex items-center justify-left"> <video autoplay loop muted class="absolute z-10 w-auto min-w-full max-w-none -left-1"> <source src="src/assets/fc24-video-bg.mp4" type="video/mp4">\nYour browser does not support the video tag.\n</video> ', ` </div> <div class="snap-start h-screen overflow-hidden space-y-24 px-8 py-32 relative flex items-center justify-center"> <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none"> <source src="src/assets/fc24-haaland-goal-1x1.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> </div> <div class="snap-start h-screen overflow-hidden space-y-24 px-8 py-32 bg-cover bg-center" style="background-image: url('src/assets/bg_cancha.png')"> `, " </div> </main> </body></html>"])), addAttribute(generator, "content"), renderHead(), renderComponent($$result, "Splash", $$Splash, {}), renderComponent($$result, "Intro", $$Intro, {}), renderComponent($$result, "Features", $$Features, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/dev/astro/josue11/src/pages/index.astro", void 0);

const $$file = "C:/dev/astro/josue11/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
