const display = document.querySelector(".calcDisplay");
const plusButton = document.querySelector(".plus");

displayClick = (value) => {
  display.value += value;
  //   console.log(value);
};

const power = (squareRoot) => {
  return function (value) {
    return value ** squareRoot;
  };
};
