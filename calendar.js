var date = new Date();

function NewDate(){
date.setDate(1);

var day= date.getDay();

var presentmonth_endDate = new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0
).getDate();

var lastmonth_endDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
).getDate();
 
var today= new Date();

var months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.getElementById("date").innerHTML =  date.toDateString();
document.getElementById("month").innerHTML = months[date.getMonth()];

var days="";
for(a=day; a>0 ; a--){
    days =days+  "<div class='prev_date'>" + (lastmonth_endDate-a+1) + "</div>";
}

for(i =1; i<=presentmonth_endDate;i++){  
    if(i==today.getDate() && date.getMonth()==today.getMonth()){
        days = days + "<div class='today' onclick=openPopUp('openPop'); >" +i+ "</div>";
    }
    else{
        days = days + "<div onclick=openPopUp('openPop'); > " +i+ "</div>";
    }
    
}
document.getElementsByClassName("days")[0].innerHTML = days;
   
}

function moveDate(para){
    if(para=='prev'){
        date.setMonth(date.getMonth()-1);
    }
    else if(para=='next'){
        date.setMonth(date.getMonth()+1);
    }
    NewDate();
}


function openPopUp(para){
    if(para=='openPop'){
        document.getElementById("manage").style.display='block';
        document.getElementById("use").style.transition="all 300ms ease-in-out";
    }
    else if(para=='closePop'){
        document.getElementById("manage").style.display='none';
    }
 
 }
 var Display=document.getElementById("display");
 var Event=document.getElementById("event");
 var Save =document.getElementById("save");
 var Remove=document.getElementById("remove");
 var events = "";
 var eventid=1;
 
 function saveEvent(){
     eventid=eventid+1;
     localStorage.setItem(eventid,Event.value);
     events = events + "<div>"+localStorage.getItem(eventid)+"<button onclick=removeEvent();> Remove </button>"+"</div>"
     document.getElementsByClassName("display")[0].innerHTML = events;
 
 
 }
 function removeEvent(){
     localStorage.removeItem(eventid);
     
 }


 function displayClock(){
    var date = new Date();
        var hrs = date.getHours(); 
        var min = date.getMinutes(); 
        var sec = date.getSeconds(); 
        var session = "AM";
         if(hrs==0){
             hrs=12;
         }
         if(hrs>=12){
             hrs=hrs-12;
             session="PM";
         }
         if(hrs < 10){
             hrs="0"+hrs;
         }
         if(min < 10){
            min="0"+min;
        }
        if(sec < 10){
            sec="0"+sec;
        }
         
         var time = hrs + ":" + min + ":" + sec + " " + session;
         document.getElementById("ClockDisplay").innerText = time;
         document.getElementById("ClockDisplay").textContent = time;
         setTimeout(displayClock, 1000);
 }

 displayClock();
    
 
 
