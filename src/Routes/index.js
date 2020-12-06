import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../components/molecules/PrivateRoute';
import {
  Home,
  Blog,
  BlogPost,
  Login,
} from '../pages';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <PrivateRoute path="/blog/:id">
      <BlogPost />
    </PrivateRoute>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </Switch>
);
