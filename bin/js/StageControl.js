// /**
//  * 设置界面的UI类，主要用于处理图片移动，逻辑在LGOption里
//  * Created by Deaso on 2018-04-04 20:47:40.
//  */
// class UIOption extends SWUI.ui.OptionUI{ 
//     public bgvflag:number = 0;      //bgm滚动条的目标，用于制作慢慢滚动效果
//     public sevflag:number = 0;      //se滚动条的目标
//     public bgvmoving:number = 0;    //bgm滚动条的当前位置
//     public sevmoving:number = 0;    //se滚动条的当前位置
//     public bgvismoving:boolean = false;  //bgm移动是否结束
//     public sevismoving:boolean = false;  //se移动是否结束
//     public startbgvcont:boolean = false; //开始点击控制bgm
//     public startsevcont:boolean = false; //开始点击控制se
//     public bgmvolume:number;        //bgm音量
//     public sevolume:number;         //se音量
//     /**
//      * 初始化，输入初始x与y
//      */
//     constructor(){
//         super();
//         os.add_ENTERFRAME(this.onUpdate,this)//注册帧刷新
//     }
//     /**
//      * 帧刷新，移动螺丝钉以及刷新白条
//      */
//     public onUpdate = function(){
//         this.movebgmroll();
//         this.moveseroll();
//     }
//     public movebgmroll():void{
//         if(this.bgvmoving >= 100){
//             this["bgvmax"].alpha = 1
//         }else{
//             this["bgvmax"].alpha = 0
//         }
//         if (this.bgvflag == this.bgvmoving){
//             if (this.bgvismoving == true){
//                 for(var i=1;i<=10;i++){
//                     this["bgv"+i].alpha = 0;
//                 }
//                 var bgvchu10 = this.bgvmoving/10;
//                 for(var i=1;i<=bgvchu10;i++){
//                     this["bgv"+i].alpha = 1;
//                 }
//                 this.bgvroll.rotation = this.bgvflag*6;
//                 this.bgvroll.x = 167+3.7*this.bgvflag;
//                 this.bgvismoving = false;
//             }
//         }else{
//             if(this.bgvismoving == false){
//                 this.bgvismoving = true;
//             }
//             if(this.bgvflag < this.bgvmoving){
//                 this.bgvroll.rotation -= 12;
//                 this.bgvmoving -= 2;
//             }else{
//                 this.bgvroll.rotation += 12;
//                 this.bgvmoving += 2;
//             }
//             for(var i=1;i<=10;i++){
//                 this["bgv"+i].alpha = 0;
//             }
//             var bgvchu10 = this.bgvmoving/10;
//             for(var i=1;i<=bgvchu10;i++){
//                 this["bgv"+i].alpha = 1;
//             }
//             this["bgvroll"].x = 167+37*bgvchu10;
//         }
//     }
//     public moveseroll():void{
//         if(this.sevmoving >= 100){
//             this["sevmax"].alpha = 1
//         }else{
//             this["sevmax"].alpha = 0
//         }
//         if (this.sevflag == this.sevmoving){
//             if (this.sevismoving == true){
//                 for(var i=1;i<=10;i++){
//                     this["sev"+i].alpha = 0;
//                 }
//                 var sevchu10 = this.sevmoving/10;
//                 for(var i=1;i<=sevchu10;i++){
//                     this["sev"+i].alpha = 1;
//                 }
//                 this.sevroll.rotation = this.sevflag*6;
//                 this.sevroll.x = 144+3.7*this.sevflag;
//                 this.sevismoving = false;
//             }
//         }else{
//             if(this.sevismoving == false){
//                 this.sevismoving = true;
//             }
//             if(this.sevflag < this.sevmoving){
//                 this.sevroll.rotation -= 12;
//                 this.sevmoving -= 2;
//             }else{
//                 this.sevroll.rotation += 12;
//                 this.sevmoving += 2;
//             }
//             for(var i=1;i<=10;i++){
//                 this["sev"+i].alpha = 0;
//             }
//             var sevchu10 = this.sevmoving/10;
//             for(var i=1;i<=sevchu10;i++){
//                 this["sev"+i].alpha = 1;
//             }
//             this["sevroll"].x = 144+37*sevchu10;
//         }
//     }
//     /**
//      * 出现，用于点击设置菜单后出现
//      */
//     public show(inbgmvolume:number = 50,insevolume:number = 50):void{
//         this.bgvturnto(inbgmvolume);
//         this.sevturnto(insevolume);
//         LogicManager.hallProcess.hallUI.extraLayer.addChild(this);
//     }
//     /**
//      * 将滚动条瞬移到某个地方，用于初始化
//      */
//     public bgvturnto(inbgmvolume):void{
//         this.bgvflag = inbgmvolume;
//         this.bgvmoving = inbgmvolume;
//         this.bgmvolume = inbgmvolume;
//         this.bgvismoving = true;
//     }
//     public sevturnto(insevolume):void{
//         this.sevflag = insevolume;
//         this.sevmoving = insevolume;
//         this.sevolume = insevolume;
//         this.sevismoving = true;
//     }
//     /**
//      * 拖动音量/音效响应框相关
//      */
//     public setbgmvolume():void{
//         if(!this.startbgvcont) return;
//         var mx = this.bgvbtn.mouseX-120;
//         var my = this.bgvbtn.mouseY;
//         var clickx = mx*10/37;
//         this.bgmvolume = this.normalizevolume(clickx);
//         this.bgvflag = this.bgmvolume;
//         //作用背景音乐音量改变
//         SoundCenter.setValue(this.bgmvolume/100);
//     }
//     public setsevolume():void{
//         if(!this.startsevcont) return;
//         var mx = this.sevbtn.mouseX-120;
//         var my = this.sevbtn.mouseY;
//         var clickx = mx*10/37;
//         this.sevolume = this.normalizevolume(clickx);
//         this.sevflag = this.sevolume;
//         //作用音效音量改变
//         SoundCenter.setEffectValue(this.sevolume/100);
//     }
//     public startcontbgv():void{
//         this.startbgvcont = true;
//         this.setbgmvolume();
//     }
//     public startcontsev():void{
//         this.startsevcont = true;
//         this.setsevolume();
//     }
//     public endcontbgv():void{
//         this.startbgvcont = false;
//     }
//     public endcontsev():void{
//         this.startsevcont = false;
//     }
//      /**
//      * 消失，点击屏幕外任意地方退出设置界面
//      */
//     public clickOptionBg(e: EventObject) {
//         SoundCenter.playEffectMusic(ConstSoundUrl.CANCEL);
//         // this.bgvturnto(this.bgmvolume);
//         // this.sevturnto(this.sevolume);
//         this.parent.removeChild(this);
//     }
//     /**
//      * 音量标准化方法
//      * 音量必须限制在0~100之间，且间隔为10
//      */
//     public normalizevolume(innum:number):number{
//         var okvolume:number = 0;
//         if(innum > 100) okvolume = 100;
//         else if(innum < 0) okvolume = 0;
//         else {
//             var rem = innum % 10;
//             if (rem == 0) return okvolume = innum;
//             else {
//                 if (rem >= 5) okvolume = innum + (10 - rem);
//                 else okvolume = innum - rem;
//             }
//         }
//         return okvolume;
//     }
// }
// /**
//  * 设置界面的逻辑类
//  * Created by Deaso on 2018-04-05 11:08:27.
//  */
// class LGOption{
//     public optionUI:UIOption;   //option界面
//     /**
//      * 点击设置按钮，初始化，开始设置流程
//      */
//     public startoption():void{
//         SoundCenter.playEffectMusic(ConstSoundUrl.NORMAL_Button);
//         if (this.optionUI == null){
//             this.optionUI = new UIOption();
//             //点击背景或退出框退出
//             this.optionUI.optionbg.add_CLICK(this.optionUI.clickOptionBg, this.optionUI);
//             this.optionUI.exit.add_CLICK(this.optionUI.clickOptionBg, this.optionUI);
//             // //鼠标在bgm滚动条上单击
//             // this.optionUI.bgvbtn.add_CLICK(this.optionUI.setbgmvolume, this.optionUI);
//             //鼠标在bgm滚动条上移动
//             this.optionUI.bgvbtn.add_MOUSEMOVE(this.optionUI.setbgmvolume, this.optionUI);
//             //鼠标在bgm滚动条上按下
//             this.optionUI.bgvbtn.add_MOUSEDOWN(this.optionUI.startcontbgv, this.optionUI);
//             //鼠标在bgm滚动条上松开
//             this.optionUI.bgvbtn.add_MOUSEUP(this.optionUI.endcontbgv, this.optionUI);
//             //鼠标离开bgm滚动条
//             this.optionUI.bgvbtn.add_MOUSEOUT(this.optionUI.endcontbgv, this.optionUI);
//             // //鼠标在se滚动条上单击
//             // this.optionUI.sevbtn.add_CLICK(this.optionUI.setsevolume, this.optionUI);
//             //鼠标在se滚动条上移动
//             this.optionUI.sevbtn.add_MOUSEMOVE(this.optionUI.setsevolume, this.optionUI);
//             //鼠标在se滚动条上按下
//             this.optionUI.sevbtn.add_MOUSEDOWN(this.optionUI.startcontsev, this.optionUI);
//             //鼠标在se滚动条上松开
//             this.optionUI.sevbtn.add_MOUSEUP(this.optionUI.endcontsev, this.optionUI);
//             //鼠标离开se滚动条
//             this.optionUI.sevbtn.add_MOUSEOUT(this.optionUI.endcontsev, this.optionUI);
//         }
//         this.optionUI.show(SoundCenter.GameBackgroundMusicValue*100,SoundCenter.GameEffectValue*100);
//         root.addChild(this.optionUI);
//     }
//     /**
//      * 大厅界面右上按钮监听
//      */
//     public addoptionbtn(hall){
//         LogicManager.hallProcess.hallUI.setBtn.add_CLICK(this.startoption,hall);
//     }
//     constructor(){
//     }
// } 
//# sourceMappingURL=StageControl.js.map