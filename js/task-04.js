{/* <div id="counter">
    <button type="button" data-action="decrement">-1</button>
    <span id="value">0</span>
    <button type="button" data-action="increment">+1</button>
</div> */}
let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

decrementBtn.addEventListener("click", onClick)
function onClick() {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
};

incrementBtn.addEventListener("click", function () {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});

