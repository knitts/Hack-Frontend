import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/index.js';
import Landing from './pages/landing/index.js'
import Login from './pages/login/index.js';
import SignUp from './pages/signUp/index.js';
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

        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/Leagues">
          <Leagues />
        </Route>

        <Route exact path="/League1">
          <Projects />
        </Route>

        <Route exact path="/CreateProject">
          <CreateProject />
        </Route>

        <Route exact path="/CreateLeague">
          <CreateLeague />
        </Route>

        <Route exact path="/ProjectView">
          <ProjectView />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
