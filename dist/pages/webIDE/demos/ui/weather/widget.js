/**
 * Created by Songyangyang on 2016/8/11.
 */
$(function () {
    $.ajax({
        url: 'http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=BE3c97a171552a6493f383049606f17a',
        dataType: 'jsonp',
        method: 'GET',
        success: function (data) {
            var highTemp = '30';
            var lowTemp = '7';
            if (data.status === 'success') {
                var results = data.results[0].weather_data[0],
                    temp = results.temperature,
                    tempArr = temp.match(/(\d{1,2})\s*~\s*(\d{1,2})/);
                highTemp = tempArr[1];
                lowTemp = tempArr[2];
                $('._weather_high_temp').html(highTemp + '° <span class="font-size-30">C</span>');
                $('._weather_low_temp').html(lowTemp + '° <span class="font-size-16">C</span>');
                $('._weather_date').html(results.date);
            }
        }
    })


})
/*
(function () {
    /!**
     * jsonp跨域方法实现.
     * @param url 请求路径
     * @param callbackName 接口回调参数名
     * @param callbackFnName 回调函数名
     * @param callbackFn 回调函数
     * @example 调用方式：
     * jsonp('http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=BE3c97a171552a6493f383049606f17a', "callback", 'weatherCB', function(data){
     *   console.log(data);
     * });
     *!/
    function jsonp(url, callbackName, callbackFnName, callbackFn) {
        var s = document.createElement("script");
        s.src = !callbackName ? url : url + (url.indexOf("?") == -1 ? "?" : "&") + callbackName + "=" + callbackFnName;
        var timer = setInterval(function () {
            if (document.readyState === 'complete') {
                document.body.appendChild(s);
                clearInterval(timer);
            }
        }, 300);
        window[callbackFnName] = callbackFn;
    }
    jsonp('http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=BE3c97a171552a6493f383049606f17a', "callback", 'weatherCB', function(data){
         var results = data.results[0].weather_data[0],
         temp = results.temperature,
         tempArr = temp.match(/(\d{1,2})\s*~\s*(\d{1,2})/);
         highTemp = tempArr[1];
         lowTemp = tempArr[2];
         $('._weather_high_temp').html(highTemp + '° <span class="font-size-30">C</span>');
         $('._weather_low_temp').html(lowTemp + '° <span class="font-size-16">C</span>');
         $('._weather_date').html(results.date);
    });
})();
*/
