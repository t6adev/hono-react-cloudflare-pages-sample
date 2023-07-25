import ReactDOM from 'react-dom/client';

import App from './App.js';

const root = document.getElementById('root');

if (!root) throw new Error('Could not find root element');

ReactDOM.createRoot(root).render(<App />);
