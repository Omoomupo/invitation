//This is a daily meal app, it tells you the particular meal that you are to eat daily for breakfast, lunch and dinner for the whole week.
//create the date
var daysOfTheWeek;

var hours;
var minutes;
var seconds;



function createDate() {
    let createDate = new Date();
    
//    get the time
    hours = createDate.getHours();
    minutes = createDate.getMinutes();
    seconds = createDate.getSeconds();
    
//    get day
    daysOfTheWeek = createDate.getDay();
    let daysOfTheWeekDisplay = "Today is ";
    
    if(daysOfTheWeek == 0) {
        document.getElementById("dayOfTheWeek").innerHTML = daysOfTheWeekDisplay +"Sunday"; 
        
    }else if(daysOfTheWeek == 1) {
        document.getElementById("dayOfTheWeek").innerHTML = daysOfTheWeekDisplay +"Monday"; 
        
    }else if(daysOfTheWeek == 2) {
        document.getElementById("dayOfTheWeek").innerHTML = daysOfTheWeekDisplay +"Tuesday"; 
        
    }else if(daysOfTheWeek == 3) {
        document.getElementById("dayOfTheWeek").innerHTML = daysOfTheWeekDisplay +"Wednesday";
        
    }else if(daysOfTheWeek == 4) {
        document.getElementById("dayOfTheWeek").innerHTML = daysOfTheWeekDisplay +"Thursday"; 
        
    }else if(daysOfTheWeek == 5) {
        document.getElementById("dayOfTheWeek").innerHTML = daysOfTheWeekDisplay +"Friday"; 
        
    }else if(daysOfTheWeek == 6) {
        document.getElementById("dayOfTheWeek").innerHTML = daysOfTheWeekDisplay +"Saturday";
        
    } else{
        document.getElementById("dayOfTheWeek").innerHTML = "Just keep your mouth closed throughout today"
    }    
    
}
createDate();

function getTime() {
    
    minutes = checkTime(minutes);
//    seconds = checkTime(seconds);
    document.getElementById("time-display").innerHTML = hours + ":" + minutes ;
    
    
}
getTime();

setInterval(getTime,1000);

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;

}



 


let popup = document.getElementById("popup");
    function openPopup() {
        popup.classList.add("open-popup");
    }
    
    function closePopup() {
        popup.classList.remove("open-popup");
        
    }


