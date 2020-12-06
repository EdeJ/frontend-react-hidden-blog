import React from "react";
import {
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BlogPost } from "./pages/BlogPost";
import { Blog } from "./pages/Blog";
import { PrivateRoute } from "./components/PrivateRoute";
import { useAuthentication } from "./hooks/authentication";
import './App.css';

export const App = () => {
  const { isAuthenticated, logout } = useAuthentication();

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            {isAuthenticated && (
              <>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
        <span>My blog</span>
      </header>
      <hr />
      <main>
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
      </main>
    </div>
  );
}