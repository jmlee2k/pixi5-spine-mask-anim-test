var spine; //global so we can inspect it using devtools

window.addEventListener("load",function init()
{
	var app = new PIXI.Application();
	document.getElementById("canvas-container").appendChild(app.view);
	
	document.getElementById("play-bone-anim").addEventListener("click",function(){
		spine.state.setAnimation(0,"bone-anim",true);
	});
	document.getElementById("play-vert-anim").addEventListener("click",function(){
		spine.state.setAnimation(0,"vert-anim",true);
	});

	var text = new PIXI.Text(document.title,{fill:0xffffff});
	app.stage.addChild(text);

	//loader location changed between pixi4 and 5
	var loader = new (PIXI.Loader || PIXI.loaders.Loader)();

	loader
		.add("test","assets-dist/spine-test-anim.json")
		.load(function(loader,resources){
			spine = new PIXI.spine.Spine(resources.test.spineData);
			spine.position.set(app.renderer.width/2,app.renderer.height/2);
			app.stage.addChild(spine);
		});
});