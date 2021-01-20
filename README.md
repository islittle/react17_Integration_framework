<!--
 * @Author: wangfeng
 * @Date: 2021-01-18 19:55:44
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-19 17:14:02
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/README.md
 * @Description: 说明文档
-->
#Create React应用程序入门
此项目是用[Create React App]引导的(https://github.com/facebook/create-react-app).

参见[部署]部分(https://facebook.github.io/create-react-app/docs/deployment)更多信息。

## 项目基础集合功能
1. antd-mobile
2. redux (全局的状态管理容器，hooks代替不了，是两个职能的东西，redux并没有试图解决同样的问题)
3. react-router
4. import按需加载以及状态管理
5. sass，less语法糖
6. babel
7. ts（）
8. redux-devtools-extension扩展
9. svg-sprite (未启用，因为这个webpack里面已经集成了babel-plugin-named-asset-import处理svg，首页有具体用法)
10. rem高清配置
11. css版本版本兼容
12. less的style继承使用
13. hooks（新特性状态管理）

等等，并且添加一些自定义工具


备注: history不能升级到5.x

在项目目录中，可以运行：

### `yarn start`

开发者环境<br>
浏览器打开[http://localhost:8080](http://localhost:8080) 。

如果编辑会hot更新<br>
console会显示错误。

### `yarn test`

交互模式启动观察。<br>
可以看到更多消息[running tests](#running-tests) .

### `yarn build`

生产打包，优化到最好的性能

需要熟知的新特性：

>在 React 16 及之前版本中，React 会对大多数事件进行 document.addEventListener() 操作。React v17 开始会通过调用 rootNode.addEventListener() 来代替。
