var database,positionX,backGroundImg,gameState=0,playerCount,player,shooter1,shooter2;
var allPlayers,game,form,shooter,bullets = [],bulletCount;

function preload()
{

}

function setup()
{
    createCanvas(displayWidth-20,displayHeight-20);
    shooter1 = createSprite(displayWidth/2,50,50,10);  
    shooter2 = createSprite(displayWidth/2,displayHeight-50,50,10);
    shooter1.visibility = false;
    shooter2.visibility = false;
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw()
{
    background("yellow");
    if(playerCount==2)
        {
            game.update(1);
        }

    if(gameState==1)
    {
        clear();
        game.play();
        
    }
    if(gameState==2)
    {
        game.end();
    }
    
}





