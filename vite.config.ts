import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
		  // Proxy requests starting with '/api' to 'http://api.example.com'
		  '/api': {
			target: 'https://dashboard.scale.com/spellbook/api/v2/deploy/',
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/api/, ''),
		  },
		},
	  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
