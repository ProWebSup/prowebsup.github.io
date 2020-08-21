$(function() {

    "use strict";


    var form = $("#request_form"),
        successMessage = "Ваше письмо успешно отправлено!", // success message
        warningMessage = "Вы заполнили не все поля!", // warning message
        errorMessage = "Что-то пошло не так. Попробуйте позже!";  // error message


        form.on("submit", function(event) {
            event.preventDefault();

            $.ajax({
                url: "form.php",
                type: "POST",
                data: form.serialize(),
                success: function(response) {
                    var data = JSON.parse(response),
                    message;

                    if(data.status == 'success') {
                        message = successMessage;
                    }

                    if(data.status == 'warning') {
                        message = warningMessage;
                    }

                    if(data.status == 'error') {
                        message = errorMessage;
                    }

                    callAlert(message, data.status);
                },
                error: function(response) {
                    callAlert(errorMessage, "error");
                }
            });
        });






    /**
    *** Show alert
    **/

    var alertTimeout,
    delay = 500000000; // Delay to alert fade out

    function removeAlert() {
        clearTimeout(alertTimeout);
        alertTimeout = setTimeout(function() {
            $(".alert").stop().fadeOut(function() {
                $(this).remove();
            });
        }, delay);
    }

    function callAlert(message, type) {
        $(".alert").stop().remove();

        var alertClass;

        if(type == "success") {
            alertClass = "success";
        }
        if(type == "error") {
            alertClass = "error";
        }
        if(type == "warning") {
            alertClass = "warning";
        }

        // var alert = '<div class="alert  alert--shadow  alert--'+ alertClass + '"><button class="alert__button" type="button"><i class="fa fa-times" aria-hidden="true"></i></button>&nbsp;' + message + '</div>';


        var alert = '<div class="alert alert-'+ alertClass + ' alert-dismissible shadow-lg" role="alert"><strong>' + message + '</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'


        $("body").append(alert);

        removeAlert();
    }


    $(function() {
        $("body").on("click", ".alert__button", function(event) {
            event.preventDefault();

            var $this = $(this),
            alert = $this.parents(".alert");

            alert.fadeOut("fast", function() {
                $(this).remove();
                clearTimeout(alertTimeout);
            });
        });
    });

});
