### 深入理解http/https之缓存
* 缓存会根据请求保存输出内容的副本，例如html页面，图片，文件，当下一个请求来到的时候：如果是相同的URL，缓存直接使用副本响应访问请求，而不是向源服务器再次发送请求。
* 浏览器缓存分为强缓存和协商缓存，浏览器加载一个页面的简单流程如下：
* 浏览器先根据这个资源的http头信息来判断是否命中强缓存。如果命中则直接加在缓存中的资源，并不会将请求发送到服务器。
* 如果未命中强缓存，则浏览器会将资源加载请求发送到服务器。服务器来判断浏览器本地缓存是否失效。若可以使用，则服务器并不会返回资源信息，浏览器继续从缓存加载资源。
* 如果未命中协商缓存，则服务器会将完整的资源返回给浏览器，浏览器加载新资源，并更新缓存。

#### 与缓存相关的http扩展消息头
* Expires：指示响应内容过期的时间，格林威治时间GMT
* Cache-Control：更细致的控制缓存的内容  max-age就是确定缓存的时间。
* Last-Modified：响应中资源最后一次修改的时间
* ETag：响应中资源的校验值，在服务器上某个时段是唯一标识的。
* Date：服务器的时间
* If-Modified-Since：客户端存取的该资源最后一次修改的时间，同Last-Modified。
* If-None-Match：客户端存取的该资源的检验值，同ETag。

### Web 缓存大致可以分为：数据库缓存、服务器端缓存（代理服务器缓存、CDN 缓存）、浏览器缓存。

### 浏览器缓存也包含很多内容： HTTP 缓存、indexDB、cookie、localstorage 等等

#### 状态码301和302
* 301 redirect: 301 代表永久性转移(Permanently Moved),301请求是可以缓存的， 即通过看status code，可以发现后面写着from cache。
或者你把你的网页的名称从php修改为了html，这个过程中，也会发生永久重定向。s
* 302 redirect: 302 代表暂时性转移(Temporarily Moved )，但是会在重定向的时候改变 method: 把 POST 改成 GET，于是有了 307;　比如未登陆的用户访问用户中心重定向到登录页面。
访问404页面会重新定向到首页。 
* 307 Temporary Redirect。临时重定向，在重定向时不会改变 method
##### 重定向的应用：重定向(Redirect)就是通过各种方法将各种网络请求重新定个方向转到其它位置（如：网页重定向、域名的重定向、路由选择的变化也是对数据报文经由路径的一种重定向）。
* 1）网站调整（如改变网页目录结构）；
* 2）网页被移到一个新地址；（例如是手机端访问还是pc访问，重定向到不同地址）
* 3）网页扩展名改变(如应用需要把.php改成.Html或.shtml)。



#### 重定向301 和 302
* 301 （永久重定向，默认会被缓存，响应头给你个Location，重定向到这里，例如：短链接跳转长链接，http=》https跳转）
* 302  (暂时重定向，默认不会被缓存，未登录用户跳转到登录页；请求地址404，跳转到首页等操作，只是临时的。搜索引擎认为跳转只是临时的，保留旧地址，抓取新的内容。)
* 304 协商缓存
* 状态码304并不是一种错误，而是告诉客户端有缓存，直接使用缓存中的数据。返回页面的只有头部信息，是没有内容部分的，这样在一定程度上提高了网页的性能。

#### 认证和授权（http请求）
* 认证401（举例：博客需要登陆了才能看） 
* 授权403 （登陆了但是权限不够做这件事情）

#### Host场景

#### Content-Type；example:Content-Type 的常见格式
* text/html ： HTML 格式
* text/plain ：纯文本格式
* text/xml ： XML 格式
* image/gif ：gif 图片格式
* image/jpeg ：jpg 图片格式
* image/png：png 图片格式
* application/xhtml+xml ：XHTML 格式
* application/xml ： XML 数据格式
* application/atom+xml ：Atom XML 聚合格式
* application/json ： JSON 数据格式
* application/pdf ：pdf 格式
* application/msword ： Word 文档格式
* application/octet-stream ： 二进制流数据（如常见的文件下载）
* application/x-www-form-urlencoded ： 中默认的 encType，form 表单数据被编码为 key/value 格式发送到服务器（表单默认的提交数据的格式）
* multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式 以上就是我们在日常的开发中，经常会用到的若干 content-type 的内容格式

#### 图片路径如何带有hash值

#### 协商缓存代码案例


#### Cookie属性domain
* domain	可以访问该Cookie的域名。如果设置为“.google.com”，则所有以“google.com”结尾的域名都可以访问该Cookie。注意第一个字符必须为“.”。
* 一般在实现单点登录的时候会经常用到这个属性，通过在父级域设置Cookie，然后在各个子级域拿到存在父级域中的Cookie值。比如刚才设置的username属性，在blog.csdn.net下同样可以访问到，用户不用重新登录就可以拿到第一次登录进来时候的用户信息，因为这些用户信息都是存在父级域".csdn.net"下面，其他页面也可以拿到。