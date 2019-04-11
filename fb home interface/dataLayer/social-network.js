function SocialNetwork(name){

    this.name = name;
    this.users = [];
    this.events = [];


    this.generateUsers = function() {
        for (var index = 0; index < 50; index++) {
            var user = new User(names[getRandomNumber(0, 7)] + "-" + index);
        
            
            this.users.push(user);
        }
    }


    
    this.generateUsers();
    
    
    
    this.generateEvents = function(){

        for (var index = 0; index < 5; index++){

            var event = new Event(eventNames[getRandomNumber(0,2)]);
            this.events.push(event);
        }
    }



    this.generateEvents();
    




}