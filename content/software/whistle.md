# whistle - 跨平台 Web 调试代理工具
## 介绍
whistle 是基于Node实现的跨平台web调试代理工具，类似的工具有Windows平台上的Fiddler，主要用于查看、修改HTTP、HTTPS、Websocket的请求、响应，也可以作为HTTP代理服务器使用，不同于Fiddler通过断点修改请求响应的方式，whistle采用的是类似配置系统hosts的方式，一切操作都可以通过配置实现，支持域名、路径、正则表达式、通配符、通配路径等多种匹配方式，且可以通过Node模块扩展功能。

## 命令

### 安装

```bash
npm install -g whistle
```

### 启动 & 重启 & 停止
```bash
w2 start
w2 restart
w2 stop
```

### 配置代理规则
启动后，访问 [http://127.0.0.1:8899](http://127.0.0.1:8899/)。

注意：

1. 代理 https 的路径需要安装根证书，方法见 [这里](http://wproxy.org/whistle/webui/https.html)。
2. 电脑上要设置服务器的地址为:  [http://127.0.0.1:8899](http://127.0.0.1:8899/)。Mac 上设置方法： 系统偏好设置 > 网络 > 高级 > 代理 > 网路代理 或 安全网络代理。

## 资源
- [文档](http://wproxy.org/whistle/)