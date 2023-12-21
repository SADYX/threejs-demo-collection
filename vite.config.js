import { defineConfig } from 'vite';
import { join } from 'path';

export default defineConfig({
    root: join(__dirname, 'src'),
    base: 'threejs-demo-collection',
    build: {
        outDir: join(__dirname, 'dist'),
        emptyOutDir: true,
        sourcemap: true,
    }
});
