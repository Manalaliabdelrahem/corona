
// wow js
 new WOW().init();
// section 1 ==================
// auto typing
var btntop = document.getElementById("topbtn");
window.onscroll = function () {
	if (document.documentElement.scroll > 700) {
		btntop.style.display ="none"
	}
	else {
		btntop.style.display ="block"
	}
}
btntop .addEventListener("click" , function(){
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
})
const typing = new AutoTyping('#autotyping', [
    'The coronavirus (COVID-19) was first reported',
    'by the World Health organization (WHO) on 11 march 2020.',
    'in Wuhan,hubei, china in december 2019',
    'the outbreak was later recognized as a pandemic'
], {
    typeSpeed: 50,
    deleteSpeed: 50,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
});
typing.start();

// section2
// funny text
$(document).ready(function() {
	$('.funnytext').funnyText({
		speed: 700,
		borderColor: 'black',
		activeColor: 'white',
		color: 'black',
		fontSize: '7em',
		direction: 'both'
	});
})

// section3
// funny text
$(document).ready(function() {
	$('.fun2').funnytext({
		speed: 700,
		borderColor: 'black',
		activeColor: 'white',
		color: 'black',
		fontSize: '7em',
		direction: 'both'
	});
})