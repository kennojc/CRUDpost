$(document).ready(function () {
    $("#show").click(function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var formData = {
            title: $("#title").val(),
            content: $("#content").val()
        };
        $.ajax({
            type: "GET",
            url: '/posts/' + id,
            data: formData,
            dataType: 'text'
        });
    });
});