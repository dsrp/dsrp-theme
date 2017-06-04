(function () {
    'use strict';

    $(function () {
        $('#menu-button').click(function () {
            $(this).toggleClass('is-active');
            $('.content-wrapper').toggleClass('menu-open');
        });

    });
})();
