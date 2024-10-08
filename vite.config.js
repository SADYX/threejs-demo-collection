import { defineConfig } from "vite";
import { join, relative, extname, resolve } from "path";
import { glob } from "glob";
import { fileURLToPath } from "url";

export default defineConfig({
  root: join(__dirname, "src"),
  base: "/threejs-demo-collection/",
  publicDir: '../public',
  build: {
    outDir: join(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "src/index.html",
        ...Object.fromEntries(
          glob
            .sync("src/demos/*.html")
            .map((file) => [
              relative(
                "src",
                file.slice(
                  0,
                  file.length - extname(file).length
                )
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, "src"),
    }
  },
  assetsInclude: ['**/*.glb']
});
