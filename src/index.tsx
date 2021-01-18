import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createBrowserHistory, History } from 'history'
import { Route, Router, Switch } from 'react-router'
// import 'lib-flexible'

import configureStore from './app/store/configureStore'
import './index.css'
import loadable from './loadable'

import reportWebVitals from './reportWebVitals'

const App = loadable(()=>import(/* webpackChunkName: "home" */ './pages/home'))
const Test = loadable(()=>import(/* webpackChunkName: "test" */ './pages/test'))

const history = createBrowserHistory()
const store = configureStore(history)

const routes = (history: History) => (
    <Router history={history}>
        <Switch>
            {/* <Redirect from="/" to='index.html' /> */}
            <Route path="/index.html" component={App}/>
            <Route path="/test" component={Test}/>
            <Route path="*" component={App}/>
        </Switch>
    </Router>
)
ReactDOM.render(
  <Provider store={store}>
      {routes(history)}
  </Provider>, document.getElementById('root')
)
//如果你想开始在你的应用程序中测量性能，传递一个函数
//记录结果（例如：reportWebVitals）(控制台.log))
//或发送到分析端点。了解更多：https://bit.ly/CRA-vitals网站
reportWebVitals();
