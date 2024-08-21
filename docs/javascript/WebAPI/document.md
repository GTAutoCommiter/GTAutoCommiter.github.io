## Document.cookie

### 获取当前网页cookie

> 方法一：控制台指令获取

````javascript
document.cookie
````

> 方法二：交互式获取

* 进入浏览器调试面板>应用>cookies

### cookie属性

| --   | --   |
| ---- | ---- |
|      |      |



### 如何修改当前cookie?

````javascript
document.cookie='{cookie名}={修改值}; {属性名}={属性值};...;'

//document.cookie='name=cookieNewValue'
````

### 怎么防止别的脚本获取cookie？

> 方法一：设置cookie的HttpOnly属性

`````javascript

`````

