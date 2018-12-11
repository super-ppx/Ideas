import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import MainLayout from './layouts/Main';
import LoginPage from './pages/User/Login';
import IdeasPage from './pages/Idea/Ideas';
import IdeaCreatePage from './pages/Idea/Create';
import IdeaDetailPage from './pages/Idea/Detail';
import './App.css';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Redirect exact from="/" to="/m/ideas" />
        <Route path="/login" component={LoginPage} />
        <Route
          path="/m"
          render={({ match }) => (
            <MainLayout>
              <Route path={`${match.path}/ideas`} component={IdeasPage} />
              <Route
                path={`${match.path}/idea/create`}
                component={IdeaCreatePage}
              />
              <Route
                path={`${match.path}/idea/detail/:id`}
                component={IdeaDetailPage}
              />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
