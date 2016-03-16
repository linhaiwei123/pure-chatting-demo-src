cc.Class({
    extends: cc.Component,

    properties: {

    },
    
    onLoad(){
        //获取标签组件
        this.用户名组件 = this.getComponent(cc.Label);
    },
    
    设置用户名(用户名){
        //显示用户名
        this.用户名组件.string = 用户名;
        //节点设置为用户名
        this.node.name = 用户名;
    }
});
