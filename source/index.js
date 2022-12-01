import { createRoot } from 'react-dom/client';
import App from './app/index.jsx';


const root = createRoot(document.getElementById('render_target'));

root.render(<App />)