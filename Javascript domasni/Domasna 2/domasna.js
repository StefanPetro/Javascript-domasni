function concatenate(x,y,boolean){

    

    if(boolean===true) {
    
    
        console.log(x + y);
    } else if(boolean === false) {
    
    
        console.log(y + x);
    }
    console.log("test")
    
    
    
    
    }
    
    concatenate("Stefan","Petrovski",true);


    function calculateTax(salary,jobDescription){
        var tax;
        if(salary<=1000 && jobDescription == "CEO"){ 
    
            tax = 11 * salary/100; 
        } else if(salary>1000 && jobDescription == "CEO"){
    
            tax = 18 * salary/100;
        } else if(salary<=1000 && jobDescription == "craftsman"){
    
            tax = 5 * salary/100;
    
        } else if(salary>1000 && jobDescription == "craftsman"){
    
            tax = 10 * salary/100;
        } else {
    
            document.write("error");
    
        }
    
    console.log(tax);

}

calculateTax(2200,"craftsman");
