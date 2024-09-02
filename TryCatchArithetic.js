
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (e) {
        console.error("Error:", e.message);  
        return null;  
    }
}


  
function myfun() {
    return new Promise((resolve) => {
        rl.question("",function(input) {            
            resolve(input);
        });
    });
}

async function main() {
  

  console.log(divide(5,0));

   
}

main();



 
  