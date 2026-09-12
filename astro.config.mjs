// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Social preview and canonical tags need absolute URLs, which come from here.
  site: 'https://ahmedghoneim.online',
  integrations: [react()],
});
