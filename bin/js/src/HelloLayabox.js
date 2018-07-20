var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 入口函数
 */
/**
 * Created by 匿名 on 2018-03-20 16:56:31.
 */
var WebGL = Laya.WebGL;
var myMap = (function (_super) {
    __extends(myMap, _super);
    function myMap(mwidth, mheight) {
        var _this = _super.call(this) || this;
        _this.speed = 1000;
        _this.movetype = "easeOutSine";
        _this.centerx = mwidth / 2;
        _this.centery = mheight / 2;
        _this.x = -_this.centerx;
        _this.y = -_this.centery;
        return _this;
    }
    myMap.prototype.movecamera = function (tox, toy) {
        var movetox = -this.centerx - tox;
        var movetoy = -this.centery - toy;
        this.tween && this.tween.clear();
        this.tween = Laya.Tween.to(this, { x: movetox, y: movetoy }, this.speed, Laya.Ease[this.movetype]);
        //for(var i=0;i<this.numChildren;i++){
        //    var k = this.getChildAt(i) as Tweensp;
        //    k.cleartween;
        //    k.settween(Tween.to(k, {x : movetox + k.spx, y : movetoy + k.spy}, this.speed, Ease[this.movetype]));
        //}  
    };
    return myMap;
}(Laya.Sprite));
var myTweensp = (function (_super) {
    __extends(myTweensp, _super);
    function myTweensp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myTweensp.prototype.cleartween = function () {
        this.tween.clear();
    };
    myTweensp.prototype.settween = function (stween) {
        this.tween = stween;
    };
    myTweensp.prototype.move = function (addx, addy) {
        this.spx += addx;
        this.spy += addy;
        this.x += addx;
        this.y += addy;
    };
    myTweensp.createsprite = function (map, xx, yy) {
        var newsp = new myTweensp();
        newsp.x = map.centerx + xx;
        newsp.y = map.centerx + yy;
        newsp.spx = 0;
        newsp.spy = 0;
        map.addChild(newsp);
        return newsp;
    };
    return myTweensp;
}(Laya.Sprite));
function main() {
    Laya.init(640, 960, WebGL);
    var map = new myMap(200, 200);
    map.loadImage("res/pictures/栖诗之庭png/庭院.png", 0, 0);
    Laya.stage.addChild(map);
    var player = myTweensp.createsprite(map, 100, 100);
    player.loadImage("res/pictures/栖诗之庭png/火炉.png", 0, 0);
    // Laya.stage.add_KEYDOWN(onKeyDown,this);
    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onKeyDown);
    var jiangyou = myTweensp.createsprite(map, 200, 200);
    jiangyou.loadImage("res/pictures/栖诗之庭png/火炉.png", 0, 0);
    var jiangyou2 = myTweensp.createsprite(map, 100, 0);
    jiangyou2.loadImage("res/pictures/栖诗之庭png/火炉.png");
    function onKeyDown(e) {
        if (e.keyCode == Laya.Keyboard.UP) {
            player.move(0, -1);
            console.log("moveup");
        }
        else if (e.keyCode == Laya.Keyboard.DOWN)
            player.move(0, 1);
        else if (e.keyCode == Laya.Keyboard.LEFT)
            player.move(-1, 0);
        else if (e.keyCode == Laya.Keyboard.RIGHT)
            player.move(1, 0);
        else if (e.keyCode == Laya.Keyboard.SPACE) {
            map.movecamera(player.spx, player.spy);
            console.log("space");
        }
        console.log(player.x + "," + player.y + "," + player.spx + "," + player.spy + "," + map.x + "," + map.y + "," + map.centerx + "," + map.centery);
    }
    camera();
    function cameramove() {
        map.movecamera(player.spx, player.spy);
    }
    function camera() {
        timer.frameLoop(2, this, cameramove);
    }
}
//# sourceMappingURL=HelloLayabox.js.map