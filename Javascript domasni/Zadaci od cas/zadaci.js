//FizzBuzz
var x = 1;
while(x <=100){


if(x % 3 === 0 && x % 5 === 0){

    console.log("FizzBuzz");
} else if(x % 3 === 0){

    console.log("Fizz");
} else if(x % 5 === 0){

    console.log("Buzz");
}  




    x = x+1;
};



//vezba even-odd so for ciklus

for(var x = 0; x <=15; x++){

    if(x % 2 === 0){
    
        console.log("The number is even");
    } else {
    
        console.log("The number is odd");
    }
    
    
        
};


//Zadaca "sum of squares of numbers from 101-150"

function sum(){
    var res = 0;
    for( var x = 101;x<=150; x = x + 1){
    
    var squares = Math.pow(x,2);
    res = res + squares;
    
    
    
    
    
    }
    console.log(res);
    }
    
    sum();


//vezba cats

function feedCats(){
    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var cats = ["Tabby", "Lizzie", "Mary"];
   
    for(var i = 0; i<days.length; i++){
    var currentDay = days[i];
    
    for(var index = 0; index<cats.length; index++){
    var cat = cats[index];

    if(cat === "Tabby"){

        console.log(cat + " ate chicken on " + currentDay);
    } else if(cat === "Lizzie"){

        console.log(cat + " ate fish on " + currentDay);

    } else if(cat === "Mary"){

        console.log(cat + " ate whatever on " + currentDay);
    }


    }



    }

};

feedCats();




 //Vezba CPR

 function performCPR(){

    var time = 60;
    for(var index = 0; index<time;index++){

      if(index % 15 === 0){

        console.log("Check pulse");
      } else {

        console.log("Perform CPR");

      } 

      if(index === time - 1){

        console.log("The patient lived");
      }

    }


};

performCPR();