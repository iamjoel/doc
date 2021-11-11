# VSCode - React 代码片段
## 文件模板
```json
"react-component-template": {
  "prefix": "j:react-comp",
  "body": [
    "import React from 'react'",
    "import PropTypes from 'prop-types'",
    "",
    "class $1 extends React.Component {",
    "  static propTypes = {",
    "    classNames: PropTypes.string,",
    "  }",
    "",
    "  static defaultProps = {",
    "    classNames: ''",
    "  }",
    "",
    "  constructor(props) {",
    "    super(props)",
    "    this.state = {",
    "    }",
    "  }",
    "",
    "  render() {",
    "    return (",
    "",
    "    )",
    "  }",
    "}",
    "",
    "export default $1",
  ]
},
"react-component-template-ts": {
  "prefix": "j:react-comp-ts",
  "body": [
    "import React from 'react'",
    "import s from './index.scss'",
    "",
    "export interface I$1Props {",
    "  ",
    "}",
    "",
    "export interface I$1State {",
    "  ",
    "}",
    "",
    "export default class I$1 extends React.Component<I$1Props, I$1State> {",
    "",
    "  constructor(props: I$1Props) {",
    "    super(props)",
    "    this.state = {",
    "      ",
    "    }",
    "  }",
    "",
    "  render() {",
    "    return (",
    "      <div>",
    "        ",
    "      </div>",
    "    )",
    "  }",
    "}",
    ""
  ]
},
"react-function-component-template-ts": {
  "prefix": "j:react-fn-comp-ts",
  "body": [
    "import React, { FC } from 'react'",
    "import s from './style.scss'",
    "export interface I$1Props {",
    "  ",
    "}",
    "const $1: FC<I$1Props> = ({",

    "}) => {",
    "  return (",
    "     <div>",
    "     </div>",
    "  )",
    "}",
    "export default React.memo($1)",
    ""
  ]
},
```

## 工具方法
```json
"setState": {
  "prefix": "j:setState",
  "body": [
    "this.setState({",
    "  $1: $2",
    "})"
  ]
},
"setState CallBack": {
  "prefix": "j:setStateCB",
  "body": [
    "this.setState({",
    "  $1: $2",
    "}, () => {",
    "  $3",
    "})"
  ]
}
```