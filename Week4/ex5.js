
function myLoadFunction(){
  var element=document.getElementById('pageheading');
  element.firstChild.nodeValue="welcome again";

 var element=document.getElementById('paragraph');
element.firstChild.nodeValue="new paragraph";
}
document.addEventListener('click',myLoadFunction);
