$(document).ready(function(){
    function menu(){
        var mainMeueList = $(".mainMeue li");
        var subMenu = $(".subMenu");
        var blind = $(".blind");
        var mobileMenuBtn = $(".mobileMenuBtn");
        var nav = $('nav');
        var winWidth = $(window).width(); // 윈도우 가로값
        var menustate = false;

        // 메뉴이벤트
        function menushow(){
            var winWidth = $(window).width(); // 윈도우 가로값
            if( winWidth >= 1006 ){
                nav.show();
                mainMeueList.mouseover( function(){
                    subMenu.css({
                        display : 'block'
                    })
                    blind.css({
                        display : 'block'
                    })
                })
                mainMeueList.mouseleave( function(){
                    subMenu.css({
                        display : 'none'
                    })
                    blind.css({
                        display : 'none'
                    })
                })
            } else {
                mainMeueList.mouseover( function(){
                    $(".subMenu").hide();
                    $(this).children(".subMenu").show();
                })
                nav.hide();
                menustate = false;
                mobileMenuBtn.children('img').attr('src' , './images/mobile/menu.png')
            }
        }
        menushow();

        // 리사이즈 메뉴이벤트
        $(window).resize( function(){
            menushow();
        })

        // 모바일 메뉴 여닫기
        mobileMenuBtn.on("click" , function(){
            if( menustate === false) {
                nav.show();
                $(this).children('img').attr('src' , './images/mobile/closeBtn.png')
                menustate = true;
            } else {
                nav.hide();
                $(this).children('img').attr('src' , './images/mobile/menu.png')
                menustate = false;
            }
        })
    }
    menu();

    function start(){
        //뉴스 슬라이드
        var swiper = new Swiper('.newsSlide', {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 5,
            slidesPerGroup: 1,
            autoplay : {
                delay :5000,
            },
            pagination: {
                el: '.newsSlide-pagination',
                clickable: true
            },
            breakpoints :{
                1024: {
                    slidesPerView: 1,
                    slidesPerColumn: 3,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                    autoplay : {
                        delay :5000,
                    },
                    pagination: {
                        el: '.newsSlide-pagination',
                        clickable: true
                    },
                },
            }
        });
    }
    start();

    $(window).resize( function(){
        if( $('body').width() > 1000) {
            $('.newsSlide').removeClass('swiper-container-multirow')
        }
        start();
    })
})


