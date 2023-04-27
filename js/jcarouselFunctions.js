$(function() {
    $('.jcarousel').jcarousel({});
});

$(function() {
    let i = 0;
    setInterval(function() {
        if (i == 5) {
            i = 0;
            $('.jcarousel').jcarousel('scroll', '0');
        }
        else {
            $('.jcarousel').jcarousel('scroll', '+=1');
            i++;
        }
        
    }, 5000);
})