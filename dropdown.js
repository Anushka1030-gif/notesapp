let sel=document.querySelector("select");
let dev=document.querySelector("#device");
sel.addEventListener("change",function(element){
    dev.textContent=`${element.target.value} is selected`;    
});