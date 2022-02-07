function findSumOfNumbers() {
    let a = parseInt(document.getElementById('num').value);
    let total = 0;
    for(i=1;i<=a;i++) {
            total = total +i;
    }
    document.getElementById('result').value = total;
}

function averageNumbers() {
let n = parseInt(document.getElementById('num1').value);
let m = 0;
let average = 0;
for( let i = 1; i<=n; i++) {
    let b = parseInt(prompt("Enter the" + i + "number?"));
    m = m+b;
    average = m/n;
}
document.getElementById('result2').value = average;
}

function multiTable() {
    let c = parseInt(document.getElementById('num3').value);
    for(let i = 1; i<=10; i++) {
        let multi = " ";
       multi = c + "*" + i + "=" + c * i;
       
       console.log(multi);

    }
    document.getElementById('result3').innerHTML = multi;
}

function divisible() {
    let limit = parseInt(document.getElementById('num4').value);
    let divide = parseInt(document.getElementById('num5').value);
    if(divide<=limit) {
        for (let i = divide; i<=limit; i++) {
            if(i%divide ==0){
                console.log(i);
                //document.getElementById('result4').innerHTML = i;
                
            }
        }
    }
}

function sumOfDigits() {
    let x = parseInt(document.getElementById('num6').value);
    let k, sum = 0;
    while(x) {
        k = x%10;   //suuliin orong gargaj avch k-d hiine
        sum = sum +k; // digits sum
        x = Math.floor(x/10); //buhel too bolgoj avahiin tuld math.floor-iig ashiglasan. tegehgui bol ornii nariivchlal garaad zorood bsan. 
    }
    document.getElementById('result5').value = sum;
}

document.getElementById("button").addEventListener("click", findSumOfNumbers);
document.getElementById("button2").addEventListener("click", averageNumbers);
document.getElementById("button3").addEventListener("click", multiTable);
document.getElementById("button4").addEventListener("click", divisible);
document.getElementById("button5").addEventListener("click", sumOfDigits);


