
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import {routes} from './global/routes/routesMapping';
import {IRoute} from './global/intefaces';

const Main = () => {

  const stack : IRoute[]  = []

  const handleRoutes = (stack : IRoute[]) => { for(let key in routes) {stack.push(routes[key]); } return stack; }

  return (
    <>
      <Router>
        <Navigation>
          <Switch>
            {
              handleRoutes(stack).map(({path, exact, content}: IRoute, index : number) => (<Route exact={exact} path={path} key={index}>{content}</Route>))
            }
          </Switch>
        </Navigation>
      </Router>
    </>
  );
}

export default Main;
