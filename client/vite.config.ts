// noinspection JSUnusedGlobalSymbols

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      emptyOutDir: true,
      outDir: "../dist/public",
    },
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    plugins: [
      react(),
      checker({
        overlay: false,
        typescript: true,
      }),
    ],
    server: {
      open: true,
      port: 3033,
      proxy: {
        "^/(api|graphql)/.*": "http://djgis.iptime.org:3030",
      },
      watch: {
        ignored: [".idea"],
      },
    },
  };
});
