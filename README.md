---
title: node学习
date: 2014-10-01 21:44:30
tags: node
categories: js
---

node.js的API系列http模块

<!-- more -->
** 什么是http？**

> http就是我们基本每天都在使用的超文本传输协议，定义了服务器和客户端怎么发送数据、怎么接收数据。

第一天中用到的代码：
```javascript
var http=require('http');//请求http变量并赋予一个变量
http.createServer(function(req,res){//使用http.createServer创建web服务器对象
	res.writeHead(200,{'Content-Type':'text/plain'});//给服务器增加头
	res.end('Hello Wdddorld\n');
}).listen(3300,"127.0.0.1");
console.log('Server running an http://127.0.0.1:3300/')
```
*每次修改代码后都要重新启动服务器*