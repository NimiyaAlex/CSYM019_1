//alert('script loaded');//popup message will generate
//var b="nim";
//var a=12;
//alert(b);
function print5()
{
  var a=1;
  var b=2;
  var c=3;
  var d=4;
  var e=5;
  alert(a);
  alert(b);
  alert(c);
  alert(d);
  alert(e);
}
print5();
print5();
function myLoadFunction(){
  var element=document.getElementById('pageheading');
  element.firstChild.nodeValue="welcome again";

 var element=document.getElementById('paragraph');
element.firstChild.nodeValue="new paragraph";
}
document.addEventListener('click',myLoadFunction);
