$(document).ready(function () {
    $("#delete").click(function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var formData = {
            title: $("#title").val(),
            content: $("#content").val()
        };
        $.ajax({
            type: "DELETE",
            url: '/posts/' + id,
            data: formData
        });
    });
});