(function(){
	window.onload=window.onresize=function(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth*20/375+'px';	
		if(window.navigator.userAgent.toLowerCase().indexOf('kacha')==-1){
			$('header').show();
		}
	};
})();

	
