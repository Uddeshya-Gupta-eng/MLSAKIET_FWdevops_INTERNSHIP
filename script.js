let a=document.querySelectorAll(".main > .btn");
for(let i=0;i<a.length;i++){
a[i].addEventListener("click",function(){
    a[i].style.backgroundColor="rgb(193, 193, 193)";
    a[i].style.boxShadow="none";
    setTimeout(function(){ a[i].style.backgroundColor="rgb(228, 228, 228)";
    a[i].style.boxShadow="0 2px 4px 2px black";},125)
})
}