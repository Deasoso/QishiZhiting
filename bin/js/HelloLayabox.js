/**
 * 入口函数
 */
/**
 * Created by 匿名 on 2018-03-20 16:56:31.
 */
function main() {
    var modes = "exactfit";
    Laya.init(640, 960, Laya.WebGL);
    // Laya.stage._canvasTransform = new Laya.Matrix(0,0,320,480);
    //设置适配模式 mapsize:1280,1060
    Laya.stage.scaleMode = modes;
    var map = new myMap(0, 0);
    map.loadImage("../res/pictures/栖诗之庭png/庭院.png", 0, 0);
    Laya.stage.addChild(map);
    // var player = myTweensp.createsprite(map,100,100);
    // player.loadImage("../res/pictures/栖诗之庭png/火炉.png",0,0,128,128);
    ClickSprite.initgamecanvas();
}
this.main();
//# sourceMappingURL=HelloLayabox.js.map