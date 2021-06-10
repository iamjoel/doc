# Ant Design
## 表单下有多个组件的验证

要多一层 Form.Item 直接包裹组件。

```html
<Form.Item label="Field" required={...}>
  <Form.Item name="field" rules={...}><Input /></Form.Item> // 直接包裹才会绑定表单
  <span>description</span>
</Form.Item>
```