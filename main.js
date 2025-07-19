let count = 0;

const btn           = document.getElementById("btn");
const displayCount  = document.getElementById("mm");
const message1      = document.getElementById("messg");
const message2      = document.getElementById("messg2");
const inputNumber   = document.getElementById("putin");
const submitBtn     = document.getElementById("btn2");
const finalMessage  = document.getElementById("ley");

btn.onclick = () => {
  count++;
  displayCount.textContent = count;

  if (count === 3) alert("stop");
  if (count === 4) alert("I said, STOP");
  if (count === 5) alert("HEY!");

  if (count === 6) {
    btn.style.display = "none";

    setTimeout(() => message1.style.display     = "block", 1000);
    setTimeout(() => message2.style.display     = "block", 2000);
    setTimeout(() => inputNumber.style.display  = "block", 3000);
    setTimeout(() => submitBtn.style.display    = "block", 4000);
    setTimeout(() => message2.style.display     = "none",  4500);
    setTimeout(() => message1.style.display     = "none",  4500);
    setTimeout(() => finalMessage.style.display = "block", 4500);
  }
};

function checkNumber() {
  const num = parseInt(inputNumber.value);

  if (num === 6) {
    alert("Correct!");
    setTimeout(() => alert("Good bye!"), 1000);
    setTimeout(() => window.close(), 1500);
  } 
    else if(num === 5) {
      alert('close!');
    }
    else if(num === 7) { 
      alert(num + "? Too high, but close!");
    }
    else {
    alert(num + ", really?");
  }
}
