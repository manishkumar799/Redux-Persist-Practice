import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from react-dom/client
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './store';

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot properly
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
