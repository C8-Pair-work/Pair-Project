var bg = document.getElementById('bg')
var moon = document.getElementById('moon')
var mountain = document.getElementById('mountain')
var road = document.getElementById('road')
var text = document.getElementById('text')

window.addEventListener('scroll', function () {

    var val = window.scrollY
    bg.style.top = val * 0.5 + 'px'
    moon.style.left = -val * 0.5 + 'px'
    mountain.style.top = -val * 0.15 + 'px'
    road.style.top = val * 0.15 + 'px'
    text.style.top = val * 0.5 + 'px'

})

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('scroll');
    }
    else{
        $('nav').removeClass('scroll');
    }
})