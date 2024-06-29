---
id: htmlAndCss-css-must-know
slug: /htmlAndCss-css-must-know
title: CSS必会基础知识
date: 2022-05-10
---
# 选择器

**作用：选择页面上的某一个或者某一类元素**

[CSS选择器参考手册](https://www.w3school.com.cn/cssref/css_selectors.asp)

## id

* 可以为特定id的HTML元素指定特定的样式
* **以 "#" 来定义。**
* ==必须保证全局唯一==，也就是说无法重复使用，否则报错

**格式：**

````css
#name{
    /*元素样式，以 键:值; 的格式*/
}
````

**html调用样式**

````html
<p id="name">段落内容</p>
````



## class

* 该选择器可以单独使用，也可以与其他元素结合使用。
* 可多个标签归类，可复用

**格式：**

````css
.name{
    /*元素样式，以 键:值; 的格式*/
}
````

**html调用样式**

````html
<p class="name">段落内容</p>
````



