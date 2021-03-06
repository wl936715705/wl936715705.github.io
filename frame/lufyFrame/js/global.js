function log(msg) {
    if (window["console"]) {
        if ((typeof msg) == "string") {
            console.log(msg);
        } else {
            console.log(String(msg));
        };
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return null;
}

function ismobile() {

    var ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));
    var istablet = (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase()));
    if ((/tablet pc/i.test(navigator.userAgent.toLowerCase()))) {istablet = false;}
    if(ismobile || istablet) return true;
    else return false;

}

function isIEMobile() {
    var regExp = new RegExp("IEMobile", "i");
    if (navigator.userAgent.match(regExp) == "IEMobile")
    {
        return true;
    }
    else
    {
        return false;
    }
}
var ua = navigator.userAgent, wx = /MicroMessenger/i.test(ua), ios = /ip(?=od|ad|hone)/i.test(ua);
var isVibrate = "vibrate" in navigator;//手机震动

var isPC = true;
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    isPC = false;
}

String.prototype.trim = function() //去除两端空格
{
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.checkMoblie = function() { //验证字符串是否为合法的手机号码
    return /^1[3-9]\d{9}$/.test(this);
};

Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

//数组求和
/*Array.prototype.sum = function (){
 return this.reduce(function (partial, value){
 return partial + value;
 })
 };*/
//数组删除某个数
/*Array.prototype.remove = function(val) {
 var index = this.indexOf(val);
 if (index > -1) {
 this.splice(index, 1);
 }
 };*/
