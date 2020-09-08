// Phaser 3 game configuration object
var config = {
    //Select WebGL or Canvas or  depending on the browser
    type: Phaser.AUTO, 
    // Size of game window
    width: 800,
    height: 600,
    // Physics is used to add propterties like static, dynamic, collision and bounce, gravity etc
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x:0 } // You can give values as per your requirement
        }
    },
    scene: {
        preload: preload, // Load assets like background, characters etc. Runs single time
        create: create, // Create the game evironment - Define movement of characters, physics properties etc. Runs single time
        update: update // This is the game loop, Repeats execution, Game logic is written here
    }
};

// phaser game object
var game = new Phaser.Game(config);

function preload (){
    this.load.image('cybersquare', 'assets/images/cs_logo.png');
    this.load.image('cat', 'assets/images/cat.png');
}

function create (){
    cs = this.add.image(400, 300, 'cybersquare').setScale(0.5).refreshBody;
    this.add.text(150, 16, 'Introduction to Phaser 3', { fontSize: '32px', fill: '#ffffff' });
    cat =this.physics.add.sprite(100, 450, 'cat');
    game.input.mouse.capture = true;
}

function update(){
    cursors = this.input.keyboard.createCursorKeys();
    // Moving the sprite
    if (cursors.left.isDown)
    {
        cat.x-=10;
    }
    if (cursors.right.isDown)
    {
        cat.x+=10;
    }
    if (cursors.up.isDown)
    {
        cat.y-=10;
    }
    if (cursors.down.isDown)
    {
        cat.y+=10;
    }
    if(game.input.activePointer.buttons==1){
        console.log("left button pressed");
        // Move cat to the position of the pointer
        this.tweens.add({
            targets: cat,
            x: game.input.activePointer.x,
            y: game.input.activePointer.y,
            duration: 500,
            ease: 'Sine.easeInOut',
            delay: 0,
            repeat: 0
        }) 
        
    }
 


}