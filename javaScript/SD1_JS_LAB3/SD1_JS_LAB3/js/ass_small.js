//               ass7       increasing counter

timer_id = setInterval("fun_add()", 1000);

counter = 0;
function fun_add() {
    document.title = ++counter;
}

//              ass8    scroll small window


    scroll_page = setInterval("fun_scroll()", 1000);
    function fun_scroll() {
        window.scrollBy(10, 10);
    }

    //clearInterval(scroll_page);
