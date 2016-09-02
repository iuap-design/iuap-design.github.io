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
