class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
    }

    create() {
        //checking for high score in storage
        if(localStorage.getItem('hiScore') != null) {
            let storedScore = parseInt(localStorage.getItem('hiScore'));
            if(p1Score > storedScore) {
                localStorage.setItem('hiScore', p1Score.toString());
                highScore = p1Score;
                newHighScore = true;
            } else {
                highScore = parseInt(localStorage.getItem('hiScore'));
                newHighScore = false;
            }
        }else {
            highScore = p1Score
            localStorage.setItem('hiScore', highScore.toString());
            newHighScore = true;
        }
        console.log(storedScore)

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }
    }
}