var cal = "";
const useinp = document.getElementById("useinp");
const compinp = document.getElementById("compout");
function calcad(value) {
  cal += value;
  useinp.value = cal;
}
function removech() {
  cal = cal.substring(0, cal.length - 1);
  useinp.value = cal;
}
function solution() {
  if (cal.length == 0 || cal == "01-01-2021" || cal == "") {
    confirm("First Enter a Number !");
    return;
  } else if (cal == "18-02-2000") {
    confirm("Mythu ne waste ");
  } else if (cal == "07-12-2020") {
    confirm("OK ! Keo sale Pannikalam...");
  }
  try {
    var ans = eval(cal);
    compinp.value = ans;
  } catch (err) {
    alert("Invalid Input");
  }
}
function reset() {
  useinp.value = "";
  compinp.value = "";
  cal = "";
}
