const resetBtn = document.querySelector("#resetBtn");
const nmuberBox = document.querySelector("#nmuberBox");
const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result")

for (let item of numbers) {
    item.addEventListener("click", e => {
        // 결과 텍스트의 길이가 10이면 더 이상 숫자를 추가하지 않음
        if (result.textContent.length >= 10) {
            alert('10개 이상을 초과할 수 없습니다.');
            return;
        }

        // 클릭한 숫자를 결과 텍스트에 추가
        console.log(e.target.textContent);
        result.textContent += e.target.textContent;
    });
}

// 초기화 버튼에 클릭 이벤트 리스너 추가
resetBtn.addEventListener("click", () => {
    // 결과 텍스트 초기화
    result.textContent = "";
});

