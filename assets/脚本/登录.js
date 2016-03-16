cc.Class({
    extends: cc.Component,

    properties: {
        输入框:{
            default: null,
            type: cc.EditBox,
        }
    },
    
    onLoad(){
        let self = this;
        //重名提醒
        window.remote.on('重名',()=>{
            self.输入框.string = '';
            self.输入框.placeholder = '和其他玩家重名啦';
        });
    },
    
    恢复提醒(){
        this.输入框.placeholder = '请输入您的角色名';
    },
    
    登录(){
        let 用户名 = this.输入框.string;
        if(用户名){
            window.remote.emit('登录',用户名);
        }
    }
    
    

});
