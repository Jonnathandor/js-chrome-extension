const setGreeting = () => {
    let greeting = "Good ";
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 5 && hours <= 11){
      greeting += "Morning,";
    } else if(hours >= 12 && hours <= 16){
      greeting += "Afternoon,";
    } else if(hours >= 17 && hours <= 20){
      greeting += "Evening,";
    } else {
      greeting += "Night,";
    }
    document.querySelector('.greeting__type').innerText = greeting;
}

const setGreetingImage = () => {
    const image = document.getElementById('greeting__image');
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 5 && hours <= 11){
      image.src = './images/good-morning.png';
    } else if(hours >= 12 && hours <= 16){
      image.src = './images/good-afternoon.png';
    } else if(hours >= 17 && hours <= 20){
      image.src = './images/good-evening.png';
    } else {
      image.src = './images/good-night.png';
    }
}

setGreeting();
setGreetingImage();