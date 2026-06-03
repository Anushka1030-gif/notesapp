let p=document.querySelectorAll("p");
p.innerHTML="<b>update</b> by javascript";
p.forEach(function(val){
    val.style.fontSize="8px";
});
let a=document.querySelector("a");
a.href="https://www.sheryians.com";
let div=document.querySelector("div");
div.setAttribute("title","some info");
 let li=document.querySelectorAll("ul li:nth-child(2n)");
 li.forEach(function(val){
    val.classList.add("highlight");
 });
 