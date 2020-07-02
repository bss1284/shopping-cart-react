import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./pages/Root";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
