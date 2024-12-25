import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: 'l718umwm',
    dataset: 'production',
    useCdn: false,
    apiVersion: "2024-12-25",
    studioBasePath: '/studio'
  }), react()]
});