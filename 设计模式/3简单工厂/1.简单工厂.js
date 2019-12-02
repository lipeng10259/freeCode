
var loginAlert = function(text) {

    this.content = text;

}

loginAlert.prototype.show = function () {
    // 显示警告
}

var LoginConform = function (text) {

    this.content = text

};

LoginConform.prototype.show = function () {

    // 显示提示框

};

var LoginPrompt = function (text) {

    this.content = text;

};

LoginPrompt.prototype.show = function () {

    // 显示提示框

}


var PopFactory = function (name) {

    switch(name) {

        case 'alert':
            return new loginAlert();
        case 'confirm': 
            return new LoginConform();
        case 'prompt':
            return new LoginPrompt();
    }

}