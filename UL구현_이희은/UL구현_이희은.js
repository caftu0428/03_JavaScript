



/* 키패드 판 */



const numbers = document.querySelectorAll(".number");
const leftNber = document.querySelector("#left-Nberbox");

/* 키패드 입력기 */
for (let item of numbers) {
    item.addEventListener("click", e => {
        if (leftNber.textContent.length >= 11) {
            alert('번호가 많아!!!');
            return;
        }
        leftNber.textContent += e.target.textContent;
    });
}


/* 초기화 버튼 */
document.querySelector("#resetBtn")
.addEventListener("click", () => {
    leftNber.textContent = "";
});


/* 추가 버튼 클릭 */
/* + 즐겨찾기 버튼 */
/* + X 버튼 */
const phoneBtn = document.querySelector("#phoneBtn");
const phoneNberList = document.querySelector("#Nber");

phoneBtn.addEventListener("click", e => {
    const phoneNumber = leftNber.textContent.trim();
    if (phoneNumber.length === 0) {
        alert('숫자를 입력하세요');
    } else {
        // 전화번호 목록에 추가
        const newPhoneNumber = document.createElement("div");
        newPhoneNumber.innerHTML = `${phoneNumber} <span class="favorite">☆</span> <span class="delete">×</span>`;
        phoneNberList.appendChild(newPhoneNumber);
        
        // 입력된 전화번호 초기화
        leftNber.textContent = "";

        // 삭제 버튼에 이벤트 추가
        newPhoneNumber.querySelector(".delete").addEventListener("click", () => {
            newPhoneNumber.remove();
        });

        // 즐겨찾기 버튼에 이벤트 추가
        newPhoneNumber.querySelector(".favorite").addEventListener("click", () => {
            const isFavorite = newPhoneNumber.querySelector(".favorite").textContent === "☆";
            newPhoneNumber.querySelector(".favorite").textContent = isFavorite ? "★" : "☆";
            newPhoneNumber.querySelector(".favorite").style.color = isFavorite ? "orange" : "inherit";
            newPhoneNumber.style.color = isFavorite ? "red" : "inherit";
        });
    }
});


