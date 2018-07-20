class myMap extends Laya.Sprite{
    private tween:Laya.Tween;
    private speed:number = 1000;
    private movetype:string = "easeOutSine";
    public centerx:number;centery:number;
    public pointx:number;pointy:number;
    //moving
    public startmovingx:number;startmovingy:number;
    public startmovingmousex:number;startmovingmousey:number;
    public goalx:number;goaly:number;
    public ismoving:boolean;
    
    constructor(mwidth:number,mheight:number){
        super();
        this.centerx = mwidth/2;
        this.centery = mheight/2;
        this.x = -this.centerx;
        this.y = -this.centery;
        this.startmovingx = 0;
        this.startmovingy = 0;
        this.pointx = 0;
        this.pointy = 0;
        this.goalx = 0;
        this.goaly = 0;
        this.on(Laya.Event.MOUSE_DOWN, this, this.startmove);
        this.on(Laya.Event.MOUSE_MOVE, this, this.moving);
        this.on(Laya.Event.MOUSE_UP, this, this.endmove);
        Laya.timer.frameLoop(2, this, this.cameramove);
    }
    
    private startmove(){
        this.ismoving = true;
        this.startmovingmousex = Laya.stage.mouseX;
        this.startmovingmousey = Laya.stage.mouseY;
        this.startmovingx = this.pointx;
        this.startmovingy = this.pointy;
    }

    private moving(){
        if(!this.ismoving) return;
        this.goalx = this.startmovingx - (Laya.stage.mouseX - this.startmovingmousex);
        if(this.goalx>640) this.goalx = 640;
        if(this.goalx<0) this.goalx = 0;
        this.goaly = this.startmovingy - (Laya.stage.mouseY - this.startmovingmousey);
        if(this.goaly>100) this.goaly = 100;
        if(this.goaly<0) this.goaly = 0;
    }

    private endmove(){
        this.ismoving = false;
        this.pointx = this.goalx;
        this.pointy = this.goaly;
    }
    public cameramove(){
        this.movecamera(this.goalx, this.goaly);
        // console.log(this.goalx +"," +this.goaly +"," + this.x + "," + this.y + "," + this.startmovingx)
    }

    public movecamera(tox:number,toy:number){
        var movetox = -this.centerx-tox;
        var movetoy = -this.centery-toy;
        this.tween && this.tween.clear();
        this.tween = Laya.Tween.to(this, {x:movetox, y:movetoy}, this.speed, Laya.Ease[this.movetype]);
        //for(var i=0;i<this.numChildren;i++){
        //    var k = this.getChildAt(i) as Tweensp;
        //    k.cleartween;
        //    k.settween(Tween.to(k, {x : movetox + k.spx, y : movetoy + k.spy}, this.speed, Ease[this.movetype]));
        //}  
    }
}