Zepto(function($){
	$('#btn_share').on('click',share);
	var json = {"name":"adidas","desc":"男子Boost 跑步鞋 亮蓝 AQ6765"};
	$('#xq_winBrandWrap').delegate('div','click',function(){winBrand(json);});
	$('#btn_sign').on('click',winSign);
	
})


/*
	分享代码
*/
function share(){
	var oBody = $('body');
	var oMask = $('<div class="mask"></div>');
	var oWrap=$('<div class="zt_shareCon"></div>');
	var oHead = $('<div class="zt_shareConHd">分享</div>');
	var oClose = $('<span></span>');
	var oCon = $('<ul class="zt_shareUl clearfix"><li><a href="#"><img src="images/share_xiangce.png" /><p>保存到相册</p></a></li><li><a href="#"><img src="images/share_weixinfriend.png" /><p>微信朋友圈</p></a></li><li><a href="#"><img src="images/share_weixinhaoyou.png"/><p>微信好友</p></a></li><li><a href="#"><img src="images/share_qq.png" /><p>QQ好友</p></a></li><li><a href="#"><img src="images/share_sina.png" /><p>新浪微博</p></a></li><li><a href="#"><img src="images/share_qqZone.png"/><p>QQ空间</p></a></li></ul>');
	oHead.append(oClose);
	oWrap.append(oHead);
	oWrap.append(oCon);
	oBody.append(oMask);
	oBody.append(oWrap);
	oWrap.height('13.275rem');
	oMask.on('click',shareRemove);
	oClose.on('click',shareRemove);
	function shareRemove(){
		oMask.remove();
		oWrap.animate({height:0},{complete:function(){oWrap.remove();}});
	}
}

/*弹窗*/
function winBrand(json){
	var oBody = $('body');
	var oMask = $('<div class="mask"></div>');
	var oWrap = $('<div class="popCon"></div>');
	var oClose = $('<span class="popClose"></span>');
	var oCon = $('<span class="popBrand">品牌</span><p class="popBrandName">'+json.name+'</p><p class="popBrandDes">'+json.desc+'</p><div class="popOpera"><a href="#">找同款</a><a href="#">找代购</a></div><div class="popTips">我们已帮您筛选的靠谱商家，请您谨慎购买</div>');
	oWrap.append(oClose);
	oWrap.append(oCon);
	oBody.append(oMask);
	oBody.append(oWrap);
	var oWidth = $(window).width();
	var oHeight = $(window).height();
	var oW = oWrap.width();
	var oH = oWrap.height();
	oWrap.css({
		left:((oWidth-oW)/2)+'px',
		top:((oHeight-oH)/2)+'px'
	});
	document.documentElement.style.overflow='hidden';
	oMask.on('click',winRemove);
	oClose.on('click',winRemove);
	function winRemove(){
		oMask.remove();
		oWrap.remove();
		document.documentElement.style.overflow='visible';
	}
}

/*签到*/
function winSign(){
	var oBody = $('body');
	var oMask = $('<div class="mask"></div>');
	var oWrap = $('<div class="popSign"></div>');
	var oClose = $('<span class="popClose"></span>');
	var oTop = $('<div class="popSignTop"><div class="popSignTopOne">连续签到<span>1</span>天</div><div class="popSignTopTwo">+<span>5</span>咖豆</div></div>');
	var oInfo = $('<div class="popPerInfo"><ul class="popPerPoint"><li><img src="images/zt_yh_1.png" /></li><li>个人积分</li></ul><div class="popPerMoney">186币</div></div>');
	var oTaskWrap = $('<div class="popTodayTask"><h3>今日未完成任务</h3>');
	var oTask = $('<ul class="popTaskList"><li><div class="popTaskFriend">邀请好友</div><span>+5咖豆</span></li><li><div class="popTaskShare">分享</div><span>+3咖豆</span></li></ul>');
	var oMoreBtn = $('<div class="popMorePoint"><span>赚取更多积分</span></div>');
	oWrap.append(oClose);
	oWrap.append(oTop);
	oWrap.append(oInfo);
	oTaskWrap.append(oTask);
	oWrap.append(oTaskWrap);
	oWrap.append(oMoreBtn);
	oBody.append(oMask);
	oBody.append(oWrap);
	var oWidth = $(window).width();
	var oHeight = $(window).height();
	var oW = oWrap.width();
	var oH = oWrap.height();
	oWrap.css({
		left:((oWidth-oW)/2)+'px',
		top:((oHeight-oH)/2)+'px'
	});
	document.documentElement.style.overflow='hidden';
	oMask.on('click',signRemove);
	oClose.on('click',signRemove);
	function signRemove(){
		oMask.remove();
		oWrap.remove();
		document.documentElement.style.overflow='visible';
	}
}
