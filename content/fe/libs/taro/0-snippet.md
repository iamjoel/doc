# VSCode - Taro 代码片段
```json
"taro-component-template": {
  "prefix": "j:taroct",
  "description": "组件模板",
  "body": [
    "import React from 'react'",
    "import {View} from '@tarojs/components'",
    "",
    "import s from './index.scss'",
    "",
    "export interface I$1Props {",
    "  name: string",
    "  type?: number",
    "}",
    "",
    "export interface I$1State {",
    "  name: string",
    "}",
    "",
    "export default class I$1 extends React.Component<I$1Props, I$1State> {",
    "",
    "  constructor(props: I$1Props) {",
    "    super(props)",
    "    this.state = {",
    "      name: ''",
    "    }",
    "  }",
    "",
    "  render() {",
    "    return (",
    "      <View >",
    "        ",
    "      </View>",
    "    )",
    "  }",
    "}",
    ""
  ]
},
"taro-import": {
  "prefix": "j:taroi",
  "description": "引入taro",
  "body": [
    "import Taro from '@tarojs/taro'"
  ]
},
"taro-toast": {
  "prefix": "j:tarotoast",
  "description": "toast",
  "body": [
    "Taro.showToast({",
    "  icon: '${1:none}',",
    "  title: '$2'",
    "})",
  ]
},
"taro-redirtTo": {
  "prefix": "j:taroredirt",
  "description": "页面跳转。关闭当前页面",
  "body": [
    "Taro.redirectTo({",
    "  url: '/pages/I$1/I$1'",
    "})",
  ]
},
"taro-reLaunch": {
  "prefix": "j:tarorelaunch",
  "description": "页面跳转。关闭所有页面",
  "body": [
    "Taro.reLaunch({",
    "  url: '/pages/I$1/I$1'",
    "})",
  ]
},
"taro-navigateBack": {
  "prefix": "j:taronavigateback",
  "description": "页面返回。",
  "body": [
    "Taro.navigateBack({",
    "  delta: ${1:2}",
    "})",
  ]
},
```