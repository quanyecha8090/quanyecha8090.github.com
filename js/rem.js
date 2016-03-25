(function(){
	window.onload=window.onresize=function(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth*20/375+'px';
	};
})();
//document.addEventListener('DOMContentLoaded',function(){
//	
//	var btnShare = document.querySelector('#btn_share');
//	var shareCon = document.querySelector('#shareCon');
//	var btnClose = document.querySelector('#shareClose');
//	var shareMask = document.querySelector('#mask');
//	
//	btnShare.addEventListener('click',shareShow,false);
//	btnClose.addEventListener('click',shareHide,false);	
//	shareMask.addEventListener('click',function(e){
//		e.stopPropagation();
//		shareHide();
//	},false);
//
//	function shareShow(){
//		shareMask.style.display = 'block';
//		shareCon.style.height = '13.275rem';
//	}
//	function shareHide(){
//		shareMask.style.display = 'none';
//		shareCon.style.height = 0;
//	}
//},false);

	
