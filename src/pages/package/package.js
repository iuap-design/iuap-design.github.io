window.onload = function() {
	var btnSubmit = document.getElementById('button');
	var dataJson = {"test":123,"js": "script"};

	function clickFun(){
		$.ajax({
			type: 'post',
            dataType: 'json',
            data: dataJson,
            url: '/package',
            success: function (patch) {
                console.log(patch);
                console.log('success')
            },
            error: function (patch) {
            	console.log(patch);
            	console.log('error');
            }
		})
	}
	btnSubmit.addEventListener('click', clickFun);
}