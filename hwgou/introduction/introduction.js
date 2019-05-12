//放大镜
function Magnifier(){
    // 1.选元素
    this.sBox = document.querySelector(".s_box");
    this.span = document.querySelector(".s_box span");
    this.bBox = document.querySelector(".b_box");
    this.bImg = document.querySelector(".b_box img");
    // 2.绑定事件：进入，移动，离开
    this.init()
}
Magnifier.prototype.show = function(){
    // 显示
    this.span.style.display = "block";
    this.bBox.style.display = "block";
}
Magnifier.prototype.hide = function(){
    // 隐藏
    this.span.style.display = "none";
    this.bBox.style.display = "none";
}
Magnifier.prototype.move = function(pos){
    // 移动
    var l = pos.x - this.span.offsetWidth/2;
    var t = pos.y - this.span.offsetHeight/2
    // 边界限定
    if(l<0) l=0;
    if(t<0) t=0;
    (l>this.sBox.offsetWidth-this.span.offsetWidth) && 
    (l=this.sBox.offsetWidth-this.span.offsetWidth);
    
    (t>this.sBox.offsetHeight-this.span.offsetHeight) && 
    (t=this.sBox.offsetHeight-this.span.offsetHeight);
    // span的移动
    this.span.style.left = l + "px";
    this.span.style.top = t + "px";
    // 计算比例
    // 已知咱班有89人，其中男生23人，请问男生找了总人数的比例是多少？
    // 23/89
    var x=  l / (this.sBox.offsetWidth-this.span.offsetWidth)
    var y = t / (this.sBox.offsetHeight-this.span.offsetHeight)
    // console.log(x,y)
    // 根据比例移动大图
    this.bImg.style.left = -x * (this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
    this.bImg.style.top = -y * (this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
}
Magnifier.prototype.init = function(){
    var that = this;
    // 进入
    this.sBox.onmouseover = function(){
        // 显示元素
        that.show()
        // 移动             this == that.sBox
        this.onmousemove = function(eve){
            var e = eve || window.event;
            // e.pageX - this.offsetLeft === e.offsetX
            // e.pageY - this.offsetTop === e.offsetY
            that.move({
                x:e.pageX - this.offsetLeft,
                y:e.pageY - this.offsetTop
            })
        }
    }
    // 离开
    this.sBox.onmouseout = function(){
        //     隐藏元素
        that.hide()
    }
}
new Magnifier();



//获取cookie并从json里拿数据渲染页面
function Car(){
    this.main = document.querySelector("main")
    this.url = "http://localhost/hwgou/data.json"

    this.init()

}
Car.prototype.init = function(){
    var that = this;
    ajaxGet(this.url).then(function(res){
        // console.log(JSON.parse(res))
        that.res = JSON.parse(res)
        that.getCookie()
    })
}
Car.prototype.getCookie = function(){
    this.goods = getCookie("goods")!="" ? JSON.parse(getCookie("goods")) : [];
    
    this.display()
}
Car.prototype.display = function(){
    var str = ""
    for(var i=0;i<this.res.length;i++){
        for(var j=0;j<this.goods.length;j++){
            if(this.res[i].goodsId == this.goods[j].id){
                str += `<div class="margin" index="${n.goodsId}">
                            <div class="s_box">
                                <img src="../${n.src}">
                                <span></span>
                            </div>
                            <div class="b_box">
                                <img src="../${n.src}">
                            </div>
                            <div class="r_box">
                                <p>${n.p}</p>
                                <span>${n.span}</span>
                                <b>加入购物车</b>
                            </div>
                        </div>`;
            }
        }
    }
    this.main.innerHTML = str;
}





