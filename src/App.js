import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/index.js';
import League from './pages/league/index.js'
import Landing from './pages/landing/index.js'
import Login from './pages/login/index.js';
import ProtectedRoute from './pages/protectedRoute.js';
import SignUp from './pages/signUp/index.js';
import web3 from './web3';

function App() {
  const wallet_con =(typeof web3 == 'undefined' )?1:0;
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>

        
        {/* <Route exact path="/SignUp">
          <SignUp />
        </Route>
         */}
         
        <Route exact path="/Login">
          <Login />
        </Route>
        
        <ProtectedRoute exact path="/Dashboard">
          <Dashboard />
        </ProtectedRoute>

        <ProtectedRoute exact path="/Leagues">
          <League />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
