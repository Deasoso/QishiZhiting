var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClickSprite = (function (_super) {
    __extends(ClickSprite, _super);
    function ClickSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClickSprite.prototype.clickmap = function () {
    };
    ClickSprite.prototype.clickbuilding = function () {
    };
    ClickSprite.prototype.clickcollection = function () {
    };
    ClickSprite.prototype.clickoption = function () {
    };
    ClickSprite.prototype.setfunc = function (func) {
        this.whattodo = func;
    };
    ClickSprite.createsprite = function (xx, yy, pic, func) {
        var newsp = new ClickSprite();
        if (pic) {
            newsp.loadImage(pic, 0, 0);
        }
        newsp.x = xx;
        newsp.y = yy;
        if (func) {
            newsp.whattodo = func;
        }
        Laya.stage.addChild(newsp);
        return newsp;
    };
    ClickSprite.initgamecanvas = function () {
        function setword(xx, yy, str) {
            var txt = new Laya.Text();
            txt.text = str;
            txt.bold = true;
            txt.pos(xx, yy);
            txt.fontSize = 20;
            // txt.color   = "#fff000";
            Laya.stage.addChild(txt);
        }
        var mapsp = ClickSprite.createsprite(45, 320, "../res/pictures/icon/地图.png");
        mapsp.setfunc(mapsp.clickmap);
        setword(70, 420, "地图");
        var buildsp = ClickSprite.createsprite(30, 480, "../res/pictures/icon/建筑.png");
        buildsp.setfunc(mapsp.clickbuilding);
        setword(70, 580, "建筑");
        var collecsp = ClickSprite.createsprite(40, 640, "../res/pictures/icon/收录.png");
        collecsp.setfunc(mapsp.clickcollection);
        setword(70, 740, "收录");
        var optionsp = ClickSprite.createsprite(45, 800, "../res/pictures/icon/设置.png");
        optionsp.setfunc(mapsp.clickoption);
        setword(70, 900, "设置");
    };
    return ClickSprite;
}(Laya.Sprite));
//# sourceMappingURL=GameCanvas.js.map