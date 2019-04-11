function Event(name) {

   this.name = name;
   this.registeredUsers =[];
   this.description = "bla bla";
   this.date = new Date();
   

   this.registerUser = function(){

      for(var index = 0; index < 5; index++){
      var element = new User(names[getRandomNumber(0, 7)] + "-" + index);
      this.registeredUsers.push(element);
  
      };
     }
  
     this.registerUser();

}