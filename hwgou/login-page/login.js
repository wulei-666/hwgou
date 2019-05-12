//登录
class Login{
    constructor(){
        this.user = document.querySelector(".tu .margin .login .yhm input");
        this.pass = document.querySelector(".tu .margin .login .mm input");
        this.btn = document.querySelector(".tu .margin .login .dl input");
        this.span = document.querySelector(".tu .margin .login .bc");

        this.init();
        this.getData();
    }
    init(){
        var that = this;
        this.btn.onclick = function(){
            that.yanzheng();
        }
    }
    getData(){
        this.abc = localStorage.getItem("abc");
        if(this.abc == null){
            this.abc = [];
        }else{
            this.abc = JSON.parse(this.abc)
        }
    }
    yanzheng(){
        for(var i=0;i<this.abc.length;i++){
            if(this.abc[i].user == this.user.value && this.abc[i].pass == this.pass.value){
                this.span.innerHTML = "登录成功,2秒后跳转";
                this.abc[i].onoff = 1;
                localStorage.setItem("abc",JSON.stringify(this.abc))
                setTimeout(()=>{
                    location.href = "../index.html";
                },2000)
                return;
            }
        }
        this.span.innerHTML = "用户名密码不符";
    }
}
new Login();