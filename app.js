// 1.	Create a block of code that you can use several times. 

// function repeat(a, b){
//     console.log(a+b);
// }
// repeat(50 ,50);
// repeat(500 ,50);
// repeat(5 ,50);
// repeat(50 ,100);

// 2.	Write a function that displays current date & time in your browser.

// function date(){
//     let date= new Date();
//     console.log(date.toLocaleString())
// }
// date();

// 3.	Write a function that takes first & last name and then it greets the user using his full name.


// function greetUser(username,lastName){
//    console.log(username + lastName);
// }
// greetUser("Muhammad ","Javed ");

// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.


// let num1= +prompt("Enter Number 1");
// let num2= +prompt("Enter Number ");

// function sum(){
//     console.log(`The sum of number is ${num1 + num2}`);
// }
// sum();

// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator(num1,num2){

//     return num1 + num2
// }
//  let sum=calculator(10,50);
//  console.log(sum)

// function calculator(num1 ,num2,operator){
// let result;

// if(operator==='+'){
//     result = num1 + num2
// }
// else  if(operator==='-'){
//     result = num1 - num2
// }
// else  if(operator==='*'){
//     result = num1 * num2
// }
// else  if(operator==='/'){
//     result = num1 / num2
// }
//   return result;
// }
// let sum = calculator(20,50 ,'*');
// let sum1 = calculator(20,50 ,'+');
// let sum2 = calculator(20,50 ,'/');
// let sum3 = calculator(20,50 ,'-');
// console.log(` The Mulity${sum} , sum${sum1}, Divison${sum3}, sub ${sum}` );

// 6.	 Write a function that squares its argument

// function Squre(num1){
//     return num1 ** 2
// }
// let result=Squre(9);
// console.log(result);


// 8.	Write a function that take start and end number as inputs & display counting in your browser.f
// 
// function Counter(start,end){
//    let counter=document.querySelector("#counting");
//    counter.innerHTML="";
//    for(start; start<=end; start++){
//    counter.innerHTML +=start + "<br/>";
    
//    }
// }


// 9.	Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function CalculateShape(){
//     function sub(Base,perpendicular){
//       let Hypotenuse = Base ** 2 + perpendicular  ** 2;
//         console.log(`the value of triangle is : ${Hypotenuse} `)
//     }
//     sub(4,10)
// }

// let Length=document.querySelector("#name-lenght");
// function vlength(javed){
//   return  Length.innerHTML=javed.length + "  length of Arrgument"
// }
//  let result=vlength("javedchohann");
//  console.log(result);
  
// Ai generte programmme
// let Length = document.querySelector("#name-length"); 
// function vlength(...args) {  
//   let argList = args.join(", ");  // Join all arguments into a string
//   Length.innerHTML = `Arguments: ${argList} <br> Number of Arguments: ${args.length}`;  // Display list and count
//   return args.length;  // Return the number of arguments
// }

// let result = vlength("javedchohann", "example", "test", 123, true); 
// console.log(result);  


// 11.	Write a function that accepts any number of arguments & find largest of the number
;
// function findLargest(...args) {
//     if (args.length === 0) {
//         return "No numbers provided";
//     }
//     return Math.max(...args);
// }

// console.log(findLargest(5, 10, 3, 8));  // Output: 10
// console.log(findLargest(-5, -10, -3, -8));  // Output: -3
// console.log(findLargest());  // Output: No numbers provided

// 12.	Write a function that calculates the area of a rectangle.
// A = width * height

// function rectangel(width,height){
//  let area=width*height
//  console.log(Shpae);
 
// }
// rectangel(400,300);
  

// 13.	Write a function that receives an array & returns the sorted array.

// function sortArry(arry){
//        let result= arry.sort();
//        console.log(result)
// }
//  sortArry([45,86,96,75]);
//   Q14
// function sum(arry){
//     let result= arry.reduce((accumulator, currentValue) => accumulator+currentValue );
//     console.log(result)

// }
// sum([45,85,99,45]);// answer is 274 