/*
 * @Author: wangfeng
 * @Date: 2021-01-19 16:15:00
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-21 09:56:39
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/pages/test/index.tsx
 * @Description: 测试页面
 */
import React, { useState } from 'react'
import { NavBar, Icon, Button } from 'antd-mobile'

import './index.scss'

function Test() {
    const [count, setCount] = useState(0)
    return (
        <div className="Test">
            <NavBar
                mode="light"
                leftContent={
                    <Icon type="left" />
                }
                onLeftClick={() => {
                    window.history.go(-1)
                }}
            >
                测试demo
            </NavBar>
            <header className="Test-header">
                <p>
                    test-page
                </p>
            </header>

            <Button onClick={() => setCount(count + 1)} className="hooksTestButton">
                点击测试hooks修改state值，当前为：
                {count}
            </Button>
        </div>
    )
}

export default Test
