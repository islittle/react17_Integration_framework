/*
 * @Author: wangfeng
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 18:12:23
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/index.tsx
 * @Description: 入口路由配置文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory, History as HistoryAPI } from 'history'
import { Route, Router, Switch } from 'react-router'

import configureStore from './app/store/configureStore'
import './index.css'
import loadable from './loadable'

import reportWebVitals from './reportWebVitals'

const App = loadable(() => import(/* webpackChunkName: "home" */ './pages/home'))
const Test = loadable(() => import(/* webpackChunkName: "test" */ './pages/test'))

const browserHistory = createBrowserHistory()
const store = configureStore(browserHistory)

const routes = (browserHistoryContent: HistoryAPI<any>) => (
    <Router history={browserHistoryContent}>
        <Switch>
            {/* <Redirect from="/" to='index' /> */}
            <Route path="/" exact component={App} />
            <Route path="/test" exact component={Test} />
            <Route path="*" component={App} />
        </Switch>
    </Router>
)
ReactDOM.render(
    <Provider store={store}>
        {routes(browserHistory)}
    </Provider>, document.getElementById('root'),
)
// 如果你想开始在你的应用程序中测量性能，传递一个函数
// 记录结果（例如：reportWebVitals）(控制台.log))
// 或发送到分析端点。了解更多：https://bit.ly/CRA-vitals网站
reportWebVitals();
