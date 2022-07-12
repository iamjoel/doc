# useHotkeys
## 单个快捷键

```js
import { useHotkeys } from 'react-hotkeys-hook'
useHotkeys('c', () => ...)
useHotkeys('alt', () => ...)
useHotkeys('ctrl', () => ...)
useHotkeys('f5', () => ...)
useHotkeys('shift+c', () => ...)
useHotkeys('ctrl+k', () => ...)
useHotkeys('ctrl+k+j', () => ...)
```

## 多个快捷键

```js
useHotkeys('ctrl,control,command,⌘', () => ...)
useHotkeys('ctrl+a,ctrl+b,r,f', (event, handler) => {
  switch (handler.key) {
    case 'ctrl+a': alert('you pressed ctrl+a!');
      break;
    case 'ctrl+b': alert('you pressed ctrl+b!');
      break;
    case 'r': alert('you pressed r!');
      break;
    case 'f': alert('you pressed f!');
      break;
    default: alert(event);
  }
})
```

## 按钮是否按下

```js
import { isHotkeyPressed } from 'react-hotkeys-hook'

isHotkeyPressed('option')
```

## 文档

- ****[useHotkeys(key, handler)](https://github.com/JohannesKlauss/react-hotkeys-hook)****
- [https://github.com/jaywcjlove/hotkeys/#defining-shortcuts](https://github.com/jaywcjlove/hotkeys/#defining-shortcuts)