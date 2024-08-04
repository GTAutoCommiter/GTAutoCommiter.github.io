---
id: network-http
slug: /network-http
title: http-学习笔记
date: 2024-07-30
---

## 缓存

###  强缓存

*  不会向服务器发送请求，直接从本地缓存中读取文件并返回`Status Code: 200 OK` 

  | Status Code (状态码)        | 描述                                                         |
  | --------------------------- | ------------------------------------------------------------ |
  | `200 （form memory cache）` | 读取位置：内存<br />数据释放：浏览器关闭后                   |
  | `200 (from disk cache)`     | 读取位置：硬盘<br />数据释放：资源不会随着该页面的关闭而释放掉下次打开仍然会是`from disk cache` |

* 访问优先级：`memory cache`>`disk cache`>请求网络资源

* 相关`Response Headers`

  | Response Headers                                             | 描述               |
  | ------------------------------------------------------------ | ------------------ |
  | Expires                                                      | 指定缓存的生命周期 |
  | [Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control) | 缓存控制           |

  > Cache-Control强缓存中常见值：
  >
  > * `no-cache`：每次请求需要校验服务器资源的新鲜度
  > * `max-age=31536000`：浏览器在一年内都不需要向服务器请求资源
  > * `public`：表示响应可被任何缓存区缓存
  > * `private`：只能针对个人用户，而不能被代理服务器缓存
  > * `no-store`：禁止一切缓存（即响应不被缓存）
  > * `no-cache`：执行协商缓存

### 协商缓存

* 会比对当前缓存与服务器中缓存新鲜度

  * 若当前缓存**够**新鲜：服务器返回` 304`，客户端从浏览器获取资源
  * 若当前缓存**不够**新鲜：则从服务器获取新缓存。

* 相关 Request/Response Headers

  | Request/Response Headers            | 描述                                                         |
  | ----------------------------------- | ------------------------------------------------------------ |
  | `Last-Modified`/`If-Modified-Since` | 匹配 Response Header 的 `Last-Modified` 与 Request 的 `If-Modified-Since` 是否一致 |
  | `Etag`/`If-None-Match`              | 匹配 Response Header 的 `Etag` 与 Request 的 `If-None-Match` 是否一致 |

  

## HTTPS

### 加密方式
