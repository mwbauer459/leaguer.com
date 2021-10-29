var elToScrollTo = document.getElementById('midsection-img');


function scroller(){
    elToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
var arrow = document.getElementById('scrollDown');
arrow.addEventListener('click', scroller, false);