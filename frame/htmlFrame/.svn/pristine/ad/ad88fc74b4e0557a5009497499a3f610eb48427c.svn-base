function H5(json){
    /**
     * 配置
     */
    var that = this;
    json = json || {};
    this.loadImagesData = [];
    this.loadImagesList = [];
    this.loadCount = 0;
    this.loadImagesListLen = 0;
    this.imagesData = [];
    this.imagesList = [];
    this.count = 0;
    this.imagesListLen = 0;
    this.isSimulateLoad = json.isSimulateLoad || false; //是否开启模拟加载器，默认false
    this.isMusicPlay = json.isMusicPlay || false;//是否开启背景音乐，默认false

    this.aniTime = 0.25;//通用动画时间

    /**
     * 判断横竖屏
     */
    this.orien = function(){
        var initFlag = true;
        var portrait = false;
        if (window.orientation == 90 || window.orientation == -90) {
            if (initFlag) {
                initFlag = false;
                portrait = true;
            }
            $("#landscape").show();
        } else {
            $("#landscape").hide();
            if (portrait) {
                window.location.reload(true);
            } else {
                if (initFlag) {
                    initFlag = false;
                }
            }
        }
    };
    this.orien();
    $(window).on("orientationchange", this.orien);
}

/**
 * 初始化
 */
H5.prototype.init = function(){
    var that = this;
    that.loadImagesData.push({name: 'load_ball', path: 'img/loading/load_ball.png'});
    that.loadImagesData.push({name: 'load_spot', path: 'img/loading/load_spot.png'});
    that.loadImagesData.push({name: 'load_txt', path: 'img/loading/load_txt.png'});
    for (var j = 0; j < that.loadImagesData.length; j++) {
        that.loadImagesList[that.loadImagesData[j].name] = new Image();
        that.loadImagesList[that.loadImagesData[j].name].src = CDN + that.loadImagesData[j].path + VER;
    }

    for (var i in that.loadImagesList) {
        that.loadImagesListLen++;
        var _t = that.loadImagesList[i];
        that.imgLoad(_t, function () {
            that.loadCount++;
            if (that.loadCount == that.loadImagesListLen) {
                that.preLoad();
            }
        });
    }
};

/**
 * 加载主体图片
 */
H5.prototype.main = function(){
    var that = this;
    that.imagesData.push({name: 'continue_btn', path: 'img/public/continue_btn.png'});
    that.imagesData.push({name: 'music_off', path: 'img/public/music_off.png'});
    that.imagesData.push({name: 'music_on', path: 'img/public/music_on.png'});
    that.imagesData.push({name: 'num1', path: 'img/public/num1.png'});
    that.imagesData.push({name: 'num2', path: 'img/public/num2.png'});
    that.imagesData.push({name: 'num3', path: 'img/public/num3.png'});
    that.imagesData.push({name: 'num4', path: 'img/public/num4.png'});
    that.imagesData.push({name: 'open_btn', path: 'img/public/open_btn.png'});

    for(var i=0;i<18;i++){
        that.imagesData.push({name: 'home_con'+i, path: 'img/home/'+i+'.jpg'});
    }
    that.imagesData.push({name: 'home_bg', path: 'img/home/home_bg.jpg'});

    for(var i=0;i<54;i++){
        that.imagesData.push({name: 'enter'+i, path: 'img/last/enter/'+i+'.jpg'});
    }
    that.imagesData.push({name: 'door_txt1', path: 'img/last/door_txt1.png'});
    that.imagesData.push({name: 'door_txt2', path: 'img/last/door_txt2.png'});
    that.imagesData.push({name: 'erweima', path: 'img/last/erweima.png'});
    that.imagesData.push({name: 'erweima_txt', path: 'img/last/erweima_txt.png'});
    that.imagesData.push({name: 'light', path: 'img/last/light.png'});
    that.imagesData.push({name: 'logo', path: 'img/last/logo.png'});
    that.imagesData.push({name: 'slogan', path: 'img/last/slogan.png'});

    that.imagesData.push({name: 'tips_CD', path: 'img/tips/tips_CD.png'});
    that.imagesData.push({name: 'tips_magazine', path: 'img/tips/tips_magazine.png'});
    that.imagesData.push({name: 'tips_poster', path: 'img/tips/tips_poster.png'});
    that.imagesData.push({name: 'tips_rule', path: 'img/tips/tips_rule.png'});
    that.imagesData.push({name: 'tips_shirt', path: 'img/tips/tips_shirt.png'});
    that.imagesData.push({name: 'tips_swipe', path: 'img/tips/tips_swipe.png'});

    for (var j = 0; j < that.imagesData.length; j++) {
        that.imagesList[that.imagesData[j].name] = new Image();
        that.imagesList[that.imagesData[j].name].src = CDN + that.imagesData[j].path + VER;
    }
    that.loading();
};

/**
 * 预加载
 */
H5.prototype.preLoad = function(){
    var that = this;
    var $load = $('#loading');
    $('.load_ball').css({'background-image':'url('+that.loadImagesList['load_ball'].src+')','background-repeat':'no-repeat'});
    $('.load_spot').css({'background-image':'url('+that.loadImagesList['load_spot'].src+')','background-repeat':'no-repeat'});
    $('.load_txt').css({'background-image':'url('+that.loadImagesList['load_txt'].src+')','background-repeat':'no-repeat'});
    $load.fadeIn(that.aniTime*1000,function(){
        that.main();//加载主体图片
    });
};

/**
 * 加载
 */
H5.prototype.loading = function(){
    var that = this;
    var loadNum = 0;
    var $load = $('#loading');

    if(!that.isSimulateLoad){
        //不启用加载模拟器
        for (var i in that.imagesList) {
            that.imagesListLen++;
            var _t = that.imagesList[i];
            that.imgLoad(_t, function () {
                that.count++;
                loadNum = Math.floor(that.count/that.imagesListLen*100);
                if (that.count == that.imagesListLen) {
                    loadEnd();
                }
                progressAin();
            });
        }
    }else{
        //启用加载模拟器
        var simulateLoad_flag = false;
        var rn = 50+Math.round(Math.random()*45);
        for (var i in that.imagesList) {
            that.imagesListLen++;
            var _t = that.imagesList[i];
            that.imgLoad(_t, function () {
                that.count++;
                if (that.count >= that.imagesListLen) {
                    simulateLoad_flag = true;
                }
            });
        }
        var simulateLoadTimer = setInterval(function () {
            if (!simulateLoad_flag) {
                loadNum++;
                if (loadNum >= rn && !simulateLoad_flag) {
                    loadNum = rn;
                }
            } else {
                loadNum++;
                if (loadNum >= 100) {
                    loadNum = 100;
                    clearInterval(simulateLoadTimer);
                    loadEnd();
                }
            }
            progressAin();
        }, 30);
    }
    function loadEnd(){
        setTimeout(function () {
            $load.fadeOut(200, function () {
                $(this).remove();
                that.setHtml();
            });
        }, 500);//控制loading消失时间
    }
    function progressAin(){
        $('.load_num').html(loadNum+'%');
    }
};

/**
 * 设置html图片内容
 */
H5.prototype.setHtml = function(){
    var that = this;
    for(var i=0;i<18;i++){
        $('.home_con'+i).css({'background-image':'url('+that.imagesList['home_con'+i].src+')','background-repeat':'no-repeat'});
    }
    $('.home_inner').css({'background-image':'url('+that.imagesList['home_bg'].src+')','background-repeat':'no-repeat'});
    $('.tips_rule').css({'background-image':'url('+that.imagesList['tips_rule'].src+')','background-repeat':'no-repeat'});
    $('.tips_swipe').css({'background-image':'url('+that.imagesList['tips_swipe'].src+')','background-repeat':'no-repeat'});
    $('.tips_magazine').css({'background-image':'url('+that.imagesList['tips_magazine'].src+')','background-repeat':'no-repeat'});
    $('.tips_shirt').css({'background-image':'url('+that.imagesList['tips_shirt'].src+')','background-repeat':'no-repeat'});
    $('.tips_CD').css({'background-image':'url('+that.imagesList['tips_CD'].src+')','background-repeat':'no-repeat'});
    $('.tips_poster').css({'background-image':'url('+that.imagesList['tips_poster'].src+')','background-repeat':'no-repeat'});
    $('.tips_btn').css({'background-image':'url('+that.imagesList['continue_btn'].src+')','background-repeat':'no-repeat'});
    $('.door_txt1').css({'background-image':'url('+that.imagesList['door_txt1'].src+')','background-repeat':'no-repeat'});
    $('.door_txt2').css({'background-image':'url('+that.imagesList['door_txt2'].src+')','background-repeat':'no-repeat'});
    $('.light').css({'background-image':'url('+that.imagesList['light'].src+')','background-repeat':'no-repeat'});
    $('.logo').css({'background-image':'url('+that.imagesList['logo'].src+')','background-repeat':'no-repeat'});
    $('.slogan').css({'background-image':'url('+that.imagesList['slogan'].src+')','background-repeat':'no-repeat'});
    $('.erweima').append(that.imagesList['erweima']);
    $('.erweima_txt').css({'background-image':'url('+that.imagesList['erweima_txt'].src+')','background-repeat':'no-repeat'});
    that.home();
};

/**
 * 首页
 */
H5.prototype.home = function(){
    var that = this;
    var $home = $('#home');
    var $tips_rule = $('.tips_rule');
    var $tips_btn = $('.tips_btn');
    var num = 0;

    that.musicPlay();
    $("body").off("touchmove", prevent);
    $home.fadeIn(200);

    $tips_rule.on('click',function(){
        $(this).off('click');
        $('.tips_rule').fadeOut(200);
        $('.tips_swipe').fadeOut(200);
    });
    $home.on('swipeLeft',function(){
        $(this).off('swipeLeft');
        $('.tips_rule').fadeOut(200);
        $('.tips_swipe').fadeOut(200);
    });
    //杂志按钮
    $('.magazine_btn').on('click',function(){
        $(this).off('click');
        tips_show('magazine');
    });
    //球衣按钮
    $('.shirt_btn').on('click',function(){
        $(this).off('click');
        tips_show('shirt');
    });
    //光盘按钮
    $('.CD_btn').on('click',function(){
        $(this).off('click');
        tips_show('CD');
    });
    //海报按钮
    $('.poster_btn').on('click',function(){
        $(this).off('click');
        tips_show('poster');
    });

    function tips_show(type){
        $('#tips').fadeIn(0);
        num += 1;
        if(num >= 4){
            $tips_btn.css({'background-image':'url('+that.imagesList['open_btn'].src+')','background-repeat':'no-repeat'});
        }
        $('.num').css({'background-image':'url('+that.imagesList['num'+num].src+')','background-repeat':'no-repeat'});
        $('.tips_'+type+'').addClass('show');
        $tips_btn.on('click',function(){
            $('#tips').fadeOut(0);
            $('.tips_'+type+'').removeClass('show');
            if(num >= 4){
                that.last();
            }
        });
    }
};

/**
 * 尾页
 */
H5.prototype.last = function(){
    var that = this;
    var $enter = $('.enter');
    var n = 0;
    var enter_timer;
    $("body").on("touchmove", prevent);
    $enter.html(that.imagesList['enter'+n]);
    $('#last').fadeIn(200,function(){
        $('.door_txt1').animate({'opacity':'1'},500,'linear',function(){
            $('.door_txt2').animate({'opacity':'1'},500,'linear',function(){

                setTimeout(function(){
                    $('.door_txt').fadeOut(200);
                    $('.light').fadeOut(200,function(){
                        enter_timer = setInterval(enterPlayer,80);
                    });
                },1500);

            },300);
        },300);
    });

    function enterPlayer(){
        n++;
        if(n >= 53){
            clearInterval(enter_timer);
            last_ani();
        }
        $enter.html(that.imagesList['enter'+n]);
    }

    function last_ani(){
        $('.logo').fadeIn(200,function(){
            $('.slogan').addClass('show');
            setTimeout(function(){
                $('.erweima').fadeIn(300);
                $('.erweima_txt').fadeIn(300);
            },500);
        });
    }
};

/**
 * 提示显示
 */
H5.prototype.tipsShow = function(){
    var that = this;
    var $maskTips = $('.maskTips');
    var $tips_all = $('.tips_all');
    var $alertCon = $(obj);
    $tips_all.fadeOut(0,function(){
        $alertCon.fadeIn(0);
    });
    $maskTips.fadeIn(0);
    if(obj == '.tips_upload_error'){
        $maskTips.on('click',function(){
            $(this).off('click');
            that.tipsHide();
        });
    }
};

/**
 * 提示消失
 */
H5.prototype.tipsHide = function(){
    var that = this;
    var $maskTips = $('.maskTips');
    var $tips_all = $('.tips_all');
    $maskTips.fadeOut(0);
    $tips_all.fadeOut(0);
};

/**
 * 音乐
 */
H5.prototype.musicPlay = function(){
    var that = this;
    var $music_btn = $('.music_btn');
    $music_btn.fadeIn(200);

    if(that.isMusicPlay){
        $music_btn.css({'background-image':'url('+that.imagesList['music_on'].src+')'});
        bgm.play();
    }else{
        $music_btn.css({'background-image':'url('+that.imagesList['music_off'].src+')'});
    }

    $music_btn.on('click',musicBtnClick);

    function musicBtnClick(){
        if (that.isMusicPlay) {
            that.isMusicPlay = false;
            bgm.pause();
            $(this).css({'background-image':'url('+that.imagesList['music_off'].src+')','background-repeat':'no-repeat'});
        } else {
            that.isMusicPlay=true;
            bgm.play();
            $(this).css({'background-image':'url('+that.imagesList['music_on'].src+')','background-repeat':'no-repeat'});
        }
    }
};

/**
 * 图片加载
 */
H5.prototype.imgLoad = function(img,callback){
    var that = this;
    var timer = setInterval(function () {
        if (img.complete) {
            callback();
            clearInterval(timer);
        }
    }, 50);
};

function prevent(){
    event.preventDefault();
}
FastClick.attach(document.body);//点击屏幕阻止页面跳动,不能单击needclick
$(function(){
    $("body").on("touchmove", prevent);
    var htmlFrame = new H5({
        isSimulateLoad : false,
        isMusicPlay : false
    });
    htmlFrame.init();
});