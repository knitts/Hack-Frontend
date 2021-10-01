import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/signUp/index.js';
import Login from './pages/login/index.js';
import ProtectedRoute from './pages/protectedRoute.js';
import Dashboard from './pages/dashboard/index.js';
import Landing from './pages/landing/index.js'
import Leagues from './pages/leagues/index.js';
import Projects from './pages/projects/index.js';
import CreateProject from './pages/createProject/index.js'
import ProjectView from './pages/projectView/index.js'
import CreateLeague from './pages/createLeague/index.js'


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

        <ProtectedRoute exact path="/Dashboard">
          <Dashboard />
        </ProtectedRoute>

        <ProtectedRoute exact path="/Leagues">
          <Leagues />
        </ProtectedRoute>

        <ProtectedRoute exact path="/League1">
          <Projects />
        </ProtectedRoute>

        <ProtectedRoute exact path="/CreateProject">
          <CreateProject />
        </ProtectedRoute>

        <ProtectedRoute exact path="/CreateLeague">
          <CreateLeague />
        </ProtectedRoute>

        <ProtectedRoute exact path="/ProjectView">
          <ProjectView />
        </ProtectedRoute>

      </Switch>
    </Router>
  );
}

export default App;
