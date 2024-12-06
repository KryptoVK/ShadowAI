import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Performance monitoring
const reportWebVitals = (metric: any) => {
  // You can send the metrics to your analytics service here
  console.log(metric);
};

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

// Report performance metrics
reportWebVitals(window.performance);
