let input=document.querySelector("input");
input.addEventListener("input",function(element){
    if(element.data !== null){
        console.log(element.data);
    }
})