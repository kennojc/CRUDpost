$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        var formData = {
            title: $("#title").val(),
            content: $("#content").val()
        };
        $.ajax({
            type: "POST",
            url: '/',
            data: formData,
            dataType: 'JSON'
        });
    });
});