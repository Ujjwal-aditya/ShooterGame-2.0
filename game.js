class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    shooter = [shooter1,shooter2];
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined)
    {
      background("yellow")
      shooter1.visibility = true;
      shooter2.visibility = true;
      var index = 0;
      var x;
      for(var plr in allPlayers)
      {
        index = index + 1;
        x = allPlayers[plr].x;
        shooter[index-1].x = x;

        if(index === player.index && keyWentDown("SPACE"))
        {
          console.log(shooter[index-1].y);
          bullets.push(new Bullet(shooter[index-1].x, shooter[index-1].y));
          for(var i=0 ; i<bullets.length ; i++)
          {
            
            //var shootIndex = "shoot"+index;
            bullets[i].shoot1();
            bullets[i].update();
          }
          
          console.log(bullets[0].y);

        }  

      }
     
    }
    if(keyIsDown(RIGHT_ARROW))
    {
      player.x += 20;
    }
    if(keyIsDown(LEFT_ARROW))
    {
      player.x -= 20;
    }
    
    player.update();

    /*if(player.index==1)
    {
      shooter1.x = player.x;
    }
    if(player.index==2)
    {
      shooter2.x = player.x;
    }*/

     drawSprites();
  }
  end()
  {
    console.log("end");
  }

}