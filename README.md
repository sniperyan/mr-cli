# wym-react-cli

wym react web 脚手架

## 特性

* 基于[react16](https://github.com/facebook/react)，[ant-design](https://github.com/ant-design/ant-design)，[react-router4](https://reacttraining.com/react-router/web/example/basic)，[redux](https://redux.js.org/) 企业级web系统最佳实践。
* 基于 Antd UI 设计语言，提供后台管理系统常见使用场景。
* 使用[wym-react-build](https://www.npmjs.com/package/wym-react-build)本地调试和构建，其中 Mock 功能实现脱离后端独立开发。

## 更新日志

### 1.0.8

`2018-5-26`

* 添加readme
* 尽可能的保持`antd`的设计语言。

## 开发构建

### 目录结构

```bash
├─config                # 项目打包构建配置目录
└─src                   # 项目源码目录
    ├─assets            # 项目静态资源目录
    ├─scripts           # 项目js代码目录
    │  ├─components     # react 组件目录
    |  ├─actions        # redux actions代码目录
    │  ├─containers     # redux containers目录
    │  ├─reducers       # redux reducers目录
    │  │  ├─about       # redux 拆分 reducer目录 (该目录为演示demo)
    │  │  └─home        # redux 拆分 reducer目录 (该目录为演示demo)
    │  ├─store          # redux store目录
    │  └─util           # 项目util js目录
    └─styles            # 项目样式文件目录
```

文件夹命名说明:

* components：组件（方法）为单位以文件夹保存，文件夹名组件首字母大写（如`DataTable`），方法首字母小写（如`layer`）,文件以`index.js`导出对象（如`./src/components/DataTable/index.js`）。

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

构建：


```bash
npm run dist

将会打包至dist目录 

```

代码检测：

```bash
npm run lint
```

代码修复：

```bash
npm run fix
```

## FAQ





