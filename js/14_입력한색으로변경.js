const box   = document.querySelector("#box");
const input1 = document.querySelector("#input1");
const btn  = document.querySelector("#btn");

btn.addEventListener("click", function(){
    box.style.backgroundColor = input1.value;
});

input1.addEventListener("keyup", function(e){

    if(e.key == "Enter"){
        box.style.backgroundColor = input1.value;
    }
});

//--------------------------
box.addEventListener("click", function(e){

    alert(`배경색 : ${e.target.style.backgroundColor}`);
});
