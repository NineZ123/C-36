class Game {
  constructor(){}
  
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
  form.hide();
  text("Game Start", 120, 100);
  Player.getPlayerInfo();
  if(allPlayers!==undefined){
var yPos=130;
for(var i in allPlayers){
yPos += 20
textSize(20);
text(allPlayers[i].name + ": " + allPlayers[i].distance, 120, yPos);
}
  }


  }
}
