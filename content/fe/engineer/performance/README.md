# 性能
![](https://cdn.nlark.com/yuque/0/2022/png/556204/1662443400929-2bf40146-0753-4d6a-9422-8ce609c06025.png?x-oss-process=image%2Fresize%2Cw_1788%2Climit_0)

优秀的性能，给用户流畅的体验，降低用户的流失。本文介绍了提升前端性能的思路和方法。
​
## 包含内容
性能可分为 加载时性能 和 运行时性能。加载时性能指网页加载过程的性能。运行时性能指网页加载好后，用户在使用过程中的性能。

## 整体步骤
提升性能包含三步:
1. 发现问题。
2. 定位问题。
3. 优化。

## 1 发现问题
可以通过一些指标来发现性能问题。

### 加载时性能
度量加载时性能的一个主流指标是： [核心 Web 指标(Core Web Vitals)](https://web.dev/i18n/zh/vitals/)。

> 核心 Web 指标是适用于所有网页的 Web 指标子集，每位网站所有者都应该测量这些指标，并且这些指标还将显示在所有 Google 工具中。每项核心 Web 指标代表用户体验的一个不同方面，能够进行实际测量，并且反映出以用户为中心的关键结果的真实体验。

指标包含三个方面：加载性能、交互性和视觉稳定性。具体如下：
1. Largest Contentful Paint (LCP) ：最大内容绘制，测量加载性能。为了提供良好的用户体验，LCP 应在页面首次开始加载后的2.5 秒内发生。
2. First Input Delay (FID) ：首次输入延迟，测量交互性。为了提供良好的用户体验，页面的 FID 应为100 毫秒或更短。
3. Cumulative Layout Shift (CLS) ：累积布局偏移，测量视觉稳定性。为了提供良好的用户体验，页面的 CLS 应保持在 0.1或更少。

查看当前页面 `核心 Web 指标`。有多种方式:
1. 在 Chrome 的 Rendering Tab 中查看。
2. npm 包： [web-vitals](https://www.npmjs.com/package/web-vitals)。

感兴趣也可以了解下 [Apdex 应用性能指数](https://www.apdex.org/)。
> Apdex (Application Performance Index) 应用性能指数, 也被称为 满意度。是由 Apdex 联盟开放的用于评估应用性能的工业标准。标准从用户的角度出发，将对应用响应时间的表现，转为用户对于应用性能的可量化为范围为 0 - 1 的满意度评价。


### 运行时性能
度量加载时性能的一个主流指标是：RAIL 模型。RAIL 由四个方面组成： Response，Animation，Idel，Load。具体如下：
1. Response < 100毫秒。
2. Anmiation: FPS 接近 60。
3. Idel：任务完成时间 < 50毫秒。
4. Page Load: 重要内容的加载时间 < 1秒。

## 2 定位问题
### 加载时性能
可以通过 [WebpageTest](https://www.webpagetest.org/) 和 Chrome Lighthouse 来知道整体的加载时性能情况和定位问题。

可以通过 Chrome Network 来知道网络资源加载情况。

如果用的 Webpack， 用 Webpack Analysis 找到一些大的 chunk。

### 运行时性能
可以通过 Chrome 的 Performance Tab，实时 FPS 图，Memory Tab 来定位问题。

## 3 优化
### 加载时性能
分析整个加载的链路。具体方法如下：
1. 减少请求次数。
   1. 缓存。
     1. 接口的缓存。
     2. 文件的离线缓存。
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
    3. 并行数量的控制。
    4. 使用更高版本的 HTTP 协议。HTTP/2，HTTP/3。
    5. 提升服务器端的响应速度。

### 运行时性能
1. 渲染优化。
   1. 减少回流和重绘
      1. 复杂的动画，用绝对定位来脱离文档流，来减少重绘。
   2. 组件缓存。
   3. 减少更新 DOM 的数量。 Visual DOM。
   4. 减少 DOM 的数量。
2. CSS 的优化。
   1. 选择器的优化。
      1. 右侧指定性强的。
      2. 减少层级。
3. 计算优化
   1. 防止计算密集型的的内容卡UI。放在后台算(Service work) 或给服务器做。
   2. 节流和防抖。
   3. 内存泄漏。

针对框架的优化：
* [React 运行时性能优化之减少渲染组件的次数](https://mp.weixin.qq.com/s/Sx9HiNgxOV6w0hNdLksonw)
* [Vue 运行时性能优化之减少渲染组件的次数](https://mp.weixin.qq.com/s/nJljYPXnRSSrxOybDEkhbA)

其他：
* [提高页面渲染速度的 3 个 CSS 技巧](https://mp.weixin.qq.com/s/fwgFPvbgF6sFB97qRitHlQ)

