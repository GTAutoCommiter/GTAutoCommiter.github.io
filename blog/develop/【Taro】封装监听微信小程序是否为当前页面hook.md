# 封装原因

1. 项目需求逻辑有些页面需要判断是否为当前页面。
2. 小程序

# 项目环境

````json
"@tarojs/react": "3.5.12",
"react": "^18.0.0",
"mobx": "^6.7.0"
````

# 具备功能

1. 判断是否为当前页面。
2. 获取当前页面携带参数。
3. 页面标题随页面切换而改变。

# 优点

1. 页面标题设置统一管理。
2. 

# 实现

````javascript
import { ENUM } from '@/stores/definitions_path';
import rootStore from '../stores';

export function useIsPage(pageSign) {
  const {
    dataStore,
  } = rootStore || {};
  const curPage = dataStore?.curPage;
  
  const isInThisPage = `/${curPage}` === pageSign;
  const title = ENUM?.[`/${curPage}`] || '';
  const [page] = useState(Taro.getCurrentInstance());

  Taro.setNavigationBarTitle({ title: title })

  const pageInfo = {
    routerParam: page?.router?.params,
    title,
  }

  return [isInThisPage, pageInfo];
}
````

# 使用

1. 先配置`definitions_path`

   ````javascript
   // 页面路径
   const pathSetting = {
     // 首页
     INDEX: {
       path: '/pages/index/index',
       text: '首页',
     },
     // 我的页面
     ME: {
       path: '/pages/me/index',
       text: '我的',
     },
     ...
   };
   
   export const {
     PATH_PAGE,
     ENUM,
   } = Object.entries(pathSetting).reduce((resObj, cur) => {
     const [key, info] = cur;
     resObj.PATH_PAGE[key] = info?.path;
     resObj.ENUM[info?.path] = info?.text;
     return resObj;
   }, {
     PATH_PAGE: {},
     ENUM: {},
   })
   
   ````

2. 

