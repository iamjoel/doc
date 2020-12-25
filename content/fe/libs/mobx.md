# Mobx
## 把 Observable 对象转成普通 JS 对象
```js
import { toJS, isObservable } from 'mobx'

const plainObj = 
  isObservable(observableObj) ? toJS(observableObj) : observableObj
const plainArr = 
  observableArr
    .map(item => (item => isObservable(item) ? toJS(item) : item)
```

## 文档
* [官网](https://github.com/mobxjs/mobx)