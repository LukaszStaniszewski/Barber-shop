// $(document).ready(function(){
// 	$('.navbar__container__hamburger').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

const hamburger = document.querySelector(".navbar__container__hamburger")

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("open")
})