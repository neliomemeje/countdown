const day= document.getElementById("day")
const hour= document.getElementById("hour")
const minute= document.getElementById("minute")
const second= document.getElementById("second") 
const countdown= document.querySelector(".countdown")
const newYear = new Date("Jan 1, 2024").getTime()

countdownTimer()

function countdownTimer(){
	const now = new Date().getTime();
	const distance = newYear - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerText = days;
  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds < 10 ? "0" + seconds : seconds;

  if(distance < 0){
  	clearTimeout(countdownTimer)
  	countdown.innerHTML= "Expired";
  }

  setTimeout(countdownTimer, 1000)
}




