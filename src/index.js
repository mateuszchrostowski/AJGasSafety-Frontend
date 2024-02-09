import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { AuthProvider } from './Contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider> 
);


