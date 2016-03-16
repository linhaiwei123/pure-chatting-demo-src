cc.Class({
    extends: cc.Component,

    properties: {
        聊天大厅:{
            default:null,
            type:cc.Label,
        },
        输入框:{
            default:null,
            type: cc.EditBox,
        }
    },
    
    onLoad(){
        var self = this;
            window.remote.on('大厅消息',(data)=>{
                self.聊天大厅.string += (data.name + ': ' + data.msg + '\n');       
            })
    },
    
    发送(){
        var 消息 = this.输入框.string;
        
        if(消息){
            window.remote.emit('大厅消息',消息);
            //清空输入框
            this.输入框.string = '';
        }
    }
});
