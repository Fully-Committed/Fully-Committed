import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { AuthProvider } from './hooks/useAuthHook';
import store from './store';
import { Provider } from 'react-redux';

render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);
