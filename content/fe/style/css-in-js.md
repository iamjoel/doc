# CSS in JS

## [Emotion](https://emotion.sh/)

### 内联样式

```jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const base = css`
  color: hotpink;
`

render(
  <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
    This is hotpink.
  </div>
)
```

### [绑定样式的组件](https://emotion.sh/docs/styled)

```jsx
import styled from '@emotion/styled'
const ParentComp = () => (<div>xxx</div>)
const Comp = () => (<div>xxx</div>)

const Title = styled.div`
	color: #f00;
	background: #fff;
	&:hover {background: #eee;}
`

const Input = styled.input(props => {
	retrun {
		display: props.isShow ? '' : 'none'
	}
})
const StyledParentComp = styled(ParentComp)`
	&:hover ${Comp} {
		color: #f00;
	}
`

const StyledComp = styled(Comp)`
	color: #f00;
`

render(
	<>
		<Title>xxxx</Title>
	</>
)
```

### Media Queries

```jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
<p
  css={css`
      font-size: 30px;
      @media (min-width: 420px) {
        font-size: 50px;
      }
    `}
  >
    Some text!
</p>
```

### 全局样式

```jsx
import { Global, css } from '@emotion/react'
<Global
    styles={css`
      .some-class {
        color: hotpink !important;
      }
    `}
/>
<div className="some-class">This is hotpink now!</div>
```

### 其他

- [KeyFrames](https://emotion.sh/docs/keyframes)
- [包含的包的介绍(Package Summaries)](https://emotion.sh/docs/package-summary)

## 工具

- [vscode-styled-components](https://github.com/styled-components/vscode-styled-components):  VSCode 插件，支持样式高亮和自动补全。

**— 完 —**

整理By [Joel](https://github.com/iamjoel)。微信号搜索: joel007。