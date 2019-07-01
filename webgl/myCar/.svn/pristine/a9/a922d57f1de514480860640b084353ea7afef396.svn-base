var scene,camera,stats,renderer,myCar,textureCube,gui,controls,wid,hei,textureCube_car,neishi_go,length,kaoqi2,
cheqi2,orbitControls,texture_light,texture_black,
tween_tire,tween_tire1,tween_window,tween_window_close,tween_control,tween_camera,tween_camera_back,tween_control_back,
CheDeng,tire21,tire22,tire11,tire12,
tween_canshu,tween_canshu_back,
bmaterial,material_seat,material_menkuang,
model_tire2,model_tire,car_paint,chedeng_boli,model_light,cover_da,tween_floor,CheShen,CHeQIM,shachepian,
tire1,window_top,
arr_tween_color = [],//变色tween数组，
arr_position,//相机位置
arr_mesh = [],//点击对象；
isOrder = false,//地面序列帧会否进行过排序
zoom = 1,//模型放大缩小倍数
reflc_chejinshu = 0.5,
reflc_jinshu = 0.5,//车门金属映射
stage_reflec = 0.5,// 玻璃环境贴图混合程度(0 ~ 1)
reflec_cheqi = 0.18,//车漆映射
door_skew = 11,//车门中心偏移
tween_tire_re,tween_tire_re1,//前后轮胎滚动动画
men_qz,//前左门
menqz_open_tween,menqz_close_tween,//前左门动画

men_hz,//后左门
menhz_open_tween,menhz_close_tween,

men_qy,//前右门
menqy_open_tween,menqy_close_tween,

men_hy,//后右门
menhy_open_tween,menhy_close_tween,

hbx,//后备箱
hbx_open_tween,hbx_close_tween,
version = 201801200052;

if ( !Detector.webgl ) Detector.addGetWebGLMessage();

THREE.JSONLoader.prototype.crossOrigin = "", THREE.TextureLoader.prototype.crossOrigin = "", THREE.CubeTextureLoader.prototype.crossOrigin = ""

var scene_small = new THREE.Object3D();

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var schedule = 0,percentage;
var num = document.getElementById("num");

var ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));
var equip_color = ismobile ? "tap" : "click";
var names = [
		'KaoQI',
		'houBeiXiang',
		'Che-SuLiao',

		'CheMen-QZ',
		'CheMen-QY',
		'CheMen-HZ',
		'CheMen-HY',

		'DiMian',
		'NeiShi',
		'HuanJIng',

		'Che-JInShu',
		'YIBiaoTai',
		"BoLi1",
		"CheDeng",
		"MenKuang",
		"ZuoYI",
		"TianChuang",
		"NeiShi2",
		"CanShu",

		"LunTai1-1",
		"LunTai1-2",
		"LunTai2-1",
		"LunTai2-2",
		"LunTai3-1",
		"LunTai3-2",
		"ShaChePian"
];
length = names.length + 26 + 1;


function getSize(){
	wid = window.innerWidth;
	hei = window.innerHeight;
}
function initThree(){

	scene = new THREE.Scene();
	// //////////////////////////背景颜色////////////////////////////
	scene.background = new THREE.Color( 0x000000);
	// scene.fog = new THREE.FogExp2( "#ccc", 0.004 );

	renderer = new THREE.WebGLRenderer({
		antialias:true,
		alpha: true,
		preserveDrawingBuffe:true
	});
	renderer.setSize(wid,hei);
	renderer.setClearColor(0xffffff,1);
	// renderer.gammaInput = true;
	// renderer.gammaOutput = true;
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 1.5 : 2);
	myCar = document.getElementById("myCar");
	myCar.appendChild(renderer.domElement);
	//初始化stats（FPS)
	// stats = new Stats();
	// stats.domElement.style.position = 'absolute'; //绝对坐标  
	// stats.domElement.style.left = '0px';// (0,0)px,左上角  
	// stats.domElement.style.top = '0px'; 
	// document.getElementById("myCar").appendChild(stats.domElement);
	// 、、、、、、、、、、、、、、、、、、、、坐标轴、、、、、、、、、、、、、、、、、、、
	 // var xHelp = new THREE.AxisHelper(500,500,500);
	 // scene.add(xHelp);
};
   //加载外部汽车模型;
function initCar(){
	cover_da = document.getElementById("my_cover_da");
	var loader = new THREE.JSONLoader();
	for(var i = 0;i < names.length;i ++ ){
		(function(i){
			loader.load(cdn + "model/" + names[i] + ".js?201801161113",function(geometry,materials ){
				// if(i == 0){
				// 	var materials = materials;
				// 	materials.splice(0,1,bmaterial);
				// 	var model = new THREE.Mesh(geometry,materials);
				// 	kaoqi2 = model;
				// }else if(i == 1){
				// 	var materials = materials;
				// 	materials.splice(2,1,bmaterial);
				// 	var model = new THREE.Mesh(geometry,materials);
				// }else if(i == 3){
				// 	var materials = materials;
				// 	materials.splice(0,1,bmaterial);
				// 	var model = new THREE.Mesh(geometry,materials);
				// }else if(i == 4){
				// 	var materials = materials;
				// 	materials.splice(0,1,bmaterial);
				// 	var model = new THREE.Mesh(geometry,materials);
				// 	// console.log(model)
				// }else if(i == 5){
				// 	var materials = materials;
				// 	materials.splice(0,1,bmaterial);
				// 	var model = new THREE.Mesh(geometry,materials);
				// }else if(i == 6){
				// 	var materials = materials;
				// 	materials.splice(0,1,bmaterial);
				// 	var model = new THREE.Mesh(geometry,materials);
				// }else if(i == 14){
				// 	var materials = materials;
				// 	materials.splice(0,1,material_menkuang);
				// 	var model = new THREE.Mesh(geometry,materials);
				// }else if(i == 15){
				// 	var materials = materials;
				// 	materials.splice(0,1,material_seat);
				// 	var model = new THREE.Mesh(geometry,materials);
				// 	// console.log(model)
				// }else if(i == 18){
				// 	var model = new THREE.Mesh(geometry,materials);
				// 	model.visible = false;
				// 	// console.log(model)
				// }else if(i == 21){
				// 	var model = new THREE.Mesh(geometry,materials);
				// 	tire11 = model;
				// 	model.visible = false;
				// }else if(i == 22){
				// 	var model = new THREE.Mesh(geometry,materials);
				// 	tire12 = model;
				// 	model.visible = false;
				// }else if(i == 23){
				// 	var model = new THREE.Mesh(geometry,materials);
				// 	tire21 = model;
				// 	model.visible = false;
				// }else if(i == 24){
				// 	var model = new THREE.Mesh(geometry,materials);
				// 	tire22 = model;
				// 	model.visible = false;
				// }else{
				// 	var model = new THREE.Mesh(geometry,materials);
				// }
				switch(i) {
					case 0 :
						var materials = materials;
						materials.splice(0,1,bmaterial);
						var model = new THREE.Mesh(geometry,materials);
						kaoqi2 = model;
						break;
					case 1:
						var materials = materials;
						materials.splice(2,1,bmaterial);
						var model = new THREE.Mesh(geometry,materials);
						break;
					case 3:
						var materials = materials;
						materials.splice(0,1,bmaterial);
						var model = new THREE.Mesh(geometry,materials);
						break;
					case 4:
						var materials = materials;
						materials.splice(0,1,bmaterial);
						var model = new THREE.Mesh(geometry,materials);
						break;
					case 5:
						var materials = materials;
						materials.splice(0,1,bmaterial);
						var model = new THREE.Mesh(geometry,materials);
						break;
					case 6:
						var materials = materials;
						materials.splice(0,1,bmaterial);
						var model = new THREE.Mesh(geometry,materials);
						break;
					case 14:
						var materials = materials;
						materials.splice(0,1,material_menkuang);
						var model = new THREE.Mesh(geometry,materials);
						break;
					case 15:
						var materials = materials;
						materials.splice(0,1,material_seat);
						var model = new THREE.Mesh(geometry,materials);
						break;
					case 18:
						var model = new THREE.Mesh(geometry,materials);
						model.visible = false;
						break;
					case 21:
						var model = new THREE.Mesh(geometry,materials);
						tire11 = model;
						model.visible = false;
						break;
					case 22:
						var model = new THREE.Mesh(geometry,materials);
						tire12 = model;
						model.visible = false;
						break;
					case 23:
						var model = new THREE.Mesh(geometry,materials);
						tire21 = model;
						model.visible = false;
						break;
					case 24:
						var model = new THREE.Mesh(geometry,materials);
						tire22 = model;
						model.visible = false;
						break;
					default:
						var model = new THREE.Mesh(geometry,materials);
						break;
				}
				
				model.scale.x = model.scale.y = model.scale.z = zoom;
				model.name = names[i];
				scene_small.add(model);
				
				scene.add(scene_small);
				loading();
			})

		})(i)
	}
}

var arr_floor = [],
	floor_index = 25;
	floor_inter = null;

function img_floor(){
	for(var i = 0;i < 26;i ++){
		var texture = new THREE.TextureLoader()
		.setPath(cdn + 'img/floor/')
		.load('DM_000' + i + '.png?201801031545',function(tex){
			arr_floor.push(tex);
			loading();

		});
		texture.index = i;
	}

}

function loading(){
	schedule ++;
	percentage = Math.round(schedule / length * 100) + "%";
	num.innerHTML = percentage;
	if(schedule == length){

		getTire();
		getTire1();
		getTire2();
		get_men_qz();
		get_men_hz();
		get_men_qy();
		get_men_hy();
		get_hbx();
		loading_end();
		
		scene.scale.set(0.4,0.4,0.4);
		setTimeout(function(){
			$(cover_da).fadeOut('slow/400/fast',function(){
				$(this).remove();
			})
			
			var tween_all = new TWEEN.Tween(scene.scale)
			.to({x:1,y:1,z:1},1000)
			.easing(TWEEN.Easing.Quadratic.InOut)
			.start();

		},1000)
	}
}

// 加载完之后
function loading_end(){
	render();

	arr_mesh = scene_small.children.concat(circle_qz,circle_qy,circle_hz,circle_hy,circle_hbx,circle_top);
	arr_tween = [tween_tire,tween_tire_re,tween_tire11,tween_tire12,tween_tire21,tween_tire22];
	// console.log(arr_mesh)

	var luntai = scene_small.getObjectByName("LunTai1-1");
	var luntai1 = scene_small.getObjectByName("LunTai1-2");

	// 环境贴图
	luntai.material[1].envMap = textureCube_car;
	luntai.material[1].combine = THREE.MixOperation;
	luntai.material[1].reflectivity = 0.5;
	luntai.material[1].needsUpdate = true;
	// needUpdate(luntai.material[1])

	luntai.material[2].envMap = textureCube_car;
	luntai.material[2].combine = THREE.MixOperation;
	luntai.material[2].metalness = 0.9;
	luntai.material[2].envMapIntensity = 0.7;
	luntai.material[2].roughness = 0.2;
	// luntai.material[2].needsUpdate = true;

	luntai1.material[0].envMap = textureCube_car;
	luntai1.material[0].combine = THREE.MixOperation;
	luntai1.material[0].reflectivity = 0.5;
	// luntai1.material[0].needsUpdate = true;

	luntai1.material[1].envMap = textureCube_car;
	luntai1.material[1].combine = THREE.MixOperation;
	luntai1.material[1].metalness = 0.9;
	luntai1.material[1].envMapIntensity = 0.7;
	luntai1.material[1].roughness = 0.2;
	// luntai1.material[1].needsUpdate = true;


	// 黑塑料贴图
	var suliao = scene_small.getObjectByName("Che-SuLiao");
	suliao.material[0].combine = THREE.MixOperation;
	suliao.material[0].envMap = textureCube_car;
	suliao.material[0].reflectivity = 0.1;
	// suliao.material[0].needsUpdate = true;

	//车金属
	var che_jinshu = scene_small.getObjectByName("Che-JInShu");

	che_jinshu.material[0].combine = THREE.MixOperation;
	che_jinshu.material[0].envMap = textureCube_car;
	che_jinshu.material[0].reflectivity = reflc_chejinshu;
	// che_jinshu.material[0].needsUpdate = true;


	// 仪表盘贴图
	var yibiao = scene_small.getObjectByName("YIBiaoTai");
	var length_yibiao = yibiao.material.length;
	yibiao.material[0].combine = THREE.MixOperation;
	yibiao.material[0].envMap = textureCube_car;
	yibiao.material[0].reflectivity = 0.03;
	// yibiao.material[0].needsUpdate = true;
	//金属灯；
	CheDeng = scene_small.getObjectByName("CheDeng");
	// console.log(CheDeng);

	// CheDeng.material[0].combine = THREE.MixOperation;
	// CheDeng.material[0].envMap = textureCube_car;
	// CheDeng.material[0].reflectivity = 0.4;
	// CheDeng.material[0].needsUpdate = true;

	// 挡风玻璃
	var boli = scene_small.getObjectByName("BoLi1");
	var length_boli = boli.material.length;
	// console.log(boli);
	for(var i = 0;i < length_boli;i ++){
		boli.material[i].combine = THREE.MixOperation;
		boli.material[i].envMap = textureCube_car;
		// boli.material[i].reflectivity = 2;
		// boli.material[i].needsUpdate = true;
	}

	// 环境
	var huanjing = scene_small.getObjectByName("HuanJIng");
	huanjing.material[0].side = 2;
	huanjing.scale.set(1.5,1.5,1.5);
	// huanjing.needsUpdate = true;
	// console.log(huanjing);
	// 参数
	var car_info = scene_small.getObjectByName("CanShu");
	tween_canshu = new TWEEN.Tween(car_info.material[0])
	.onStart(function(){
		car_info.visible = true;
	})
	.to({opacity:1},500);
	tween_canshu_back = new TWEEN.Tween(car_info.material[0])
	.to({opacity:0},500)
	.onComplete(function(){
		car_info.visible = false;
	});

	// 刹车片
	shachepian = scene_small.getObjectByName("ShaChePian");
	shachepian.material[0].combine = THREE.MixOperation;
	shachepian.material[0].envMap = textureCube_car;
	shachepian.material[0].reflectivity = 0.1;
	// shachepian.material[0].needsUpdate = true;

	shachepian.material[1].combine = THREE.MixOperation;
	shachepian.material[1].envMap = textureCube_car;
	shachepian.material[1].reflectivity = 0.1;
	// shachepian.material[1].needsUpdate = true;



	// 天窗
	window_top = scene_small.getObjectByName("TianChuang");
	window_top.add(circle_top);
	window_top.material[0].combine = THREE.MixOperation;
	window_top.material[0].envMap = textureCube_car;
	// window_top.material[0].needsUpdate = true;
	// console.log(window_top);

	tween_window = new TWEEN.Tween(window_top.position)
	.onStart(function(){
		circle_top.isNoplaying = false;
	})
	.onComplete(function(){
		circle_top.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quadratic.InOut)
	.to({y:-0.5},300)
	.chain(new TWEEN.Tween(window_top.position).to({x:7},1000).easing(TWEEN.Easing.Quadratic.InOut));

	tween_window_close = new TWEEN.Tween(window_top.position)
	.onStart(function(){
		circle_top.isNoplaying = false;
	})
	.onComplete(function(){
		circle_top.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quadratic.InOut)
	.to({x:0},1000)
	.chain(new TWEEN.Tween(window_top.position).to({y:0},300).easing(TWEEN.Easing.Quadratic.InOut));




}

function play_dimian(){
	var model_floor = scene_small.getObjectByName("DiMian");

	// 重新对arr_floor进行排序，仅进行一次；
	if(!isOrder){
		isOrder = true;
		var floor_length = arr_floor.length;
		arr_floor.sort(function(a,b){
			return a.index - b.index

		})
		// console.log(arr_floor);
	}

	if(arr_floor && model_floor){
		clearInterval(floor_inter);
		floor_inter = setInterval(function(){
			// console.log(model_floor);
			model_floor.material[0].map = arr_floor[floor_index --]; 
			if(floor_index < 0){
				floor_index = 24;
			}
		},40)
	}
		
}
// .................................................................加载镜像图................................................
// function enMapImg(){
// 	textureCube = new THREE.CubeTextureLoader()
// 	.setPath( './img/')
// 	.load( [ 'posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg' ]);
// }
function enMapImg_car(){
	textureCube_car = new THREE.CubeTextureLoader()
	.setPath( cdn + 'img/img_cc/')
	// .load( [ '3.jpg', '1.jpg' ,'6.jpg' , '5.jpg' ,'2.jpg' , '4.jpg' ]);
	// .load( [ 'px1.jpg', 'nx1.jpg' ,'py1.jpg' , 'ny1.jpg' ,'pz1.jpg' , 'nz1.jpg' ]);
	.load( [ '03.jpg', '01.jpg' ,'06.jpg' , '05.jpg' ,'02.jpg' , '04.jpg' ],function(){
		loading();
	});

	var texture = new THREE.TextureLoader()
	.load(cdn + "./model/KaoQI.jpg?" + version);
	var texture_seat = new THREE.TextureLoader()
	.load(cdn + "./model/ZuoYI.jpg?" + version);

	var texture_cheqim = new THREE.TextureLoader()
	.load(cdn + "./model/MenKuang.jpg?" + version);

	texture_light = new THREE.TextureLoader()
	.load(cdn + "./model/CheDeng2.jpg?" + version);

	texture_black = new THREE.TextureLoader()
	.load(cdn + "./model/CheDeng.jpg?" + version);

	

	bmaterial = new THREE.MeshPhysicalMaterial({
	    map:texture,
	    color: 0xffffff,
	    side: 2,
	    roughness: 0,
	    metalness: 0.05,
	    envMap: textureCube_car,
	 	envMapIntensity: 0.3,
	    emissiveIntensity: 1.0,
	    clearCoat: 1.0,
	    clearCoatRoughness: 0,
	    shading: THREE.SmoothShading,
	    name:"cheqi",
	    reflectivity:0.5
	});
	// console.log(bmaterial);


	material_seat = new THREE.MeshPhysicalMaterial({
	    map:texture_seat,
	    color: {b:0.5880,g:0.5880,r:0.5880}, 
	    side: 2,
	    roughness: 0,
	    metalness: 0.6,
	    envMap: textureCube_car,
	 	envMapIntensity: 0.1,
	    emissiveIntensity: 1.0,
	    clearCoat: 1,
	    clearCoatRoughness: 0,
	    name:"cheqi"
	});

	material_menkuang = new THREE.MeshPhysicalMaterial({
	    map:texture_cheqim,
	    color: 0xedf6ff,
	    side: 2,
	    roughness: 0,
	    metalness: 0.05,
	    envMap: textureCube_car,
	 	envMapIntensity: 0.3,
	    emissiveIntensity: 1.0,
	    clearCoat: 1.0,
	    clearCoatRoughness: 0,
	    name:"cheqi",
	    reflectivity:0.5
	});
}
     //、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、初始化相机.......................
function initCamera(){
	camera = new THREE.PerspectiveCamera(45,wid/hei,1,1000);

	orbitControls = new THREE.OrbitControls(camera);

	arr_position = ismobile ? [-81.13131752779783,30.03395926219317,54.92130545138657] : [-78,28,63];

	camera.position.set(arr_position[0],arr_position[1],arr_position[2]);
	orbitControls.minPolarAngle = Math.PI/9;//限定最小垂直角度;
	orbitControls.maxPolarAngle = Math.PI/2.2;//限定最大垂直角度;
	orbitControls.minDistance = 100;
	orbitControls.maxDistance = 300;
	orbitControls.zoomSpeed = .2;
	orbitControls.rotateSpeed = 0.3;

	orbitControls.autoRotate = true;
	orbitControls.autoRotateSpeed = 0.3;

	orbitControls.enableDamping = true;
	orbitControls.dampingFactor = 0.2;
	tween_control = new TWEEN.Tween(orbitControls.target)
	.to({x:-22,y:5,z:0},500);
	tween_camera = new TWEEN.Tween(camera.position)
	.to({x:-22,y:10.7,z:40},500)

	// 恢复
	tween_control_back = new TWEEN.Tween(orbitControls.target)
	.to({x:0,y:10,z:0},500);
	tween_camera_back = new TWEEN.Tween(camera.position)
	.to({x:arr_position[0],y:arr_position[1],z:arr_position[2]},500)
	.onComplete(function(){
		orbitControls.minDistance = 100;
		orbitControls.maxDistance = 300;
	})
	
	// console.log(camera.position)
	var clock = new THREE.Clock();
	var delta = clock.getDelta();
	orbitControls.update(delta);
}

//......................................初始化灯光.........................
function initLight(){
	var ambientLight = new THREE.AmbientLight("#eff9ff",1.1);
	scene.add(ambientLight);

	// console.log(ambientLight);
	// var directLight = new THREE.DirectionalLight(0xffffff,0.);
	// // scene.add(directLight);
	// // console.log(directLight);
	var spotLight = new THREE.SpotLight( 0xffbf73,0.8,300,Math.PI/5 );
	spotLight.position.set( 0, 80, 540 );
	// var spotlight_help = new THREE.SpotLightHelper(spotLight)
	// scene.add(spotlight_help);
	scene.add(spotLight);

}
   //动画函数;
var speed_animate = 0;
function render(){
	speed_animate ++ ;
	requestAnimationFrame(render);
	if(speed_animate % 2){
		return;
	}
	renderer.render(scene,camera);
	if(schedule == length){
		TWEEN.update();
		orbitControls.update();

		flare_right();
		flare_left();
		sprite_circle(circle_qz);
		sprite_circle(circle_qy);
		sprite_circle(circle_hz);
		sprite_circle(circle_hy);
		sprite_circle(circle_hbx);
		flare_hou_func(flare_hz);
		flare_hou_func(flare_hy);
	}

	// stats.update();
}






// 。。。。。。。。。。。。。。。。。。。。。。。。开始。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
function start(){
	// alert(1111);
	getSize();
	initThree();
	load_inner();
	// enMapImg();
	enMapImg_car();
	initCar();
	initLight();
	initCamera();
	// render();
	img_floor()
};

window.onload = function(){
	var img=new Image();
	img.src='./img/bg_m.jpg';
	img.onload = start;
};


// start();
music.play();
document.addEventListener("WeixinJSBridgeReady", function () {
    music.play();
}, false);
var isPlaying = true;

$(".music").on(equip_color,function(){
	if(isPlaying){
		isPlaying = false;
		music.pause();
		$(".music").removeClass('active');
	}else{
		isPlaying = true;
		music.play();
		$(".music").addClass('active');
	}
});


window.onresize = function(){
	wid = window.innerWidth;
	hei = window.innerHeight;
	camera.aspect = wid/hei;
	camera.updateProjectionMatrix();
	renderer.setSize(wid,hei);
};
window.onorientationchange = function(){
	wid = window.innerWidth;
	hei = window.innerHeight;
	camera.aspect = wid/hei;
	camera.updateProjectionMatrix();
	renderer.setSize(wid,hei);
};


function load_inner(resolve,reject){
	var neishi_geo = new THREE.SphereBufferGeometry(100, 40, 40);
	var img_inner = new THREE.TextureLoader();
	img_inner.load(cdn + 'img/neishi5.jpg?201801161115',function(res){
		// console.log(1)
		neishi_go = new THREE.Mesh( neishi_geo, new THREE.MeshBasicMaterial({
			side:1,
			map:res
		}));
		neishi_go.visible = false;
		var maxAnisotropy = renderer.getMaxAnisotropy();
		res.anisotropy = maxAnisotropy;
		// res.wrapS = THREE.MirroredRepeatWrapping;
		// res.wrapT = THREE.MirroredRepeatWrapping;
		scene.add(neishi_go); 
		// console.log(neishi_go);

	})

}
// 获取车轮
function getTire(){
	model_tire = scene_small.getObjectByName('LunTai1-1');
	// model_tire.visible = false;
	// 重新计算车轮中心

	model_tire.geometry.computeBoundingBox();
	var t = model_tire.geometry.boundingBox.getCenter().negate();
	model_tire.geometry.translate(t.x, t.y, t.z);


	// model_tire.geometry.verticesNeedUpdate = true;
	// 前车轮
	model_tire.position.x = - zoom * t.x;
	model_tire.position.y = - zoom * t.y;
	model_tire.position.z = - zoom * t.z;


	tween_tire = new TWEEN.Tween(model_tire.rotation);
	tween_tire1 = new TWEEN.Tween(model_tire.rotation);
	tween_tire1.to({z:0},1);
	tween_tire.to({z:THREE.Math.degToRad(360)},2000)
	.chain(tween_tire1);
	tween_tire1.chain(tween_tire);

	// 后车轮
	model_tire2 = scene_small.getObjectByName('LunTai1-2');
	// model_tire2.visible = false;
	model_tire2.geometry.computeBoundingBox();
	var t = model_tire2.geometry.boundingBox.getCenter().negate();
	model_tire2.geometry.translate(t.x, t.y, t.z);


	// model_tire2.geometry.verticesNeedUpdate = true;
	// 前车轮
	model_tire2.position.x = - zoom * t.x;
	model_tire2.position.y = - zoom * t.y;
	model_tire2.position.z = - zoom * t.z;


	tween_tire_re = new TWEEN.Tween(model_tire2.rotation);
	tween_tire_re1 = new TWEEN.Tween(model_tire2.rotation);
	tween_tire_re1.to({z:0},1);
	tween_tire_re.to({z:THREE.Math.degToRad(360)},2000)
	.chain(tween_tire_re1);
	tween_tire_re1.chain(tween_tire_re);

}

function getTire1(){

	tire11.material[0].envMap = textureCube_car;
	tire11.material[0].combine = THREE.MixOperation;
	tire11.material[0].reflectivity = 0.3;
	// tire11.material[0].needsUpdate = true;

	tire12.material[1].envMap = textureCube_car;
	tire12.material[1].combine = THREE.MixOperation;
	tire12.material[1].reflectivity = 0.3;
	// tire12.material[1].needsUpdate = true;


	// model_tire.visible = false;
	// 重新计算车轮中心

	tire11.geometry.computeBoundingBox();
	var t = tire11.geometry.boundingBox.getCenter().negate();
	tire11.geometry.translate(t.x, t.y, t.z);


	// tire11.geometry.verticesNeedUpdate = true;
	// 前车轮
	tire11.position.x = - zoom * t.x;
	tire11.position.y = - zoom * t.y;
	tire11.position.z = - zoom * t.z;


	tween_tire11 = new TWEEN.Tween(tire11.rotation);
	tween_tire11.isPlay = false;
	tween_tire11_re = new TWEEN.Tween(tire11.rotation);
	tween_tire11_re.to({z:0},1);
	tween_tire11.to({z:THREE.Math.degToRad(360)},2000)
	.chain(tween_tire11_re);
	tween_tire11_re.chain(tween_tire11);

	// 后车轮
	tire12.geometry.computeBoundingBox();
	var t = tire12.geometry.boundingBox.getCenter().negate();
	tire12.geometry.translate(t.x, t.y, t.z);


	// tween_tire12.geometry.verticesNeedUpdate = true;
	// 前车轮
	tire12.position.x = - zoom * t.x;
	tire12.position.y = - zoom * t.y;
	tire12.position.z = - zoom * t.z;


	tween_tire12 = new TWEEN.Tween(tire12.rotation);
	tween_tire12_re = new TWEEN.Tween(tire12.rotation);
	tween_tire12_re.to({z:0},1);
	tween_tire12.to({z:THREE.Math.degToRad(360)},2000)
	.chain(tween_tire12_re);
	tween_tire12_re.chain(tween_tire12);

}

function getTire2(){

	tire21.material[0].envMap = textureCube_car;
	tire21.material[0].combine = THREE.MixOperation;
	tire21.material[0].reflectivity = 0.15 ;
	// tire21.material[0].needsUpdate = true;

	tire22.material[1].envMap = textureCube_car;
	tire22.material[1].combine = THREE.MixOperation;
	tire22.material[1].reflectivity = 0.15 ;
	// tire22.material[1].needsUpdate = true;




	// model_tire.visible = false;
	// 重新计算车轮中心

	tire21.geometry.computeBoundingBox();
	var t = tire21.geometry.boundingBox.getCenter().negate();
	tire21.geometry.translate(t.x, t.y, t.z);


	// tire21.geometry.verticesNeedUpdate = true;
	// 前车轮
	tire21.position.x = - zoom * t.x;
	tire21.position.y = - zoom * t.y;
	tire21.position.z = - zoom * t.z;


	tween_tire21 = new TWEEN.Tween(tire21.rotation);
	tween_tire21.isPlay = false;
	tween_tire21_re = new TWEEN.Tween(tire21.rotation);
	tween_tire21_re.to({z:0},1);
	tween_tire21.to({z:THREE.Math.degToRad(360)},2000)
	.chain(tween_tire21_re);
	tween_tire21_re.chain(tween_tire21);

	// 后车轮
	tire22.geometry.computeBoundingBox();
	var t = tire22.geometry.boundingBox.getCenter().negate();
	tire22.geometry.translate(t.x, t.y, t.z);


	// tween_tire22.geometry.verticesNeedUpdate = true;
	// 后车轮
	tire22.position.x = - zoom * t.x;
	tire22.position.y = - zoom * t.y;
	tire22.position.z = - zoom * t.z;


	tween_tire22 = new TWEEN.Tween(tire22.rotation);
	tween_tire22_re = new TWEEN.Tween(tire22.rotation);
	tween_tire22_re.to({z:0},1);
	tween_tire22.to({z:THREE.Math.degToRad(360)},2000)
	.chain(tween_tire22_re);
	tween_tire22_re.chain(tween_tire22);

}
// 获取车门,设置动画；
function get_men_qz(){
	men_qz = scene_small.getObjectByName('CheMen-QZ');
	men_qz.add(circle_qz);

	// 环境贴图及uv面；

	var materials_qz_len = men_qz.material.length;
	// console.log(men_qz);
	for(var i = 0;i < materials_qz_len; i ++){
		if(men_qz.material[i].name == "boli"){
			men_qz.material[i].envMap = textureCube_car;
			men_qz.material[i].reflectivity = stage_reflec;
			men_qz.material[i].combine = THREE.MixOperation;
			// men_qz.material[i].needsUpdate = true;
			// console.log(men_qz.material[i])
		}else if(men_qz.material[i].name == "jinshu"){
			men_qz.material[i].envMap = textureCube_car;
			men_qz.material[i].combine = THREE.MixOperation;
			men_qz.material[i].reflectivity = reflc_jinshu;
			// men_qz.material[i].needsUpdate = true;
		}else if(men_qz.material[i].name == "suliao"){
			men_qz.material[i].envMap = textureCube_car;
			men_qz.material[i].reflectivity = 0.1;
			men_qz.material[i].combine = THREE.MixOperation;
			// men_qz.material[i].needsUpdate = true;
		}else if(men_qz.material[i].name == "chedeng"){
			men_qz.material[i].envMap = textureCube_car;
			men_qz.material[i].reflectivity = 0.5;
			men_qz.material[i].combine = THREE.MixOperation;
			// men_qz.material[i].needsUpdate = true;
		}else if(i == 6){
			men_qz.material[i].color = new THREE.Color("#edf6ff"); 
		}
	}

	men_qz.isClose = true;

	men_qz.geometry.computeBoundingBox();
	var t = men_qz.geometry.boundingBox.getCenter().negate();
	t.x = t.x + door_skew 
	men_qz.geometry.translate(t.x, t.y, t.z);
	men_qz.position.set(-t.x * zoom, -t.y * zoom, -t.z * zoom);

	// men_qz.rotation.y = THREE.Math.degToRad(-45);



	menqz_open_tween = new TWEEN.Tween(men_qz.rotation)
	.easing(TWEEN.Easing.Quadratic.InOut)
	.onStart(function(){
		circle_qz.isNoplaying = false;
	})
	.onComplete(function(){
		circle_qz.isNoplaying = true;
	})
	.to({y:THREE.Math.degToRad(-1 * 45)});

	menqz_close_tween = new TWEEN.Tween(men_qz.rotation)
	.onStart(function(){
		circle_qz.isNoplaying = false;
	})
	.onComplete(function(){
		circle_qz.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quintic.In)
	.to({y:THREE.Math.degToRad(0)});
}

function get_men_hz(){
	men_hz = scene_small.getObjectByName('CheMen-HZ');
	men_hz.add(circle_hz);

	var materials_hz_len = men_hz.material.length;
	for(var i = 0;i < materials_hz_len; i ++){
		if(men_hz.material[i].name == "boli"){
			men_hz.material[i].envMap = textureCube_car;
			men_hz.material[i].reflectivity = stage_reflec;
			men_hz.material[i].combine = THREE.MixOperation;
			// men_hz.material[i].needsUpdate = true;
		}else if(men_hz.material[i].name == "jinshu"){
			men_hz.material[i].envMap = textureCube_car;
			men_hz.material[i].combine = THREE.MixOperation;
			men_hz.material[i].reflectivity = reflc_jinshu;
			// men_hz.material[i].needsUpdate = true;
			// console.log(men_hz.material[i]);
		}else if(men_hz.material[i].name == "suliao"){
			men_hz.material[i].envMap = textureCube_car;
			men_hz.material[i].reflectivity = 0.1;
			men_hz.material[i].combine = THREE.MixOperation;
			// men_hz.material[i].needsUpdate = true;
		}else if(i == 5){
			men_hz.material[i].color = new THREE.Color("#edf6ff"); 
		}

		
	}

	men_hz.isClose = true;

	men_hz.geometry.computeBoundingBox();
	var t = men_hz.geometry.boundingBox.getCenter().negate();
	t.x = t.x + door_skew - 3;
	t.z = t.z - 2.5;
	men_hz.geometry.translate(t.x, t.y, t.z);
	men_hz.position.set(-t.x * zoom, -t.y * zoom, -t.z * zoom);
	// men_hz.rotation.y = THREE.Math.degToRad(-45);



	menhz_open_tween = new TWEEN.Tween(men_hz.rotation)
	.onStart(function(){
		circle_hz.isNoplaying = false;
	})
	.onComplete(function(){
		circle_hz.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quadratic.InOut)
	.to({y:THREE.Math.degToRad(-1 * 45)});

	menhz_close_tween = new TWEEN.Tween(men_hz.rotation)
	.onStart(function(){
		circle_hz.isNoplaying = false;
	})
	.onComplete(function(){
		circle_hz.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quintic.In)
	.to({y:THREE.Math.degToRad(0)});
}

function get_men_qy(){
	men_qy = scene_small.getObjectByName('CheMen-QY');
	men_qy.add(circle_qy);
	// console.log(men_qy)

	var materials_qy_len = men_qy.material.length;
	for(var i = 0;i < materials_qy_len; i ++){
		
		if(men_qy.material[i].name == "boli"){
			men_qy.material[i].envMap = textureCube_car;
			men_qy.material[i].reflectivity = stage_reflec;
			men_qy.material[i].combine = THREE.MixOperation;
			// men_qy.material[i].needsUpdate = true;
		}else if(men_qy.material[i].name == "jinshu"){

			men_qy.material[i].envMap = textureCube_car;
			men_qy.material[i].combine = THREE.MixOperation;
			men_qy.material[i].reflectivity = reflc_jinshu;
			// men_qy.material[i].needsUpdate = true;
		}else if(men_qy.material[i].name == "suliao"){
			men_qy.material[i].envMap = textureCube_car;
			men_qy.material[i].reflectivity = 0.1;
			men_qy.material[i].combine = THREE.MixOperation;
			// men_qy.material[i].needsUpdate = true;
		}else if(i == 6){
			men_qy.material[i].color = new THREE.Color("#edf6ff"); 
		}
	}
	men_qy.isClose = true;

	men_qy.geometry.computeBoundingBox();
	var t = men_qy.geometry.boundingBox.getCenter().negate();
	t.x = t.x + door_skew;
	men_qy.geometry.translate(t.x, t.y, t.z);
	men_qy.position.set(-t.x * zoom, -t.y * zoom, -t.z * zoom);
	// men_hz.rotation.y = THREE.Math.degToRad(-45);



	menqy_open_tween = new TWEEN.Tween(men_qy.rotation)
	.easing(TWEEN.Easing.Quadratic.InOut)
	.onStart(function(){
		circle_qy.isNoplaying = false;
	})
	.onComplete(function(){
		circle_qy.isNoplaying = true;
	})
	.to({y:THREE.Math.degToRad(1 * 45)});

	menqy_close_tween = new TWEEN.Tween(men_qy.rotation)
	.onStart(function(){
		circle_qy.isNoplaying = false;
	})
	.onComplete(function(){
		circle_qy.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quintic.In)
	.to({y:THREE.Math.degToRad(0)});
}

function get_men_hy(){
	men_hy = scene_small.getObjectByName('CheMen-HY');
	men_hy.add(circle_hy);

	var materials_hy_len = men_hy.material.length;
	for(var i = 0;i < materials_hy_len; i ++){
		if(men_hy.material[i].name == "boli"){
			men_hy.material[i].envMap = textureCube_car;
			men_hy.material[i].reflectivity = stage_reflec;
			men_hy.material[i].combine = THREE.MixOperation;
			// men_hy.material[i].needsUpdate = true;
		}else if(men_hy.material[i].name == "jinshu"){
			men_hy.material[i].envMap = textureCube_car;
			men_hy.material[i].combine = THREE.MixOperation;
			men_hy.material[i].reflectivity = reflc_jinshu;
			// men_hy.material[i].needsUpdate = true;
		}else if(men_hy.material[i].name == "suliao"){
			men_hy.material[i].envMap = textureCube_car;
			men_hy.material[i].reflectivity = 0.05;
			men_hy.material[i].combine = THREE.MixOperation;
			// men_hy.material[i].needsUpdate = true;
		}else if(i == 6){
			men_qy.material[i].color = new THREE.Color("#edf6ff");

		}
		
	}

	men_hy.isClose = true;

	men_hy.geometry.computeBoundingBox();
	var t = men_hy.geometry.boundingBox.getCenter().negate();
	t.x = t.x + door_skew - 3;
	t.z = t.z + 2.5;
	men_hy.geometry.translate(t.x, t.y, t.z);
	men_hy.position.set(-t.x * zoom, -t.y * zoom, -t.z * zoom);
	// men_hy.rotation.y = THREE.Math.degToRad(-45);


	menhy_open_tween = new TWEEN.Tween(men_hy.rotation)
	.onStart(function(){
		circle_hy.isNoplaying = false;
	})
	.onComplete(function(){
		circle_hy.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quadratic.InOut)
	.to({y:THREE.Math.degToRad(1 * 45)});

	menhy_close_tween = new TWEEN.Tween(men_hy.rotation)
	.onStart(function(){
		circle_hy.isNoplaying = false;
	})
	.onComplete(function(){
		circle_hy.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quintic.In)
	.to({y:THREE.Math.degToRad(0)});
}

function get_hbx(){
	hbx = scene_small.getObjectByName('houBeiXiang');
	hbx.add(circle_hbx);

	var materials_hbx_len = hbx.material.length;
	for(var i = 0;i < materials_hbx_len; i ++){
		if(hbx.material[i].name == "jinshu"){
			hbx.material[i].envMap = textureCube_car;
			hbx.material[i].envMap = textureCube_car;
			hbx.material[i].combine = THREE.MixOperation;
			hbx.material[i].reflectivity = reflc_chejinshu;
		}else if(hbx.material[i].name == "boli"){
			hbx.material[i].envMap = textureCube_car;
			hbx.material[i].combine = THREE.MixOperation;
			hbx.material[i].reflectivity = 0.4;
			hbx.material[i].envMap = textureCube_car;
		}
		// hbx.material[i].needsUpdate = true;
	}


	hbx.isClose = true;

	hbx.geometry.computeBoundingBox();
	var t = hbx.geometry.boundingBox.getCenter().negate();
	t.x = t.x + 5;
	t.y = t.y - 3;

	hbx.geometry.translate(t.x, t.y, t.z);
	hbx.position.set(-t.x * zoom, -t.y * zoom, -t.z * zoom);



	hbx_open_tween = new TWEEN.Tween(hbx.rotation)
	.onStart(function(){
		circle_hbx.isNoplaying = false;
	})
	.onComplete(function(){
		circle_hbx.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quadratic.InOut)
	.to({z:THREE.Math.degToRad(1 * 50)});


	hbx_close_tween = new TWEEN.Tween(hbx.rotation)
	.onStart(function(){
		circle_hbx.isNoplaying = false;
	})
	.onComplete(function(){
		circle_hbx.isNoplaying = true;
	})
	.easing(TWEEN.Easing.Quintic.In)
	.to({z:THREE.Math.degToRad(0)});
}

function circle_onstart(){
	circle_top.isNoplaying = false;
	circle_qz.isNoplaying = false;
	circle_qy.isNoplaying = false;
	circle_hz.isNoplaying = false;
	circle_hy.isNoplaying = false;
	circle_hbx.isNoplaying = false;
}
function circle_oncomplete(){
	circle_top.isNoplaying = true;
	circle_qz.isNoplaying = true;
	circle_qy.isNoplaying = true;
	circle_hz.isNoplaying = true;
	circle_hy.isNoplaying = true;
	circle_hbx.isNoplaying = true;
}



var btn_play = document.getElementsByClassName("btn")[0];
var isPlay = false;
var tire_index = 0;
var isTireturn = true;
$(btn_play).on(equip_color,function(){
	var tween_item = arr_tween[tire_index],
	tween_item_re = arr_tween[tire_index + 1];
	if(tween_item){
		if(tween_item.isPlay){
			if(!isTireturn){
				return;
			}
			tween_item.isPlay = false;
			tween_item.stop();
			tween_item_re.stop();
			clearInterval(floor_inter);

			$(btn_play).find("img").eq(1).css("display","block").siblings('img').css("display","none");

		}else{
			isTireturn = false;
			var time_timeout = 1000;
			if(circle_qz.isClose && circle_hz.isClose && circle_qy.isClose && circle_hy.isClose && circle_hbx.isClose){
				time_timeout = 0;
			}


			setTimeout(function(){

				car_run.play();
				tween_item.isPlay = true;
				setTimeout(function(){
					isTireturn = true;
					tween_item.stop();
					tween_item_re.stop();
					tween_item.start();
					tween_item_re.start();
					play_dimian();
				} ,2000)
					
			}, time_timeout)
			
			$(btn_play).find("img").eq(0).css("display","block").siblings('img').css("display","none");

			if(!circle_qz.isClose){
				setTimeout(function(){
					door_close.play();
				}, 540)
				menqz_close_tween.start();
				circle_qz.isClose = true;
			}
			if(!circle_hz.isClose){
				setTimeout(function(){
					door_close.play();
				}, 540)
				menhz_close_tween.start();	
				circle_hz.isClose = true;
			}
			if(!circle_qy.isClose){
				setTimeout(function(){
					door_close.play();
				}, 540)
				menqy_close_tween.start();	
				circle_qy.isClose = true;
			}
			if(!circle_hy.isClose){
				setTimeout(function(){
					door_close.play();
				}, 540)
				menhy_close_tween.start();	
				circle_hy.isClose = true;
			}
			if(!circle_hbx.isClose){
				
				hbx_close_tween.start();	
				circle_hbx.isClose = true;
			}
		
		}
	}
	
});

// 鼠标点击车门开启关闭



function onMouseClick( event ) {

	var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
	var clientY = event.clientY ? event.clientY : event.touches[0].clientY;

	mouse.x = ( clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( clientY / window.innerHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( arr_mesh );
	var single = intersects ? intersects[0] : "";
	if(single && single.object.name == "circle_qz"){
		if(!single.object.isNoplaying){
			return;
		}
		if(single.object.isClose){
			if(!isTireturn){
				return;
			}
			
			menqz_open_tween.start();
			// 播放音效
			if(door_open.paused){
				door_open.play();
			}else{
				door_open2.play();
			}
			single.object.isClose = false;

			var tween_item = arr_tween[tire_index],
			tween_item_re = arr_tween[tire_index + 1];
			if(tween_item.isPlay){
				console.log(tire_index);
				tween_item.isPlay = false;
				tween_item.stop();
				tween_item_re.stop();
				clearInterval(floor_inter);

				$(btn_play).find("img").eq(1).css("display","block").siblings('img').css("display","none");

			}
			
		}else{
			// 关门音效
			setTimeout(function(){
				if(door_close.paused){
					door_close.play();
				}else{
					door_close2.play();
				}
				
			},540)
			
			menqz_close_tween.start();
			single.object.isClose = true;
		}
		
	}else if(single && single.object.name == "circle_hz"){
		if(!single.object.isNoplaying){
			return;
		}
		
		if(single.object.isClose){
			if(!isTireturn){
				return;
			}
			menhz_open_tween.start();
			// 播放音效
			if(door_open.paused){
				door_open.play();
			}else{
				door_open2.play();
			}

			single.object.isClose = false;

			var tween_item = arr_tween[tire_index],
			tween_item_re = arr_tween[tire_index + 1];
			if(tween_item.isPlay){
				tween_item.isPlay = false;
				tween_item.stop();
				tween_item_re.stop();
				clearInterval(floor_inter);

				$(btn_play).find("img").eq(1).css("display","block").siblings('img').css("display","none");

			}
		}else{
			// 关门音效
			setTimeout(function(){
				if(door_close.paused){
					door_close.play();
				}else{
					door_close2.play();
				}
			},540)
			menhz_close_tween.start();	
			single.object.isClose = true;
		}
	}else if(single && single.object.name == "circle_qy"){

		if(!single.object.isNoplaying){
			return;
		}
		
		if(single.object.isClose){
			if(!isTireturn){
				return;
			}
			menqy_open_tween.start();	
			single.object.isClose = false;

			// 播放音效
			if(door_open.paused){
				door_open.play();
			}else{
				door_open2.play();
			}

			var tween_item = arr_tween[tire_index],
			tween_item_re = arr_tween[tire_index + 1];
			if(tween_item.isPlay){
				tween_item.isPlay = false;
				tween_item.stop();
				tween_item_re.stop();
				clearInterval(floor_inter);

				$(btn_play).find("img").eq(1).css("display","block").siblings('img').css("display","none");

			}
		}else{
			// 关门音效
			setTimeout(function(){
				if(door_close.paused){
					door_close.play();
				}else{
					door_close2.play();
				}
			},540)
			menqy_close_tween.start();	
			single.object.isClose = true;
		}
	}else if(single && single.object.name == "circle_hy"){

		if(!single.object.isNoplaying){
			return;
		}
		
		if(single.object.isClose){
			if(!isTireturn){
				return;
			}
			menhy_open_tween.start();	
			single.object.isClose = false;

			// 播放音效
			if(door_open.paused){
				door_open.play();
			}else{
				door_open2.play();
			}

			var tween_item = arr_tween[tire_index],
			tween_item_re = arr_tween[tire_index + 1];
			if(tween_item.isPlay){
				tween_item.isPlay = false;
				tween_item.stop();
				tween_item_re.stop();
				clearInterval(floor_inter);

				$(btn_play).find("img").eq(1).css("display","block").siblings('img').css("display","none");

			}
		}else{
			// 关门音效
			setTimeout(function(){
				if(door_close.paused){
					door_close.play();
				}else{
					door_close2.play();
				}
			},540)
			menhy_close_tween.start();	
			single.object.isClose = true;
		}
	}else if(single && single.object.name == "circle_hbx"){
		if(!single.object.isNoplaying){
			return;
		}
		
		if(single.object.isClose){
			if(!isTireturn){
				return;
			}
			hbx_open_tween.start();	
			single.object.isClose = false;

			// 播放音效
			if(door_open.paused){
				door_open.play();
			}else{
				door_open2.play();
			}

			var tween_item = arr_tween[tire_index],
			tween_item_re = arr_tween[tire_index + 1];
			if(tween_item.isPlay){
				tween_item.isPlay = false;
				tween_item.stop();
				tween_item_re.stop();
				clearInterval(floor_inter);

				$(btn_play).find("img").eq(1).css("display","block").siblings('img').css("display","none");

			}
		}else{
			// 关门音效
			setTimeout(function(){
				hbx_close.play();
			},540)
			hbx_close_tween.start();
			single.object.isClose = true;
		}
	}else if(single && single.object.name == "circle_top"){

		if(!single.object.isNoplaying){
			return;
		}
		if(single.object.isClose){
			tween_window_close.stop();
			tween_window.start();
			single.object.isClose = false;
		}else{
			tween_window.stop();
			tween_window_close.start();
			single.object.isClose = true;
		}
	}

}
var equip = ismobile ? "touchstart" : "click";
$("#myCar").on(equip,onMouseClick);
	

	
	


// 变色

var btn_white = document.getElementsByClassName("white")[0];
var btn_black = document.getElementsByClassName("black")[0];

function tween_color(color,time,clearCoat,envMapIntensity,reflectivity,metalness,clearCoat2,envMapIntensity2,reflectivity2,metalness2){
	var arr_color = [
		men_qz.material[6].color,
		men_hz.material[5].color,
		men_qy.material[6].color,
		men_hy.material[5].color,
		kaoqi2.material[1].color,
		bmaterial.color,
		material_menkuang.color,
		bmaterial,
		material_menkuang
	]
	var length = arr_color.length;
	if(length){
		for(var i = 0;i < length;i ++){
			TWEEN.remove(arr_tween_color[i]);
			arr_tween_color[i] = null;
		}
		arr_tween_color = [];
	}
	for(var i = 0;i < length;i ++){
		switch(i) {
			case 7:
				arr_tween_color.push(
					new TWEEN.Tween(arr_color[i])
					.to({
						clearCoat:clearCoat,
						envMapIntensity:envMapIntensity,
						reflectivity:reflectivity,
						metalness:metalness
					},time)
					.start()
				)
				break;
			case 8:
				arr_tween_color.push(
					new TWEEN.Tween(arr_color[i])
					.to({
						clearCoat:clearCoat,
						envMapIntensity:envMapIntensity,
						reflectivity:reflectivity,
						metalness:metalness
					},time)
					.start()
				)
				break;
			default :
				arr_tween_color.push(
					new TWEEN.Tween(arr_color[i])
					.to(new THREE.Color(color),time)
					.start()
				)
		}
		
	}
}


$(btn_white).on(equip_color,function(){
	if( hbx && men_qz && men_hz && men_hy){

		$(this).find("img").eq(0).hide().siblings('img').show();
		$(this).siblings("li").each(function(index,item){
			$(item).find("img").eq(0).show().siblings('img').hide();
		});

		// men_qz.material[6].color = new THREE.Color("#fff");
		// men_hz.material[5].color = new THREE.Color("#fff");
		// men_qy.material[6].color = new THREE.Color("#fff");
		// men_hy.material[5].color = new THREE.Color("#fff");
		// kaoqi2.material[1].color = new THREE.Color("#fff");
		// material_menkuang.color = new THREE.Color("#fff");
		// bmaterial.color = new THREE.Color("#fff");

		tween_color("#fff",500,1,0.3,0.5,0.05);


		// bmaterial.clearCoat = 1;
		// bmaterial.envMapIntensity = 0.3;
		// bmaterial.reflectivity = 0.5;
		// bmaterial.metalness = 0.05;
	
		// material_menkuang.clearCoat = 1;
		// material_menkuang.envMapIntensity = 0.3;
		// material_menkuang.reflectivity = 0.5;
		// material_menkuang.metalness = 0.05;
	}
});

$(btn_black).on(equip_color,function(){
	if( hbx && men_qz && men_hz && men_hy){
		
		$(this).find("img").eq(0).hide().siblings('img').show();
		$(this).siblings("li").each(function(index,item){
			$(item).find("img").eq(0).show().siblings('img').hide();
		
		});

		// men_qz.material[6].color = new THREE.Color("#060606");
		// men_hz.material[5].color = new THREE.Color("#060606");
		// men_qy.material[6].color = new THREE.Color("#060606");
		// men_hy.material[5].color = new THREE.Color("#060606");
		// kaoqi2.material[1].color = new THREE.Color("#060606");
		// material_menkuang.color = new THREE.Color("#060606");
		// bmaterial.color = new THREE.Color("#060606");

		tween_color("#060606",500,1,1,1,0.3);

		// bmaterial.clearCoat = 1;
		// bmaterial.envMapIntensity = 1;
		// bmaterial.reflectivity = 1;
		// bmaterial.metalness = 0.3;

		
		// material_menkuang.clearCoat = 1;
		// material_menkuang.envMapIntensity = 1;
		// material_menkuang.reflectivity = 1;
		// material_menkuang.metalness = 0.3;

	}
});

$(".gold").on(equip_color,function(){
	if(hbx && men_qz && men_hz && men_hy){
		
		// bmaterial.clearCoat = 0.5;
		// bmaterial.envMapIntensity = 1.5;
		// bmaterial.reflectivity = 0.5;
		// bmaterial.metalness = 0.3;

		// bmaterial.color = new THREE.Color("#ed5400");
		// men_qz.material[6].color = new THREE.Color("#ed5400");
		// men_hz.material[5].color = new THREE.Color("#ed5400");
		// men_qy.material[6].color = new THREE.Color("#ed5400");
		// men_hy.material[5].color = new THREE.Color("#ed5400");
		// kaoqi2.material[1].color = new THREE.Color("#ed5400");
		// material_menkuang.color = new THREE.Color("#ed5400");

		tween_color("#ed5400",500,0.5,1.5,0.5,0.3)

		// material_menkuang.clearCoat = 0.5;
		// material_menkuang.envMapIntensity = 1.5;
		// material_menkuang.reflectivity = 0.5;
		// material_menkuang.metalness = 0.3;
		
		$(this).find("img").eq(0).hide().siblings('img').show();
		$(this).siblings("li").each(function(index,item){
			$(item).find("img").eq(0).show().siblings('img').hide();
		
		});
	}
});

$(".yin").on(equip_color,function(){
	if(hbx && men_qz && men_hz && men_hy){
		
		
		$(this).find("img").eq(0).hide().siblings('img').show();
		$(this).siblings("li").each(function(index,item){
			$(item).find("img").eq(0).show().siblings('img').hide();
		
		});
		
		// bmaterial.clearCoat = 1;
		// bmaterial.envMapIntensity = 0.7;
		// bmaterial.reflectivity = 0.5;
		// bmaterial.metalness = 0.3;

		// bmaterial.color = new THREE.Color("#757577");
		// men_qz.material[6].color = new THREE.Color("#757577");
		// men_hz.material[5].color = new THREE.Color("#757577");
		// men_qy.material[6].color = new THREE.Color("#757577");
		// men_hy.material[5].color = new THREE.Color("#757577");
		// kaoqi2.material[1].color = new THREE.Color("#757577");
		// material_menkuang.color = new THREE.Color("#757577");
		tween_color("#757577",500,1,0.7,0.5,0.3);

		// material_menkuang.clearCoat = 1;
		// material_menkuang.envMapIntensity = 0.7;
		// material_menkuang.reflectivity = 0.5;
		// material_menkuang.metalness = 0;

	}
});

$(".red").on(equip_color,function(){
	if( hbx && men_qz && men_hz && men_hy){
		

		// bmaterial.clearCoat = 0.5;
		// bmaterial.envMapIntensity = 1.5;
		// bmaterial.reflectivity = 0.5;
		// bmaterial.metalness = 0.3;

		// men_qz.material[6].color = new THREE.Color("#a80202");
		// men_hz.material[5].color = new THREE.Color("#a80202");
		// men_qy.material[6].color = new THREE.Color("#a80202");
		// men_hy.material[5].color = new THREE.Color("#a80202");
		// kaoqi2.material[1].color = new THREE.Color("#a80202");
		// bmaterial.color = new THREE.Color("#a80202");
		// material_menkuang.color = new THREE.Color("#a80202");
		tween_color("#a80202",500,0.5,1.5,0.5,0.3);

		// material_menkuang.clearCoat = 0.5;
		// material_menkuang.envMapIntensity = 1.5;
		// material_menkuang.reflectivity = 0.5;
		// material_menkuang.metalness = 0.3;
		
		$(this).find("img").eq(0).hide().siblings('img').show();
		$(this).siblings("li").each(function(index,item){
			$(item).find("img").eq(0).show().siblings('img').hide();
		
		});
	}
});
$(".blue").on(equip_color,function(){
	if( hbx && men_qz && men_hz && men_hy){
		
		// bmaterial.clearCoat = 0.5;
		// bmaterial.envMapIntensity = 1.5;
		// bmaterial.reflectivity = 0.5;
		// bmaterial.metalness = 0.3;

		// bmaterial.color = new THREE.Color("#0b1323");
		// men_qz.material[6].color = new THREE.Color("#0b1323");
		// men_hz.material[5].color = new THREE.Color("#0b1323");
		// men_qy.material[6].color = new THREE.Color("#0b1323");
		// men_hy.material[5].color = new THREE.Color("#0b1323");
		// kaoqi2.material[1].color = new THREE.Color("#0b1323");
		// material_menkuang.color = new THREE.Color("#0b1323");
		tween_color("#0b1323",500,0.5,1.5,0.5,0.3);

		// material_menkuang.clearCoat = 0.5;
		// material_menkuang.envMapIntensity = 1.5;
		// material_menkuang.reflectivity = 0.5;
		// material_menkuang.metalness = 0.3;
		
		$(this).find("img").eq(0).hide().siblings('img').show();
		$(this).siblings("li").each(function(index,item){
			$(item).find("img").eq(0).show().siblings('img').hide();
		
		});
	}
});




// 车灯开启关闭

// 点击灯光
var texture_flare = new THREE.TextureLoader()
	.load(cdn + "img/flare.png");
var t = new THREE.SpriteMaterial({
	map: texture_flare,
	blending: THREE.AdditiveBlending,
	depthTest: !1,
	transparent: !1,
	opacity: 1,
	color:"#8ee0ff",

});
var r = new THREE.Sprite(t.clone());
scene_small.add(r);
r.name = "flare_q";
// r.visible = false;
r.position.set(-33,11.3,10);
r.orientation = new THREE.Vector3(-1, 0, .75);

var o = new THREE.Sprite(t.clone());
scene_small.add(o);
r.name = "flare_q";
o.position.set(-33,11.3,-10);
o.orientation = new THREE.Vector3(- 1, 0, -.75);


function flare_right(){
	var e = (new THREE.Vector3, new THREE.Vector3),
		t = (new THREE.Vector3, new THREE.Vector3, new THREE.Vector3),
		n = TWEEN.Easing.Quartic.Out,
		i = 1.5;
		e.setFromMatrixPosition(camera.matrixWorld), t.subVectors(e, r.position).normalize();
		var a = r.orientation.dot(t),
			s = THREE.Math.smoothstep(a, 0, 1),
			l = THREE.Math.mapLinear(n(s), 0, 1, 0, i),
			c = THREE.Math.mapLinear(l, 0, 2, 0, .9);
		r.scale.set(l * 30, l * 10, l * 10);
		r.material.opacity = c;
			// console.log(t);
}

function flare_left(){
	var e = (new THREE.Vector3, new THREE.Vector3),
		t = (new THREE.Vector3, new THREE.Vector3, new THREE.Vector3),
		n = TWEEN.Easing.Quartic.Out,
		i = 1.5;
		e.setFromMatrixPosition(camera.matrixWorld), t.subVectors(e, o.position).normalize();
		var a = o.orientation.dot(t),
			s = THREE.Math.smoothstep(a, 0, 1),
			l = THREE.Math.mapLinear(n(s), 0, 1, 0, i),
			c = THREE.Math.mapLinear(l, 0, 2, 0, .9);
		o.scale.set(l * 30, l * 10, l * 10);
		o.material.opacity = c;
			// console.log(t);
}

// 、、、、、、、、、、、、、、、、、、、、、、后车灯、、、、、、、、、、、、、、、、、、、、、、、、、、、、

var flare_hou = new THREE.SpriteMaterial({
	map: texture_flare,
	blending: THREE.AdditiveBlending,
	depthTest: !1,
	transparent: !0,
	opacity: 1,
	color:"#c52424"
});

function flare_hou_func(o){
	var e = (new THREE.Vector3, new THREE.Vector3),
		t = (new THREE.Vector3, new THREE.Vector3, new THREE.Vector3),
		n = TWEEN.Easing.Quartic.Out,
		i = 1.5;
	e.setFromMatrixPosition(camera.matrixWorld), t.subVectors(e, o.position).normalize();
	var a = o.orientation.dot(t),
		s = THREE.Math.smoothstep(a, 0, 1),
		l = THREE.Math.mapLinear(n(s), 0, 1, 0, i),
		c = THREE.Math.mapLinear(l, 0, 2, 0, .9);
	o.scale.set(l * 10, l * 6, l);
	o.material.opacity = c;
		// console.log(o);
}

var flare_hz = new THREE.Sprite(flare_hou.clone());
scene_small.add(flare_hz);
flare_hz.position.set(35,15,10);
flare_hz.name = "flare_hz";
flare_hz.orientation = new THREE.Vector3( 1, 0.25, .75);


var flare_hy = new THREE.Sprite(flare_hou.clone());
scene_small.add(flare_hy);
flare_hy.position.set(35,15,-12);
flare_hy.name = "flare_hy";
flare_hy.orientation = new THREE.Vector3( 1, 0.25, -.75);
// console.log(flare_hy)




// 点击开车门
var texture_btn = new THREE.TextureLoader()
.load(cdn + "img/fun.png");

var circle_btn = new THREE.SpriteMaterial({
	map: texture_btn,
	// blending: THREE.AdditiveBlending,
	depthTest: !0,
	// transparent: false,
	// opacity: 1,
	color:0xffffff,
	lights:false
});

function sprite_circle(o){
	var e = (new THREE.Vector3, new THREE.Vector3),
		t = (new THREE.Vector3, new THREE.Vector3, new THREE.Vector3),
		n = TWEEN.Easing.Quartic.Out,
		i = 1.5;
	e.setFromMatrixPosition(camera.matrixWorld), t.subVectors(e, o.position).normalize();
	var a = o.orientation.dot(t),
		s = THREE.Math.smoothstep(a, 0, 1),
		l = THREE.Math.mapLinear(n(s), 0, 1, 0, i),
		c = THREE.Math.mapLinear(l, 0, 2, 0, .9);
	o.scale.set(l * 3, l * 3, l * 3);

};

var circle_top = new THREE.Sprite(circle_btn.clone());
circle_top.name = "circle_top";
circle_top.isClose = true;
circle_top.isNoplaying = true;
circle_top.position.set(0,25.5,0);
circle_top.scale.set(5,5,5);

var circle_qz = new THREE.Sprite(circle_btn.clone());
circle_qz.name = "circle_qz";
circle_qz.isClose = true;
circle_qz.isNoplaying = true;
circle_qz.position.set(16,1,2.5);
circle_qz.orientation = new THREE.Vector3(0, 0, 1);

var circle_qy = new THREE.Sprite(circle_btn.clone());
circle_qy.name = "circle_qy";
circle_qy.isClose = true;
circle_qy.isNoplaying = true;
circle_qy.position.set(16,1,-2.5);
circle_qy.orientation = new THREE.Vector3(0, 0, -1);

var circle_hz = new THREE.Sprite(circle_btn.clone());
circle_hz.name = "circle_hz";
circle_hz.isClose = true;
circle_hz.isNoplaying = true;
circle_hz.position.set(13,2,1);
circle_hz.orientation = new THREE.Vector3(0, 0, 1);

var circle_hy = new THREE.Sprite(circle_btn.clone());
circle_hy.name = "circle_hy";
circle_hy.isClose = true;
circle_hy.isNoplaying = true;
circle_hy.position.set(13,2,-1);
circle_hy.orientation = new THREE.Vector3(0, 0, -1);




var circle_hbx = new THREE.Sprite(circle_btn.clone());
circle_hbx.name = "circle_hbx";
circle_hbx.isClose = true;
circle_hbx.isNoplaying = true;
circle_hbx.position.set(6,2,0);
circle_hbx.orientation = new THREE.Vector3(1, 2, 0);



var btn_light = document.getElementsByClassName("light")[0];
btn_light.isClose = false;
$(btn_light).on(equip_color,function(){
	if(this.isClose){
		hbx.material[4].map = texture_light;
		CheDeng.material[0].map = texture_light;
		o.visible = true;
		r.visible = true;
		flare_hz.visible = true;
		flare_hy.visible = true;
		this.isClose = false;
		$(".light").find("img").eq(1).css("display","none").siblings('img').eq(0).css("display","block");
	}else{
		hbx.material[4].map = texture_black;
		CheDeng.material[0].map = texture_black;
		o.visible = false;
		r.visible = false;
		flare_hz.visible = false;
		flare_hy.visible = false;
		this.isClose = true;
		$(".light").find("img").eq(0).css("display","none").siblings('img').eq(0).css("display","block");
	}
	
});


// 切换内饰，外观，轮毂
// $(".words_three li").on(equip_color,function(){
// 	// $(this).addClass('font_size').siblings('li').removeClass('font_size');
// });
// 外观点击
$(".words_three li").eq(0).on(equip_color,function(){
	$(this).addClass('font_size').siblings('li').removeClass('font_size');

	// if($(this).hasClass('font_size')){
	// 	return;
	// }

	tween_canshu_back.start();
	$(".color_btn li").show();
	$(".tire_box").css("display","none");
	$(".tire_view").hide();
	

	orbitControls.enabled = true;
	orbitControls.autoRotate = true;
	orbitControls.minPolarAngle = Math.PI/9;//限定最小垂直角度;
	orbitControls.maxPolarAngle = Math.PI/2.2;
	
	tween_control_back.start();
	tween_camera_back.start();

	

});
//内饰点击
$(".words_three li").eq(1).on(equip_color,function(){
	$(this).addClass('font_size').siblings('li').removeClass('font_size');
	$(".words_three li").css("display","none");
	$(".bottom_btn").css("display","none");
	$(".tire_view").hide();
	$(".car_back").show();

	if(neishi_go.visible){
		return;
	}


	
	$(".change_inout").fadeIn('slow/400/fast', function() {
		orbitControls.minPolarAngle = 0;//限定最小垂直角度;
		orbitControls.maxPolarAngle = Math.PI;//限定最大垂直角度;

		orbitControls.minDistance = 50;
		orbitControls.maxDistance = 90;

		camera.position.set(-55,28,-35);
		// console.log(camera);

		neishi_go.visible = true;
		scene_small.visible = false;
		$(this).fadeOut('slow/400/fast');
	});
	
	// tween_light_in.start();
	orbitControls.enabled = true;
	orbitControls.autoRotate = false;
});

// 参数点击
$(".car_info").on(equip_color,function(){
	$(this).addClass('font_size').siblings('li').removeClass('font_size');
	tween_canshu.start();
	$(".tire_view").hide();
	if(!orbitControls.enabled){
		tween_control_back.start();
		tween_camera_back.start();
		$(".tire_view")[0].isChange = false;
		orbitControls.enabled = true;
	}
	

})

// 轮毂点击

//车轮视角
$(".tire_view")[0].isChange = false;
$(".window_top").on(equip_color,function(){

	if(!isTireturn){
		return;
	}
	$(this).addClass('font_size').siblings('li').removeClass('font_size');
	tween_canshu_back.start();

	$(".color_btn li").hide();
	$(".tire_box").css("display","flex");
	$(".tire_view").show();
	orbitControls.autoRotate = false;
	orbitControls.enabled = false;
	tween_control.start();
	tween_camera.start();
	$(".tire_view")[0].isChange = true;

	orbitControls.minDistance = 0;
	orbitControls.maxDistance = 1 / 0;

	tween_tire.isPlay = false;
	tween_tire.stop();
	tween_tire_re.stop();

	tween_tire11.stop();
	tween_tire12.stop();

	tween_tire21.stop();
	tween_tire22.stop();

	clearInterval(floor_inter);
	$(btn_play).find("img").eq(1).css("display","block").siblings('img').css("display","none");

	
});

// 轮毂切换

$(".tire1").on(equip_color,function(){
	tire_index = 0;

	if($(".btn img").eq(0).css("display") == "block"){
		tween_tire.isPlay = true;
		tween_tire11.isPlay = false;
		tween_tire21.isPlay = false;

		tween_tire.start();
		tween_tire_re.start();
		tween_tire11.stop();
		tween_tire12.stop();
		tween_tire21.stop();
		tween_tire22.stop();
	}
	


	tire11.visible = false;
	tire12.visible = false;
	tire21.visible = false;
	tire22.visible = false;
	model_tire.visible = true;
	model_tire2.visible = true;
	
	$(this).find("img").eq(0).hide().siblings('img').show();
	$(this).siblings('li').each(function(){
		$(this).find("img").eq(1).hide().siblings('img').show();
	});
});
$(".tire2").on(equip_color,function(){
	tire_index = 2;

	if($(".btn img").eq(0).css("display") == "block"){
		tween_tire.isPlay = false;
		tween_tire11.isPlay = true;
		tween_tire21.isPlay = false;

		tween_tire.stop();
		tween_tire_re.stop();
		tween_tire11.start();
		tween_tire12.start();
		tween_tire21.stop();
		tween_tire22.stop();
	}

	tire11.visible = true;
	tire12.visible = true;

	tire21.visible = false;
	tire22.visible = false;
	model_tire.visible = false;
	model_tire2.visible = false;
	$(this).find("img").eq(0).hide().siblings('img').show();
	$(this).siblings('li').each(function(){
		$(this).find("img").eq(1).hide().siblings('img').show();
	});
});

$(".tire3").on(equip_color,function(){
	tire_index = 4;

	if($(".btn img").eq(0).css("display") == "block"){
		tween_tire.isPlay = false;
		tween_tire11.isPlay = false;
		tween_tire21.isPlay = true;

		tween_tire.stop();
		tween_tire_re.stop();
		tween_tire11.stop();
		tween_tire12.stop();
		tween_tire21.start();
		tween_tire22.start();
	}

	tire21.visible = true;
	tire22.visible = true;

	tire11.visible = false;
	tire12.visible = false;
	model_tire.visible = false;
	model_tire2.visible = false;
	$(this).find("img").eq(0).hide().siblings('img').show();
	$(this).siblings('li').each(function(){
		$(this).find("img").eq(1).hide().siblings('img').show();
	});
})
$(".tire_view").on(equip_color,function(){
	if(this.isChange){
		this.isChange = false;
		orbitControls.autoRotate = false;
		orbitControls.enabled = true;
		tween_control_back.start();
		tween_camera_back.start();
	}else{
		orbitControls.autoRotate = false;
		orbitControls.enabled = false;
		orbitControls.minDistance = 0;
		orbitControls.maxDistance = 1 / 0;
		tween_control.start();
		tween_camera.start();
		this.isChange = true;
	}
})

// 返回外观
$(".car_back").on(equip_color,function(){
	$(".words_three li").css("display","block");
	$(".bottom_btn").css("display","flex");
	$(".car_back").hide();

	$(".words_three li").eq(0).addClass('font_size').siblings('li').removeClass('font_size');
	$(".color_btn li").show();
	$(".tire_box").css("display","none");

	

	// 按钮图片切换

	$(".change_inout").fadeIn('slow/400/fast', function() {
		orbitControls.minPolarAngle = Math.PI/9;//限定最小垂直角度;
		orbitControls.maxPolarAngle = Math.PI/2.2;//限定最大垂直角度;
		orbitControls.minDistance = 100;
		orbitControls.maxDistance = 300;

		tween_control_back.start();
		tween_camera_back.start();

		neishi_go.visible = false;
		scene_small.visible = true;
		$(this).fadeOut('slow/400/fast');
		orbitControls.autoRotate = true;
	})

	
	


})

 




// 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、全屏、、、、、、、、、、、、、、、、、、、、、、、、、、、
// function launchFullscreen(element) {
// 	if(element.requestFullscreen) {
// 	element.requestFullscreen();
// 	} else if(element.mozRequestFullScreen) {
// 	element.mozRequestFullScreen();
// 	} else if(element.webkitRequestFullscreen) {
// 	element.webkitRequestFullscreen();
// 	} else if(element.msRequestFullscreen) {
// 	element.msRequestFullscreen();
// 	}
// };
// function exitFullscreen() {
// 	if(document.exitFullscreen) {
// 	document.exitFullscreen();
// 	} else if(document.mozCancelFullScreen) {
// 	document.mozCancelFullScreen();
// 	} else if(document.webkitExitFullscreen) {
// 	document.webkitExitFullscreen();
// 	}
// }
// var bool = true;
// screen_full.onclick = function(){
// 	if(bool){
// 		launchFullscreen(document.documentElement);
// 		bool = false;
// 	}else{
// 		exitFullscreen();
// 		bool = true;
// 	}
	
// }