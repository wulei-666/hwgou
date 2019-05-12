function Goods(){
    this.cont = document.getElementById("cont");

    // G1.绑定点击加入购物车事件
    this.addEvent();
}

//用事件委托来给即将要渲染的元素的父元素绑定点击事件，
Goods.prototype.addEvent = function(){
    var that = this;
    this.cont.addEventListener("click",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "add"){
            that.id = target.parentNode.parentNode.parentNode.getAttribute("index");
            // console.log(that.id)
            // G2.存储cookie
            that.setCookie()
        }

        //点击图片、文字，跳转详情页。index.html中用到。
        if(target.className == "goodsimg"){
            var goodsid = target.parentNode.parentNode.parentNode.getAttribute("index");
            location.href = "introduction/introduction.html";
            setCookie("goodsid",goodsid)
            // console.log(goodsid)


        }
    })
}
Goods.prototype.setCookie = function(){
    // 存商品货号和对应的数量

    // 怎么存:JSON,数组里面放对象，对象内至少有两个键值对，货号和数量
    // [{id:123123,num:1},{id:123123,num:1},{id:123123,num:1}]
    this.goods = getCookie("goods");
    if(this.goods == ""){
        // 第一次存，直接存
        this.goods = [{
            id:this.id,
            num:1
        }];
    }else{
        var onoff = true;
        // 不是第一次存，先读取，字符，转对象
        this.goods = JSON.parse(this.goods)
        for(var i=0;i<this.goods.length;i++){
            // 老数据
            if(this.goods[i].id == this.id){
                // 直接修改数量
                this.goods[i].num++;
                onoff = false;
                break;
            }
        }
        // 新数据
        if(onoff){
            // 直接添加对象
            this.goods.push({
                id:this.id,
                num:1
            })
        }
    }
    setCookie("goods",JSON.stringify(this.goods))
}
new Goods();