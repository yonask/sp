var cast = {
  findAllLink: function() {
    var collectLinks = document.getElementsByTagName('a');
    for (var i=0;i<collectLinks.length;i++) {
      var lnk = collectLinks[i];
      if ((lnk.href && lnk.href.indexOf('#') != -1) && ( (lnk.pathname == location.pathname) ||
         ('/'+lnk.pathname == location.pathname) ) && (lnk.search == location.search)) {
        //if(lnk.href.indexOf('pageTop') == -1){
          cast.addEvent(lnk,'click',cast.innerScroll);
        //}
      }
    }
  },
  addEvent: function(element, action, work, capture) {
    if (element.addEventListener){
      element.addEventListener(action, work, capture);
      return true;
    } else if (element.attachEvent){
      var rest = element.attachEvent("on"+action, work);
      return rest;
    }
  }, 
  getNowLocate: function() {
    if (document.body && document.body.scrollTop){
      return document.body.scrollTop;
    }
    if (document.documentElement && document.documentElement.scrollTop){
      return document.documentElement.scrollTop;
	 }
    if (window.pageYOffset){
      return window.pageYOffset;
	 }
    return 0;
  },
  actWindow: function(measure,lmPoint,turnPoint,anchorPoint) {
    chkPoint = cast.getNowLocate();
    chkFlag = (chkPoint < lmPoint);
	if(lmPoint>turnPoint){
		if(lmPoint < 200){ slowPoint = 200; }else{ slowPoint = lmPoint*0.7; }
	}else{
		if(turnPoint < 200){ slowPoint = 200; }else{ slowPoint = turnPoint*0.7; }
	}
	if(Math.abs(lmPoint-chkPoint) < slowPoint){
		
		measure = ((lmPoint-chkPoint)/cast.SPEED);
		if(Math.abs(measure) < 1 ){
			if(measure < 0){
				measure = -1;
		   }else if(measure > 0){
				measure = 1;
			}
		}
	}
    window.scrollTo(0,chkPoint + measure);
    nowPoint = cast.getNowLocate();
    chkFlagNow = (nowPoint < lmPoint);
		if ((chkFlag != chkFlagNow) || (chkPoint == nowPoint)) {
      window.scrollTo(0,lmPoint);
      clearInterval(cast.INTERVAL);
		return false;
    }
  },
  innerScroll: function(e) {
    if (window.event) {
      target = window.event.srcElement;
    } else if (e) {
      target = e.target;
    } else return;
    if (target.nodeName.toLowerCase() != 'a') {
      target = target.parentNode;
    }
    if (target.nodeName.toLowerCase() != 'a') return;
    anchorPoint = target.hash.substr(1);
    var collectLinks = document.getElementsByTagName('a');
    var landmarkLink = null;
    for (var i=0;i<collectLinks.length;i++) {
      var lnk = collectLinks[i];
      if (lnk.name && (lnk.name == anchorPoint)) {
        landmarkLink = lnk;
        break;
      }
    }
    if (!landmarkLink) landmarkLink = document.getElementById(anchorPoint);
    if (!landmarkLink) return true;
    var landmark_x = landmarkLink.offsetLeft; 
    var landmark_y = landmarkLink.offsetTop;
    if( navigator.userAgent.indexOf("MSIE") != -1 ){
    	var val = landmarkLink.childNodes.length;
	   for (i =0 ; i< val ; i++){
        if(landmarkLink.childNodes[i].nodeType == 3){
          landmark_y = landmark_y - 5;
        }
      }
    }else{
      if(landmarkLink.text){
        landmark_y = landmark_y -5;
      }
    }
    if(document.all && !window.opera){
      var winH = document.documentElement.offsetHeight;
      var docH = document.body.scrollHeight;
    }else{
      var winH = window.innerHeight;
      var docH = document.height;
    }
    if(winH > (docH-landmark_y))landmark_y -= landmark_y - (docH-winH);
    var thisNode = landmarkLink;
    while (thisNode.offsetParent && (thisNode.offsetParent != document.body)) {
      thisNode = thisNode.offsetParent;
      landmark_x += thisNode.offsetLeft;
      landmark_y += thisNode.offsetTop;
    }
    clearInterval(cast.INTERVAL);
    turnPoint = cast.getNowLocate();
    movesize = parseInt((landmark_y-turnPoint)/cast.SPEED);
	 if(Math.abs(movesize) < cast.SPEED){
	 	if( movesize < 0 ){
		 	movesize = parseInt(0 - cast.SPEED);
		}else if( movesize > 1 ){
		 	movesize = parseInt(cast.SPEED);
		}
	 }else if(Math.abs(movesize) > cast.LIMIT_SPEED){
	 	if( movesize < 0 ){
		 	movesize = parseInt(0 - cast.LIMIT_SPEED);
		}else if( movesize > 1 ){
		 	movesize = parseInt(cast.LIMIT_SPEED);
		}
	} 
    cast.INTERVAL = setInterval('cast.actWindow('+movesize+','+landmark_y+','+turnPoint+',"'+anchorPoint+'")',15);
    if (window.event) {
      window.event.cancelBubble = true;
      window.event.returnValue = false;
    }
    if (e && e.preventDefault && e.stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
}
cast.SPEED =6;
cast.LIMIT_SPEED =1000;
cast.addEvent(window,"load",cast.findAllLink);
