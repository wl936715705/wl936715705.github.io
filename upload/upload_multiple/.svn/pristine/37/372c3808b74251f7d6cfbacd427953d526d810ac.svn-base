var Public = function(){

    /**
     * 使用方法：
     *   var $upload_btn1 = $('#file_input1');
         var $preview_img1 = $('#test1');

         var aaa = new Public();
         aaa.upload({
            fileObj : $upload_btn1,
            view : $preview_img1,//图片容器
            maxSize : 1025,
            quality :0.6,
            uploadCancel : function(){  //取消上传...
                console.log('取消上传');
            },
            uploadStart : function(){   //正在上传...
                console.log('正在上传');
            },
            uploadError : function(){   //图片格式错误...
                console.log('图片格式错误');
            },
            uploadEnd : function(dataURL){  //上传结束...
                var img = new Image();
                img.src = dataURL;
                $preview_img1.append(img);
                console.log('上传结束');
            }
        });
     */
    this.upload = function(json){
        json = json || {};
        var _that = this;
        this.fileObj = json.fileObj[0];
        this.view = json.view;
        this.maxSize = json.maxSize;//size超过多少MB就行自定义压缩
        this.quality = json.quality || 0.6;//质量 默认0.6
        this.uploadCancel = json.uploadCancel;//取消上传
        this.uploadStart = json.uploadStart;//开始上传
        this.uploadError = json.uploadError;//图片格式错误
        this.uploadEnd = json.uploadEnd;//上传结束

        json.fileObj.on('change',uploadChange);

        function uploadChange(){
            if(!_that.fileObj.files.length){
                _that.uploadCancel.call(this);
                return false;
            }
            var file = _that.fileObj.files[0];
            var Orientation = null;
            if (file) {
                if (!/image\/\w+/.test(file.type)) {// 检查图片格式
                    _that.uploadError.call(this);
                    return false;
                }
                _that.uploadStart.call(this);

                EXIF.getData(file, function() {
                    EXIF.getAllTags(this);
                    Orientation = EXIF.getTag(this, 'Orientation');
                });

                var oReader = new FileReader();
                oReader.onload = function(e) {
                    var image = new Image();
                    image.src = e.target.result;
                    image.onload = function() {
                        var that = this;
                        var quality;
                        if(_that.maxSize && file.size/1024 > _that.maxSize){
                            quality = _that.quality;
                        }else{
                            quality = 1;
                        }
                        var w = that.naturalWidth;//img真实宽度
                        var h = that.naturalHeight;//img真实高度
                        if (w > h && w > 750) {
                            w = 750;
                            h = w * (that.naturalHeight / that.naturalWidth);
                        } else if (h > w && that.h > 1330) {
                            h = 1330;
                            w = h * (that.naturalWidth / that.naturalHeight);
                        }
                        var canvas = document.createElement("canvas");
                        var ctx = canvas.getContext("2d");
                        canvas.width = w;
                        canvas.height = h;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

                        if(Orientation != "" && Orientation != 1){
                            switch(Orientation){
                                case 6://需要顺时针（向左）90度旋转 90
                                    rotateImg(this,'left',canvas,w,h);
                                    break;
                                case 8://需要逆时针（向右）90度旋转 -90
                                    rotateImg(this,'right',canvas,w,h);
                                    break;
                                case 3://需要180度旋转 180
                                    rotateImg(this,'right',canvas,w,h);//转两次
                                    rotateImg(this,'right',canvas,w,h);
                                    break;
                            }
                        }
                        var base64 = canvas.toDataURL("image/jpeg", quality);
                        _that.uploadEnd.call(this,base64);
                    };
                };
                oReader.readAsDataURL(file);
            }
        }

        /**
         * 对图片旋转处理 added by lzk
         */
        function rotateImg(img, direction,canvas,w,h) {
            //最小与最大旋转方向，图片旋转4次后回到原方向
            var min_step = 0;
            var max_step = 3;
            if (img == null) return;
            //img的高度和宽度不能在img元素隐藏后获取，否则会出错
            var width = w;//img.width;
            var height = h;// img.height;
            //var step = img.getAttribute('step');
            var step = 2;
            if (step == null) {
                step = min_step;
            }
            if (direction == 'right') {
                step++;
                //旋转到原位置，即超过最大值
                step > max_step && (step = min_step);
            } else {
                step--;
                step < min_step && (step = max_step);
            }
            //旋转角度以弧度值为参数
            var degree = step * 90 * Math.PI / 180;
            var ctx = canvas.getContext('2d');
            switch (step) {
                case 0:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, w, h);
                    break;
                case 1:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, 0, -height, w, h);
                    break;
                case 2:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, -height, w, h);
                    break;
                case 3:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, 0, w, h);
                    break;
            }
        }
    }
};
