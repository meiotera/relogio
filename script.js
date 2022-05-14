function clock(){
    let newDate = new Date()
    let hora = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    let sRotate = ((360 / 60) * seconds) - 180;
    let mRotate = ((360 / 60) * minutes) - 180;
    let hRotate = ((360 / 12) * hora)  - 180;
    let ponteiroHours = document.getElementById('hr');
    let ponteiroMinutes = document.getElementById('mn');
    let ponteiroSeconds = document.getElementById('sc');

    ponteiroHours.style.transform = `rotate(${hRotate}deg)`;
    ponteiroMinutes.style.transform = `rotate(${mRotate}deg)`;
    ponteiroSeconds.style.transform = `rotate(${sRotate}deg)`;
    
}
setInterval(clock, 1000);
clock();
