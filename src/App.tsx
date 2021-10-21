import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";
import { HomePage } from "./pages/home/HomePage";
import { PageNotFound } from "./pages/page-not-found/PageNotFound";


class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Router basename={process.env.PUBLIC_URL}>
          {/* <XxxHeader /> */}
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
            
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
