/*
 * @Author: wangfeng
 * @Date: 2021-01-14 10:29:58
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 18:09:42
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/app/store/configureStore.ts
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'

const { createLogger } = require('redux-logger')

let middlewares: any = [thunk]
const MODE = process.env.NODE_ENV
// 非本地开发或者连接上需要显示redux-logger才打印输出
if ((MODE && MODE.indexOf('production') === -1) || window.location.search.indexOf('reduxLoggerShow=1') !== -1) {
    const logger = createLogger({
        level: 'info',
        logger: console,
        collapsed: true,
    })
    middlewares = [...middlewares, logger]
}
const configureStore = (history?: any, initialState?: any) => {
    middlewares = [...middlewares, routerMiddleware(history)]
    const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)
    return createStoreWithMiddleware(reducer, initialState)
}

export default configureStore
