$(document).ready(function () {
    $("#edit").click(function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var formData = {
            title: $("#title").val(),
            content: $("#content").val()
        };
        $.ajax({
            type: "PUT",
            url: '/posts/' + id + '/edit/',
            data: formData
        });
    });
});