/*
 * @Author: wangfeng
 * @Date: 2021-01-14 10:47:52
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 17:07:50
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/app/reducers/index.ts
 * @Description: reducer
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import HomeState from './home'

const rootReducer = combineReducers({
    HomeState,
    routing: routerReducer,
})
export default rootReducer
