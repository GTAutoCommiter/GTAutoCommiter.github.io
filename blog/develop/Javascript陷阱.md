1. array.every判断空数组为`true`

   ````javascript
   const even = (element) => element % 2 === 0;
   [].every(even)
   //=> true
   ````

2. typeof无法区分`Object`、`Array`、`Set`、`Map`

   ````javascript
   typeof {};
   //=> 'object'
   typeof [];
   //=> 'object'
   typeof new Map();
   //=> 'object'
   typeof new Set();
   //=> 'object'
   ````

   * 判断是否为数组：Array.isArray();

