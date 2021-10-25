import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Settings from './components/Settings';
import SelectCategory from './components/SelectCategory';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/settings'>
            <Settings />
          </Route>

          <Route path='/select'>
            <SelectCategory />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
