# VSCode - JavaScript 代码片段
## DOM
```json
"event-stopPropagation": {
  "prefix": "j:eventStopPropagation",
  "description": "阻止事件冒泡",
  "body": [
    "event.stopPropagation()"
  ]
},
"event-value": {
  "prefix": "j:eventValue",
  "description": "事件值",
  "body": [
    "event.target.value"
  ]
},
```

## BOM
```json
"json-stringify": {
  "prefix": "j:jsonStringify",
  "description": "对象转字符串",
  "body": [
    "JSON.stringify($1)"
  ]
},
"json-parse": {
  "prefix": "j:jsonParse",
  "description": "字符串转对象",
  "body": [
    "JSON.parse($1)"
  ]
},
"localStorage-get": {
  "prefix": "j:localStorageGet",
  "description": "获取 localStorage",
  "body": [
    "JSON.parse(localStorage.getItem($1))"
  ]
},
"localStorage-set": {
  "prefix": "j:localStorageSet",
  "description": "设置 localStorage",
  "body": [
    "localStorage.setItem(JSON.stringify($1))"
  ]
},
```