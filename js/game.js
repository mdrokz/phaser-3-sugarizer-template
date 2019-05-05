define(function () {
var game = {};

game.start = function(Phaser) {
    game.config = {
        type: Phaser.AUTO,
        width: 600,
        height: 600,
        scene: {

            preload: preload,
            create: create,
            update: update
    
        } 
    };
    game.Game = new Phaser.Game(game.config);

    function preload() {

    }
    function create() {
        console.log('everythings good');
    }
    function update() {
    }
}
return game;
});