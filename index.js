const secondHand = document.querySelector('.second-hand'); 
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
 const now = new Date(); 
 const seconds = now.getSeconds(); 
 const minutes = now.getMinutes();
 const hours = now.getHours();
 const secondDegrees = ((seconds / 60) * 360) + 90; 
 const minuteDegrees = ((minutes/60) * 360) + 90;
 const hourDegrees = ((hours/12) * 360) + 90;

 secondHand.style.transform = `rotate(${secondDegrees}deg)`; 
 minHand.style.transform = `rotate(${minuteDegrees}deg)`; 
 hourHand.style.transform = `rotate(${hourDegrees}deg)`; 

}

setInterval(setDate, 1000); 