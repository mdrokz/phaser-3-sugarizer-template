define(["../lib/sugar-web/activity/activity.js"], function (activity) {
    // Manipulate the DOM only when it is ready.
    requirejs(['domReady!'], function (doc) {
        // Initialize the activity.
        debugger;
        activity.setup();
        require(["./js/game.js"], function (game) {
            debugger;
            require(["Phaser"], function (phaser) {
                debugger;
                game.start(phaser);
            });
        });
    });
});