function print5()
{
  //var a=1;
  var b=2;
  var c=3;
  var d=4;
  var e=5;
  console.log(1);
  console.log(b);
  //console.log(c);
  alert(c);
  console.log(d);
  console.log(e);
}
print5();
function myLoadFunction(){
  var element=document.getElementById('pageheading');
  element.firstChild.nodeValue="welcome again";

 var element=document.getElementById('paragraph');
element.firstChild.nodeValue="new paragraph";
}
document.addEventListener('click',myLoadFunction);
