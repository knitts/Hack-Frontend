import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/index.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
