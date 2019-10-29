var  java = function (content) {

    this.content = content;

    (function (content) {

        var div = document.createElement('div');

        div.innerHTML = content;

        div.style.color = 'green';

        document.getElementById('container').appendChild(div);

    })(content)

}

var  php = function (content) {

    this.content = content;

    (function (content) {

        var div = document.createElement('div');

        div.innerHTML = content;

        div.style.color = 'red';

        document.getElementById('container').appendChild(div);

    })(content)
    
}


var  javascript = function (content) {

    this.content = content;

    (function (content) {

        var div = document.createElement('div');

        div.innerHTML = content;

        div.style.color = 'blue';

        document.getElementById('container').appendChild(div);

    })(content)
    
}

function JobFactory (type , content) {

    switch(type) {

        case 'java':
            return new java(content);
        case 'php':
            return new php(content);
        case 'javascript':
            return new javascript(content);
    }
}

JobFactory('php' , 'php是最好的语言');

// 每增加一个类型 就需要更改 JobFactory工厂和 添加新的类


var Factory = function (type,content) {

   

    if(this instanceof Factory) {
        
        return new this[type](content);

    } else {

        return new Factory(type , content);
    
    }



}
    Factory.prototype = {
        java:function (content) {

            this.content = content;
        
            (function (content) {
        
                var div = document.createElement('div');
        
                div.innerHTML = content;
        
                div.style.color = 'green';
        
                document.getElementById('container').appendChild(div);
        
            })(content)
        
        },
    
        php:function (content) {
        
            this.content = content;
        
            (function (content) {
        
                var div = document.createElement('div');
        
                div.innerHTML = content;
        
                div.style.color = 'red';
        
                document.getElementById('container').appendChild(div);
        
            })(content)
            
        },
        javascript:function (content) {
        
            this.content = content;
        
            (function (content) {
        
                var div = document.createElement('div');
        
                div.innerHTML = content;
        
                div.style.color = 'blue';
        
                document.getElementById('container').appendChild(div);
        
            })(content)
            
        }  
    }
    
var data = [
    {type:'javascript', content:'javascript'},
    {type:'java', content:'java'},
    {type:'php', content:'php'}
]

for(let i = 0;i<data.length;i++){
    Factory(data[i].type,data[i].content);
}