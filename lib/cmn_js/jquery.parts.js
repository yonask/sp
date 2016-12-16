
// jquery-opacity-rollover.js =========================================================================

$(document).ready(function(){
		$('a img.roBtn').opOver(1.0,0.7);
		$('a.roBtn').opOver(1.0,0.7);
		$('input.roBtn').opOver(1.0,0.7);
});




// copyright Year =========================================================================

function ShowNowYear() {
   var now = new Date();
   var year = now.getFullYear();
   document.write(year);
}




// LinkArea as DivArea =========================================================================

$(function(){
   $("div.shrineList li").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});

$(function(){
   $("div.venueList li").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});

$(function(){
   $("div.shrineArea li").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});

$(function(){
   $("div.pickupBox div").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});

$(function(){
   $("ul.planBtmMenu li").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});

$(function(){
   $("div.newSp_topBox01").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});

$(function(){
   $("div.newBnrArea_inr").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});
$(function(){
   $("div.newlistArea li").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});
$(function(){
   $("ul.planList li").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});

$(function(){
   $("ul.campList_new li").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});



$(function(){
   $("div.voiceList li").click(function(){
       window.open($(this).find("a").attr("href"), '_self');
        return false;
   });

});



// _blank link class blank =========================================================================

$(document).ready(function(){
　　$(".blank").click(function(){
　　　　window.open(this.href,'_blank');
　　　　　　return false;
　　　　});
});




//auto  addClass =========================================================================

$(document).ready(function(){
 $("table tr:nth-child(even)").addClass("even");
});  

$(function() {
	$("table tr").each(function() {
		$("table tr:last-child").addClass("last");
	});
});

$(function() {
	$("ul li").each(function() {
		$("ul li:first-child").addClass("first");
	});
});

$(function(){
	$("li:nth-child(even)").addClass("even");
});

$(function() {
	$("ul li").each(function() {
		$("ul li:last-child").addClass("last");
	});
});

$(function() {
	$("#contents section").each(function() {
		$("#contents section:last-child").addClass("last");
	});
});

$(function() {
	$(".breadChumbs ul").each(function() {
	$("li:last-child").addClass('last');
	});
});





// fancyBox =========================================================================

//$(function() {  
//		$('.fancyBox').fancybox();
//});

//$(function() {  
//		$('.fancyBox a').fancybox();
//});
	
	
	
	
	// halfArea culum margin-right off =========================================================================

$(function(){
	
	$('ul.samplelist li:nth-child(4n)').each(function(){
		$(this).css({marginRight: '0'});
	})
	
})




// For Resize autoHeight and marginOff =========================================================================

jQuery(function($){
	var e = document.createElement("div");
	var s = document.createTextNode("S");
	e.appendChild(s);
	e.style.visibility="hidden"
	e.style.position="absolute"
	e.style.top="0";
	document.body.appendChild(e);
	var defHeight = e.offsetHeight;
	checkBoxSize = function(){
		if(defHeight != e.offsetHeight){
		$('div.exampleTbl dl dd.title').autoHeight({column:2, clear:1,reset:'reset'});
		$('div.exampleTbl dl dd.price').autoHeight({column:2, clear:1,reset:'reset'});
	
	
		
	$('#sample li:nth-child(4n)').each(function(){$(this).css({marginRight: '0'});})
	
	
			defHeight= e.offsetHeight;
		}
	}
	$('.heightline').autoHeight();
	$('div.exampleTbl dl dd.title').autoHeight({column:2, clear:1});
	$('div.exampleTbl dl dd.price').autoHeight({column:2, clear:1});
	
	
	setInterval(checkBoxSize,1000)
});



