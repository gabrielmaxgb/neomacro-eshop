import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store/index';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  typography: {
    // fontFamily: [].join(','),
    h1: {

    },
    h2: {

    },
    h3: {

    },
    h4: {

    },
    h5: {

    },
    h6: {

    },
    subtitle1: {

    },
    subtitle2: {

      fontSize: 16,
    },
    subtitle3: {

    body1: {
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '150%',
      letterSpacing: '0.0275em',
      color: 'red',
    },
    body2: {
      color: "#FFFFFF",
      letterSpacing: '0.0075em',
      fontWeight: 600,
    },
    caption: {

    },
  },
}});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
