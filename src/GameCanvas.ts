class ClickSprite extends Laya.Sprite{

    public whattodo:Function;

    public clickmap(){

    }
    public clickbuilding(){

    }
    public clickcollection(){

    }
    public clickoption(){

    }
    public setfunc(func:Function){
        this.whattodo = func;
    }
    public static createsprite(xx?:number,yy?:number,pic?:string,func?:Function):ClickSprite{
        var newsp = new ClickSprite();
        if(pic){
            newsp.loadImage(pic, 0, 0);
            // if(!wwidth) newsp.x = xx;
            // else newsp.x = xx + ((wwidth - newsp.getBounds().width)/2);
            // console.log(newsp.x + "," + xx + ","+newsp.getBounds().width + ",")
            // if(!hheight) newsp.y = yy;
            // else newsp.y = yy + ((hheight - newsp.getBounds().height)/2);
        }
        newsp.x = xx;
        newsp.y = yy;
        if(func){
            newsp.whattodo = func;
        }
        Laya.stage.addChild(newsp)
        return newsp;
    }

    public static initgamecanvas(){
        function setword(xx:number, yy:number, str:string){
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

    }
}