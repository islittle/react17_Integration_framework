/*
 * @Author: wangfeng
 * @Date: 2021-01-19 16:15:00
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-29 17:34:46
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/pages/home/index.tsx
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Button } from 'antd-mobile'

import connect from '@utils/connect'

import { ReactComponent as LoGo } from '@svgs/logo.svg'

import './index.scss'

interface IProps {
    actions: {
        fetchHome: () => any,
    },
    HomeState: {
        text: string,
    }
}
@connect('/', 'HomeState', 'fetchHome')
export default class Home extends Component<IProps> {
    private testReduxButtonClickCallFunc = () => {
        const { actions } = this.props || {}
        actions.fetchHome()
    }

    render() {
        const { HomeState } = this.props || {}
        const { text } = HomeState || {}
        return (
            <div className="App">
                <NavBar
                    mode="light"
                >
                    欢迎
                </NavBar>
                <header className="App-header">
                    <LoGo className="App-logo" />
                </header>
                <Link to="test" className="linkTestButton">
                    点击跳转到test页面
                </Link>
                <Button type="primary" className="testReduxButton" onClick={this.testReduxButtonClickCallFunc}>
                    测试redux
                    {text}
                </Button>
            </div>
        )
    }
}
