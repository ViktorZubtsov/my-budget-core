import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
    // @ts-ignore
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src'),
            },
        ],
    },
    test: {
        environment: 'jsdom',
    },
});
