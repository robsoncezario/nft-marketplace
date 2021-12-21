import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";

import store from "./store/index";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import ToastyContainer from "./components/Toasty/container";

import Routes from "./pages/index";

import muiTheme from "./styles/muiTheme";
import getLibrary from "./methods/getLibrary";

export default function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <ToastyContainer />
            <Router>
              <Switch>
                <Routes />
              </Switch>
            </Router>

            <GlobalStyles />
          </MuiThemeProvider>
        </ThemeProvider>
      </Provider>
    </Web3ReactProvider>
  );
}
