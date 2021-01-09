import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import {
  LoadingContext,
  LoadingContextProvider,
} from './pages/adminpage/context/loaderContext';
if (process.env.NODE_ENV === 'production') {
  document.addEventListener('contextmenu', (event) => event.preventDefault());
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}

ReactDOM.render(
  <React.StrictMode>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
