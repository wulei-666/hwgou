//选项卡
var ali2 = document.querySelectorAll(".banner .banner-r-b ul li");
var amsg2 = document.querySelectorAll(".banner .banner-r-b .cont .msg");
for(var i=0;i<ali2.length;i++){
    ali2[i].index = i;
    // console.log(i)
    ali2[i].onmouseenter = function(){
        for(var j=0;j<ali2.length;j++){
            ali2[j].className = "";
            amsg2[j].style.display = "none";
        }
        this.className = "active";
        amsg2[this.index].style.display = "block";
    }
}

// 竖选框
var ali = document.querySelectorAll(".banner .banner-l ul li");
var amsg = document.querySelectorAll(".banner .banner-l .cont .msg");
var cont = document.querySelectorAll(".banner .banner-l .cont");

for(var i=0;i<ali.length;i++){
    ali[i].index = i;
    ali[i].onmouseenter = function(){
        for(var j=0;j<ali.length;j++){
            ali[j].className = "";
            amsg[j].style.display = "none";
        }
        this.className = "active";
        amsg[this.index].style.display = "block";
    }
    ali[i].onmouseleave = function(){
        for(var j=0;j<ali.length;j++){
            ali[j].className = "";
            amsg[j].style.display = "none";
        }
    }  
}

// 轮播图
function Lun(){
    this.btn1 = document.querySelector(".banner .banner-c .lun .bbbb .btn1")
    this.btn2 = document.querySelector(".banner .banner-c .lun .bbbb .btn2")
    this.aa = document.querySelectorAll (".banner .banner-c .lun .aaaa a")
    this.index = 0 ;
    this.i = 1 ;
    this.shijian();
}
Lun.prototype.shijian = function(){
    var that = this ;
    this.btn1.onclick = function(){
        that.changeIndex(1) ;//左
    }
    this.btn2.onclick = function(){
        that.changeIndex(2) ;//右
    }
}
Lun.prototype.changeIndex = function(type){
    if(type == 1){
        if(this.index == 0){
            this.index = 3 ;
            console.log(this.index)
        }else{
            this.index-- ;
            console.log(this.index)
        }
    }else{
        if(this.index == this.aa.length-1){
            this.index = 0;
            console.log(this.index)
        }else{
            this.index++ ;
            console.log(this.index)
        }
    }
    this.display()
}
Lun.prototype.display = function(){
    this.aa[this.index].style.zIndex = this.i++;
    this.aa[this.index].style.width = 0 ;
    move(this.aa[this.index],{width:710}); 
}
new Lun();

//登录、注册
class Index{
    constructor(){
        this.p = document.querySelectorAll(".nav .nav-ul .ddd");
        this.span = document.querySelector(".nav .nav-ul .dddd");
        this.exit = document.getElementById("exit")
        this.getData()
        this.addEvent();
    }
    getData(){
        this.abc = localStorage.getItem("abc");
        if(this.abc == null){
            this.abc = [];
        }else{
            this.abc = JSON.parse(this.abc)
        }
        this.panduan()
    }
    panduan(){
        for(var i=0;i<this.abc.length;i++){
            if(this.abc[i].onoff == 1){
                this.p[0].style.display = "none";
                this.p[1].style.display = "none";
                this.p[2].style.display = "block";
                this.span.style.color = "red";
                this.span.innerHTML = this.abc[i].user;
                this.successUser = this.abc[i].user;
                return;
            }
        }
        this.p[0].style.display = "block";
        this.p[1].style.display = "block";
        this.p[2].style.display = "none";
        this.span.innerHTML = "";
    }
    addEvent(){
        var that = this;
        this.exit.onclick = function(){
            if(that.successUser){
                for(var i=0;i<that.abc.length;i++){
                    if(that.abc[i].user === that.successUser){
                        that.abc[i].onoff = 0;
                        localStorage.setItem("abc",JSON.stringify(that.abc))
                        that.panduan();
                    }
                }
            }
        }
    }
}
new Index();



// 在script中直接模拟json数据
//     var data = [{
//         src:"images/xfs2.png",
//         p:"西班牙LME珞曼西樱花身体乳保湿滋润补水去鸡皮肤润肤乳500ml",
//         span:"￥128.0",
//     },{
//         src:"images/xfs2.png",
//         p:"西班牙LME珞曼西樱花身体乳保湿滋润补水去鸡皮肤润肤乳500ml",
//         span:"￥128.0",
//     },{
//         src:"images/xfs2.png",
//         p:"西班牙LME珞曼西樱花身体乳保湿滋润补水去鸡皮肤润肤乳500ml",
//         span:"￥128.0",
//     },{
//         src:"images/xfs3.png",
//         p:"特价 飞利浦新安怡手动吸奶器套装",
//         span:"￥299.0",
//     },{
//         src:"images/xfs4.png",
//         p:"特价 飞利浦新安怡手动吸奶器套装",
//         span:"￥299.0",
//     },{
//         src:"images/xfs4.png",
//         p:"意大利KIWY安全座椅无敌浩克SL123 Q-FIX 摩卡棕 ...",
//         span:"￥8888"
//     }];

//     var str = "";
//     for(var i=0;i<data.length;i++){        
//         str += '<li class="id1"><a href="#"><div class="cpt"><img src="'+ data[i].src +'"></div><p>'+ data[i].p +'</p><span>'+ data[i].span +'</span></a></li>';

//     }
//     var ocont = document.querySelector("main .margin ul");
//     ocont.innerHTML = str;
