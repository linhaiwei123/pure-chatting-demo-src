var 用户排序工具 = {
    
    排序(所有用户,位置偏移,初始位置=cc.v2(-102.2,-10.15)){
        console.log('当前用户',所有用户);
        
        所有用户.reduce((前一个节点, 当前节点, index, array)=>{
            当前节点.position = cc.pAdd(前一个节点.position,位置偏移);
            return 当前节点;
        },{position:cc.pSub(初始位置,位置偏移)});
    }
};

module.exports = 用户排序工具;

