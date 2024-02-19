function updateClock(){
    var now = new Date();
    var Dname = now.getDay(),
    month = now.getMonth(),
    Dnum = now .getDate(),
    year = now.getFullYear(),
    hour = now. getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    Pa_Am = "AM";

    if (hour == 0){
        hour =12;
    }
    if (hour > 12){
        hour =hour-12;
        Pa_Am ="PM"
    }

    Number.prototype.pad =function(Digits){
        for (var n = this.toString();n.length < Digits; n= 0+n);
        return n;
    }

    var months = ["January", "February", "March","April","May","June","July","Augest","September","October","November","December"];
    
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   
    var ids = ["dayname","month","daynum","year","hour","minutes","second","PmAm"]

    var values =[week[Dname],months[month],Dnum.pad(2),year,hour.pad(2),min.pad(2),sec.pad(2),Pa_Am];
    for(var i = 0;i< ids.length;i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function initclock(){
    updateClock();
    window.setInterval("updateClock()",1);
}