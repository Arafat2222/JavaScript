const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function myfun() {
    return new Promise((resolve) => {
        rl.question("",function(input) {            
            resolve(input);
        });
    });
}

async function main() {
    var a = await myfun();  // Wait for the input
    var a = a.split(" ").map(Number);
    var x = a[0],y = a[1];

    // addition
    console.log(x + y);

    // substraction
    console.log(x - y)

    //	Multiplication
    console.log(x * y)
   

   // Exponentiation
   console.log(x ** y)

   //	Division
   console.log(x / y)

   //	Modulus (Remainder)
   console.log(x % y)

   // Increment
   console.log(x++)

   // Decrement
   console.log(x--)
    rl.close();
}

main();




