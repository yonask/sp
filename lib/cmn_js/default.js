/* -----------------------------------------------
Image ClassRollOver
----------------------------------------------- */
var mouseOut = "_f";
var mouseOver = "_h";
var classname = "rollover";

function ClRollover(){}
	ClRollover.prototype = {
		init:function(cname){
			var len = cname.length;
			var elems = new Array();
			this.storedImg = new Array();
		
			for(var k=0; k<len; k++){
				elems = elems.concat(this.getElementsByClassName("img", cname[k]));
				elems = elems.concat(this.getElementsByClassName("input", cname[k]));
			}
			len = elems.length;

			for(var i=0; i<len; i++){
				var elem = elems[i];
				var imgSrc = elem.src;
				var ovrStr = this.imgOvrReplace(imgSrc, true)
				this.storedImg[imgSrc] = new Image();
				this.storedImg[imgSrc].src = ovrStr;
	
				elem.ins = this;
				elem.onmouseover = this.mouseOverEvent;
				elem.onmouseout = this.mouseOutEvent;
			}
		},

		getElementsByClassName:function(pTagName, pClassName){
			var res = new Array();
			var tags = document.getElementsByTagName(pTagName);
			var len = tags.length;
			for(var i=0; i<len; i++){
				var classes = tags[i].className;
				if(classes.indexOf(pClassName)>-1){
					res[res.length] = tags[i];
				}
			}
			return res;
		},

		imgOvrReplace:function(pSrc, pIsOvr){
			var srcStr = pSrc;
			if(pIsOvr){
				if(srcStr.indexOf(classname)>-1){
					return srcStr;
				}
				srcStr = this.strReplace(srcStr, mouseOut+".gif"	, mouseOver+".gif");
				srcStr = this.strReplace(srcStr, mouseOut+".jpg"	, mouseOver+".jpg");
				srcStr = this.strReplace(srcStr, mouseOut+".png"	, mouseOver+".png");
			}else{
				srcStr = this.strReplace(srcStr, mouseOver+".gif"	, mouseOut+".gif");
				srcStr = this.strReplace(srcStr, mouseOver+".jpg"	, mouseOut+".jpg");
				srcStr = this.strReplace(srcStr, mouseOver+".png"	, mouseOut+".png");
			}
			return srcStr;
		},

		mouseOverEvent:function(){this.src = this.ins.imgOvrReplace(this.src, true);},

		mouseOutEvent:function(){this.src = this.ins.imgOvrReplace(this.src, false);},

		strReplace:function (pStr, pKey, pAlt){return pStr.split(pKey).join(pAlt);}
	}
/************************************************************/
var clRollover = new ClRollover();

function clRO(){
	clRollover.init(arguments);
}
window.onload = function initialize(){
	clRO(classname);
}
/***********************************************************/










//----------------------------------------//
//検索フォームのvalueクリア//
//----------------------------------------//
function setvalue(id,sw){
	if (sw == 'on'){
		if (id.value.indexOf('サイト内検索') > -1) {
			id.value='';
			id.style.color = "#333";
		}
	} else {
		if (id.value == '') {
		id.value = 'サイト内検索';
		id.style.color = "#999";
		}
	}
}








/************************* label for IE **********************************/


var clickFormLabel = function(label) {
  var e = null;
  try {
    e = document.getElementById(label.htmlFor);
  } catch (exception) {}
  if (e != null) {
    if (e.tagName == "INPUT") {
      switch (e.type) {
      case "checkbox":
        e.checked = !e.checked;
        break;
      case "radio":
        e.checked = true;
        break;
      default:
        e.focus();
        break;
      }
    } else {
      e.focus();
    }
  }
  return false;
};









