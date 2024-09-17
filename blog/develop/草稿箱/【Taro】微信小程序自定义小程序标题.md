# 前言

* 需求：

  1. 自定义小程序标题栏
  2. 自定义标题栏字体大小与默认标题栏字体大小一致（即：字体随系统设置）

* 环境：

  ````json
  ````

  

# 实现

1. 添加`index.config.js`文件，写入下面配置

   `````javascript
export default definePageConfig({
    navigationStyle: 'custom',
    //...
})
   `````

1. 在相关页面引入自定义标题组件

   ````jsx
   const IndexPage=()=>{
    return (
      <View>
         <Header/>
         /*....*/
       </View>
     )
   }
   ````
   
1. 设置自定义标题字体随系统样式

   ````jsx
   const Header=(props)=>{
    const {title}=props;
    // 获取微信系统默认字体样式
     const sysStyle = wx.getAppBaseInfo();
     //	解构内容参考微信小程序开发文档
     const { fontSizeSetting } = sysStyle;
     return (
       <View>
         <View
           style={{
             //...
             color: 'white',
           	fontSize: `${fontSizeSetting > 22 ? 22 : fontSizeSetting}px`,
             fontWeight: 500,
             //...
           }}
         >{title}</View>
         /*....*/
       </View>
     )
   }
   ````
   
   * 关键点：
     * `wx.getAppBaseInfo`：获取微信系统字体样式——[微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppBaseInfo.html)
     * 设置字体最大不得超过22像素：[参考微信小程序设计规范](https://developers.weixin.qq.com/miniprogram/design/#%E5%AD%97%E4%BD%93)

