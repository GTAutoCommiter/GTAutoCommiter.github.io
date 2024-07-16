---
id: react-source-code-fiber
slug: /react-source-code-fiber
title: Fiber
date: 2024-07-15
---

## Fiber属性

* 文件位置

  | 版本     | 文件位置                                              |
  | -------- | ----------------------------------------------------- |
  | `18.3.1` | `packages/react-reconciler/src/ReactInternalTypes.js` |

### DOM实例相关

````typescript
type Fiber={
  // 标记不同的组件类型
  tag:WorkTag,
  
  // 组件类型 div、span、组件构造函数
  // create方法的第一个参数
  type:any,
  
  // 示例对象 如类组件的实例、原生 dom 实例，而function 组件没有实例，因此该属性是空
  stateNode:any,
  //...
}
````

* WorkTag详情

### 构建Fiber数相关

````typescript
type Fiber={
  //...
  
  // 指向自己的父级 Fiber 对象
  return: Fiber | null,
  
  // 指向自己的第一个子级 Fiber 对象
  child： Fiber | null,
  
  // 指向自己的下一个兄弟 Fiber 对象
  sibling： Fiber | null,
  
  //在 Fiber 树更新的过程中，每个 Fiber 都会有一个跟其对应的 Fiber
  //称为 current <==> workInProgress
  //在渲染完成之后他们会交换位置
  //alternate 指向当前 Fiber 在 workInProgress 树中对应 Fiber
  alternate: Fiber | null,
  
  //...
}
````

### 状态数据相关

````typescript
type Fiber={
  //...
  // 即将更新的 props
  paddingProps:any,
  
  // 旧的 props
  memoizedProps:any,
  
  // 旧的 state
  memoizedState:any,
  //...
}
````

### 副作用相关

* 副作用：可以触发dom操作的属性

#### `v18.1.3`

````typescript
type Fiber={
  //...
  flags: Flags,
  
  subtreeFlags: Flags,
  deletions: Array<Fiber> | null,

  lanes: Lanes,
  childLanes: Lanes,
  //...
}
````

#### `v17`

````typescript
type Fiber={
  //...
  // 该 Fiber 对应组件产生的状态更新会存放在这个队列里面
  updateQueue: mixed,
  
  // 用来记录当前 Fiber 要执行的 DOM操作
  effectTag: SideEffectTag,
  
  // 子树中第一个 side effect
  firstEffect: Fiber	| null,
  
  // 单链表用来快速查找下一个 side effect
  nextEffect: Fiber	| null,
  
  // 子树中最后一个 side effect
  lastEffect: Fiber	| null,
  
  //	任务的过期时间
  expirationTime: ExpirationTime,
  
  //	当前组件及子组件处于何种渲染模式 
  mode: TypeOfMode,
  //...
}
````

TypeOfMode详情