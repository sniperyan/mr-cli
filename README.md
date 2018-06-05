# wym-react-cli

wym react web 脚手架

## 特性

* 基于[react16](https://github.com/facebook/react)，[ant-design](https://github.com/ant-design/ant-design)，[react-router4](https://reacttraining.com/react-router/web/example/basic)，[redux](https://redux.js.org/) 企业级web系统最佳实践。
* 基于 Antd UI 设计语言，提供后台管理系统常见使用场景。
* 使用[wym-react-build](https://www.npmjs.com/package/wym-react-build)本地调试和构建，其中 Mock 功能实现脱离后端独立开发。

## 更新日志

### 1.0.13

`2018-6-5`

* 添加pwa支持，默认不开启
* 支持路由拆分

### 1.0.8

`2018-5-26`

* 添加readme
* 尽可能的保持`antd`的设计语言。

## 开发构建

### 目录结构

```bash
├─config                  # 项目打包构建配置目录
│      index.js
│      
├─dist                    # 项目打包输出目录
│  │  asset-manifest.json
│  │  favicon.ico
│  │  index.html
│  │  manifest.json
│  │  service-worker.js
│  │  
│  └─static
│      ├─css
│      │      app.1.0.0.3d3bffb636aaa4980638031824a5087b.css
│      │      app.1.0.0.3d3bffb636aaa4980638031824a5087b.css.map
│      │      
│      └─js
│              0.1.0.0.cd4d22c125a5e7b9a016.js
│              0.1.0.0.cd4d22c125a5e7b9a016.js.map
│              1.1.0.0.cbe2fe044fab28d0bc18.js
│              1.1.0.0.cbe2fe044fab28d0bc18.js.map
│              app.1.0.0.70d324ad4dfa2b78763d.js
│              app.1.0.0.70d324ad4dfa2b78763d.js.map
│              manifest.1.0.0.d826c1cb9dc9be6dcd29.js
│              manifest.1.0.0.d826c1cb9dc9be6dcd29.js.map
│              vendor.1.0.0.31afbf5756dc97879958.js
│              vendor.1.0.0.31afbf5756dc97879958.js.map
│              
├─public                   # 项目模板资源目录
│      favicon.ico
│      index.html
│      manifest.json
│      
└─src                       # 项目源码目录
    │  index.js
    │  registerServiceWorker.js
    │  
    ├─assets                # 项目静态资源目录
    │      logo.svg
    │      
    ├─scripts               # 项目js代码目录
    │  │  Main.js
    │  │  
    │  ├─actions            # redux actions代码目录
    │  │  ├─about
    │  │  │      index.js
    │  │  │      
    │  │  └─home
    │  │          index.js
    │  │          
    │  ├─components         # react 组件目录
    │  │  └─dataTable
    │  │          index.js
    │  │          
    │  ├─containers         # redux containers目录
    │  │  ├─about
    │  │  │      app.js     # app.js为页面级应用
    │  │  │      index.js   # index.js为路由拆分入口文件
    │  │  │      
    │  │  └─home
    │  │          app.js
    │  │          index.js
    │  │          
    │  ├─reducers           # redux reducers目录
    │  │  │  index.js
    │  │  │  
    │  │  ├─about           # redux 拆分 reducer目录 (该目录为演示demo)
    │  │  │      index.js
    │  │  │      initialState.js
    │  │  │      
    │  │  └─home
    │  │          index.js
    │  │          initialState.js
    │  │          
    │  ├─store              # redux store目录
    │  │      index.js
    │  │      
    │  └─util               # 项目util js目录
    │          cookie.js
    │          loading.js
    │          
    └─styles                # 项目样式文件目录
            animation.less
            default.less
            global.less
            test1.scss
            test2.css
         
```

说明:

* components：组件（方法）为单位以文件夹保存，组件名首字母大写（如`DataTable`），方法首字母小写（如`layer`）,文件以`index.js`导出对象（如`./src/components/dataTable/index.js`）。
* 文件夹名称小写，以`index.js`暴露入口
* containers文件夹下为页面级应用，每个页面以一个子文件夹包裹，其中`app.js`为页面应用，`index.js`为拆分路由组件

### 快速开始

安装脚手架:

```bash
npm install -g wym-react-cli 
```

进入目录初始化项目:

```bash
#国内用户推荐yarn或者cnpm
wym-react-cli init <ProjectName> 
```
命令行选择工程名称，作者名称，是否自动安装依赖

开发：

```bash
npm start
打开 http://localhost:8000 #端口在工程目录config/index.js   dev.port修改
```

构建测试包：


```bash
npm run test

将会打包至dist目录 
测试包静态文件命名规则,以js为例： [name.version.cversion.hash.js]

```

构建生产包：


```bash
npm run dist

将会打包至dist目录 
生产包静态文件命名规则,以js为例： [name.version.hash.js]

```

代码检测：

```bash
npm run lint
```

代码修复：

```bash
npm run fix
```

## pwa应用

默认不开启`service-worker`，如要开启可按如下步骤操作
1. `src/index.js`修改如下
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './scripts/Main';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Main />, document.getElementById('app'));
registerServiceWorker();

```
2. config 配置文件 build项设置 `useServiceWorker:true`

## FAQ





