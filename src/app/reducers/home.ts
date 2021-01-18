/*
 * @Author: wangfeng
 * @Date: 2021-01-14 11:53:46
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-14 14:17:26
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/app/reducers/home.ts
 */
import * as types from '../constants/ActionTypes'
const initialState = {
    productInfo: {
    }
}
export default function receivehome(state = initialState, action: any) {
    switch (action.type) {
    case types.RECEIVE_HOME:
        {
            return Object.assign({}, state, {
                productInfo: action.homes[0]
            })
        }
    default:
        return state
    }
}
