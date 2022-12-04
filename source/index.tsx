// @ts-nocheck

import { createRoot } from 'react-dom/client';

import App from './app/index';

console.log('PUBLIC_PATH', process.env.NODE_ENV);

const root = createRoot(
  document.getElementById('render_target') as HTMLElement
);

root.render(<App />);
