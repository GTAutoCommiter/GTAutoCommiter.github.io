# bug描述

* 【现象】：线上使用繁体字出现乱码

* 【环境】：

   ````json
   "@lingui/react": "^4.11.0",
   "@tarojs/taro": "3.5.12",
   ````

# 思考过程

1. `package.json`定位问题库——`@lingui/react`(多语言处理库)

2. 查看项目库配置相关代码

   ````javascript
   //原代码
   let lang = Persist.getItem('lang'); 
   i18n.loadLocaleData(localeData);
   i18n.load(messages);
   if (!lang) {
     const info = Taro.getAppBaseInfo();
     lang = info.language?.replace('-', '_');
   }
   i18n.activate(lang || 'zh_CN');
   ````

   * 第10行代码设置本地语言相关，于是查看设置值是否附和库兼容值。

3. 查看库[开发文档](https://lingui.dev/ref/conf#locales)

   * 根据文档可知道，该库本地化需要遵循[BCP-47 code](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)

     * PS：但是在上述官方文档给的连接中查看，没有找到繁体中文的设置，于是搜索[博客](https://xnxy.github.io/2024/06/11/%E5%9B%BD%E9%99%85%E5%8C%96%E4%B8%AD%E5%B8%B8%E7%94%A8BCP-47%20Code%E5%92%8C%E8%AF%AD%E8%A8%80%E5%AF%B9%E7%85%A7%E8%A1%A8/)。

   * 微信获取到的值为

     ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/blog/20240921233051.png)

# 解决

````javascript
//上述代码第7行改为下述代码
lang = info.language?.replace('_', '-');
````

