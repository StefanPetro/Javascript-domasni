function Club(name) {

    this.name = "Juve";
    this.seats = 100;
    this.days = 30;
    this.seatsTaken;
    this.ticketPrice;
    this.ticketRevenue;
    this.jerseyPrice = 10;
    this.jerseySale;
    this.jerseyTotal;
    this.damage; 

    console.log(this.name);
    this.team2 = new Team();
        
        this.stars2 = new Stars();

        //console.log(this.name)
      
    
    this.goalsChance = function () {
        this.chance = calculatePercent(30);
        if (this.chance === false) {

            this.goal = 0;
            jerseySale = Math.floor(FanShop(this.seatsTaken, 10));
          





        } else if (this.chance === true) {
            this.goal = 1;
         
         

          var keys = Object.keys(this.team2.arr);
          var p = keys.length;
          var index = Math.floor(Math.random() * p);
          var randomKey = keys[index];
          var player1 = this.team2.arr[randomKey];
          
          console.log("The team scored a goal: "+ "Player- " ,player1);
       player1.goals+=1;
          
        
       

            jerseySale = Math.floor(FanShop(this.seatsTaken, 25));
            



        }
        console.log(jerseySale + " jerseys are sold");
        jerseyTotal = jerseySale * jerseyPrice;
        console.log(jerseyTotal + "$ jerseyTotal");
        return this.goal;
    }
    

    this.schedule = function () {
        this.goals2 = 0;
        this.damage2 = 0;
        this.jerseyTotal2 = 0;
        this.jerseySale2 = 0;
        this.ticketRevenue2 = 0;
        
       
        for (var i = 1; i <= this.days; i++) {
            console.log("day " + i);
            this.seatsTaken = Math.floor(calculatePercent2(this.seats, getRandomNumber(60, 80)));
            console.log("seats taken " + this.seatsTaken);
            this.ticketPrice = getRandomNumber(15, 25);
            console.log("daily ticket price " + this.ticketPrice);
            this.ticketRevenue = this.ticketPrice * this.seatsTaken;
            console.log("daily ticket revenue " + this.ticketRevenue);
            this.damage = getRandomNumber(10, 20);
            console.log(this.damage + "$ daily damage");
            this.goalsChance();

            

            if (i % 8 == 0) {
                
                var fStar = this.stars2.arr2.pop();
            var addStar = this.team2.arr.push(fStar);
             console.log("The club added a football star to the team: "+ "Name: " + fStar.name+ ", "+ "goals: " +fStar.goals);
           
           this.team2.arr.sort(function(a, b){return a.goals - b.goals});
          
    var dismissed = this.team2.arr.shift();
    console.log(dismissed, "kkk");
    console.log("The club dismissed 1 player: " + "Name: " +dismissed.name + ", "+ "goals: " +dismissed.goals);
   
            }

            

            

            this.goals2 += this.goal;
            this.damage2 += this.damage;
            this.jerseySale2 += this.jerseySale;
            this.jerseyTotal2 += this.jerseyTotal;
            this.ticketRevenue2 += this.ticketRevenue;
            



        }
        console.log("The team at the end of the month: ", this.team2.arr);
        console.log("Football stars that didn't make it to the team: " , this.stars2.arr2);
        console.log("Total:");
        console.log("Total goals: " + this.goals2);
        console.log("total damage: " + this.damage2);
        console.log("jerseys sold: " + this.jerseySale2);
        console.log("jersey revenue: " + this.jerseyTotal2);
        console.log("ticket revenue: " + this.ticketRevenue2);
        console.log("Total earnings after 30  days " + parseFloat(this.jerseyTotal2 + this.ticketRevenue2 - this.damage2) + "$");


    }

    this.schedule();


}





Club();
