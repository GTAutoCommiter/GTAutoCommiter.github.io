版本：v17

位置：`packages/react-reconciler/src/ReactFiber.js`

目的：负责创建或重用一个“工作进行中”的 fiber 节点。

参数：

| 键名         | 类型  | 描述                                           |
| ------------ | ----- | ---------------------------------------------- |
| current      | Fiber | 当前fiber节点                                  |
| pendingProps | any   | 新的 props，组件在下一次渲染时将接收的 props。 |

逻辑：

## 1、检查现有的Alternate

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createWorkInProgress_1.jfif)

## 2、创建新的工作进行中节点

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createWorkInProgress_2.jfif)

## 3、链接当前和工作进行中 fiber

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createWorkInProgress_3.jfif)

## 4、复用现有的工作进行中的节点

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createWorkInProgress_4.jfif)

## 5、复制或重置属性

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createWorkInProgress_5.jfif)

## 6、性能分析计时器

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createWorkInProgress_6.jfif)

* 第四步中的性能分析计时器

  ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createWorkInProgress_6_1.jfif)

## 7、开发模式检查

![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/react/createWorkInProgress_7.jfif)

## 8、返回workInProgress