
var text = "asdfghjklqwertyui";

// length method returns the length of the string
var len = text.length
console.log(len);


// Extracting String Characters
// 1. at(position) positive and negative
// 2. charAt(postion) only positive
// 3. charCodeAt(position) return ASCII value
// 4. string[position]

console.log(text.at(-1)) ;//last char
console.log(text.charAt(len-1));//last char
console.log(text[len-1]);//last char
console.log(text.charCodeAt(0)) // a = 97(ASII value)

// Extracting String Parts
// 1. slice(start, end) allows negative and positive
// 2. substring(start, end) allows only postive
// 3. substr(start, length)


// slice(start, end)
var text = "Bangladesh";
var newText = text.slice(0,3);
console.log(newText);

var newText = text.slice(-4,text.length);
console.log(newText);



// substring(start, end)
var newText = text.substring(1,5);
console.log(newText);
// substr(start, length) == slice
var newText = text.substr(0,3);
console.log(newText)


// Converting to Upper and Lower Case
// 1. toUpperCase() all character capitalization
// 2. toLowerCase() all character smallization

var text = "Bangladesh";
console.log(text.toUpperCase())
console.log(text.toLowerCase())

//capitalize spacific index = 2
var newText = text.slice(0,1) + text[1].toUpperCase() + text.slice(2,text.length);
console.log(newText);


// String concatenation
var text = "Bangladesh";
var tx = "Asia"

var fullText = "Hello".concat(" ",text, "!");
console.log(fullText);

// String Trim --> The trim() method removes whitespace from both sides of a string:
// txt.trim()

var txt = "      Bangladesh    ";
txt = txt.trim();
console.log(txt); 


// trimStart() -> removes whitespace only from the start of a string.
var txt = "    Hello, Bangladesh   !  ";
txt = txt.trimStart();
console.log(txt);

// trimEnd() -> removes whitespace only from the end of a string.
var txt = "    Hello, Bangladesh!  ";
txt = txt.trimEnd();
console.log(txt);


// padStart(size, string) -> set string infront of that string
var text = "10";
var newTxt = text.padStart(4,"a"); // 4 = total size of new string
console.log(newTxt);


// padEnd(size, string) -> set string back of that string
var text = "10";
var newTxt = text.padEnd(4,"a"); // 4 = total size of new string
console.log(newTxt);

// String repeat
//The repeat() method returns a string with a number of copies of a string.
var text = "Bangladesh";
newTxt = text.repeat(2);
console.log(newTxt);

// String Replace Method --> replace(old,new)
// "Hello, University of Asia Pacific" -- > "Hello, University of Asia Washington"
var University = "Hello, University of Asia Pacific";
var newUniversity = University.replace("Asia Pacific","Washington");
console.log(newUniversity);


// replace method stops his work when it got first occurence.
// if we want to replace all occurences use(/string/g) 
var txt = "Teacher,Teacher,Doctor,Teacher,Scientist";
var text = txt.replace(/Teacher/g,"Educator");
console.log(text);


// String to Array --> split("split by") split by = "," "|", " " 
var txt = "1,2,3,4,5";
var txt = txt.split(",");
console.log(txt);


// Find First Index of an string --> indexOf("string")
// if not found return -1
var text = "I like JavaScript";
var ind = text.indexOf("JavaScript");
console.log(ind);

// Find Last Index of an string --> indexOf("string")
// if not found return -1
var text = "I like JavaScript but JavaScript is not good for CP";
var ind = text.lastIndexOf("JavaScript");
console.log(ind)

// Find a string's postion --> search() method
var txt = "Hello,I'm a teacher Hello ,I'am a Doctor";
// First Occurence
console.log(txt.search("Hello")); // if not found retrun -1

// String Match
var text = "UAP is the host of 45th ICPC World Final";
txt = text.match(/Final/);
console.log("Output: "+txt); // only string
console.log(text.match("Final")) // details

var text = "Welcome to UAP.UAP is host of 45th ICPC world Final.Uap is known for CE and Pharmacy";

console.log(text.match(/UAP/g)) // print all UAP
console.log(text.match(/uap/gi)); // print all string that have uap,does not matter later case.

// include() --> if a string exist then return true else flase
console.log(text.includes("UAP"));

// startWith() --> return true if first word/substr is eqal to find search word/substr.
console.log(text.startsWith("Welcome")); // default -> (,0) 
console.log(text.startsWith("UAP"));

console.log(text.startsWith("UAP",15)); // check from 15th index

// endsWith() --> return true if  last word/substr match with searchig string else return false
var text = "Dr.Muhammad Yunus is advisor of interm govt of BD";
console.log(text.endsWith("BD"));// default -> ( search value, text.length)
console.log(text.endsWith("Yunus",17));// check if the 17 first characters of a string ends with "Yunus":

