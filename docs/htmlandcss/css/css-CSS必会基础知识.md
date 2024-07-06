---
id: htmlAndCss-css-must-know
slug: /htmlAndCss-css-must-know
title: CSS必会基础知识
date: 2022-05-10
---
## CSS样式权重



## 盒子模型

CSS会把所有的HTML元素都看成一个盒子。

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/css/css-box.jfif)

| 属性    | 名称   | 描述                                 |
| ------- | ------ | ------------------------------------ |
| margin  | 外边距 | 盒子与外界的距离                     |
| border  | 边框   | 盒子的边框                           |
| padding | 内边距 | 紧贴内容的补白区域                   |
| content | 内容   | 元素中的文本或后代元素都是它的内容。 |

* 盒子大小=`content`+左右`padding`+左右`border`（即怪异盒子模型算法）

> ⚠️注意：外边距`margin`不会印象盒子的大小，但是会影响盒子的位置。

* 标准盒模型：盒子大小=content

## 宽高

* `width`：设置宽
* `height`：设置高
* `min-{width｜heigth}`：设置最小宽高
* `max-{width|height}`：设置最大宽高

> ⚠️注意：width和height不与min或max同时使用。

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



