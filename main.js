//assignment of Arrays
//QUESTION#1 
//create an array named fruits that contains the following strings elements:"apple","banana","mango","orange".
// let fruits:string[]=["apple","banana","mango","orange"];
// console.log(fruits);
//QUESTION#2
//eclare an array named numbers that can contain only number elements and initialize it with the value 10,20,30 and 40 
// let numbers:number[]=[10, 20, 30, 40];
// console.log(numbers);
//QUESTION#3
//access the third element of fruits array and assign it to a varialbe named thirdfruit
// let fruits: string[]=["apple","banana","mango","orange"];              // "apple"0,"banana"1,"mango"2,"orange"3
// let thirdFruit: string=fruits[2]                                       //access the third element (index 2)
// console.log(thirdFruit);                                               //output: mango 
// note that array indices start at 0,so the third element is accessed at index
//QUESTION#4   ("FOR REPLACE ANY VALUE ")
//change the second element of the numbers array to 25 
//   let numbers: number[]=[10, 20, 30, 40];
//   numbers[1]= 25
//   console.log(numbers,"numbers");      
//QUESTION#5        ("USE PUSH TO ADD SOMETHING IN THE END")
//add the element "grapes" to the end of the fruit array ussing the method
// let fruits: string[]=["apple","banana","mango","orange"];
// fruits.push('grapes')
// console.log(fruits,"fruits");
//QUESTION#6
//Remove the last element from the fruits array using the method and assign it to a variable named lastFruit
// let fruits: string[] = ["cherry","pear","strawberry","peach"];
//  let lastFruit = fruits.pop();          // remove the last element
// console.log(lastFruit);
//QUESTION#7
//Remove the first element from the fruits array using the method and assign it to a variable named firstFruit
// 
//  let fruits: string[] = ["cherry","pear","strawberry","peach"];
//   let firstFruit = fruits.shift();              // remove the first element
//   console.log(firstFruit);
//QUESTION#8
//Add the element "kiwi" to the beginning of the fruits array using the method
// let fruits:string[] = ["cherry","pear","strawberry","peach"];
// fruits.unshift("kiwi")
// console.log(fruits)
//QUESTION#9
//Remove 2 elements from the fruits array starting from index 1 using the method
// let fruits: string[] = ["cherry","pear","strawberry","peach"];
// fruits.splice(1 ,2)
// console.log(fruits);
//QUESTION#10
//Insert the elements "pineapple" and "pear" at index 2 of the fruits array using method
// let fruits: string[] = ["cherry","kiwi","strawberry","peach"];
// fruits.splice(2 , 0, 'pineapple' , 'pear')              //insert at index 2
// console.log(fruits);
//QUESTION#11
//Create a new array named citrusfruits that contains the first two elements of the fruits array using method
// let fruits: string[] = ["cherry","kiwi","strawberry","peach" ,"mango"];
// let citrusFruits: string[] = fruits.slice(0, 2);      //for creat a new array with first two elements 
// console.log(citrusFruits);
//QUESTION#12
//Create a new array named lastTwoFruits that contains the last two elements of the fruits array using method
var fruits = ["cherry", "kiwi", "strawberry", "peach", "mango"];
var lastTwoFruits = fruits.slice(-2); //for create a new array with last two elements 
console.log(lastTwoFruits);
