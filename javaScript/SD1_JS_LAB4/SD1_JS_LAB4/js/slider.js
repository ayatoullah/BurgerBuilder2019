
var btn_work = false;
var i = 1;

function updateImage() {
    i++;
    if (i == 9) i = 1;
    document.images[0].src = "images/" + i + ".jpg";
}

function start() {
    if (btn_work == false) {
        timerId = setInterval("updateImage()", 1000);
        btn_work = true;
    }
}

function next()
{
    if (btn_work == true) {
        stop();
    }
    updateImage();
}

function previous() {
    if (btn_work == true) {
        stop();
    }

    i -= 2;
    if (i < 0)
        i=7;
    updateImage();
}

function stop()
{
    clearInterval(timerId);
    btn_work = false;
}
