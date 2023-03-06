//your JS code here. If required.
 function calculateSum() {
        const num1 = parseFloat(document.getElementById("n1").value);
        const num2 = parseFloat(document.getElementById("n2").value);
        const sum = num1 + num2;
        document.getElementById("sum").innerHTML = `The sum is ${sum}`;
      }