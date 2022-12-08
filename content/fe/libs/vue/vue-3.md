# Vue 3
## 快速创建项目

```bash
npm init vue@latest
```

## Composition API
```jsx
import {ref, watch, computed, reactive, toRefs} from 'vue'

export default function useCount(initValue = 1, onChange) {
  const count = ref(initValue)
  const user = reactive({name: 'Joel'})
  // user.name = 'Jack' // 修改 value。

  const setCount = (value) => {
    count.value = value
  }

  watch(count, newValue => onChange(newValue))

  const doubleCount = computed(() => count.value * 2)

  const increase = () => setCount(count.value + 1)
  const decrease = () => setCount(count.value - 1)
  
  return {
    count,
    increase,
    decrease,
    ...toRefs(user), // 保持属性的响应
  }
}
```
