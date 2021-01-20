/*
 * @Author: wangfeng
 * @Date: 2021-01-14 11:53:46
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 17:24:50
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/app/reducers/home.ts
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    text: '',
}
export default function receivehome(state = initialState, action: any) {
    switch (action.type) {
        case types.RECEIVE_HOME:
        {
            return Object.assign({}, state, {
                text: action.homes,
            })
        }
        default:
            return state
    }
}
