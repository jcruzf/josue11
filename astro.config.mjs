import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({

  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  adapter: vercel(),
  output: "server",
  base: '/josue11'
});
