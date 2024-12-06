import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

// Remove loading indicator
const loadingElement = document.querySelector('.loading');
if (loadingElement) {
  loadingElement.remove();
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
