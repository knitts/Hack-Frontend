import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>Frontend Initialized</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
