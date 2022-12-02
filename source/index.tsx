// @ts-nocheck

import { createRoot } from 'react-dom/client';

import App from './app/index';

console.log('PUBLIC_PATH', process.env.PUBLIC_PATH);

const root = createRoot(
  document.getElementById('render_target') as HTMLElement
);

root.render(<App />);
