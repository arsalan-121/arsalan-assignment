// var hrs = 0;
// var min = 0;
// var sec = 60;

// var showHrs = document.getElementById('hours-val')
// var showMins = document.getElementById('mins-val')
// var showSecs = document.getElementById('secs-val')

// var interval;

// function startTimer(){
//     document.getElementById('countdown-timing').style.display = 'none';
//     document.getElementById('startcountdown').style.display = 'block';
//     document.getElementById('hours-val').innerHTML = document.getElementById('hours-inp').value;
//     document.getElementById('mins-val').innerHTML = document.getElementById('mins-inp').value;
//     document.getElementById('secs-val').innerHTML = document.getElementById('secs-inp').value;

//     interval = setInterval(function (){
//         sec ++;
//         showSecs.innerHTML = sec;
//     }, 1000 );
// }

// function resetTimer(){
//     var hrs = 0;
//     var min = 0;
//     var sec = 0;
//     showHrs.innerHTML = hrs;
//     showMins.innerHTML = min;
//     showSecs.innerHTML = sec;
// }

// resetTimer();

var t = 0;

function myFunction() {
    var x = document.getElementById('frm1');
    var hr = x.elements[0].value;
    var min = x.elements[1].value;
    // var sec = x.elements[1].value;
    window.t = hr * 3600 + min * 60;
    window.total = window.t;
    timer();
}

function timer() {
    var temp = window.t;
    window.t = window.t - 1;
    var h = Math.floor(temp / 3600);
    var m = Math.floor((temp % 3600) / 60);
    var s = Math.floor(temp - 3600 * h - 60 * m);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('demo').innerHTML = h + "hr:" + m + "min:" + s + "sec:";
    document.getElementById('start-bar').style.width = (temp * 100) / window.total + "%";
    var t = setTimeout(timer, 1000)
    if (temp < 0) {
        clearInterval(t);
        document.getElementById('demo').innerHTML = "Time khatam beta nikal.";
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}