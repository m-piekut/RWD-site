document.addEventListener('DOMContentLoaded', function(){
const navi = document.querySelector('.navbar')

    function addShadow() {
        if(window.scrollY >= 60) {
            navi.classList.add('shadow-bg')
        } else {
            navi.classList.remove('shadow-bg')
        }
    }
window.addEventListener('scroll', addShadow);






// skrypt do nawigacji zamyka jak klikniemy obok
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
});

// slickJS
    $('.your-class').slick({
    // setting - name: setting-value
    autoplay: true,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }   
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            } 
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
    });

});