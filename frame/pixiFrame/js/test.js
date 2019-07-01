function H5(json){
    /**
     * 配置
     */
    var that = this;
    LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
    LSystem.screen(LStage.FULL_SCREEN);
    json = json || {};
    var width = json.width || 750;
    var isMusicPlay = json.isMusicPlay || false;
    var defaultYear = json.defaultYear || 2018;
    var defaultMonth = json.defaultMonth || 6;
    var defaultDay = json.defaultDay || 14;

    //全局数据，变量
    var height = window.innerHeight * width / window.innerWidth;
    var loadImagesData = [];
    var loadImagesList = {};
    var imagesData = [];
    var imagesList = {};
    var mainLayer = null;
    var publicLayer = null;
    var containerLayer = null;
    var loadingLayer = null;
    var preLoadingLayer = null;
    var logo = null;
    var musicBtn = null;
    var music_off = null;
    var oMonth = null;//月
    var oDay = null;//日
    var currentDate = null;//当前日期
    var aniTime = 0.2;//动画过渡时间
    var delay = 0.3;//延时

    //flag
    var end_flg = false;

    /**
     * 初始化
     */
    this.init = function(){
        loadImagesData.push({name: 'bg1', path: 'img/public/bg1.png'});
        loadImagesData.push({name: 'logo', path: 'img/public/logo.png'});
        loadImagesData.push({name: 'loading_0', path: 'img/loading/0.png'});
        loadImagesData.push({name: 'loading_1', path: 'img/loading/1.png'});
        loadImagesData.push({name: 'loading_2', path: 'img/loading/2.png'});
        loadImagesData.push({name: 'loading_3', path: 'img/loading/3.png'});
        loadImagesData.push({name: 'loading_txt', path: 'img/loading/txt.png'});
        for(var i=0;i<loadImagesData.length;i++){
            loadImagesData[i].path = CDN + loadImagesData[i].path + VER;
        }

        imagesData.push({name: 'music_on', path: 'img/public/music_on.png'});
        imagesData.push({name: 'music_off', path: 'img/public/music_off.png'});

        imagesData.push({name: 'ball', path: 'img/home/ball.png'});
        imagesData.push({name: 'hand', path: 'img/home/hand.png'});

        imagesData.push({name: 'last_0', path: 'img/last/0.png'});
        imagesData.push({name: 'last_1', path: 'img/last/1.png'});
        imagesData.push({name: 'last_2', path: 'img/last/2.png'});
        imagesData.push({name: 'leave_btn', path: 'img/last/leave_btn.png'});
        for (var i=0;i<10;i++){
            imagesData.push({name: 'p'+i, path: 'img/last/p'+i+'.png'});
        }
        imagesData.push({name: 'last_txt', path: 'img/last/txt.png'});

        imagesData.push({name: 'again_btn', path: 'img/poster/again_btn.png'});
        imagesData.push({name: 'arrow_l', path: 'img/poster/arrow_l.png'});
        imagesData.push({name: 'arrow_r', path: 'img/poster/arrow_r.png'});
        imagesData.push({name: 'bg2', path: 'img/poster/bg2.png'});
        imagesData.push({name: 'icon_triangle', path: 'img/poster/icon_triangle.png'});
        imagesData.push({name: 'poster_bg', path: 'img/poster/poster_bg.jpg'});
        imagesData.push({name: 'show_btn', path: 'img/poster/show_btn.png'});
        imagesData.push({name: 'tips_save', path: 'img/poster/tips_save.png'});
        for (var i=0;i<10;i++){
            imagesData.push({name: 'poster_txt'+i, path: 'img/poster/txt'+i+'.png'});
        }
        for(var i=0;i<imagesData.length;i++){
            imagesData[i].path = CDN + imagesData[i].path + VER;
        }

        LInit(1000/60, "main", width, height, that.preLoad); //设定游戏速度，屏幕大小，回调函数.
        LGlobal.touchHandler = function(){};//添加后可以定义Zepto swipe事件
    };

    /**
     * 预加载
     */

    this.preLoad = function () {

        //log('预加载');
        LMouseEventContainer.set(LMouseEvent.MOUSE_UP, false);
        LMouseEventContainer.set(LMouseEvent.MOUSE_DOWN, false);
        // LGlobal.setDebug(true);
        mainLayer = new LSprite();
        addChild(mainLayer);
        mainLayer.y = height/2;

        publicLayer = new LSprite();
        addChild(publicLayer);

        containerLayer = new LSprite();
        mainLayer.addChild(containerLayer);
        containerLayer.y = -750;

        loadingLayer = new LSprite();
        mainLayer.addChild(loadingLayer);
        loadingLayer.y = -750;

        LLoadManage.load(
            loadImagesData,
            function(progress) {
            },
            function(result) {
                loadImagesList = result;
                that.loading();
            }
        );
    };

    /**
     * 加载
     */
    this.loading = function(){
        $('body').css({'background':'#cdcdcc url("'+loadImagesList['bg1'].src+'") no-repeat center','background-size':'7.5rem 15rem'});

        logo = new LBitmap(new LBitmapData(loadImagesList['logo']));
        publicLayer.addChild(logo);
        logo.x = 24;
        logo.y = 19;

        var loading_player = this.createPlayer('loading_',loadImagesList,4,304,271);
        loadingLayer.addChild(loading_player);
        loading_player.x = 223;
        loading_player.y = 489;
        loading_player.speed = 16;

        var loading_num = new LTextField();
        loadingLayer.addChild(loading_num);
        loading_num.text = '0%';
        loading_num.size = 38;
        loading_num.color = '#000';
        loading_num.x = 350;
        loading_num.y = 804;

        var loading_txt = new LBitmap(new LBitmapData(loadImagesList['loading_txt']));
        loadingLayer.addChild(loading_txt);
        loading_txt.x = 246;
        loading_txt.y = 867;

        LLoadManage.load(
            imagesData,
            function(progress) {
                // loadingLayer.setProgress(Math.floor(progress));
                var num = Math.floor(progress);
                if(num<10){
                    loading_num.x = 350;
                }else if(num>=10 && num<100){
                    loading_num.x = 342;
                }else{
                    loading_num.x = 334;
                }
                loading_num.text =num+'%';
            },
            function(result) {
                imagesList = result;
                loadEnd();
            }
        );

        function loadEnd(){
            $('#poster .bg').css({'background-image':'url("'+imagesList['bg2'].src+'")'});
            $('.poster_bg').css({'background-image':'url("'+imagesList['poster_bg'].src+'")'});
            $('.again_btn').css({'background-image':'url("'+imagesList['again_btn'].src+'")'});
            $('.show_btn').css({'background-image':'url("'+imagesList['show_btn'].src+'")'});
            $('.tips_save').css({'background-image':'url("'+imagesList['tips_save'].src+'")'});
            //$('.music_btn').css({'background-image':'url('+imagesList['music_on'].src+')'});
            $('.poster_bg .txt').css({'background-image':'url('+imagesList['poster_txt0'].src+')'});
            $('.arrow_l').css({'background-image':'url('+imagesList['arrow_l'].src+')'});
            $('.arrow_r').css({'background-image':'url('+imagesList['arrow_r'].src+')'});
            $('.span_month').css({'background-image':'url('+imagesList['icon_triangle'].src+')'});
            $('.span_day').css({'background-image':'url('+imagesList['icon_triangle'].src+')'});
            if(!ios){
                $('#name').css({'top':'3.12rem','height':'0.3rem','line-height':'0.3rem'});
            }
            setTimeout(function () {
                LTweenLite.to(loadingLayer,aniTime,{alpha:0,onComplete:function(){
                    removeChild(loadingLayer);
                    loadingLayer = null;
                    that.homepage();
                    // that.last();//test...
                    // that.poster();//test...
                }});
            }, 0);//控制loading消失时间
        }
    };

    /**
     * 首页
     */
    this.homepage = function(){
        log('homepage');
        var page = new LSprite();
        containerLayer.addChild(page);

        var ball = new LBitmap(new LBitmapData(imagesList['ball']));
        page.addChild(ball);
        ball.x = 261+5;
        ball.y = 546-42;

        var hand = new LSprite();
        page.addChild(hand);
        var handm = new LBitmap(new LBitmapData(imagesList['hand']));
        hand.addChild(handm);
        handm.x = -handm.width/2;
        handm.y = -handm.height/2;
        hand.x = handm.width/2+314;
        hand.y = handm.height/2+808-42;
        LTweenLite.to(hand,0.3,{loop:true,scaleX:0.95,scaleY:0.95}).to(hand,0.3,{scaleX:1,scaleY:1});

        var start_btn = new LSprite();
        page.addChild(start_btn);
        start_btn.graphics.drawRect(0,'#000',[0,0,width,height],false);
        start_btn.y = 750-height/2;

        start_btn.addEventListener(LMouseEvent.MOUSE_DOWN,start_btn_click);
        $('body').on('click',function(){
            $('body').off();
            //alert('1');
            start_btn.removeEventListener(LMouseEvent.MOUSE_DOWN,start_btn_click);
            LTweenLite.to(page,aniTime,{alpha:0,onComplete:function () {
                containerLayer.removeChild(page);
                page = null;
            }});
            that.video();
        });
        function start_btn_click() {
            /*start_btn.removeEventListener(LMouseEvent.MOUSE_DOWN,start_btn_click);
             LTweenLite.to(page,aniTime,{alpha:0,onComplete:function () {
             containerLayer.removeChild(page);
             page = null;
             }});
             that.video();*/
        }

        page.alpha = 0;
        LTweenLite.to(page,aniTime,{alpha:1});
    };

    /**
     * 视频
     */
    this.video = function(){
        log('video');

        $('#video').fadeIn(0);
        $('#v1').css({'display': 'block', 'opacity': '1', 'width': '100%', 'height': '100%','object-fit':'cover'});
        v1.play();

        v1.addEventListener('ended', videoEnd, false);
        function videoEnd() {
            if(end_flg) return false;
            end_flg = true;
            setTimeout(function () {
                $('#video').fadeOut(0);
                v1.pause();
                if(!ios){
                    v1.remove();
                }
            },50);
            /*if (isMusicPlay) {
                oBgm.play();
            } else {
                oBgm.pause();
            }*/
            that.last();
        }
    };

    /**
     * 视频结束
     */
    this.last = function(){
        log('last');
        var page = new LSprite();
        containerLayer.addChild(page);

        var last_player = this.createPlayer('last_',imagesList,3,419,538);
        page.addChild(last_player);
        last_player.x = 169;
        last_player.y = 382;
        last_player.scaleX = last_player.scaleY = 422/198;
        last_player.speed = 10;

        var last_txt = new LBitmap(new LBitmapData(imagesList['last_txt']));
        page.addChild(last_txt);
        last_txt.x = 139;
        last_txt.y = 971;

        var paper_pos = [[8,163],[111,245],[409,93],[632,198],[62,454],[529,427],[142,702],[476,701],[17,1069],[517,1164]];
        var paper_arr = [];
        for(var i=0;i<10;i++){
            var paper = new LSprite();
            page.addChild(paper);
            var paperm = new LBitmap(new LBitmapData(imagesList['p'+i]));
            paper.addChild(paperm);
            paper.x = paper_pos[i][0];
            paper.y = paper_pos[i][1];
            LTweenLite.to(paperm,0,{delay:0.1*i}).to(paperm,0.8,{y:5,loop:true}).to(paperm,0.8,{y:0});
        }


        var leave_btn = new LSprite();
        page.addChild(leave_btn);
        var leave_btnm = new LBitmap(new LBitmapData(imagesList['leave_btn']));
        leave_btn.addChild(leave_btnm);
        leave_btn.x = 223;
        leave_btn.y = 1084;

        function leave_btn_click() {
            leave_btn.removeEventListener(LMouseEvent.MOUSE_DOWN,leave_btn_click);
            LTweenLite.to(leave_btnm,0.1,{y:5}).to(leave_btnm,0.1,{y:0,onComplete:function () {
                LTweenLite.to(logo,aniTime,{alpha:0});
                LTweenLite.to(page,aniTime,{alpha:0,onComplete:function () {
                    containerLayer.removeChild(page);
                    page = null;
                    $('#main').css({'visibility':'hidden'});
                    that.poster();
                }});
            }});
        }

        leave_btn.addEventListener(LMouseEvent.MOUSE_DOWN,leave_btn_click);
    };

    /**
     *制作请假条
     */
    this.poster = function () {
        log('poster');
        that.musicPlay();
        var arrow_flag = true;//左右箭头是否可以点击 true:是 false:否
        var swipe_flag = true;//左右滑动 true:是 false:否
        var show_click_num = 0;//记录(出示请假条btn)点击次数 1:生成图片 other:长按保存提示
        var id = 0;//切换文字当前id

        var page = new LSprite();
        containerLayer.addChild(page);

        var bg2 = new LBitmap(new LBitmapData(imagesList['bg2']));
        page.addChild(bg2);

        var posterBox = new LSprite();
        page.addChild(posterBox);
        posterBox.x = 54;
        posterBox.y = 214;

        var poster_bg = new LBitmap(new LBitmapData(imagesList['poster_bg']));
        posterBox.addChild(poster_bg);

        //姓名
        var poster_name = new LSprite();
        posterBox.addChild(poster_name);
        poster_name.x = 187;
        poster_name.y = 312;
        var poster_name_txt = new LTextField();
        poster_name.addChild(poster_name_txt);
        poster_name_txt.size = 26;
        poster_name_txt.font = 'Arial';
        poster_name_txt.color = '#000';
        var poster_name_mask = new LSprite();
        poster_name_mask.graphics.drawRect(0,'#000',[poster_name.x,poster_name.y,372,30]);
        poster_name.mask = poster_name_mask;
        $('#name').blur(function () {
            poster_name_txt.text = $('#name').val();
            poster_name_txt.x = (372-poster_name_txt.getWidth())/2;
        });
        //月
        var month = new LSprite();
        posterBox.addChild(month);
        month.x = 117;
        month.y = 374;
        var month_txt = new LTextField();
        month.addChild(month_txt);
        month_txt.size = 26;
        month_txt.font = 'Arial';
        month_txt.color = '#000';
        month_txt.text = $('.span_month').html();
        month_txt.x = (188-month_txt.getWidth())/2;
        $('#month').change(function () {
            $('.span_month').html($('#month').val());
            $('.span_day').html($('#day').val());
            month_txt.text = $('.span_month').html();
            month_txt.x = (188-month_txt.getWidth())/2;
        });
        //日
        var day = new LSprite();
        posterBox.addChild(day);
        day.x = 345;
        day.y = 374;
        var day_txt = new LTextField();
        day.addChild(day_txt);
        day_txt.size = 26;
        day_txt.font = 'Arial';
        day_txt.color = '#000';
        day_txt.text = $('.span_day').html();
        day_txt.x = (188-day_txt.getWidth())/2;
        $('#day').change(function () {
            $('.span_day').html($('#day').val());
            day_txt.text = $('.span_day').html();
            day_txt.x = (188-day_txt.getWidth())/2;
        });

        var poster_txt_arr = [];
        for(var i=0;i<10;i++){
            var poster_txt = new LBitmap(new LBitmapData(imagesList['poster_txt'+i]));
            posterBox.addChild(poster_txt);
            poster_txt.x = 88;
            poster_txt.y = 436;
            poster_txt_arr.push(poster_txt);
            poster_txt.alpha = 0;
        }
        poster_txt_arr[0].alpha = 1;


        page.alpha = 0;
        LTweenLite.to(page,aniTime,{alpha:1});
        $('#poster').fadeIn(aniTime*1000,function () {
            $('.show_btn').on('click',show_btn_click);
            $('.again_btn').on('click',again_btn_click);
            add_switch_event();
        });

        //出示请假条
        function show_btn_click() {
            $(this).animate({'transform':'translate3d(0,0.05rem,0)','-webkit-transform':'translate3d(0,0.05rem,0)'},100,function () {
                $(this).animate({'transform':'translate3d(0,0,0)','-webkit-transform':'translate3d(0,0,0)'},100,function () {
                    var name_val = $('#name').val();
                    if(name_val.match(/^\s*$/g)){
                        alert('请完善请假条！');
                        return false;
                    }
                    var is_filter = false;
                    for (var i = 0; i < filter_key.length; i++) {
                        name_val = name_val.replace(filter_key[i], "*");
                        if(name_val.indexOf('*')!=-1){
                            is_filter = true;
                            break;
                        }
                    }
                    if(is_filter){
                        alert('姓名中有敏感词！');
                        return false;
                    }
                    if($('.span_month').html().match(/^\s*$/g) || $('.span_month').html()==='请选择'){
                        alert('请完善请假条！');
                        return false;
                    }
                    if($('.span_day').html().match(/^\s*$/g) || $('.span_day').html()==='请选择'){
                        alert('请完善请假条！');
                        return false;
                    }
                    poster_name_txt.text = $('#name').val();
                    month_txt.text = $('.span_month').html();
                    day_txt.text = $('.span_day').html();
                    show_click_num++;
                    arrow_flag = false;
                    $('.save').fadeIn(0);
                    that.tipsShow('tips_save');
                    if(show_click_num === 1){
                        var posterImgUrl = posterBox.getDataURL('image/jpeg',0.8);
                        var posterImg = new Image();
                        posterImg.src = posterImgUrl;
                        posterImg.onload = function(){
                            $('.save').append(posterImg);
                        };
                    }
                    remove_switch_event();
                });
            });
        }
        //再请一次
        function again_btn_click() {
            $(this).animate({'transform':'translate3d(0,0.05rem,0)','-webkit-transform':'translate3d(0,0.05rem,0)'},100,function () {
                $(this).animate({'transform':'translate3d(0,0,0)','-webkit-transform':'translate3d(0,0,0)'},100,function () {
                    show_click_num = 0;
                    arrow_flag = true;
                    $('.save').fadeOut(0);
                    $('.save').empty();
                    add_switch_event();
                    $('#name').val('');
                    oMonth.options[0].selected=true;
                    oDay.options[0].selected=true;
                    $('.span_month').html($('#month').val());
                    $('.span_day').html($('#day').val());
                });
            });
        }
        //移除切换文字事件
        function remove_switch_event (){
            $('.arrow_l').removeClass('ani');
            $('.arrow_r').removeClass('ani');
            $('.arrow_l').off('click');
            $('.arrow_r').off('click');
            $('body').off('mySwipeRight');
            $('body').off('mySwipeLeft');
        }
        //添加切换文字事件
        function add_switch_event() {
            $('.arrow_l').addClass('ani');
            $('.arrow_r').addClass('ani');
            $('.arrow_l').on('click',function(){
                poster_txt_switch("left");
            });
            $('.arrow_r').on('click',function(){
                poster_txt_switch("right");
            });
            $('body').on('mySwipeLeft',function(){
                poster_txt_switch("left");
            });
            $('body').on('mySwipeRight',function(){
                poster_txt_switch("right");
            });
        }
        //切换文字
        function poster_txt_switch(type){
            if(!swipe_flag) return false;
            swipe_flag = false;

            if(type == 'left'){
                id++;
                if(id>9) id = 0;
                $('.poster_bg .txt').fadeOut(200,function () {
                    $('.poster_bg .txt').css({'background-image':'url('+imagesList['poster_txt'+id].src+')'});
                    $('.poster_bg .txt').fadeIn(200);
                    swipe_flag = true;
                });
                for(var i=0;i<10;i++){
                    poster_txt_arr[i].alpha = 0;
                }
                poster_txt_arr[id].alpha = 1;
                // console.log('left:'+id);
            }
            if(type == 'right'){
                id--;
                if(id<0) id = 9;
                $('.poster_bg .txt').fadeOut(200,function () {
                    $('.poster_bg .txt').css({'background-image':'url('+imagesList['poster_txt'+id].src+')'});
                    $('.poster_bg .txt').fadeIn(200);
                    swipe_flag = true;
                });
                for(var i=0;i<10;i++){
                    poster_txt_arr[i].alpha = 0;
                }
                poster_txt_arr[id].alpha = 1;
                // console.log('right:'+id);
            }
        }
    };


    this.tipsShow = function(type){
        if(type === 'tips_save'){
            //长按保存提示
            $('.tips_save').fadeIn(0);
        }
        $('#tips').fadeIn(aniTime*1000,function(){
            $(this).on('click',function(){
                $(this).off('click');
                that.tipsHide();
            });
        });
    };

    this.tipsHide = function(){
        $('#tips').fadeOut(aniTime*1000);
        $('.tips_save').fadeOut(aniTime*1000);
    };

    /**
     * 日期选择
     */
    this.date = function () {
        oMonth = document.getElementById("month");
        oDay = document.getElementById("day");
        currentDate = new Date();
        $('.span_month').html(defaultMonth);
        $('.span_day').html(defaultDay);
        //设置Change事件
        oMonth.onchange=Day_Bind;

        var objDate = new Date(''+defaultYear+'','0' ,'0');
        var totalMonthInYear = objDate.getMonth()+1;
        oMonth.options.add(new Option('请选择','请选择'));
        for(var i = 1; i <= totalMonthInYear; i++ ){
            oMonth.options.add(new Option(i,i));
        }
        oMonth.options[defaultMonth].selected=true;

        var objDate = new Date(''+defaultYear+'',''+defaultMonth+'','0');
        var totalDaysInMonth = objDate.getDate();
        //绑定下拉
        oDay.options.add(new Option('请选择','请选择'));
        for(var i = 1; i <= totalDaysInMonth; i++){
            oDay.options.add(new Option(i,i));
        }
        oDay.options[defaultDay].selected=true;

        function Day_Bind(){
            //取得当前月的总天数
            var objDate = new Date(''+defaultYear+'',oMonth.value,'0');
            var totalDaysInMonth = objDate.getDate();
            //绑定下拉
            $('#day').empty();
            // oDay.options.length = 0;
            oDay.options.add(new Option('请选择','请选择'));
            for(var i = 1; i <= totalDaysInMonth; i++){
                oDay.options.add(new Option(i,i));
            }
        }
    };

    /**
     * 音乐
     */
    this.musicPlay = function(){
        $('.music_btn').fadeIn(aniTime*1000);
        if(isMusicPlay){
            $('.music_btn').css({'background-image':'url('+imagesList['music_on'].src+')'});
            oBgm.play();
        }else{
            $('.music_btn').css({'background-image':'url('+imagesList['music_off'].src+')'});
        }
        
        $('.music_btn').on('click',musicBtnClick);
        function musicBtnClick(){
            if (isMusicPlay) {
                isMusicPlay = false;
                $('.music_btn').css({'background-image':'url('+imagesList['music_off'].src+')'});
                if(end_flg){
                    oBgm.pause();
                }else{
                    v1.muted=true;
                    v1.volume = 0;
                }
            } else {
                isMusicPlay=true;
                $('.music_btn').css({'background-image':'url('+imagesList['music_on'].src+')'});
                if(end_flg){
                    oBgm.play();
                }else{
                    v1.muted=false;
                    v1.volume = 1;
                }
            }
        }
    };

    /**
     * 序列帧
     */
    this.createPlayer = function(obj,imglist,count,w,h){
        var datas = [];
        var listChild = [];
        for (var i = 0; i < count; i++) {
            datas.push(new LBitmapData(imglist[obj+i]));
            listChild.push({dataIndex : i, x : 0, y : 0, width : w, height : h, sx : 0, sy : 0});
        }
        return new LAnimationTimeline(datas, [listChild]);
    };

    /**
     * 图片加载方式函数
     */
    this.imgLoad = function(img,callback){
        var timer = setInterval(function () {
            if (img.complete) {
                callback();
                clearInterval(timer);
            }
        }, 50);
    };

    /**
     * 判断横竖屏
     */
    this.orien = function(){
        var initFlag = true;
        var portrait = false;
        if (window.orientation === 90 || window.orientation === -90) {
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
    this.date();//日期
    this.orien();
    $(window).on("orientationchange", this.orien);
}

FastClick.attach(document.body);//点击屏幕阻止页面跳动
$(function(){
    $("body").on("touchmove", function (e) {
        e.preventDefault();
    });
    var worldCup20183 = new H5({
        isMusicPlay : false,
        defaultYear : 2018,//默认年
        defaultMonth : 6,//默认月
        defaultDay : 14//默认日
    });
    worldCup20183.init();
});