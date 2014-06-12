
var screen, input, frames;
var alSprite, taSprite, ciSprite;
var aliens, dir, tank, bullets, cities;

window.onload = function() {
	function main(){
		screen = new Screen(510,600);
		input = new InputHandler();

		var img = new Image();
		img.addEventListener("load", function(){
			alSprite = new Sprite(this,0,0,22,16);
			init();
			run();
		});
		img.src = "assets/enemy.png";
	};
		function init(){};

		function run(){
			var loop = function(){
				update();
				render();
			}
		};

		function update(){};

		function render(){};
	main();
};
