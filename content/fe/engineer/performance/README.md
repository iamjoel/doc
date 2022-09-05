# 性能
## 目标
提升速度，减少用户等待的时间。最终来提升用户的体验。

性能可分为 加载时性能 和 运行时性能。

## 方法论
找到瓶颈，找关键指标，设定目标，优化。

## 关键指标
加载性能的关键指标：
* [Apdex 应用性能指数](https://www.apdex.org/)： Apdex (Application Performance Index) 应用性能指数, 也被称为 满意度。是由 Apdex 联盟开放的用于评估应用性能的工业标准。标准从用户的角度出发，将对应用响应时间的表现，转为用户对于应用性能的可量化为范围为 0 - 1 的满意度评价。
* [Web 核心指标(Web Core Vitals)](https://web.dev/i18n/zh/vitals/)
  * Largest Contentful Paint (LCP) ：最大内容绘制，测量加载性能。为了提供良好的用户体验，LCP 应在页面首次开始加载后的2.5 秒内发生。
  * First Input Delay (FID) ：首次输入延迟，测量交互性。为了提供良好的用户体验，页面的 FID 应为100 毫秒或更短。
  * Cumulative Layout Shift (CLS) ：累积布局偏移，测量视觉稳定性。为了提供良好的用户体验，页面的 CLS 应保持在 0.1或更少。


运行时性能：
RAIL: Response，Animation，Idel，Load。 以用户为核心的性能模型。

[更多](https://www.yuque.com/fegogogo/fe/pm1yii)

## 加载时性能
工具：Chrome 开发者工具 NetWork。

分析整个加载的链路。

1. 减少请求次数。
  1. 缓存。
    1. HTTP 的缓存。
    2. 接口的缓存。
    3. 文件的离线缓存。
  2. 内联体积小(<5KB)的图片。将图片转化成 Base64 字符串。
  3. 合并。
     1. 文件合并。
     2. 接口合并。 技术：GraphQL。BFF。
2. 减少体积。
  1. 压缩。
     1. 传输时的压缩。GZip，Brotli，Zopfli 等压缩算法。其中 Brotli 的压缩率比 GZip 算法高。
     2. 文件内容的压缩。 比如，压缩 js 用 UglifyJS，压缩图片 等。
  2. 图片：选择合适的文件格式。图片： Webp，jpeg，png。
  3. 代码：去掉不必要的代码。
    1. 去掉没用的代码。工具：tree-shaking 等。
    2. 体积大的代码：拆分(code-splitting)。特别的框架和业务代码合在一起的，抽取出框架代码(webpack vendor)。
    3. 有些包，体积挺大，但在业务中只用了该包少量的功能，考虑去掉。
3. 提升传输速度。
   1. 使用 CDN。
   2. 加载的优先级。区别核心内容和增强体验的内容。
      1. 首屏。
      2. 核心功能。
      3. 按需加载。
   3. 并行数量。
   4. 使用 HTTP/2 协议。
   5. 提升服务器端的响应速度。

## 运行时性能
工具：Performance， Lighthouse。

1. 减少渲染。
   1. 渲染的缓存。
   2. 减少更新 DOM 的数量。 Visual DOM。
   3. 减少 DOM 的数量。
2. CSS 的优化。
   1. 减少回流和重绘。
      1. 复杂的动画，用绝对定位来脱离文档流，来减少重绘。
   2. 选择器的优化。
      1. 右侧指定性强的。
      2. 减少层级。
3. 防止计算密集型的的内容卡UI。放在后台算(Service work) 或给服务器做。
4. 节流和防抖。
5. 内存泄漏。

针对框架的优化：
* [React 运行时性能优化之减少渲染组件的次数](https://www.yuque.com/fegogogo/fe/or7w2l)
* [Vue 运行时性能优化之减少渲染组件的次数](https://www.yuque.com/fegogogo/fe/agunqp)

其他：
* [提高页面渲染速度的 3 个 CSS 技巧](https://www.yuque.com/fegogogo/fe/htgug3)