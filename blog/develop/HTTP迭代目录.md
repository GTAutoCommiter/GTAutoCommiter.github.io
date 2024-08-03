## HTTP3.0

* 改进了传输层，使用 UDP 代替 TCP 以提高传输速度和可靠性。

## [HTTP2.0](https://www.runoob.com/http/http2-tutorial.html#:~:text=HTTP%2F2%20%E4%BD%BF%E7%94%A8%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%A0%BC%E5%BC%8F%E6%9D%A5%E4%BC%A0%E8%BE%93%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%80%8C%E4%B8%8D%E6%98%AF%E5%83%8F%20HTTP%2F1.1%20%E4%B8%80%E6%A0%B7%E4%BD%BF%E7%94%A8%E6%96%87%E6%9C%AC%E6%A0%BC%E5%BC%8F%E3%80%82,%E8%BF%99%E6%8F%90%E9%AB%98%E4%BA%86%E6%95%88%E7%8E%87%E5%B9%B6%E9%99%8D%E4%BD%8E%E4%BA%86%E6%95%B0%E6%8D%AE%E4%BC%A0%E8%BE%93%E7%9A%84%E5%BB%B6%E8%BF%9F%E3%80%82%20HTTP%2F2%20%E4%BD%BF%E7%94%A8%E5%A4%B4%E9%83%A8%E5%8E%8B%E7%BC%A9%E6%9D%A5%E5%87%8F%E5%B0%91%E4%BC%A0%E8%BE%93%E6%95%B0%E6%8D%AE%E7%9A%84%E5%A4%A7%E5%B0%8F%E3%80%82%20%E8%BF%99%E6%9C%89%E5%8A%A9%E4%BA%8E%E5%87%8F%E5%B0%91%E7%BD%91%E7%BB%9C%E5%B8%A6%E5%AE%BD%E7%9A%84%E4%BD%BF%E7%94%A8%E9%87%8F%EF%BC%8C%E5%B9%B6%E6%8F%90%E9%AB%98%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E9%80%9F%E5%BA%A6%E3%80%82)

* [头部压缩](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Compression)——协议会消除多个请求中相同的头部信息
* [服务器推送](https://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)
* [数据流](https://blog.chensoul.cc/posts/2024/05/07/http-streaming/)
* 二进制传输
* 多路复用——允许同时发送多个请求和响应
* 增加双工模式——即不仅客户端能够同时发送多个请求，服务端也能同时处理多个请求，解决了队头堵塞的问题
* 

## HTTP1.1（主流的协议版本）

* 客户端请求的头信息引入了更多的方法

  * 新增方法

    | 请求方法 | 描述                                               |
    | -------- | -------------------------------------------------- |
    | PUT      | 上传文件或者更新资源。                             |
    | DELETE   | 删除指定的资源。                                   |
    | OPTIONS  | 请求获取服务器支持的请求方法。                     |
    | TRACE    | 回显服务器收到的请求，主要用于诊断。               |
    | CONNECT  | 建立一个隧道用于代理服务器的通信，通常用于 HTTPS。 |

* [新增了Host字段——用来指定服务器的域名](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Host)。
  
* [使用两个新模型改进连接管理——长链接模型 和 流水线模型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  
  * 长链接（persistent connection）：即TCP连接默认不关闭，可以被多个请求复用，不用声明Connection: keep-alive。
    * 优点：改善了1.0短连接的性能开销
  
  * 流水线模型（pipelining）:
    * 优点：减少整体等待时间
  
* 同一个TCP连接里面，所有的数据通信是按次序进行的。服务端是按队列顺序处理请求的，服务器只有处理完一个回应，才会进行下一个回应。

* Header属性

  * [cache-control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
  * [Etag](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag)
  * 


## HTTP1.0

* 定义了三种请求方法

  | 请求方法 | 描述                   |
  | -------- | ---------------------- |
  | GET      | 请求指定的资源。       |
  | POST     | 提交数据以处理请求。   |
  | HEAD     | 请求资源的响应头信息。 |

* 根据[Content-Type](https://www.runoob.com/http/http-content-type.html)可以支持多种数据格式，即MIME多用途互联网邮件扩展，例如text/html、image/jpeg等；

* 每次TCP连接只能发送一个请求，当服务器响应后就会关闭这次连接，下一个请求需要再次建立TCP连接，就是不支持keepalive。

* Header属性

  * [Expect](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expect)

