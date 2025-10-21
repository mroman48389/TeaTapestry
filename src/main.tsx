import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store/store'; 

import { BrowserRouter } from "react-router-dom";

/* npm install @fontsource/cabin */
import "@fontsource/cabin/400.css"; // body text, paragraphs, UI labels
import "@fontsource/cabin/500.css"; // slightly emphasized text, subheadings, or buttons
import "@fontsource/cabin/600.css"; // section headings, nav items, or call‑to‑action emphasis
import "@fontsource/cabin/700.css"; // main headings, hero text, or anything that needs strong visual weight

import './index.css';

import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
    /* StrictMode will cause everything to render twice but will not be in the production when built. StrictMode
       helps detect bugs and potential issues and enforces best practices. */
    <StrictMode>
        {/* Make variables in store available to entire app. */}
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
