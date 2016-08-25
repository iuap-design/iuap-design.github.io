var uploader = WebUploader.create({
    // swf文件路径
    swf: '/dist/vendor/uploader/swf/Uploader.swf?v=' + Math.random(),

    // 文件接收服务端。
    server: '/upload',

    // 选择文件的按钮。可选。
    pick: '.uploader',

    // 是否开启自动上传
    auto: true,
});

uploader.on('uploadSuccess', function(file) {

    alert('大哥，我成功把你的资料传上服务器，木哈哈哈哈');
});

uploader.on('uploadError', function(file) {
    debugger;
    alert('我擦，为毛传不上去内，莫非是.....');
});

// 当有文件添加进来的时候
uploader.on('fileQueued', function(file) {
    $list = $('#fileList');
    var $li = $(
            '<div id="' + file.id + '" class="file-item thumbnail">' +
            '<img>' +
            '<div class="info">' + file.name + '</div>' +
            '</div>'
        ),
        $img = $li.find('img');


    // $list为容器jQuery实例
    $list.append($li);
    var thumbnailWidth = 100,
        thumbnailHeight = 100;
    // 创建缩略图
    // 如果为非图片文件，可以不用调用此方法。
    // thumbnailWidth x thumbnailHeight 为 100 x 100
    uploader.makeThumb(file, function(error, src) {
        if (error) {
            $img.replaceWith('<span>不能预览</span>');
            return;
        }

        $img.attr('src', src);
    }, thumbnailWidth, thumbnailHeight);
});
