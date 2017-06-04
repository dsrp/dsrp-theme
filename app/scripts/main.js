(function () {
    'use strict';

    $(function () {
        // Menu button
        $('#menu-button').on('click tap', function () {
            $(this).toggleClass('is-active');
            $('.content-wrapper').toggleClass('menu-open');
        });

        // Search field
        var search_field =$('#search-field'),
            search_button = $('#search-button');

        search_button.on('click tap', function () {
            search_field.toggleClass('is-active');
        });
    });
})();
