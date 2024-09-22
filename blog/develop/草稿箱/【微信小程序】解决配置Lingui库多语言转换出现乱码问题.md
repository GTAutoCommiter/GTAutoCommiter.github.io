# bug描述

* 【现象】：项目线上使用繁体字出现乱码

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

     * PS：上述官方文档中，繁体中文的设置

       ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/blog/20240922105106.png)

   * 而微信获取到的值为
   
     ![](https://gitee.com/lao-jiawei/photo-gallery/raw/master/images/blog/20240921233051.png)

# 解决

````javascript
//上述代码第3行后的改为下述代码
// lingui库本地化设置
let textLang = lang;
i18n.loadLocaleData(localeData);
i18n.load(messages);
if (!textLang) {
  const info = Taro.getAppBaseInfo();
  lang = info.language?.replace('_', '-');
  const textMap = {
    'zh-CN': 'zh',
    'zh-TW': 'yue',
    'zh-HK': 'yue',
  }
  textLang = textMap[lang];
}
i18n.activate(textLang || 'zh');
````

# 总结

1. lingui库支持BCP-47 code 语言标记值设置本地转换
2. 微信小程序使用lingui库需要对语言标记值进行转换
