
function check_time() {
    var date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let lay = 'AM';
    if (hours < 10)
    {
        hours = "0" + hours;
    }
    if (minute < 10)
    {
        minute = "0" + minute; 
    }
    if (second < 10) {
        second = "0" + second; 
    }
    if (hours > 12)
    {
        lay = "PM";
    }
    document.getElementById("time").innerHTML = hours + ":" + minute + ":" + second + " " + lay;
}
setInterval( () => {
    check_time();
},1000);