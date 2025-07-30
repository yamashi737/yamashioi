let current = "";



function addOperator(op) {
  let display = document.getElementById("display");
  let lastChar = display.value.slice(-1);

  if (!"+-*/.^".includes(lastChar)) {
    display.value += op;
  }
}



document.getElementById("btn1").onclick = 
  function() {
     document.getElementById("display").value += "1";
  
  }
document.getElementById("btnclear").onclick = 
  function() {
    current = "";
    display.value = "";
  
}
document.getElementById("btn2").onclick = 
  function() {
     document.getElementById("display").value += "2";
  
  }
document.getElementById("btn3").onclick = 
  function() {
     document.getElementById("display").value += "3";
  
  }
document.getElementById("btn4").onclick = 
  function() {
     document.getElementById("display").value += "4";
  
  }
document.getElementById("btn5").onclick = 
  function() {
     document.getElementById("display").value += "5";
  
  }
document.getElementById("btn6").onclick = 
  function() {
     document.getElementById("display").value += "6";
  
  }
document.getElementById("btn7").onclick = 
  function() {
     document.getElementById("display").value += "7";
  
  }
document.getElementById("btn8").onclick = 
  function() {
     document.getElementById("display").value += "8";
  
  }
document.getElementById("btn9").onclick = 
  function() {
     document.getElementById("display").value += "9";
  
  }
document.getElementById("btn0").onclick = 
  function() {
     document.getElementById("display").value += "0";
  
  }
document.getElementById("btnplus").onclick = 
  function() {
     addOperator("+");
  
  }
document.getElementById("btnminus").onclick = 
  function() {
     addOperator("-");
  
  }
document.getElementById("btntimes").onclick = 
  function() {
     addOperator("*");
  
  }
document.getElementById("decimal").onclick = 
  function() {
    addOperator(".");
  }
  
  
document.getElementById("btnequals").onclick =
  function() {
    let input = document.getElementById("display").value;
    input = input.replace(/\^/g, "**");
    
    try {
      let result = eval(input);
      document.getElementById("display").value = result;
      
    } catch (error) {
      document.getElementById("display").value = "error";
      }
    
  }
  
  
document.getElementById("btndvsn").onclick = () => {
  addOperator("/");
}
document.getElementById("tothepowerof").onclick = function () {
  addOperator("^");
} 
