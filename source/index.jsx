import { createRoot } from 'react-dom/client';
import App from './app/index';

const root = createRoot(document.getElementById('render_target'));

root.render(<App />);
