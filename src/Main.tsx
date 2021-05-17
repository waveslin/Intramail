
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home'

const Main = () => {
  return (
    <>
    <Router>
      <Navigation Content={(
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
      )} />
    </Router>
    </>
  );
}

export default Main;
