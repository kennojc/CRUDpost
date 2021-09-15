$(document).ready(function () {
    $("#body").show(function () {
        var formData = {
            title: $("#title").val(),
            content: $("#content").val()
        };
        $.ajax({
            type: "GET",
            url: '/posts/',
            data: formData
        });
    });
});