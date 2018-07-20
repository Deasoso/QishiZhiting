var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _this.startmovingx = 0;
        _this.startmovingy = 0;
        _this.pointx = 0;
        _this.pointy = 0;
        _this.goalx = 0;
        _this.goaly = 0;
        _this.on(Laya.Event.MOUSE_DOWN, _this, _this.startmove);
        _this.on(Laya.Event.MOUSE_MOVE, _this, _this.moving);
        _this.on(Laya.Event.MOUSE_UP, _this, _this.endmove);
        Laya.timer.frameLoop(2, _this, _this.cameramove);
        return _this;
    }
    myMap.prototype.startmove = function () {
        this.ismoving = true;
        this.startmovingmousex = Laya.stage.mouseX;
        this.startmovingmousey = Laya.stage.mouseY;
        this.startmovingx = this.pointx;
        this.startmovingy = this.pointy;
    };
    myMap.prototype.moving = function () {
        if (!this.ismoving)
            return;
        this.goalx = this.startmovingx - (Laya.stage.mouseX - this.startmovingmousex);
        if (this.goalx > 640)
            this.goalx = 640;
        if (this.goalx < 0)
            this.goalx = 0;
        this.goaly = this.startmovingy - (Laya.stage.mouseY - this.startmovingmousey);
        if (this.goaly > 100)
            this.goaly = 100;
        if (this.goaly < 0)
            this.goaly = 0;
    };
    myMap.prototype.endmove = function () {
        this.ismoving = false;
        this.pointx = this.goalx;
        this.pointy = this.goaly;
    };
    myMap.prototype.cameramove = function () {
        this.movecamera(this.goalx, this.goaly);
        // console.log(this.goalx +"," +this.goaly +"," + this.x + "," + this.y + "," + this.startmovingx)
    };
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
//# sourceMappingURL=Map.js.map