import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainLayout from './layouts/Main';
import LoginPage from './pages/User/Login';
import IdeasPage from './pages/Idea/Ideas';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Redirect exact from="/" to="/ideas" />
        <Route path="/login" component={LoginPage} />
        <MainLayout>
          <Route path="/ideas" component={IdeasPage} />
        </MainLayout>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
