var express = require('express');

var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

var 用户连接 = [];


io.on('connection', function(socket){
	console.log('有用户连接');
	
	socket.on('登录',function(data){
		
		//重名验证
		if(用户连接[data]){
			//提醒重名
			socket.emit('重名');
			return ;
		}
		
		
		//保存用户名
		socket.name = data;
		console.log('登录-用户名为: ' + socket.name);
		//保存该用户的连接
		用户连接[socket.name] = socket;
		
		//通知前台进入大厅
		socket.emit('进入大厅');
	});
	
	socket.on('用户列表',function(){
		socket.emit('用户列表',Object.keys(用户连接));
		socket.broadcast.emit('新用户',[socket.name]);
	});
	
	//离线
	socket.on('disconnect',function(){
		//用户连接中删除
		delete 用户连接[socket.name];
		//通知前台删除离线用户
		socket.broadcast.emit('用户离线',[socket.name]);
		//打印离线消息
		console.log('离线-用户名为: ' + socket.name);
	})
	
	
	//大厅消息
	socket.on('大厅消息',function(msg){
		//全局发送
		io.sockets.emit('大厅消息',{name:socket.name,msg:msg});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
});

http.listen(3001, function(){
	console.log('正在监听端口3001');
});