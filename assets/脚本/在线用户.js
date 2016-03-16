var 用户排序工具 = require('用户排序工具');

cc.Class({
    extends: cc.Component,

    properties: {
       用户工厂:{
           default:null,
           type: cc.Prefab,
       },
       
       用户列表:{
           default:null,
           type: cc.Node,
       },
       
       用户间距:{
           default: cc.v2(0,-30),
           type: cc.Vec2,
       },
       
       
    },
    
    onLoad(){
        
        
        
        //刚登陆时初始化在线的用户列表
        let self = this;
        window.remote.on('用户列表',function(data){
            
            data.forEach((用户名, index,array)=>{
                
                //生成新用户
                let 用户 = cc.instantiate(self.用户工厂);
                
                //添加到列表中
                self.用户列表.addChild(用户);
                
                //用户位置排序
                用户排序工具.排序(self.用户列表.getChildren(),self.用户间距);
                
                //初始化用户名
                let 用户组件 = 用户.getComponent('用户组件');
                用户组件.设置用户名(用户名);
   
            });
        });
        
        window.remote.emit('用户列表');
        
        //新用户登录时，添加新用户
         window.remote.on('新用户',function(data){
            
            data.forEach((用户名, index,array)=>{
                
                //生成新用户
                let 用户 = cc.instantiate(self.用户工厂);
                
                //添加到列表中
                self.用户列表.addChild(用户);
                
                
                //用户位置排序
                用户排序工具.排序(self.用户列表.getChildren(),self.用户间距);
                
                //初始化用户名
                let 用户组件 = 用户.getComponent('用户组件');
                用户组件.设置用户名(用户名);
   
            });
        });
        
        //用户离线时，删除用户
         window.remote.on('用户离线',function(data){
            
            data.forEach((用户名, index,array)=>{
                
                
                //从列表中删除
                self.用户列表.getChildByName(用户名).removeFromParent(true);
                
                //用户位置排序
                用户排序工具.排序(self.用户列表.getChildren(),self.用户间距);
   
            });
        });

    }
    
    
});
