import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";
import { PageNotFound } from "./pages/General/page-not-found/PageNotFound";
import { userRoutes } from "routes/route";
import UserTemplate from "templates/userTemplate/UserTemplate";
import AuthTemplate from "templates/authTemplate/AuthTemplate";




function App() {
  const renderRoutes = (routes: any, Layout: any) => {
    return routes.map((routes: any, idx: number) => {
      const { path, component, exact } = routes;
      return (
        <Layout
          key={idx}
          path={path}
          exact={exact}
          component={component}
          />
      )
    })
  }
    return (
      <div className={styles.App}>
        <Router basename={process.env.PUBLIC_URL}>

            <Switch>
              {renderRoutes(userRoutes, UserTemplate)}
              <Route path="/login" component={() => AuthTemplate('Login')} />
              <Route path="/register" component={() => AuthTemplate('Register')} />
              <Route path="*" component={PageNotFound} />
            </Switch>

        </Router>
      </div>
    );
  
}

export default App;
