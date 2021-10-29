var links = document.getElementsByClassName('front-page-links');

function addLink0(){
    var stuff = document.getElementsByClassName('front-page-links')[0].getElementsByTagName('a')[0].getAttribute('href');
    window.location = stuff;
}
function addLink1(){
    var stuff = document.getElementsByClassName('front-page-links')[1].getElementsByTagName('a')[0].getAttribute('href');
    window.location = stuff;
}
function addLink2(){
    var stuff = document.getElementsByClassName('front-page-links')[2].getElementsByTagName('a')[0].getAttribute('href');
    window.location = stuff;
}
function addLink3(){
    var stuff = document.getElementsByClassName('front-page-links')[3].getElementsByTagName('a')[0].getAttribute('href');
    window.location = stuff;
}

links[0].addEventListener('click', addLink0, false);
links[1].addEventListener('click', addLink1, false);
links[2].addEventListener('click', addLink2, false);
links[3].addEventListener('click', addLink3, false);