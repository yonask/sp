// JavaScript Document

var topath = ("http://www.kamakura-wakon-style.jp");
var path = location.pathname;
var result = path.replace('/sp', '');
 
//$(function(){
//alert(topath + result);
//});

$(function(){
$("p.pcBtn").prepend('<a href="'+topath + result+'" >PCサイトへ</a>')
});