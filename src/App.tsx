import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";
import { HomePage } from "./pages/User/home/HomePage";
import { PageNotFound } from "./pages/General/page-not-found/PageNotFound";
import LogIn from "./pages/Auth/LogIn";
import Register from "./pages/Auth/Register";


class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Router basename={process.env.PUBLIC_URL}>

            <Switch>
              <Route exact={true} path="/" component={HomePage} />
              <Route path="/login" component={LogIn} />
              <Route path="/register" component={Register} />
              <Route path="*" component={PageNotFound} />
            </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
