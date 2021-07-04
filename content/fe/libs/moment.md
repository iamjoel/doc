# Moment
[官方文档](https://momentjs.com/)。

## 格式化字符串
YYYY, YY, MM, DD, HH, hh, mm: ss。

## 初始化

```jsx
moment('20:10:30', 'HH:mm:ss')
moment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"])
```

## 格式化

```jsx
moment().format('YYYY/MM/DD HH:mm')
```

## 转化成时间戳

```jsx
moment().valueOf() // (new Date()).getTime()
```

## 获取 & 设置

```jsx
moment().year(2022).year() // 2022
moment().month()
moment().day()
```

## 比较

```jsx
moment('2010-10-20').isSame('2010-10-20')
moment('2010-01-01').isSame('2010-02-01', 'day')
moment().isAfter
moment().isBefore
```

## 是否是闰年

```jsx
moment().isLeapYear()
```