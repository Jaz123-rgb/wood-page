let animado = 
document.querySelectorAll(".animado");

function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i= 0; i < animado.length; i++){
		let alturaAnimado = animado[i].clientTop;
		if(alturaAnimado +600< scrollTop){
			animado[i].style.opacity=1;
		}
	}
}
window.addEventListener('scroll', mostrarScroll);

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});