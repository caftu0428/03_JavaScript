

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


const addBtn = document.querySelector("#phoneBtn");
const numberList = document.querySelector(".number-list");

addBtn.addEventListener("click", () => {
    const phoneNumber = leftNber.textContent;

    if (phoneNumber.length === 0) {
        alert('번호를 누르세요!');
        return;
    }

    const li = document.createElement("li");

    const span1 = document.createElement("span");
    span1.textContent = phoneNumber;

    const span2 = document.createElement("span");
    span2.textContent = "☆";

    span2.addEventListener("click", e => {
        const parent = e.target.parentElement;

        if (parent.classList.contains("favorites")) {
            parent.classList.remove("favorites");
            e.target.textContent = "☆";
        } else {
            parent.classList.add("favorites");
            e.target.textContent = "★";
        }
    });

    const span3 = document.createElement("span");
    span3.innerHTML = "&times;";

    span3.addEventListener("click", e => {
        e.target.parentElement.remove();
    });

    li.append(span1, span2, span3);
    numberList.append(li);

    leftNber.textContent = "";
});
