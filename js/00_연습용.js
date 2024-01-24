/* JavaScript 파일 */

// 사용자가 버튼을 클릭했을 때 호출되는 함수
const generateDiv = () => {
    // 숫자 입력란에서 값을 가져옵니다.
    const numberInput = document.getElementById("numberInput").value;
    const resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = "";

    // 입력값이 비어 있거나 숫자가 아닌 경우 경고창을 띄우고 함수 종료
    if (!numberInput.trim() || isNaN(numberInput)) {
        alert("숫자를 입력하세요!");
        return;
    }

    // 입력된 값이 3 이상인 경우에만 실행
    const isValidNumber = Number(numberInput) >= 3;
    if (isValidNumber) {
        // 입력된 숫자만큼 반복하여 div를 생성합니다.
        for (let i = 1; i <= numberInput * numberInput; i++) {
            const newDiv = document.createElement("div");
            newDiv.textContent = i;
            newDiv.classList.add("grid-item"); /* "grid-item" 클래스 추가 */
            resultDiv.appendChild(newDiv);
        }

        // 격자 컨테이너에 스타일을 추가하여 가로, 세로 칸 수를 적용합니다.
        resultDiv.style.gridTemplateColumns = `repeat(${numberInput}, 50px)`;
        resultDiv.style.gridTemplateRows = `repeat(${numberInput}, 50px)`;
    } else {
        alert("3 이상의 올바른 숫자를 입력하세요!");
    }
};

// 입력란에서 글자가 입력될 때 숫자인지 확인하는 함수
const checkInput = () => {
    const inputElement = document.getElementById("numberInput");
    const inputValue = inputElement.value.trim();

    // 입력값이 비어 있거나 숫자가 아닌 경우 경고창을 띄우고 입력값을 비움
    if (!inputValue || isNaN(inputValue)) {
        alert("숫자를 입력해 주세요!");
        inputElement.value = "";
    }
};

// 입력란에 이벤트 리스너 추가 (change 이벤트로 변경)
document.getElementById("numberInput").addEventListener("change", checkInput);
