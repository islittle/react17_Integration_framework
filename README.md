<!--
 * @Author: wangfeng
 * @Date: 2021-01-18 19:55:44
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 20:01:47
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/README.md
 * @Description: 说明文档
-->
#Create React应用程序入门
此项目是用[Create React App]引导的(https://github.com/facebook/create-react-app).

参见[部署]部分(https://facebook.github.io/create-react-app/docs/deployment)更多信息。

>放弃了对Node 8的支持，Node 8在2019年年底达到报废期，不再支持，最好用10.15.3以上版本
## 项目基础集合功能
1. antd-mobile （按需加载和适配主题）
2. redux (全局的状态管理容器，个人认为：hooks代替不了，是两个职能的东西，redux并没有试图解决同样的问题，如果你觉得用hooks就可以了，可以放弃)
3. react-router
4. import按需加载以及状态管理 (react-loadable含有有加载中和失败的状态处理)
5. sass，less语法糖
6. babel
7. ts（语法检测）
8. redux-devtools-extension扩展
9. svg-sprite (未启用，因为这个webpack里面已经集成了babel-plugin-named-asset-import处理svgr，首页demo有具体用法)
10. rem高清配置
11. css版本兼容
12. less的style继承使用
13. hooks（新特性状态管理）
14. eslint（规则检测，包含: airbnb, react-hooks等）
15. alias (Decorators装饰器)
16. customize-cra (webpack配置扩展和启用的入口)
17. 低版本promise的处理

...

等等，并且添加一些自定义工具


>备注: history不能升级到5.x, 升级后和当前路由会有不匹配的问题

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


需要熟知的新框架的新特性:

>Fast refresh 快速刷新

>支持ESLint 7

>React 17（新的JSX transform）和 直接TypeScript支持

需要熟知react17的新特性：

>在 React 16 及之前版本中，React 会对大多数事件进行 document.addEventListener() 操作。React v17 开始会通过调用 rootNode.addEventListener() 来代替。

>React 17 移除了"event pooling(事件池)" (也就是DOM事件复用池被废弃)

>useEffect和清理函数的时机保持一致

>React 17 forwardRef和memo组件的行为会与常规函数组件和class组件保持一致, 如果返回undefined时会报错

>React 17 使用了不同的机制生成组件堆栈 (向浏览器原生事件靠拢)

>React 17 提供了一个新的选项——渐进式升级，允许 React 多版本并存
