var banner = document.getElementById('notification-bar');
var background = document.getElementById('background');

function fadeBanner(){
    if( window.scrollY < background.clientHeight - 80){
        banner.style.position = "fixed";
        banner.style.top="0px";
    }
    else if(window.scrollY < background.clientHeight){
        banner.style.position = "absolute";
        var num = background.clientHeight - 80;
        banner.style.top= num.toString() + "px" ;
    }
    else{
        banner.style.position = "absolute";
        banner.style.top="0px";
    }
}

window.addEventListener("scroll", fadeBanner, false);