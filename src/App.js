import { NavLink, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Login } from './pages/Login';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink exact to="/" activeClassName="active-link" >Home</NavLink>
          <NavLink to="/blog" activeClassName="active-link" >Blog</NavLink>
          <NavLink to="/blog-post" activeClassName="active-link" >Blog Post</NavLink>
          <NavLink to="/login" activeClassName="active-link" >Login</NavLink>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog-post">
            <BlogPost />
          </Route>
          <PrivateRoute path="/login">
            <Login />
          </PrivateRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
