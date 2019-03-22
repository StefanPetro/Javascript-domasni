
function Player(name, goals){
    this.name = name;
    this.goals = goals;
}


function Team() {
    this.arr = [];
    this.helpArr = [];
    for(let i = 1; i <= 22; i++){
this.player2 = new Player("Ronaldo"+i, getRandomNumber(0,5));
this.arr.push(this.player2);


    }
    
    
    this.helpArr = this.arr.slice(0,22);
  
   console.log("The team at the beginning of the month2: ", this.helpArr);
  
}



function Stars() {
    this.arr2 = [];
    this.helpArr2 = [];
    for(let x = 1; x <=6; x++){


        this.footballStars = new Player("Zidane" + x, getRandomNumber(6,10));
        this.arr2.push(this.footballStars);
       
        
    }

   this.helpArr2 = this.arr2.slice(0, 6);
  
   console.log("Football stars in consideration: ", this.helpArr2)
}



