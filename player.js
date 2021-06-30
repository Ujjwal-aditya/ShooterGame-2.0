class Player
{
    constructor()
    {
        this.index = null;
        this.x = 0;
        this.name = null;
        this.score = 0;
        this.range = 100;
    }

    update()
    {
        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).set({
            name : this.name,
            x : this.x,
            score : this.score,
            range : this.range
            });
    }
    
    moveRight()
    {
        
        this.x = this.x + 20;
        /*if(player.index==1)
        {
          shooter1.x = shooter1.x + 20;
        }
        if(player.index==2)
        {
            shooter2.x = shooter2.x + 20 ;
        }*/
    }
    moveLeft()
    {
       
        this.x = this.x - 20;
        /*if(player.index==1)
        {
          shooter1.x = shooter1.x - 20;
        }
        if(player.index==2)
        {
            shooter2.x = shooter2.x - 20;
        }*/
    
    }
    getCount()
    {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count)
    {
        database.ref('/').update({
            playerCount : count
        })
    }

    static getPlayerInfo()
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })

    }
}