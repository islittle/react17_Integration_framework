/*
 * @Author: wangfeng
 * @Date: 1985-10-26 16:15:00
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 18:17:00
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/pages/test/index.tsx
 * @Description: 测试页面
 */
import React, { useState } from 'react'
import { NavBar, Icon, Button } from 'antd-mobile'

import './index.scss'

function App() {
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
            <Button type="primary">测试按钮</Button>
            <Button onClick={() => setCount(count + 1)} className="hooksTestButton">
                点击测试hooks修改state值，当前为：
                {count}
            </Button>
        </div>
    )
}

export default App
