const button = document.getElementById('buttonHelloWorld');
const showText = () => {alert("Hello World!")}
button.addEventListener('click', (event) => showText()) 

const number = Math.floor(Math.random() * 100) + 1;
document.getElementById('checkButton').addEventListener('click', checkGuess);
function checkGuess() {
  const guessField = document.getElementById('guessField');
  const guessResult = document.getElementById('guessResult');
  const userGuess = parseInt(guessField.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    guessResult.textContent = 'Будь ласка, введіть число від 1 до 100.';
  } else {
    if (userGuess > number) {
      guessResult.textContent = `${userGuess} є більшим за задане число`;
    } else if (userGuess < number) {
      guessResult.textContent = `${userGuess} є меншим за задане число`;
    } else {
      guessResult.textContent = 'Ви вгадали число!';
    }
  }
}

let clickCount = 0;

    document.addEventListener("click", () => {
        clickCount++;
        document.getElementById("clickCount").textContent = clickCount;
});

const applyCallbackToEachElements = (arr, callback) => {
    const resultArray = arr.map(callback);
    return resultArray;
}
const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;
const result = applyCallbackToEachElements(arr, squareCallback);
console.log(result);

const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};
const showDiscountedPrice = (discountedPrice) => {
    console.log(`Discounted price: ${discountedPrice}`);
};
calculateDiscountedPrice(100, 10, showDiscountedPrice);
