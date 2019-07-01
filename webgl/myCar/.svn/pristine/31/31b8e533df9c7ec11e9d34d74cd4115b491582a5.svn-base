var Car = function(json) {

    var that = this;
    json = json || {};

    /**
     * 配置
     *
     * 全屏状态下无需自定义w、h, isFull为true, isResize为true(change) || false(not change).
     * 局部显示需要自定义w、h, isFull为false, isResize为true(change) || false(not change).
     */
    this.config = {
        container : json.container || $('myCar'),
        width : json.width || window.innerWidth,
        height : json.height || window.innerHeight,
        CDN : json.CDN || '',//cdn
        VER : json.VER || '',//版本号
        isFull : json.isFull || false,//是否全屏模式 默认false
        isResize : json.isResize || false//是否改变窗口大小同时改变画布大小 默认false
    };

    /**
     * 全局
     */
    this.global = {
        render : null,
        camera : null,
        control : null,
        scene : null,
        modelJson : [
            {name:'KaoQI',path:'./model/KaoQI.js'},
            {name:'houBeiXiang',path:'./model/houBeiXiang.js'},
            {name:'Che-SuLiao',path:'./model/Che-SuLiao.js'},
            {name:'CheMen-QZ',path:'./model/CheMen-QZ.js'},
            {name:'CheMen-QY',path:'./model/CheMen-QY.js'},
            {name:'CheMen-HZ',path:'./model/CheMen-HZ.js'},
            {name:'CheMen-HY',path:'./model/CheMen-HY.js'},
            {name:'DiMian',path:'./model/DiMian.js'},
            {name:'NeiShi',path:'./model/NeiShi.js'},
            {name:'HuanJIng',path:'./model/HuanJIng.js'},
            {name:'Che-JInShu',path:'./model/Che-JInShu.js'},
            {name:'YIBiaoTai',path:'./model/YIBiaoTai.js'},
            {name:'BoLi1',path:'./model/BoLi1.js'},
            {name:'CheDeng',path:'./model/CheDeng.js'},
            {name:'MenKuang',path:'./model/MenKuang.js'},
            {name:'ZuoYI',path:'./model/ZuoYI.js'},
            {name:'TianChuang',path:'./model/TianChuang.js'},
            {name:'NeiShi2',path:'./model/NeiShi2.js'},
            {name:'CanShu',path:'./model/CanShu.js'},
            {name:'LunTai1-1',path:'./model/LunTai1-1.js'},
            {name:'LunTai1-2',path:'./model/LunTai1-2.js'},
            // {name:'LunTai2-1',path:'./model/LunTai2-1.js'},
            // {name:'LunTai2-2',path:'./model/LunTai2-2.js'},
            // {name:'LunTai3-1',path:'./model/LunTai3-1.js'},
            // {name:'LunTai3-2',path:'./model/LunTai3-2.js'},
            {name:'ShaChePian',path:'./model/ShaChePian.js'}
        ],//模型数据
        textureJson : [
            {name:'KaoQI',path:'./model/KaoQI.jpg'},
            {name:'ZuoYI',path:'./model/ZuoYI.jpg'},
            {name:'MenKuang',path:'./model/MenKuang.jpg'},
            {name:'CheDeng2',path:'./model/CheDeng2.jpg'},
            {name:'CheDeng',path:'./model/CheDeng.jpg'}
        ],//普通贴图数据
        envMapJson : [
            {name:'enMap1',path:'./img/img_cc/03.jpg'},
            {name:'enMap2',path:'./img/img_cc/01.jpg'},
            {name:'enMap3',path:'./img/img_cc/06.jpg'},
            {name:'enMap4',path:'./img/img_cc/05.jpg'},
            {name:'enMap5',path:'./img/img_cc/02.jpg'},
            {name:'enMap6',path:'./img/img_cc/04.jpg'}
        ],//环境贴图数据
        model : {
            KaoQI : null,
            houBeiXiang : null,
            Che_SuLiao : null,
            CheMen_QZ : null,
            CheMen_QY : null,
            CheMen_HZ : null,
            CheMen_HY : null,
            DiMian : null,
            NeiShi : null,
            HuanJIng : null,
            Che_JInShu : null,
            YIBiaoTai : null,
            BoLi1 : null,
            CheDeng : null,
            MenKuang : null,
            ZuoYI : null,
            TianChuang : null,
            NeiShi2 : null,
            CanShu : null,
            LunTai1_1 : null,
            LunTai1_2 : null,
            LunTai2_1 : null,
            LunTai2_2 : null,
            LunTai3_1 : null,
            LunTai3_2 : null,
            ShaChePian : null
        },//模型对象
        map : {
            mapKaoQI : null,
            mapZuoYI : null,
            mapMenKuang : null,
            mapCheDeng2 : null,
            mapCheDeng : null
        },//普通贴图
        envMap : {
            envMapCar : null
        },//环境贴图
        material : {
            materialBody : null,//车身
            materialZuoYI : null,//座位
            materialMenKuang : null//门窗
        }//材料属性自定义
    };

    /**
     * 开关
     */
    this.flag = {

    };

    /**
     * 初始化
     */
    this.init = function () {
        //渲染器
        that.global.render = new THREE.WebGLRenderer({
            antialias : true,//抗锯齿
            alpha :false//场景背景透明
        });
        that.global.render.setSize(that.config.width,that.config.height);//设置canvas 宽高
        that.global.render.setClearColor('#000');//设置清除的颜色和透明度。
        that.global.render.setPixelRatio(window.devicePixelRatio > 1 ? 1.5 : 2);//设置设备分辨率
        that.config.container.appendChild(that.global.render.domElement);

        //相机
        that.global.camera = new THREE.PerspectiveCamera(75,that.config.width/that.config.height,1,10000);//设置相机类型
        that.global.control = new THREE.OrbitControls(that.global.camera);//相机触摸控制器
        that.global.camera.position.set(-37.53972368331358,44.69333485558786,86.52827088517684);//设置相机初始位置
        that.global.camera.lookAt(new THREE.Vector3(0,0,0));//相机观察点位置

        //场景
        that.global.scene = new THREE.Scene();
        that.global.scene.background = new THREE.Color('#000');

        //灯光
        var light = new THREE.AmbientLight('#fff');
        that.global.scene.add(light);

        //辅助线
        var axi = new THREE.AxisHelper(1000);
        that.global.scene.add(axi);
    };

    /**
     * 循环渲染绘制器
     */
    this.loop = function () {
        TWEEN.update();
        that.global.render.render(that.global.scene,that.global.camera);
        requestAnimationFrame(that.loop);
    };

    /**
     * 加载
     */
    this.load = function () {
        var manager = new THREE.LoadingManager();
        manager.onStart = function (url, itemsLoaded, itemsTotal) {
            //开始
        };
        manager.onLoad = function () {
            //结束
            that.main();
        };
        manager.onProgress = function (url, itemsLoaded, itemsTotal) {
            //进度
            // var num = Math.floor((itemsLoaded/itemsTotal)*100);
            // if(num>=100) $('load').style.display = 'none';
            // $('load').innerHTML = num;
        };
        manager.onError = function (url) {
            //错误
        };
        var model_loader = new THREE.JSONLoader(manager);//加载json格式模型数据
        var model_len = that.global.modelJson.length;
        for(var i=0;i<model_len;i++){
            (function(i){
                model_loader.load(that.config.CDN+that.global.modelJson[i].path+that.config.VER,function (geometry,material) {//(模型,材料)
                    var model = new THREE.Mesh(geometry,material);
                    that.global.scene.add(model);
                    model.name = that.global.modelJson[i].name;
                })
            })(i);
        }

        var texture_arr = [];
        var texture_len = that.global.textureJson.length;
        for(var i=0;i<texture_len;i++){
            texture_arr.push(that.config.CDN+that.global.textureJson[i].path+that.config.VER);
        }
        that.global.map.KaoQI = new THREE.TextureLoader(manager).load(texture_arr[0]);//加载普通贴图
        that.global.map.ZuoYI = new THREE.TextureLoader(manager).load(texture_arr[1]);
        that.global.map.MenKuang = new THREE.TextureLoader(manager).load(texture_arr[2]);
        that.global.map.CheDeng2 = new THREE.TextureLoader(manager).load(texture_arr[3]);
        that.global.map.CheDeng = new THREE.TextureLoader(manager).load(texture_arr[4]);


        var cubeTexture_len_arr = [];
        var cubeTexture_len = that.global.envMapJson.length;
        for(var i=0;i<cubeTexture_len;i++){
            cubeTexture_len_arr.push(that.config.CDN+that.global.envMapJson[i].path+that.config.VER);
        }
        that.global.envMap.envMapCar = new THREE.CubeTextureLoader(manager).load(cubeTexture_len_arr);//加载环境贴图

    };

    /**
     * main
     */
    var body = document.getElementsByTagName('body');
    var ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));
    var tap = ismobile ? "tap" : "click";
    this.main = function () {
        //获取模型name
        that.global.model.KaoQI = that.global.scene.getObjectByName('KaoQI');
        that.global.model.houBeiXiang = that.global.scene.getObjectByName('houBeiXiang');
        that.global.model.Che_SuLiao = that.global.scene.getObjectByName('Che-SuLiao');
        that.global.model.CheMen_QZ = that.global.scene.getObjectByName('CheMen-QZ');
        that.global.model.CheMen_QY = that.global.scene.getObjectByName('CheMen-QY');
        that.global.model.CheMen_HZ = that.global.scene.getObjectByName('CheMen-HZ');
        that.global.model.CheMen_HY = that.global.scene.getObjectByName('CheMen-HY');
        that.global.model.DiMian = that.global.scene.getObjectByName('DiMian');
        that.global.model.NeiShi = that.global.scene.getObjectByName('NeiShi');
        that.global.model.HuanJIng = that.global.scene.getObjectByName('HuanJIng');
        that.global.model.Che_JInShu = that.global.scene.getObjectByName('Che-JInShu');
        that.global.model.YIBiaoTai = that.global.scene.getObjectByName('YIBiaoTai');
        that.global.model.BoLi1 = that.global.scene.getObjectByName('BoLi1');
        that.global.model.CheDeng = that.global.scene.getObjectByName('CheDeng');
        that.global.model.MenKuang = that.global.scene.getObjectByName('MenKuang');
        that.global.model.ZuoYI = that.global.scene.getObjectByName('ZuoYI');
        that.global.model.TianChuang = that.global.scene.getObjectByName('TianChuang');
        that.global.model.NeiShi2 = that.global.scene.getObjectByName('NeiShi2');
        that.global.model.CanShu = that.global.scene.getObjectByName('CanShu');
        that.global.model.LunTai1_1 = that.global.scene.getObjectByName('LunTai1-1');
        that.global.model.LunTai1_2 = that.global.scene.getObjectByName('LunTai1-2');
        that.global.model.LunTai2_1 = that.global.scene.getObjectByName('LunTai2-1');
        that.global.model.LunTai2_2 = that.global.scene.getObjectByName('LunTai2-2');
        that.global.model.LunTai3_1 = that.global.scene.getObjectByName('LunTai3-1');
        that.global.model.LunTai3_2 = that.global.scene.getObjectByName('LunTai3-2');
        that.global.model.ShaChePian = that.global.scene.getObjectByName('ShaChePian');

        that.environmentMap();
        that.getCheMenQZ();
        that.getCheMenHZ();
        that.getCheMenQY();
        that.getCheMenHY();

        //前轮胎1
        that.global.model.LunTai1_1.geometry.computeBoundingBox();//计算模型的包围盒 更新 geometry.boundingBox 属性
        var t = that.global.model.LunTai1_1.geometry.boundingBox.getCenter().negate();//获取当前中心点 取负
        that.global.model.LunTai1_1.geometry.translate(t.x, t.y, t.z);//偏移到新的中心点
        that.global.model.LunTai1_1.position.set(-t.x, -t.y, -t.z);//设置新的中心点位置

        var tween_tyre1_1 = new TWEEN.Tween(that.global.model.LunTai1_1.rotation);//定义动画以什么进行，比如角度rotation,需要两个进行循环
        var tween_tyre1_2 = new TWEEN.Tween(that.global.model.LunTai1_1.rotation);
        tween_tyre1_2.to({z:0},1).start();//start 动画开始运作
        tween_tyre1_1.to({z:THREE.Math.degToRad(360)},2000).chain(tween_tyre1_2);//chain 当前执行完接下一个
        tween_tyre1_2.chain(tween_tyre1_1);

        //前轮胎2
        that.global.model.LunTai1_2.geometry.computeBoundingBox();
        var t = that.global.model.LunTai1_2.geometry.boundingBox.getCenter().negate();
        that.global.model.LunTai1_2.geometry.translate(t.x, t.y, t.z);
        that.global.model.LunTai1_2.position.set(-t.x, -t.y, -t.z);

        var tween_tyre2_1 = new TWEEN.Tween(that.global.model.LunTai1_2.rotation);
        var tween_tyre2_2 = new TWEEN.Tween(that.global.model.LunTai1_2.rotation);
        tween_tyre2_2.to({z:0},1).start();
        tween_tyre2_1.to({z:THREE.Math.degToRad(360)},2000).chain(tween_tyre2_2);
        tween_tyre2_2.chain(tween_tyre2_1);

        window.addEventListener('click',that.click,false);
        $(body).on(tap,function () {
            that.global.model.CheMen_QZ.material[6].color = new THREE.Color("#000");
            that.global.model.CheMen_HZ.material[5].color = new THREE.Color("#000");
            that.global.model.CheMen_QY.material[6].color = new THREE.Color("#000");
            that.global.model.CheMen_HY.material[5].color = new THREE.Color("#000");
            that.global.model.KaoQI.material[1].color = new THREE.Color("#000");
            that.global.material.materialMenKuang.color = new THREE.Color("#000");
            that.global.material.materialBody.color = new THREE.Color("#000");

            that.global.material.materialBody.clearCoat = 1;
            that.global.material.materialBody.envMapIntensity = 0.3;
            that.global.material.materialBody.reflectivity = 0.5;
            that.global.material.materialBody.metalness = 0.05;

            that.global.material.materialMenKuang.clearCoat = 1;
            that.global.material.materialMenKuang.envMapIntensity = 0.3;
            that.global.material.materialMenKuang.reflectivity = 0.5;
            that.global.material.materialMenKuang.metalness = 0.05;
        });
    };


    /**
     * 环境贴图自定义
     */
    this.environmentMap = function () {
        that.global.material.materialBody = new THREE.MeshPhysicalMaterial({
            map:that.global.map.KaoQI,
            color: 0xffffff,
            // color: '#000',
            side: 2,
            roughness: 0,
            metalness: 0.05,
            envMap: that.global.envMap.envMapCar,
            envMapIntensity: 0.3,
            emissiveIntensity: 1.0,
            clearCoat: 1.0,
            clearCoatRoughness: 0,
            shading: THREE.SmoothShading,
            name:"cheqi",
            reflectivity:1.5
        });
        that.global.material.materialZuoYI = new THREE.MeshPhysicalMaterial({
            map:that.global.map.ZuoYI,
            color: {b:0.5880,g:0.5880,r:0.5880},
            side: 2,
            roughness: 0,
            metalness: 0.6,
            envMap: that.global.envMap.envMapCar,
            envMapIntensity: 0.1,
            emissiveIntensity: 1.0,
            clearCoat: 1,
            clearCoatRoughness: 0,
            name:"zuoyi"
        });
        that.global.material.materialMenKuang = new THREE.MeshPhysicalMaterial({
            map:that.global.map.MenKuang,
            color: 0xedf6ff,
            side: 2,
            roughness: 0,
            metalness: 0.05,
            envMap: that.global.envMap.envMapCar,
            envMapIntensity: 0.3,
            emissiveIntensity: 1.0,
            clearCoat: 1.0,
            clearCoatRoughness: 0,
            name:"menkuang",
            reflectivity:0.5
        });

        //车身贴图
        that.global.model.KaoQI.material.splice(0,1,that.global.material.materialBody);
        //后备箱
        that.global.model.houBeiXiang.material.splice(2,1,that.global.material.materialBody);
        //门框贴图
        that.global.model.MenKuang.material.splice(0,1,that.global.material.materialMenKuang);
        //座椅贴图
        that.global.model.ZuoYI.material.splice(0,1,that.global.material.materialZuoYI);
        //轮胎
        that.global.model.LunTai1_1.material[1].envMap = that.global.envMap.envMapCar;
        that.global.model.LunTai1_1.material[1].combine = THREE.MixOperation;
        that.global.model.LunTai1_1.material[1].reflectivity = 0.5;
        that.global.model.LunTai1_1.material[1].needsUpdate = true;

        that.global.model.LunTai1_1.material[2].envMap = that.global.envMap.envMapCar;
        that.global.model.LunTai1_1.material[2].combine = THREE.MixOperation;
        that.global.model.LunTai1_1.material[2].metalness = 0.9;
        that.global.model.LunTai1_1.material[2].envMapIntensity = 0.7;
        that.global.model.LunTai1_1.material[2].roughness = 0.2;
        that.global.model.LunTai1_1.material[2].needsUpdate = true;

        that.global.model.LunTai1_2.material[0].envMap = that.global.envMap.envMapCar;
        that.global.model.LunTai1_2.material[0].combine = THREE.MixOperation;
        that.global.model.LunTai1_2.material[0].reflectivity = 0.5;
        that.global.model.LunTai1_2.material[0].needsUpdate = true;

        that.global.model.LunTai1_2.material[1].envMap = that.global.envMap.envMapCar;
        that.global.model.LunTai1_2.material[1].combine = THREE.MixOperation;
        that.global.model.LunTai1_2.material[1].metalness = 0.9;
        that.global.model.LunTai1_2.material[1].envMapIntensity = 0.7;
        that.global.model.LunTai1_2.material[1].roughness = 0.2;
        that.global.model.LunTai1_2.material[1].needsUpdate = true;
        // 黑塑料贴图
        that.global.model.Che_SuLiao.material[0].combine = THREE.MixOperation;
        that.global.model.Che_SuLiao.material[0].envMap = that.global.envMap.envMapCar;
        that.global.model.Che_SuLiao.material[0].reflectivity = 0.1;
        that.global.model.Che_SuLiao.material[0].needsUpdate = true;
        //车金属
        that.global.model.Che_JInShu.material[0].combine = THREE.MixOperation;
        that.global.model.Che_JInShu.material[0].envMap = that.global.envMap.envMapCar;
        that.global.model.Che_JInShu.material[0].reflectivity = 0.5;
        that.global.model.Che_JInShu.material[0].needsUpdate = true;
        // 仪表盘贴图
        that.global.model.YIBiaoTai.material[0].combine = THREE.MixOperation;
        that.global.model.YIBiaoTai.material[0].envMap = that.global.envMap.envMapCar;
        that.global.model.YIBiaoTai.material[0].reflectivity = 0.03;
        that.global.model.YIBiaoTai.material[0].needsUpdate = true;
        //车灯
        that.global.model.CheDeng.material[0].combine = THREE.MixOperation;
        that.global.model.CheDeng.material[0].envMap = that.global.envMap.envMapCar;
        that.global.model.CheDeng.material[0].reflectivity = 0.3;
        that.global.model.CheDeng.material[0].needsUpdate = true;
        // 环境
        that.global.model.HuanJIng.material[0].side = 2;
        that.global.model.HuanJIng.scale.set(1.5,1.5,1.5);
        that.global.model.HuanJIng.needsUpdate = true;
        // 挡风玻璃
        var material_BoLi1_len= that.global.model.BoLi1.material.length;
        for(var i = 0;i < material_BoLi1_len;i ++){
            that.global.model.BoLi1.material[i].combine = THREE.MixOperation;
            that.global.model.BoLi1.material[i].envMap = that.global.envMap.envMapCar;
            that.global.model.BoLi1.material[i].reflectivity = 0.3;
            that.global.model.BoLi1.material[i].needsUpdate = true;
        }
        // 刹车片
        that.global.model.ShaChePian.material[0].combine = THREE.MixOperation;
        that.global.model.ShaChePian.material[0].envMap = that.global.envMap.envMapCar;
        that.global.model.ShaChePian.material[0].reflectivity = 0.1;
        that.global.model.ShaChePian.material[0].needsUpdate = true;
        that.global.model.ShaChePian.material[1].combine = THREE.MixOperation;
        that.global.model.ShaChePian.material[1].envMap = that.global.envMap.envMapCar;
        that.global.model.ShaChePian.material[1].reflectivity = 0.1;
        that.global.model.ShaChePian.material[1].needsUpdate = true;

        // 天窗
        // window_top = scene_small.getObjectByName("TianChuang");
        // window_top.add(circle_top);
        that.global.model.TianChuang.material[0].combine = THREE.MixOperation;
        that.global.model.TianChuang.material[0].envMap = that.global.envMap.envMapCar;
        that.global.model.TianChuang.material[0].needsUpdate = true;
    };

    /**
     * 前左车门
     */
    this.getCheMenQZ = function(){
        that.global.model.CheMen_QZ.material.splice(0,1,that.global.material.materialBody);
        var material_CheMen_QZ_len = that.global.model.CheMen_QZ.material.length;
        for(var i=0;i<material_CheMen_QZ_len;i++){
            if(that.global.model.CheMen_QZ.material[i].name === 'boli'){
                that.global.model.CheMen_QZ.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_QZ.material[i].reflectivity = 0.3;
                that.global.model.CheMen_QZ.material[i].combine = THREE.MixOperation;
                // that.global.model.CheMen_QZ.material[i].side = 2;
                that.global.model.CheMen_QZ.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_QZ.material[i].name === 'jinshu'){
                that.global.model.CheMen_QZ.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_QZ.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_QZ.material[i].reflectivity = 0.5;
                that.global.model.CheMen_QZ.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_QZ.material[i].name === 'suliao'){
                that.global.model.CheMen_QZ.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_QZ.material[i].reflectivity = 0.1;
                that.global.model.CheMen_QZ.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_QZ.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_QZ.material[i].name === 'chedeng'){
                that.global.model.CheMen_QZ.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_QZ.material[i].reflectivity = 0.5;
                that.global.model.CheMen_QZ.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_QZ.material[i].needsUpdate = true;
            }else  if(i === 6){
                that.global.model.CheMen_QZ.material[i].color = new THREE.Color("#edf6ff");
            }
        }
    };

    /**
     * 前右车门
     */
    this.getCheMenHZ = function(){
        that.global.model.CheMen_HZ.material.splice(0,1,that.global.material.materialBody);
        var material_CheMen_HZ_len = that.global.model.CheMen_HZ.material.length;
        for(var i=0;i<material_CheMen_HZ_len;i++){
            if(that.global.model.CheMen_HZ.material[i].name === 'boli'){
                that.global.model.CheMen_HZ.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_HZ.material[i].reflectivity = 0.3;
                that.global.model.CheMen_HZ.material[i].combine = THREE.MixOperation;
                // that.global.model.CheMen_HZ.material[i].side = 2;
                that.global.model.CheMen_HZ.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_HZ.material[i].name === 'jinshu'){
                that.global.model.CheMen_HZ.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_HZ.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_HZ.material[i].reflectivity = 0.5;
                that.global.model.CheMen_HZ.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_HZ.material[i].name === 'suliao'){
                that.global.model.CheMen_HZ.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_HZ.material[i].reflectivity = 0.1;
                that.global.model.CheMen_HZ.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_HZ.material[i].needsUpdate = true;
            }else  if(i === 5){
                that.global.model.CheMen_HZ.material[i].color = new THREE.Color("#edf6ff");
            }
        }
    };

    /**
     * 前右车门
     */
    this.getCheMenQY = function(){
        that.global.model.CheMen_QY.material.splice(0,1,that.global.material.materialBody);
        var material_CheMen_QY_len = that.global.model.CheMen_QY.material.length;
        for(var i=0;i<material_CheMen_QY_len;i++){
            if(that.global.model.CheMen_QY.material[i].name === 'boli'){
                that.global.model.CheMen_QY.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_QY.material[i].reflectivity = 0.3;
                that.global.model.CheMen_QY.material[i].combine = THREE.MixOperation;
                // that.global.model.CheMen_QY.material[i].side = 2;
                that.global.model.CheMen_QY.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_QY.material[i].name === 'jinshu'){
                that.global.model.CheMen_QY.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_QY.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_QY.material[i].reflectivity = 0.5;
                that.global.model.CheMen_QY.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_QY.material[i].name === 'suliao'){
                that.global.model.CheMen_QY.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_QY.material[i].reflectivity = 0.1;
                that.global.model.CheMen_QY.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_QY.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_QY.material[i].name === 'chedeng'){
                that.global.model.CheMen_QY.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_QY.material[i].reflectivity = 0.5;
                that.global.model.CheMen_QY.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_QY.material[i].needsUpdate = true;
            }else  if(i === 6){
                that.global.model.CheMen_QY.material[i].color = new THREE.Color("#edf6ff");
            }
        }
    };

    /**
     * 后右车门
     */
    this.getCheMenHY = function(){
        that.global.model.CheMen_HY.material.splice(0,1,that.global.material.materialBody);
        var material_CheMen_HY_len = that.global.model.CheMen_HY.material.length;
        for(var i=0;i<material_CheMen_HY_len;i++){
            if(that.global.model.CheMen_HY.material[i].name === 'boli'){
                that.global.model.CheMen_HY.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_HY.material[i].reflectivity = 0.3;
                that.global.model.CheMen_HY.material[i].combine = THREE.MixOperation;
                // that.global.model.CheMen_HY.material[i].side = 2;
                that.global.model.CheMen_HY.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_HY.material[i].name === 'jinshu'){
                that.global.model.CheMen_HY.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_HY.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_HY.material[i].reflectivity = 0.5;
                that.global.model.CheMen_HY.material[i].needsUpdate = true;
            }else if(that.global.model.CheMen_HY.material[i].name === 'suliao'){
                that.global.model.CheMen_HY.material[i].envMap = that.global.envMap.envMapCar;
                that.global.model.CheMen_HY.material[i].reflectivity = 0.1;
                that.global.model.CheMen_HY.material[i].combine = THREE.MixOperation;
                that.global.model.CheMen_HY.material[i].needsUpdate = true;
            }else  if(i === 5){
                that.global.model.CheMen_HY.material[i].color = new THREE.Color("#edf6ff");
            }
        }
    };

    /**
     * 点击
     */
    this.click = function (e) {
        var clientX = e.clientX || e.touches[0].clientX;
        var clientY = e.clientY || e.touches[0].clientY;
        var mouse = new THREE.Vector2();
        var raycaster = new THREE.Raycaster();
        mouse.x = (clientX / window.innerWidth)*2-1;
        mouse.y = -(clientY / window.innerHeight)*2+1;
        raycaster.setFromCamera(mouse,that.global.camera);
        var intersects = raycaster.intersectObjects(that.global.scene.children);
        console.log(intersects[0].object);

    };

    /**
     *改变窗口
     */
    this.resize = function () {
        if(that.config.isFull){
            //全屏状态下跟随窗口改变
            if(that.config.isResize){
                that.config.width = window.innerWidth;
                that.config.height = window.innerHeight;
            }
        }else{
            //局部dom元素内跟随窗口改变
            if(that.config.isResize){
                that.config.width = that.config.container.offsetWidth;
                that.config.height = that.config.container.offsetHeight;
            }
        }
        that.global.camera.aspect = that.config.width/that.config.height;
        that.global.camera.updateProjectionMatrix();//更新相机投影矩阵，必须在参数发生变化后调用。
        that.global.render.setSize(that.config.width,that.config.height);
    };

    /**
     *获取id
     */
    function $(obj) {
        return document.getElementById(obj);
    }
};



// window.onload = function (e) {
    var benz = new Car({
        CDN : '',
        VER : '?201805241723',
        container : document.getElementById('myCar'),
        isFull : true,
        isResize : true
    });

    benz.init();
    benz.loop();
    benz.load();

    window.onresize = function(){
        benz.resize();
    };
// };
