// const body = document.querySelector('body')
// hourHand = document.querySelector("hour")
// minuteHand = document.querySelector("minute")
// secondHand = document.querySelector("second")
// const updateTime = () => {
//     let date = new Date(),
//       secToDeg = (date.getSeconds() / 60) * 360,
//       minToDeg =(date.getMinutes()/60) *360,
//       hrToDeg =(date.getHours()/12) *360,
    
  
//     secondHand,style,transform = `rotate(${secToDeg}deg)`;  
//     minuteHand,style,transform = `rotate(${minToDeg}deg)`;
//     hourHand,style,transform = `rotate(${hrToDeg}deg)`;
 
//   };
  
//   setInterval(updateTime, 1000);


// updateTime();


function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondHand = document.getElementById('second');
  const minuteHand = document.getElementById('minute');
  const hourHand = document.getElementById('hour');

  secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6 + seconds / 10}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hours * 30 + minutes / 2}deg)`;
}

setInterval(updateClock, 1000);
updateClock();


