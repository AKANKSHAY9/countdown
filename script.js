const daysE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const MinutesE1=document.getElementById('Minutes');
const secondsE1=document.getElementById('seconds');


const newYears='1 Jan 2023';

function countdown(){
    
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();
    
    const totalSeconds= (newYearsDate-currentDate) / 1000;

    const days= Math.floor(totalSeconds / 3600 / 24);
    const hours=Math.floor(totalSeconds / 3600) % 24;
    const  minute=Math.floor(totalSeconds / 60) % 60;
    const seconds= Math.floor(totalSeconds) % 60;
    
    console.log(days,hours,minute,seconds);
    daysE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    MinutesE1.innerHTML=minute;
    secondsE1.innerHTML=seconds;
}

countdown();
setInterval(countdown,1000);