// 1. DECLARE OBJECTS, VARIABLES AND FUNCTIONS

nabu = {
    page: {
        AJAXLoad: function(page) {
            // $page = $('#' + page);
            // if (!$page.hasClass('ajax-ready')) {
            //     console.log('AJAX ' + page + ' START');
            //     // $page.children().load('/ajax/' + page + '.html', function() {
            //     //     console.log('AJAX ' + page + ' DONE');
            //     //     $page.removeClass('empty').addClass('ajax-ready');
            //     // });
            //     $.ajax({
            //         url: '/ajax/' + page + '.html'
            //     }).done(function(html) {
            //         $page.html(html);
            //         console.log('AJAX ' + page + ' DONE');
            //         nabu.page.bindMasonry();
            //     });
            // };
        },
        bindMasonry: function() {
            var $container = $('.page .inner');
            $container.masonry({
                columnWidth: 313,
                gutter: 10,
                itemSelector: '.block'
            });
            // var msnry = $container.data('masonry');
        }
    },
    bg: {
        reposition: function(x, y) {
            var windowWidth = $(window).width(); //retrieve current window width
            var windowHeight = $(window).height(); //retrieve current window height
            var documentWidth = $(document).width(); //retrieve current document width
            var documentHeight = $(document).height(); //retrieve current document height
            var vScrollPosition = $(document).scrollTop(); //retrieve the document scroll ToP position
            var hScrollPosition = $(document).scrollLeft(); //retrieve the document scroll Left position
            var y = ((((documentHeight - windowHeight - vScrollPosition) / (documentHeight - windowHeight)) * 10) - 10).toFixed(2) + '%';
            $('#background').css({
                top: y
            });
        }
    }
};

// 2. BIND EVENT HANDLERS
$(document).ready(function() {

    // ON PAGE LOAD
    switch (location.hash) {
        case '#!brenndel':
            nabu.page.AJAXLoad('page-1');
            $('#page-1').addClass('current');
            $('header').addClass('compact');
            break;
        case '#!quality':
            nabu.page.AJAXLoad('page-2');
            $('#page-2').addClass('current');
            $('header').addClass('compact');
            break;
        case '#!tailored':
            nabu.page.AJAXLoad('page-3');
            $('#page-3').addClass('current');
            $('header').addClass('compact');
            break;
        case '#!crystal':
            nabu.page.AJAXLoad('page-4');
            $('#page-4').addClass('current');
            $('header').addClass('compact');
            break;
        case '#!contact':
            nabu.page.AJAXLoad('page-5');
            $('#page-5').addClass('current');
            $('header').addClass('compact');
            break;
    };

    // MASONRY
    nabu.page.bindMasonry();
    setTimeout(function() {
        $('.page .inner').masonry();
    }, 100);

    // ON SCROLL
    $(document).scroll(function() {
        nabu.bg.reposition();
    });

    // ON RESIZE
    $(window).resize(function() {
        nabu.bg.reposition();
        $('.page .inner').masonry();
    });

    // ON CLICK NAVIGATION
    $('nav a').on('click', function(e) {
        $('header').addClass('animated');
        location.hash = $(this).attr('href').slice(3);
        // e.preventDefault();
        var i = $('nav li').index($(this).parent('li')) + 1;
        var j = $('#content .page').index($('.page.current')) + 1;
        var $closingPage = $('.page.current');
        var $openingPage = $('#page-' + i);
        var delay1 = $('header').hasClass('compact') ? 0 : 300;
        var delay2 = Modernizr.cssanimations == false ? 0 : 600;
        // nabu.page.AJAXLoad('page-' + i);
        // nabu.page.bindMasonry();
        $('header').addClass('compact');
        setTimeout(function() {
            if (i !== j && $('.page.current').length < 2) {
                if (i < j) {
                    $openingPage.addClass('current nabu-flipInRight').children('.inner').masonry();
                    $closingPage.addClass('nabu-flipOutLeft');
                    setTimeout(function() {
                        $openingPage.removeClass('nabu-flipInRight');
                        $closingPage.removeClass('current nabu-flipOutLeft');
                    }, delay2);
                } else {
                    $openingPage.addClass('current nabu-flipInLeft').children('.inner').masonry();
                    $closingPage.addClass('nabu-flipOutRight');
                    setTimeout(function() {
                        $openingPage.removeClass('nabu-flipInLeft');
                        $closingPage.removeClass('current nabu-flipOutRight');
                    }, delay2);
                };
            };
        }, delay1);
    });

    // ON CLICK LOGO
    $('header a').on('click', function(e) {
        $('header').addClass('animated');
        e.preventDefault();
        location.hash = '';
        $('header').removeClass('compact');
        $('.page.current').addClass('nabu-flipOutLeft');
        setTimeout(function() {
            $('.page.current').removeClass('current nabu-flipOutLeft');
        }, 600);
    });

    // $('.page').eq(0).each(function() {
    //     nabu.page.AJAXLoad($(this).attr('id'));
    //     console.log($(this).attr('id'));
    // });

    // UNDER CONSTRUCTION
    // $('body').bind('keypress', function(e) {
    //     if (e.keyCode == 32) { // when pressing spacebar
    //         $(this).css({
    //             'background': ''
    //         }).children().show();
    //     }
    // }).css({
    //     'background': '#FFF url(/img/under-construction.png) no-repeat 50% 50%'
    // }).children().hide();

});
