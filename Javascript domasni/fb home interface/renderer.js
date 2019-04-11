function Renderer(person){

    this.user = person;

    window.document.body.style.backgroundImage = "url('facebook.jpg')";
    

    upper = document.createElement("header")
    upper.style.height = "40px";
    upper.style.width = "auto";
    upper.style.backgroundColor = "grey";
    upper.innerText = "FaceNoteBook";
    upper.style.color = "white";
    upper.style.fontSize = "30px";
    upper.style.textAlign = "center";
    document.body.appendChild(upper);
    
    
    //left side
    leftContainer = document.createElement("div");
    leftContainer.style.height = "600px";
    leftContainer.style.width = "300px";
    leftContainer.style.backgroundColor = "black";
    leftContainer.style.cssFloat = "left";
    leftContainer.style.marginTop = "10px";
    document.body.appendChild(leftContainer);


    var profilePict = document.createElement("img");
    profilePict.style.width = "150px";
    profilePict.style.height = "150px";
    profilePict.style.borderRadius = "80px";
    profilePict.style.border = "3px solid white";
    profilePict.style.marginLeft = "70px";
    profilePict.style.marginTop = "30px";
    profilePict.src = this.user.profilePic.url;
    profilePict.style.backgroundColor = "blue";


    profilePict.addEventListener("mouseover",function(){

        function reSize(){

            profilePict.style.height = "200px";
            profilePict.style.width = "200px";
            profilePict.style.borderRadius = "100px";
            profilePict.style.marginLeft = "45px";


        }

       reSize();

    })

    profilePict.addEventListener("mouseout",function(){

        function reSize(){

            profilePict.style.height = "150px";
            profilePict.style.width = "150px";
            profilePict.style.borderRadius = "80px";
            profilePict.style.marginLeft = "70px";
            


        }

       reSize();

    })


    
    leftContainer.appendChild(profilePict);

    
    var userId = document.createElement("div");
    userId.style.height = "50px";
    userId.style.width = "100%";
    userId.style.backgroundColor = "grey";
    userId.style.marginTop = "10px";
    userId.innerText = this.user.name;
    userId.style.color = "white";
    userId.style.fontSize = "20px";
    userId.style.textAlign = "center";
    leftContainer.appendChild(userId);

    var userStory = document.createElement("div");
    userStory.style.height = "200px";
    userStory.style.width ="100%";
    userStory.style.backgroundColor = "grey";
    userStory.style.marginTop = "10px";
    userStory.innerText = this.user.aboutMe.title + "\n" + this.user.aboutMe.description + "\n" + this.user.aboutMe.date;
    userStory.style.color = "white";
    leftContainer.appendChild(userStory);

    


    //right side

    rightContainer = document.createElement("div");
    rightContainer.style.height = "600px";
    rightContainer.style.width = "600px";
    rightContainer.style.backgroundColor = "black";
    rightContainer.style.cssFloat = "right";
    rightContainer.style.flexFlow = "wrap";
    rightContainer.style.marginTop = "10px";
    document.body.appendChild(rightContainer);

    function generateAlbum(){

        var k = document.createElement("img");
        k.style.height = "100px";
        k.style.margin = "5px";
        k.style.width = "110px";
        k.style.backgroundColor = "blue";
        k.style.display = "inline-block";

        k.src =this.url = "https://picsum.photos/100/200/?random";
    
        rightContainer.appendChild(k);

        k.addEventListener("mouseover",function(){

            function reSize(){

                k.style.height = "120px";
                k.style.width = "110px";


            }

           reSize();

        })

        k.addEventListener("mouseout",function(){

            function reSize(){

                k.style.height = "100px";
                k.style.width = "110px";


            }

           reSize();

        })


    }


    for(var i = 0; i<9; i++){
    
        generateAlbum();

    }


    generateAlbum();


    var bottomRight = document.createElement("div");
    bottomRight.style.height = "auto";
    bottomRight.style.width = "100%";
    bottomRight.style.backgroundColor = "grey";
    bottomRight.style.marginTop = "10px";
    rightContainer.appendChild(bottomRight);


    


    for(var index = 0; index < 5; index++){


    
        
        var s = document.createElement("div");
        s.style.width = "100%";
        s.style.height = "auto";
        s.style.backgroundColor = "grey";
        s.innerText = this.user.aboutMe.title + "\n" + this.user.aboutMe.description + "\n" + this.user.aboutMe.date;
        s.style.color = "white";
        s.style.border = "1px solid black";
        bottomRight.appendChild(s);


    }
    

    
    lower = document.createElement("footer")
    lower.style.height = "40px";
    lower.style.width = "auto";
    lower.style.backgroundColor = "grey";
    lower.innerText = "Made by Stefan P. 11.04.2019";
    lower.style.color = "white";
    lower.style.fontSize = "30px";
    lower.style.textAlign = "center";
    lower.style.marginTop = "620px";
    lower.style.borderTop = "3px dashed blue";
    document.body.appendChild(lower);

    
    
}