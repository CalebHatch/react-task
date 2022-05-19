import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AddUserPage from './pages/add-user';
import Layout from './components/common/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact component={HomePage} />
        {/* Implement your route here */}
          <Route path='/' exact>
              <Redirect to='/add-user' />
          </Route>
          <Route path='/add-user' exact component={AddUserPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Layout>
  );
};

export default App;
