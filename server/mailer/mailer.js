(function () {
    /**
     * Element, where ajax response will be printed.
     * @type {*|jQuery|HTMLElement}
     */

    function mailer_response_success(form, data) {
				var responseHolder = form.find('.response-holder');
				var inputs = form.find('input[type=text],input[type=email], input[type=password], textarea');
        var data = data || 'Your email was sent successfully!';
        responseHolder.addClass('success').html(data);
				inputs.removeClass('error').addClass('valid');
    }

    function mailer_response_error(form, data) {
			  var responseHolder = form.find('.response-holder');
				var inputs = form.find('input[type=text],input[type=email], input[type=password], textarea');
        var message = ('string' == typeof data) ? data : 'Sorry, AJAX error occurred';
        // If data not a scalar string
        if ('object' == typeof data) {
            var a = [];

            $.each(data, function(key, value) {
                a.push(value);
            });
            message = a.join('<br>');
        }

        responseHolder.addClass('error').html(message);
				inputs.addClass('error');
    }

    // Mailer form handler
    $(document).on('submit', '.ajax-form', function (e) {
			var responseHolder = $('.response-holder');
        // Stop form submitting
        e.preventDefault();
        var form = $( this),
						responseHolder = form.find('.response-holder');
						inputs = form.find('input[type=text],input[type=email], input[type=password], textarea');
            formdata = form.serializeArray();

        responseHolder.html('');
        responseHolder.removeClass('success error');

        // Data validation here?
        $.ajax({
            url: 'mailer/mailer.php',
            type: 'POST',
            dataType: 'json',
            data: formdata,
            error: function(xhr, status, error) {
                console.log(['appica.mailer.error', status, error, xhr.responseText]);
            },
            success: function(response) {
                console.log(response);
                if (response.success.length !== 0 && true == response.success) {
                    mailer_response_success(form);
                } else {
                    mailer_response_error(form, response.data);
                }
            }
        });
    });
		
		$('.ajax-form input[type=text], .ajax-form input[type=email], .ajax-form input[type=password], .ajax-form textarea').on('change', function(){
			$(this).removeClass('error');
		});
})();