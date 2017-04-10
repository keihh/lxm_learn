	var clock = null;   //定时器句柄
	var main = document.getElementById("main");
	var con = document.getElementById("container");

//初始化
	function init() {
		for(var i=0; i<4; i++){
			crow();
		}

		main.onclick = function(ev) {
			if(ev.target.className.indexOf('black') == -1) {

			} else {
				ev.target.className = 'cell';
				score();				
			}
		}
	}

//定时器启动函数start
	function start() {
		window.setInterval('move()', 30);
	}

//方块运动
	function move() {
		var top = parseInt(window.getComputedStyle(con , null)['top']);
		top += 2;
		con.style.top = top + 'px';

		if(top == 0) {
			crow();
			con.style.top = '-100px';
			drow();
		}
	}

//计分
	function score() {
		score = document.getElementById("score");
		score.innerHTML = parseInt(score.innerHTML)+1;
	}

//创建div.row
	function crow() {
		var row = cdiv('row');
		var classes = creatSn();

		for(var i = 0; i < 4; i++) {
			row.appendChild(cdiv(classes[i]));
		}
		if(con.firstChild == null) {
			con.appendChild(row);
		} else {
			con.insertBefore(row, con.firstChild);
		}
	}	

//删除最后一行
	function drow() {
		con.removeChild(con.lastChild);
	}

//	创建DIV,className是其类名
	function cdiv(className) {
		var div = document.createElement('div');
		div.className = className;
		return div;
	}

//返回一个数组，随机其中一个单元值为“cell black”
	function creatSn() {
		var arr = ['cell', 'cell','cell', 'cell'];
		var i = Math.floor(Math.random()*4);
		arr[i] = 'cell black';
		return arr;
	}

	init();
	start();	
