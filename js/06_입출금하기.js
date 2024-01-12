/* prompt 사용 연습 */

function test(){

    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null){ // 취소
        alert("취소");

    } else { // 확인

        //입력한 비밀번호가 '1234'가 맞는지 확인
        if(password == '1234'){
            alert("비밀번호 일치");
        } else {
            alert("비밀번호가 일치하지않습니다.")
        }

    } 
}

//--------------------------------------------------


const money = document.getElementById(money)
const Balance = document.getElementById(Balance)


function deposit(){



}



function withdrawal(){ 
    
    
const password = prompt("비밀번호를 입력하세요");


if(password == null){ 
    alert("취소 되었습니다.");

} else { 

    if(password == '0000'){
        alert("비밀번호가 일치합니다.");
    } else {
        alert("비밀번호 오류.")
    }

} 

}




console.log("op : " , op);

const v1 = Number(number1.value);


let result;

switch(op){

    case '+': result = v1 + v2; break;
    case '-': result = v1 - v2; break;
}
