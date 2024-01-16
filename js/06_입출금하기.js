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

function setLimit() {
    // 사용자로부터 값을 입력받음
}

//--------------------------------------------------

const output = document.getElementById("balance"); 
const amount = document.getElementById("atm");

let balance = 10000;       
const password = '0000';     

output.innerText = balance; 

/* 입금 */
function deposit(){
    
    if(amount.value.length == 0){
        alert("금액을 입력해주세요");
        
    }else{
    balance += Number(amount.value);
    output.innerText = balance;
    amount.value = ''; 
}
}


/* 출금 */
function withdrawal(){

if(amount.value.length == 0){
    alert("금액을 입력해주세요");

    }else{
    
    const password = prompt("비밀번호를 입력하세요");

    if(password == null){
    alert("취소 되었습니다.");

    }else{
        
    if(password != '0000'){
    alert("비밀번호가 일치하지 않습니다.");

    }else{
        
    const money = Number(amount.value);

    if(money > balance){
    alert("잔액이 부족합니다.");

    }else{

    balance -= money;
    output.innerText = balance;
    amount.value = '';
    
    alert(`${money}원이 출금 되었습니다. 남은 잔액${balance}`)
 
}
}
}
}
}
