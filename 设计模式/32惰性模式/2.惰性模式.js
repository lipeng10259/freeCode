// 惰性模式 :减少每次代码执行时的重复性的分支判断，通过对对象重定义来屏蔽原对象的中的分支判断


// 单体模式定义命名空间 

var A = {};
// 添加绑定事件方法 on

// 加载即执行(通过闭包，打开执行一次，下次使用不在重新执行)
A.on = function (dom , type , fn) {
    if (document.addEventListener) {
      // 返回新定义的方法
        return function(dom , type , fn) {
            dom.addEventListener(type , fn , false)
        }
      
    } else if(document.attachEvent) {//ie 方法
        return function (dom , type , fn) {
            dom.attachEvent('on' + type , fn);
        }
        
    } else {
        return function (dom , type,fn) {
            dom['on' + type] = fn;
        }
        
    }
}()
