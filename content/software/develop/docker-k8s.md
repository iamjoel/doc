# Docker & k8s
## 启动 & 重启

```jsx
docker run -d -p8080:80 xxx
docker restart xxx
```

## 停止

```jsx
docker stop imageId
```

imageId 是 run 时返回的。

## 构建

```jsx
docker build -t "imageName"
```

目录下要有 Dockerfile 文件。

chart 是Helm 的应用打包格式，它由一组文件和目录构成。也就是一个制品。

infra 容器