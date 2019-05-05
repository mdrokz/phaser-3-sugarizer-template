requirejs.config({
    baseUrl: "lib",
    paths: {
        activity: "../js",
        Phaser:   './phaser'
    },
    packages: []
});
requirejs(["activity/activity"]);