import React from 'react';
import ReactDOM from 'react-dom';
// Replace createRoot usage from 'react-dom' with the supported import:
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');

function renderApp() {
  try {
    if (!rootEl) {
      console.error('Root element not found: #root');
      return;
    }

    // use createRoot (React 18+) when available, otherwise fall back to legacy render
    if (typeof createRoot === 'function') {
      const root = createRoot(rootEl);
      root.render(<App />);
    } else {
      // fallback for older React versions
      ReactDOM.render(<App />, rootEl);
    }
  } catch (err) {
    handleRenderError(err);
  }
}

function handleRenderError(err) {
  const message = err && err.message ? err.message : String(err);
  console.error('Render error:', err);

  if (message.includes('Invalid hook call')) {
    console.error('Invalid hook call detected. Likely causes and fixes:');
    console.error(' - Multiple copies of React. Run: npm ls react && npm ls react-dom (or: yarn why react)');
    console.error(' - If duplicates exist: rm -rf node_modules package-lock.json yarn.lock && npm install (or yarn)');
    console.error(' - Try: npm dedupe');
    console.error(' - If using linked/local packages, ensure they list react as a peerDependency.');
    console.error(' - Temporary CRA bypass (not a fix): set SKIP_PREFLIGHT_CHECK=true in .env');

    if (rootEl) {
      rootEl.innerHTML = '' +
        '<div style="font-family:system-ui,Segoe UI,Roboto,Arial;margin:32px;">' +
          '<h2 style="color:#b91c1c;">Application failed to render</h2>' +
          '<p>Reason: Invalid hook call detected.</p>' +
          '<p>Open the browser console for recommended remediation steps (duplicate React installs, mismatched versions, or incorrect package linking).</p>' +
        '</div>';
    }
    return;
  }

  if (rootEl) {
    rootEl.innerHTML = ''+
      '<div style="font-family:system-ui,Segoe UI,Roboto,Arial;margin:32px;">'+
        '<h2 style="color:#b91c1c;">Application failed to render</h2>'+
        '<p>${escapeHtml(message)}</p>'+
        '<p>See console for details.</p>'+
      '</div>'
    ;
  }
}


function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '<')
    .replace(/>/g, '>');
}

renderApp();
