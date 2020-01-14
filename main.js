function navclose(){
	var nav2 =  document.getElementById('nav2');

	nav2.style.right = '-100%';
}
function navopen(){
	var nav2 =  document.getElementById('nav2');

	nav2.style.right = '0';
}
window.addEventListener('scroll',function(){
	var navigation_bar = document.getElementById('navigation-bar');
	var offset = window.pageYOffset;

	if(offset > 55){
		navigation_bar.style.top = "0";
		navigation_bar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	}
	else{
		navigation_bar.style.top = "2%";
		navigation_bar.style.backgroundColor = "transparent";
	}
});
function lightboxappear(){
	var light_box_intro = document.getElementById('light-box-intro');

	light_box_intro.style.display = "flex";
}
function lightboxout(){
	var light_box_intro = document.getElementById('light-box-intro');

	light_box_intro.style.display = "none";
}