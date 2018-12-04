import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './containers/home';
import About from './containers/about';
import configureStore from './store';
import '../styles/reset.css';
import '../styles/global.less';



moment.locale('zh-cn');

const store = configureStore();
const history = createBrowserHistory();

function Main() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Main;
