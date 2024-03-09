/*global jQuery:false */
jQuery(function($) {

    function setFixedTop(sh) {
        var sh_height = sh.innerHeight();

        if ($(window).scrollTop() > (sh.position().top + sh_height)) {
            sh.addClass('fixed-to-top');
            sh.parent().css({
                'height': sh_height + 'px'
            });
        } else if (sh.hasClass('fixed-to-top') && $(window).scrollTop() === sh.parent().position().top) {
            sh.removeClass('fixed-to-top');
            sh.parent().css({
                'height': 'auto'
            });
        }
    }


    var Dierenasiel = window.Dierenasiel || {};

    var min_device_w = 578;


    Dierenasiel.Init = function() {
        $('.swipebox').swipebox({
            useSVG: false,
            hideBarsDelay: 0,
        });

        $(".bg-image").each(function() {
            var imageUrl = $(this).data('bgimage');
            $(this).css("background-image", "url(" + imageUrl + ")").fadeTo(600 , 1);
        });

        var w = $(window).width(),
            tI = 4,
            tM = 10;
        if (w > 768) {
            tI = 5
            tM = 40
        }

        var slider = $('#image-gallery').lightSlider({
            mode: 'fade',
            gallery: true,
            item: 1,
            thumbItem: tI,
            thumbMargin: tM,
            slideMargin: 0,
            speed: 500,
            auto: true,
            loop: true,
            onSliderLoad: function() {
                $('#image-gallery').removeClass('cS-hidden');
            }
        }).css({ 'margin-bottom': tM + 'px' });
    };

    Dierenasiel.AlignHeroHeight = function() {
        $img=$('#hero-img');
        $min_elem= $('.blck-min-height');
        
        var $minH= $img.height();

        $min_elem.css({'min-height': $minH + 'px'});
    }

    Dierenasiel.AlignItems = function() {

        if ($('.grid').length > 0) {
            w = 576;
            if ($('.grid').hasClass('grid-md')) {
                w = 767;
            }
            if ($(window).width() > w) {
                var $grid = $('.grid').colcade({
                    columns: '.grid-col',
                    items: '.grid-item'
                });
            } else {
                if (typeof $grid === 'object' && $grid !== null) {
                    $grid.colcade('destroy');
                }
            }
        }
    }

    Dierenasiel.AlignItems_mansonry = function() {
        // init Isotope
        if ($('.grid_mansonry').length > 0) {
            var $grid = $('.grid_mansonry').isotope({
                // set itemSelector so .grid-sizer is not used in layout
                itemSelector: '.grid-item',
                // use element for option
                columnWidth: '.grid-sizer',
                percentPosition: true
            });


            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                    var number = $(this).find('.number').text();
                    return parseInt(number, 10) > 50;
                },
                // show if name ends with -ium
                ium: function() {
                    var name = $(this).find('.name').text();
                    return name.match(/ium$/);
                }
            };
            // bind filter button click
            $('.filters-button-group').on('click', 'a', function() {
                var filterValue = $(this).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[filterValue] || filterValue;
                $grid.isotope({ filter: filterValue });
                return false;
            });
            // change is-checked class on buttons
            $('.button-group').each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'a', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
        }
    }

    Dierenasiel.MenuStick = function(sh) {
        if ($(window).width() > 991) {

            var stickyHeader = sh;
            var stickyHeaderTop = $(window).height();
            setFixedTop(stickyHeader, stickyHeaderTop);
        }
    };


     

    $(document).ready(function() {
        //Popper.Defaults.modifiers.computeStyle.enabled = false;
        new WOW().init();

        //init functions
        Dierenasiel.Init();

        //Dierenasiel.AlignItems();
        Dierenasiel.AlignHeroHeight();


        /*$(window).on("scroll", function() {
            Dierenasiel.MenuStick($('.h-in-stack'));
        });*/
        $(window).bind("orientationchange resize", function() {
            //Dierenasiel.AlignItems();
            Dierenasiel.AlignHeroHeight();

        });
        /*
        $(window).on("load", function() {
            Dierenasiel.AlignItems_mansonry();
        });*/
    });
});