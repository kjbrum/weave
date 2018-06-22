(function($, global) {
    var weave = {
        // Initialize everything
        init: function() {
            console.log('Init Weave JS');
        },
    }

    // Add window object
    global.weave = weave;

    // Run it
    weave.init();
})(jQuery, window);
