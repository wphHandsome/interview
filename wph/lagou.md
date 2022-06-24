#### hook？
* hook就是钩子，git hook，react hook ，vue hook
##### react hook
* React提供了一些像useState这样的内置Hook。你还可以创建自定义Hook以在不同组件之间重用有状态行为。
* Effect Hook中的useEffect增加了在功能组件执行副作用的功能。它与React类中的componentDidMount，componentDidUpdate和componentWillUnmount具有相同的用途，但统一为单个API
* 还需要再补充！！！！！！！

##### vue hooke
* 就是你在任意地方用 this.on/once('hook:生命周期'，callback),就可以监听到生命周期的变化了


#### postMessage？
* postMessage是html5引入的API,postMessage()方法允许来自不同源的脚本采用异步方式进行有效的通信,可以实现跨文本文档,多窗口,跨域消息传递.多用于窗口间数据通信,这也使它成为跨域通信的一种有效的解决方案.
* postMessage 可用于解决以下方面的问题：
    1、页面和其打开的新窗口的数据传递
    2、页面与嵌套的 iframe 消息传递
    3、多窗口之间消息传递
##### 语法
* otherWindow.postMessage(message, targetOrigin, [transfer]);
* otherWindow
    其他窗口的一个引用，比如 iframe 的 contentWindow 属性、执行 window.open 返回的窗口对象、或者是命名过或数值索引的 window.frames。
* message
    要发送的数据。它将会被结构化克隆算法序列化，所以无需自己序列化（部分低版本浏览器只支持字符串，所以发送的数据最好用JSON.stringify() 序列化）。
* targetOrigin
    通过 targetOrigin 属性来指定哪些窗口能接收到消息事件，其值可以是字符串“*”（表示无限制）或者一个 URI（如果要指定和当前窗口同源的话可设置为"/"）。在发送消息的时候，如果目标窗口的协议、主机地址或端口号这三者的任意一项不匹配 targetOrigin 提供的值，那么消息就不会发送。


#### http only
* 如果cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击，窃取cookie内容，这样就增加了cookie的安全性，即便是这样，也不要将重要信息存入cookie。XSS全称Cross SiteScript，跨站脚本攻击，是Web程序中常见的漏洞，XSS属于被动式且用于客户端的攻击方式，所以容易被忽略其危害性。其原理是攻击者向有XSS漏洞的网站中输入(传入)恶意的HTML代码，当其它用户浏览该网站时，这段HTML代码会自动执行，从而达到攻击的目的。如，盗取用户Cookie、破坏页面结构、重定向到其它网站等。
* //设置https的cookie
    response.addHeader("Set-Cookie", "uid=112; Path=/; Secure; HttpOnly");
    具体参数的含义再次不做阐述，设置完毕后通过js脚本是读不到该cookie的，但使用如下方式可以读取。
    Cookie cookies[]=request.getCookies()

#### 如何用call实现apply，反之如何实现

#### 写段代码看下宏任务和微任务执行顺序

#### map定义的存储不到loacalstorage！对象中包含函数等的也存不进去locastorage
* const obj = new Set([1,2,3]) 存不进localstorage

#### 如何看是单页面还是多页面
* 给body加入背景色，如果跳转变色了就是多页面
* 看请求，有请求就是多页

#### Vue路由在hash模式下#已被占用；无法使用浏览器的锚点功能；用js实现代替
* https://www.freesion.com/article/3523814002/

#### 如果使用history模式，都要进行那些配置

#### 项目支持单页模式，也支持双页模式怎么处理？

#### 函数组合？

####  class继承

#### 一台服务器，部署了三个域名，接口请求如何知道请求的哪个？
* 在Http1.1中根据接口请求的请求头host字段，会有域名
* 在Http2中根据


#### 什么时候用hover，什么时候用mouseEnter
* hover一般只是用于简单的交互样式
* mouseEnter用于动态交互

#### 事件委托
* vue举例
```
    <div class="bot"  @click="e =>weitio(111,e)">
        <div class="botshow" v-for="(item,index) in 5" :key="item" :data-index='index'><p>{{index}}</p></div>
    </div>
```

#### 原子性？？？

#### URI？？？

#### 三次挥手，四次握手？浏览器输入地址流程？https和http2

#### 表格虚拟滚动？？？


#### index.html要用协商缓存，不能用强缓存，不然每次上线要强刷
