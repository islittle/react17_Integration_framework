/*
 * @Author: wangfeng
 * @Date: 2021-01-19 17:18:50
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-21 09:57:36
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/app/actions/home.ts
 * @Description: 测试redux
 */
import * as types from '@constants/ActionTypes'

export default function fetchHome() {
    return (dispatch: Function) => new Promise(() => {
        dispatch(receivehome('ajax-success-call'))
    })
}

function receivehome(homes: string) {
    return {
        type: types.RECEIVE_HOME,
        homes,
    }
}
