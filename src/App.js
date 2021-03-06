import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";
import { Navigation, Wrapper, LoadingIndicator, Button } from "components";
import { useTranslation } from "react-i18next";
import GlobalStyles from "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Budget from "./pages/Budget";

function App({ budget }) {
  const { i18n } = useTranslation();
  return (
    <React.Fragment>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "/" },
            { content: "Budget", to: "/budget" },
          ]}
          RightElement={
            <div>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("PL")}
              >
                PL{" "}
              </Button>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("EN")}
              >
                EN{" "}
              </Button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">
              <Budget />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </React.Fragment>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
