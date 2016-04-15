### 开发纪录

##### 使用React.Component定义组件报错

在js文件的开头添加 "use strict" 使用严格模式即可解决；

##### 如何能够在代码中使用 ES7 Properity Initializers

######  1. install以下组件

```
npm  install --save-dev babel-preset-stage-0
```

###### 2. 在.babelrc中添加对应的presets内容

```
{
	presets : ["stage-0"]
}
```