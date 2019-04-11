function User(name) {

    this.name = name;
    this.profilePic = new ProfPhoto(true);
    this.aboutMe = new Story();
    this.album = [];
    this.stories = [];
    this.myEvents = [];

    
  

    this.generateAlbum = function() {

        for(var index = 0; index < 10; index++){


            var image = new Photo();
            this.album.push(image);
        }



    }

    this.generateAlbum();

    this.generateStories = function(){

        for (var index = 0; index < 5; index++) {
      
            var story = new Story();
            this.stories.push(story);


        }
    }

    this.generateStories();

}