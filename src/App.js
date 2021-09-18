import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/index.js'
import Login from './pages/login/index.js';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/dashboard">
          <Landing />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
