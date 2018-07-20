var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//# sourceMappingURL=TweenSprite.js.map