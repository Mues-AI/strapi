/// <reference path="../../node_modules/vite/client.d.ts" />

import { defineConfig, mergeConfig } from "vite";

export default defineConfig((config) => {
  return mergeConfig(
    config,
    defineConfig({
      resolve: {
        alias: {
          "@": "/src",
        },
      },
    })
  );
});
