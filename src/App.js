import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/index.js';
import Landing from './pages/landing/index.js'
import Login from './pages/login/index.js';
import SignUp from './pages/signUp/index.js';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/SignUp">
          <SignUp />
        </Route>

        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
