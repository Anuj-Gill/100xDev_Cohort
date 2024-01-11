async function calculateSI(){
  const p = document.querySelector("#p").value;
  const r = document.querySelector("#r").value;
  const t = document.querySelector("#t").value;
  console.log(p,r,t)
  
  const response = await fetch(`http://localhost:3000/interest?principal=${p}&rate=${r}&time=${t}`);
  // console.log(response)
  const answer = await response.text();
  console.log(answer)

  const result = document.getElementById("si").innerHTML = answer
  
}