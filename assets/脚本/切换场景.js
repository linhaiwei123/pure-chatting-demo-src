cc.Class({
    extends: cc.Component,

    properties: {

    },
    
    onLoad(){
      let self = this;
      
      window.remote.on('进入大厅',function(){
          self.进入大厅();
      });  
    },
    
    进入大厅(){
        cc.director.loadScene('大厅');
    }
});
