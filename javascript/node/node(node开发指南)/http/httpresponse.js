// http.ClientRequest
// http.ClientRequest 是由 http.request 或 http.get 返回产生的对象，表示一
// 个已经产生而且正在进行中的 HTTP 请求。它提供一个 response 事件，即 http.request
// 或 http.get 第二个参数指定的回调函数的绑定对象。我们也可以显式地绑定这个事件的
// 监听函数：

//httpresponse.js
var http = require('http');

var req = http.get({host: '127.0.0.1',port:'3000'});

    req.on('response', function(res) {

        res.setEncoding('utf8');

        res.on('data', function (data) {

        console.log(data);

    });
});


// http.ClientRequest 像 http.ServerResponse 一样也提供了 write 和 end 函
// 数，用于向服务器发送请求体，通常用于 POST、PUT 等操作。所有写结束以后必须调用 end
// 函数以通知服务器，否则请求无效。http.ClientRequest 还提供了以下函数。
//  request.abort()：终止正在发送的请求。
//  request.setTimeout(timeout, [callback])：设置请求超时时间，timeout 为
// 毫秒数。当请求超时以后，callback 将会被调用。
// 此外还有request.setNoDelay([noDelay])、request.setSocketKeepAlive
// ([enable], [initialDelay]) 等函数，具体内容请参见 Node.js 文档。


// 2. http.ClientResponse
// http.ClientResponse 与 http.ServerRequest 相似，提供了三个事件 data、end
// 和 close，分别在数据到达、传输结束和连接结束时触发，其中 data 事件传递一个参数
// chunk，表示接收到的数据。
// http.ClientResponse 也提供了一些属性，用于表示请求的结果状态，参见表 4-3。
// 表4-3 ClientResponse 的属性
// 名 称                含 义
// statusCode HTTP 状态码，如 200、404、500
// httpVersion HTTP 协议版本，通常是 1.0 或 1.1
// headers HTTP 请求头
// trailers HTTP 请求尾（不常见）
// http.ClientResponse 还提供了以下几个特殊的函数。
//  response.setEncoding([encoding])：设置默认的编码，当 data 事件被触发
// 时，数据将会以 encoding 编码。默认值是 null，即不编码，以 Buffer 的形式存
// 储。常用编码为 utf8。
//  response.pause()：暂停接收数据和发送事件，方便实现下载功能。
//  response.resume()：从暂停的状态中恢复。