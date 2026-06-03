let h1=document.querySelector("h1");
window.addEventListener("keydown",function(detl){
    if(detl.key===" "){
        h1.textContent="space";
    }
    else{
        h1.textContent=detl.key;
    }
})