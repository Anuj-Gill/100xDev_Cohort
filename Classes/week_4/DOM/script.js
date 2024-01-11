
function calculateSum(){
  const input1 = parseInt(document.querySelector(".input1").value);
  const input2 = parseInt(document.querySelector(".input2").value);
  const ans = input1 + input2;
  const ansText = document.querySelector(".answer").innerHTML = `The sum is ${ans}`;
}