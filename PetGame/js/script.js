const pet = new Pet();


function openMenu(menuid) {
    //hide all views
    defaultView.hidden = true;
    infoView.hidden = true;
    foodView.hidden = true;
    toiletView.hidden = true;
    gameView.hidden = true;
    trainingView.hidden = true;
    healthView.hidden = true;
    nightView.hidden = true;
    journalView.hidden = true;

    //show requested view
    document.getElementById(menuid).hidden = false;

    //show back button?
    backButton.hidden = menuid === 'defaultView';
}