---
id: react-source-code-createElement
slug: /react-source-code-createElement
title: createElement
date: 2024-07-08
---

## `createElement(type,config, children)` 

### 参数

`type`：元素类型

`config`：配置属性

`children`：子元素

### 行为

1. 分类props 属性和特殊属性
2. 将子元素挂载到props.children中
3. 为props属性赋默认值（defaultProps）
4. 创建并返回ReactElement

```javascript
/*
propName=>属性名称
用于后面的for循环
*/
let propName;

/*
存储React Element 中的普通元素属性 
即不包含key、ref、self、source
*/
const props = {};

let key = null;
let ref = null;
```

### 分类props 属性和特殊属性

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-2.jfif)

### 将子元素挂载到props.children中

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-3.jfif)

### 为props属性赋默认值（defaultProps）

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createElement-4.jfif)

### 创建并返回ReactElement

