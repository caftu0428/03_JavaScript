const boxList = document.getElementsByClassName("box");
const inputList = document.getElementsByClassName("color-input");

function changeColor(){
  for(let i=0 ; i <inputList.length ; i++){
    boxList[i].style.backgroundColor = inputList[i].value;
  }
}

//--------------------------

inputList.addEventListener("keyup",function(e){

    if(e.key == "Enter"){
        boxList.style.backgroundColor = inputList.value;
    }
});

boxList.addEventListener("click", function(e){

    alert(`배경색 : ${e.target.style.backgroundColor}`);
});
