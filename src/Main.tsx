
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home'

const Main = () => {
  return (
    <>
      <Router>
        <Navigation>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Navigation>
      </Router>
    </>
  );
}

export default Main;
