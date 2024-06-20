---
id: htmlAndCss-css-must-know
slug: /htmlAndCss-css-must-know
title: CSS必会基础知识
date: 2022-05-10
---
# 前言

此笔记为本人根据B站up主[宇哥在学习](https://space.bilibili.com/72076631)发布的[【建议收藏】手把手带你了解前端学习路线和时间规划，学完找工作不是问题](https://www.bilibili.com/video/BV1uf4y1U7YT?spm_id_from=333.880.my_history.page.click)视频所说的前端学习线路，重新对CSS知识进行系统整理。



## 线路图：

==注意：（标签含义）==

- `白色`：

  - `字体`：基础，必须会。
  - `带星`：重中之重，最好能讲清楚原理或自己实现。

- `红色`：

  - `字体`：有多余的时间再看。
  - `带星`：可以不看。
  - `线`：不影响学习进度，可以先跳过。

  ![1649763901886](D:\Data\9_Typora图片缓存\1649763901886.png)



## 注意：

- **由于此前有一定CSS基础，所以该笔记的内容过于简略。**
- **该笔记内容为路线图中的==白色基础必会部分==。**
- **需要详细学习可以移步：**
  - **[CSS教程-W3school](https://www.w3school.com.cn/css/index.asp)**



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



# 结语

