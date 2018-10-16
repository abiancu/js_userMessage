var myHeading = document.querySelector("h1");
myHeading.textContent = "I am writing stuff through Javascript";

/*ALERTS*/
// document.querySelector('html').onclick = () => alert('you clikcked!');

// button
// var changeColor_html = document.querySelector('button');
// changeColor_html.onclick = () => myHeading.textContent = 'Button Clicked!';

var myBotton = document.querySelector('button');
// BUTTON EVENT HANDLER
myBotton.onclick = () => setUsername();
// IMAGES

var myImage = document.querySelector('img');
myImage.onclick = () => {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/images/mon_planet.jpg'){
        myImage.setAttribute('src', '/images/mon_planet.jpg');
    }else{
        myImage.setAttribute('src','images/moon.jpg' );
    }
}

// PERSONALIZING MESSAGES
function setUsername(){
    var name = prompt("What is your name");
    localStorage.setItem('name', name);
    myHeading.textContent = 'Hello ' + name + '. Thank you for clicking!';   
 }

 if(!localStorage.getItem('name')){
    setUsername() // calling setUsername function
}else{
    var storeName = localStorage.setItem('name');
    myHeading.textContent = 'Hello ' + name + '. Thank you for clicking!';
}

