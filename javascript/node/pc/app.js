
var http = require('https');
var iconv = require('iconv-lite');
var requests = require('requests');
var zlib = require('zlib');
var cheerio = require('cheerio');

var options={
    hostname:'www.weibo.com',
    part:80,
    path:'/u/2695120573',
    method:'POST',
    headers:{
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection':'keep-alive',
        'Content-Type': '',
        'Cookie': 'SINAGLOBAL=4259000822217.405.1552959634900; _ga=GA1.2.6061193.1555046891; __gads=ID=ada5d4651cec5e9e:T=1555047001:S=ALNI_MbJoN6gcv47KPY25iAgJ_BqgNCvgg; UM_distinctid=16c754f77522fe-0d721254ac1e57-58324467-1fa400-16c754f775346f; un=1025917773@qq.com; wvr=6; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9W54Zf2yrnQ_vhk9QhFKnLid5JpX5KMhUgL.FoefeK54e0nNSKB2dJLoIpW.9P9DdFfjUgSD9JHETK2p; UOR=,,login.sina.com.cn; wb_view_log_3510938754=1920*10801; Ugrow-G0=e1a5a1aae05361d646241e28c550f987; ALF=1605584414; SSOLoginState=1574048414; SCF=AicPMytcghUc19InbgoSBX3dmRIcuAhxKDuXm0xcqNaXBptloqk4rY4dAR47i8KQMQ_KMr6PLEt7qm6KSSKKF6M.; SUB=_2A25w1mLPDeRhGeVL6lIY8ybLzjiIHXVTotMHrDV8PUNbmtBeLXXFkW9NTEBWNJd2LsW2GKMxrxOFNIADLk4TbhLM; SUHB=03oVkQItWoYZBR; YF-V5-G0=9717632f62066ddd544bf04f733ad50a; _s_tentry=login.sina.com.cn; Apache=8883733200162.752.1574048445990; ULV=1574048446043:79:5:2:8883733200162.752.1574048445990:1574039978488; webim_unReadCount=%7B%22time%22%3A1574056433137%2C%22dm_pub_total%22%3A0%2C%22chat_group_client%22%3A0%2C%22allcountNum%22%3A0%2C%22msgbox%22%3A0%7D; WBStorage=384d9091c43a87a5|undefined; YF-Page-G0=e57fcdc279d2f9295059776dec6d0214|1574056410|1574056405',
        'Host': 'weibo.com',
        'Referer': 'https://weibo.com/u/2695120573?is_hot=1',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.94',
        'X-Requested-With': 'XMLHttpRequest'
    }
}
http.get(options, function (res) {
    var html=[];
    var len = 0;
    res.on('data',function(data){
        html.push(data);
        len += data.length;
    });
    res.on('end',function(){
        var dataAll = Buffer.concat(html,len);
        zlib.gunzip(dataAll, function(err, decoded) { 
        let str = decoded.toString();
        let idx = str.indexOf("window.open('https:");
        str.split(idx)
        console.log(str.split(idx))
        })
        // var strJson = iconv.decode(dataAll,'UTF-8');
        // console.log(dataAll.toString())
    })
})

// requests('https://weibo.com/u/2695120573?is_hot=1', options )
// .on('data', function (chunk) {
//   console.log(chunk)
// })
// .on('end', function (err) {
//   if (err) return console.log('connection closed due to errors', err);
 
//   console.log('end');
// });