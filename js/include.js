$(function() {
    $.get("naivebar.html", function (data) {
        console.log(data)
        $(".nav").html(data)
    });
});