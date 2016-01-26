
$(function() {
    
    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false,
        
    });
});

$(function() {
    $(".arrowScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#topper").offset().top - 50
    }, 2000);
});
});


