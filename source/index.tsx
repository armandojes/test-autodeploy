import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { hydrateRoot } from 'react-dom/client';
import App from './app/index';

const cache = createCache({ key: 'css-sync' });

hydrateRoot(
  document.getElementById('render_target') as HTMLElement,
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>
);
