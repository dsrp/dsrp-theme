(function () {
    'use strict';

    $(function () {
        // Menu button
        $('#menu-button').click(function () {
            $(this).toggleClass('is-active');
            $('.content-wrapper').toggleClass('menu-open');
        });

        // Search field
        var search_field =$('#search-field'),
            search_button = $('#search-button');

        search_button.click(function () {
            search_field.toggleClass('is-active');
        });
    });
})();
