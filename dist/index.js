let val = "";

function button0Handler() {
  val += "0";
  $("#calc-input").val(val);
}
function button1Handler() {
  val += "1";
  $("#calc-input").val(val);
}
function button2Handler() {
  val += "2";
  $("#calc-input").val(val);
}
function button3Handler() {
  val += "3";
  $("#calc-input").val(val);
}
function button4Handler() {
  val += "4";
  $("#calc-input").val(val);
}
function button5Handler() {
  val += "5";
  $("#calc-input").val(val);
}
function button6Handler() {
  val += "6";
  $("#calc-input").val(val);
}
function button7Handler() {
  val += "7";
  $("#calc-input").val(val);
}
function button8Handler() {
  val += "8";
  $("#calc-input").val(val);
}
function button9Handler() {
  val += "9";
  $("#calc-input").val(val);
}

function buttonClearHandler() {
  val = "";
  $("#calc-input").val(val);
}

function buttonDevideHandler() {
  val += " / ";
  $("#calc-input").val(val);
}

function buttonMultiplyHandler() {
  val += " * ";
  $("#calc-input").val(val);
}

function buttonSubstractHandler() {
  val += " - ";
  $("#calc-input").val(val);
}

function buttonPlusHandler() {
  val += " + ";
  $("#calc-input").val(val);
}

function buttonResultHandler() {
  const calcString = $("#calc-input").val().split(" ");
  let result = 0;
  let temp = 0;

  console.log("calcString: ", calcString);
  for (let i = 0; i < calcString.length; i += 2) {
    console.log("i: ", i);
    if (i === 0) {
      if (calcString[i + 1] === "*") {
        temp = parseInt(calcString[i]) * parseInt(calcString[i + 2]);
        result = result + temp;
      } else if (calcString[i + 1] === "/") {
        temp = parseInt(calcString[i]) / parseInt(calcString[i + 2]);
        result = result + temp;
      } else if (calcString[i + 1] === "+") {
        temp = parseInt(calcString[i]) + parseInt(calcString[i + 2]);
        result = result + temp;
      } else if (calcString[i + 1] === "-") {
        temp = parseInt(calcString[i]) - parseInt(calcString[i + 2]);
        result = result + temp;
      }
    } else {
      if (calcString[i + 1] === "*") {
        temp = temp * parseInt(calcString[i + 2]);
        result = temp;
      } else if (calcString[i + 1] === "/") {
        temp = temp / parseInt(calcString[i + 2]);
        result = temp;
      } else if (calcString[i + 1] === "+") {
        temp = temp + parseInt(calcString[i + 2]);
        result = temp;
      } else if (calcString[i + 1] === "-") {
        temp = temp - parseInt(calcString[i + 2]);
        result = temp;
      }
    }
  }
  $("#calc-input").val(result);
}

$(document).ready(() => {
  $("#button0").click(button0Handler);
  $("#button1").click(button1Handler);
  $("#button2").click(button2Handler);
  $("#button3").click(button3Handler);
  $("#button4").click(button4Handler);
  $("#button5").click(button5Handler);
  $("#button6").click(button6Handler);
  $("#button7").click(button7Handler);
  $("#button8").click(button8Handler);
  $("#button9").click(button9Handler);
  $("#buttonClear").click(buttonClearHandler);
  $("#buttonDevide").click(buttonDevideHandler);
  $("#buttonMultiply").click(buttonMultiplyHandler);
  $("#buttonSubstract").click(buttonSubstractHandler);
  $("#buttonPlus").click(buttonPlusHandler);
  $("#buttonResult").click(buttonResultHandler);
});
