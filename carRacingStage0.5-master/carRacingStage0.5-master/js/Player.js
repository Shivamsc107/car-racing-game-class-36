class Player {
  constructor(){
    this.index=null
    this.name=null
    this.distance=0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
     distance:this.distance,
     name:this.name
    });

  }

static getPlayerinfo(){
  var shivam=database.ref("players")
  shivam.on("value",(data)=>{
    allPlayers=data.val()
  })
}

}
