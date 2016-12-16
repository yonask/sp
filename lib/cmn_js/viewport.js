
(function(){
  var ua = {
    iPhone: navigator.userAgent.indexOf('iPhone') != -1,
    iPad: navigator.userAgent.indexOf('iPad') != -1,
    iPod: navigator.userAgent.indexOf('iPod') != -1,
    android: navigator.userAgent.indexOf('Android') != -1,
    windows: navigator.userAgent.indexOf('Windows Phone') != -1
  }
  if(ua.iPhone || ua.iPod || ua.android || ua.windows){
			document.write('<meta name="viewport" content="width=320, initial-scale=1.0, user-scalable=yes, maximum-scale=2.0, minimum-scale=1.0,">\n');

			
					
		} else {
					
				
				
				
		}
}());