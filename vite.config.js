import { defineConfig } from 'vite';
import { join, resolve } from 'path';

export default defineConfig({
    root: join(__dirname, 'src'),
    base: 'threejs-demo-collection',
});
