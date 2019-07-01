var WIDTH = 750;
var HEIGHT = window.innerHeight*WIDTH/window.innerWidth;
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, 'main');

var AniTime = 200;//公用动画过渡时间
var Delay = 0.3;//延时

/**
 * 判断横竖屏
 */
var initFlag = true;
var portrait = false;
function Orien(){
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
}
Orien();
$(window).on("orientationchange", Orien);

/**
 * 初始化预加载
 */
var BootState = function(){
    this.init = function(){
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.stage.backgroundColor = '#fff';
    };
    this.preload = function(){
        game.load.image('load_ball',CDN+'img/loading/load_ball.png'+VER);
        game.load.image('load_spot',CDN+'img/loading/load_spot.png'+VER);
        game.load.image('load_txt',CDN+'img/loading/load_txt.png'+VER);
    };
    this.create = function(){
        game.time.events.add(Phaser.Timer.SECOND *.1, function(){
            game.state.start('LoadState');
        });
    }
};

/**
 * 加载
 */
var LoadState = function(){
    var page;
    this.init = function(){
        page = game.add.sprite();

        var load_box = game.add.sprite();
        load_box.x = (game.width-254)/2;
        load_box.y = (game.height-289)/2;
        page.addChild(load_box);

        var load_ball = game.add.sprite(0,0,'load_ball');
        load_box.addChild(load_ball);
        load_ball.x = 56+load_ball.width/2;
        load_ball.y = load_ball.height/2;
        load_ball.anchor.set(.5);
        game.add.tween(load_ball).to({angle: 360},2000,Phaser.Easing.Linear.None,true,0,1000,false);

        var load_txt = game.add.sprite(0,240,'load_txt');
        load_box.addChild(load_txt);

        var load_spot = game.add.sprite(104,285,'load_spot');
        load_box.addChild(load_spot);
        var load_spot_mask = game.add.graphics();
        load_box.addChild(load_spot_mask);
        load_spot_mask.drawRect(0,285,load_spot.width,load_spot.height);
        load_spot_mask.x = 104-load_spot.width/2;
        load_spot.mask = load_spot_mask;
        game.add.tween(load_spot_mask).to({x: 104},1000,Phaser.Easing.Linear.None,true,0,1000,false);

        game.load_num = game.add.text(game.world.centerX,(game.height-289)/2+162,'0%',{
            font: '30px Arial',
            fill: '#000'
        });
        page.addChild(game.load_num);
        game.load_num.anchor.set(.5, 0);
    };
    this.preload = function(){
        game.load.image('continue_btn',CDN+'img/public/continue_btn.png'+VER);
        game.load.image('music_off',CDN+'img/public/music_off.png'+VER);
        game.load.image('music_on',CDN+'img/public/music_on.png'+VER);
        game.load.image('num1',CDN+'img/public/num1.png'+VER);
        game.load.image('num2',CDN+'img/public/num2.png'+VER);
        game.load.image('num3',CDN+'img/public/num3.png'+VER);
        game.load.image('num4',CDN+'img/public/num4.png'+VER);
        game.load.image('open_btn',CDN+'img/public/open_btn.png'+VER);

        for(var i=0;i<18;i++){
            game.load.image('home_con'+i,CDN+'img/home/'+i+'.jpg'+VER);
        }
        game.load.image('home_bg',CDN+'img/home/home_bg.jpg'+VER);

        for(var i=0;i<54;i++){
            game.load.image('enter'+i,CDN+'img/last/enter/'+i+'.jpg'+VER);
        }
        game.load.image('door_txt1',CDN+'img/last/door_txt1.png'+VER);
        game.load.image('door_txt2',CDN+'img/last/door_txt2.png'+VER);
        game.load.image('erweima',CDN+'img/last/erweima.png'+VER);
        game.load.image('erweima_txt',CDN+'img/last/erweima_txt.png'+VER);
        game.load.image('light',CDN+'img/last/light.png'+VER);
        game.load.image('logo',CDN+'img/last/logo.png'+VER);
        game.load.image('slogan',CDN+'img/last/slogan.png'+VER);

        game.load.image('tips_CD',CDN+'img/tips/tips_CD.png'+VER);
        game.load.image('tips_magazine',CDN+'img/tips/tips_magazine.png'+VER);
        game.load.image('tips_poster',CDN+'img/tips/tips_poster.png'+VER);
        game.load.image('tips_rule',CDN+'img/tips/tips_rule.png'+VER);
        game.load.image('tips_shirt',CDN+'img/tips/tips_shirt.png'+VER);
        game.load.image('tips_swipe',CDN+'img/tips/tips_swipe.png'+VER);

        game.load.onFileComplete.add(function(progress){
            game.load_num.setText(progress+'%');
        });
    };
    this.create = function(){
        /*game.add.tween(page).to({alpha: 0},AniTime,Phaser.Easing.Linear.None,true).onComplete.add(function(){
            game.state.start('HomeState');
        },this);*/
    };
};

/**
 * 首页
 */
var HomeState = function(){
    this.create = function(){

    }
};

$(function(){
    game.state.add('BootState',new BootState());
    game.state.add('LoadState',new LoadState());
    game.state.add('HomeState',new HomeState());

    game.state.start('BootState');
});