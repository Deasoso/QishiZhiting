class myTweensp extends Laya.Sprite{
    private tween:Laya.Tween;
    public spx:number;spy:number; 

    public cleartween(){
        this.tween.clear();
    }
    public settween(stween:Laya.Tween){
        this.tween = stween;
    }
    public move(addx:number,addy:number){
        this.spx += addx;
        this.spy += addy;
        this.x += addx;
        this.y += addy;
    }
    public static createsprite(map:myMap,xx?:number,yy?:number):myTweensp{
        var newsp = new myTweensp();
        newsp.x = map.centerx + xx;
        newsp.y = map.centerx + yy;
        newsp.spx = 0;
        newsp.spy = 0;
        map.addChild(newsp);
        return newsp;
    }
}