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
    fontFamily: [].join(','),
    h1: {
      // color: HEADER_TEXT_COLOR,
      // fontFamily: HEADER_FONT_FAMILY,
    },
    h2: {
      // color: HEADER_TEXT_COLOR,
      // fontFamily: HEADER_FONT_FAMILY,
    },
    h3: {
      // color: HEADER_TEXT_COLOR,
      // fontFamily: HEADER_FONT_FAMILY,
    },
    h4: {
      // color: HEADER_TEXT_COLOR,
      // fontFamily: HEADER_FONT_FAMILY,
    },
    h5: {
      // color: HEADER_TEXT_COLOR,
      // fontFamily: HEADER_FONT_FAMILY,
    },
    h6: {
      // color: HEADER_TEXT_COLOR,
      // fontFamily: HEADER_FONT_FAMILY,
    },
    subtitle1: {
      // color: SIGNED_IN_NAV_TEXT_COLOR,
      // display: 'inline-block',
      // fontFamily: NAV_FONT_FAMILY,
    },
    subtitle2: {
      // color: LINK_TEXT_COLOR,
      // display: 'inline-block',
      // fontFamily: NAV_FONT_FAMILY,
      fontSize: 16,
    },
    subtitle3: {
      // color: SIGNED_OFF_NAV_TEXT_COLOR,
      // display: 'inline-block',
      // fontFamily: NAV_FONT_FAMILY,
    },
    body1: {
      // color: GENERAL_TEXT_COLOR,
    },
    body2: {
      color: "#FFFFFF",
      letterSpacing: '0.0075em',
      fontWeight: 600,
    },
    caption: {
      // color: COMPANY_COLORS.primary,
    },
  },
  button: {
    // fontFamily: NAV_FONT_FAMILY,
    // color: SIGNED_IN_NAV_TEXT_COLOR,
    // backgroundColor: BUTTON_BACKGROUND_COLOR,
  },
});

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
