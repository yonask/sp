
$(document).ready(function(){
  //acordion_treeHeadを一旦非表示に
  //$(".acordion_treeHead").css("display","none");
  //triggerをクリックすると以下を実行
  $(".triggerHead").click(function(){
    //もしもクリックしたtriggerの直後の.acordion_treeHeadが非表示なら
    if($("+.acordion_treeHead",this).css("display")=="none"){
         //classにactiveを追加
         $(this).addClass("active");
         //直後のacordion_treeHeadをスライドダウン
         $("+.acordion_treeHead",this).fadeIn("normal");
  }else{
    //classからactiveを削除
    $(this).removeClass("active");
    //クリックしたtriggerの直後の.acordion_treeHeadが表示されていればスライドアップ
    $("+.acordion_treeHead",this).fadeOut(0);
  }
  });
});

//汎用パターン

$(window).load(function() {
	$('.acArea dt').click(function() {
		$(this).next().slideToggle('fast');
		$(this).toggleClass('active');
	}).next().hide();
});
