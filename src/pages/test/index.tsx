import React from 'react'
import './index.scss'
import { NavBar, Icon, Button } from 'antd-mobile';

function App() {
  return (
    <div className="Test">
      <NavBar
          mode="light"
          leftContent={<Icon type="left" />}
          onLeftClick={() => { window.history.go(-1) }}
      >测试demo</NavBar>
      <header className="Test-header">
        <p>
          test-page
        </p>
      </header>
      <Button type="primary">测试按钮</Button>
    </div>
  );
}

export default App;
