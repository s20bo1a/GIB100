
 let clock=setInterval(() => {
  let d1=new Date();
  let hours=d1.getHours();
  let minutes=d1.getMinutes();
  let seconds=d1.getSeconds();
  
  if(hours<10){
    hours='0'+hours;
  }
  if(minutes<10){
    minutes='0'+minutes;
  }
  if(seconds<10){
    seconds='0'+seconds;
  } 
  
 hours>12?document.getElementById("text").innerHTML=`${hours}:${minutes}:${seconds}`+"PM":document.getElementById('text').innerHTML=`${hours}:${minutes}:${seconds}`+"AM";
  
     
 }, 1000);

 
