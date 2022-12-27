import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';
import App from './App';
import { AppStateProvider } from './contexts/AppContext';
import { content, overlay } from './css/Modal.css';
import './css/index.css';

ReactModal.defaultStyles = {
    content: { ...ReactModal.defaultStyles.content, ...content },
    overlay: { ...ReactModal.defaultStyles.overlay, ...overlay }
};

const root = ReactDOM.createRoot(document.getElementById('root') || document.body);
root.render(
    <React.StrictMode>
        <AppStateProvider>
            <App />
        </AppStateProvider>
    </React.StrictMode>,
);