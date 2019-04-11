function renderAll() {

    var socialNetwork = new SocialNetwork("FaceNoteBook");
    var user = socialNetwork.users[0];

    var renderer = new Renderer(user);
    console.log(socialNetwork);
    //renderer.renderAll();


}

renderAll();