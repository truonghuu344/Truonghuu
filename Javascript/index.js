//Thời gian
const myLabel = document.getElementById("myLabel");
Time();
setInterval(Time,1000);
function Time(){
    let date = new Date();
    myLabel.innerHTML = getTime(date);

    function getTime(date){
        let day = date.getDate();
        let months = date.getMonth()+1;
        let years = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let amOrpm = hours >= 12 ? "pm" : "am"; 
        hours = (hours % 12) || 12;

        hours = zero(hours);
        minutes = zero(minutes);
        seconds = zero(seconds);
        
        return `${hours}:${minutes}:${seconds} ${amOrpm}  ${day}/${months}/${years}`
    }
    function zero(time){
        time = time.toString();
        return time.length <2 ? "0" + time : time

    }
}

