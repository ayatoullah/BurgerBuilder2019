var watch_sec=0;
var watch_min = 0;
var btn_work = false;

function start_watch() {
    watch_sec++;
    if (watch_sec >= 60) {
        watch_sec = 0;
        watch_min++;
        if (watch_min == 60) {
            stop();
        }
    }

    if (watch_sec < 10 && watch_min < 1) {
        document.getElementsByTagName("h2")[0].innerHTML = "0"+watch_min + ":0" + watch_sec;
    }
    else {
        if (watch_min < 10) {
            document.getElementsByTagName("h2")[0].innerHTML = "0"+watch_min + ":" + watch_sec;
        }
        else {
            document.getElementsByTagName("h2")[0].innerHTML = watch_min + ":" + watch_sec;
        }
    }
}

function start() {
    if (btn_work == false) {
        timerId = setInterval("start_watch()", 1000);
        btn_work = true;
    }
}

function stop() {
    clearInterval(timerId);
    if (watch_min == 60)
        document.getElementsByTagName("h2")[0].innerHTML = "00:00";
    btn_work = false;
}