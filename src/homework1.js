/* 1- Write a function that you can send as many parameters as you want with JavaScript.
 For each number you send to this function, write whether it is prime or not as the output.*/

function isItPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let isPrime = true;
      const parameter = numbers[i];
      for (let i = 0; i < parameter + 1; i++) {
        if (parameter % i == 0 && i != 1 && i != parameter) {
          isPrime = false;
        }
      }
      if (isPrime == true) {
        console.log("Number: " + parameter + " is a prime number.");
      } else {
        console.log("Number: " + parameter + " is not a prime number.");
      }
    }
  }
  
  isItPrime(2, 17, 82, 71, 13, 14);


/* Write a program to find whether two numbers entered as parameters are friend numbers.
 (If two numbers are equal to the sum of their divisors excluding each other, 
  these numbers are called friend numbers; exp: 220 and 284)*/

function amicableNumbers(number1,number2) {
  let Count1 = 0;
  let Count2 = 0;
  for (let i = 0; i < number1; i++) {
      if (number1 % i == 0) 
      {
          Count1+=i
      }
  }

  for (let j = 0; j < number2 ; j++) {
      if (number2 % j == 0) 
      {
          Count2+=j
      }
  }

  if ((number1 == Count2) && (number2 == Count1))
  {
      console.log(number1 + " and " + number2 + " are the friend numbers.");
  }
  else
  {
      console.log(number1 + " and " + number2 + " aren't the friend numbers.");
  }
}
amicableNumbers(220,284)


/* Write a program that lists all perfect numbers up to 1000.
(A number whose sum of all positive divisors excluding itself is equal to 
  itself is called a perfect number; exp: 6) */

function perfectNumbers() {
  let perfectArray = []
for (let i = 1; i < 1000; i++) {
  let sum = 0
  for (let j = 1; j < i; j++) {
      if (i % j == 0) 
      {
          sum = sum + j
      }
  }
  if (sum == i)
  {
      perfectArray.push(i)
  }
}
console.log(...perfectArray)

}
perfectNumbers()



// Write a program that lists all prime numbers up to 1000.

function primeNumbers() 
{
  for (let i = 1; i <=1000; i++) {
      let isPrime = true
      for (let j = 2; j < i; j++) {
          if (i % j == 0)
          {
              isPrime = false
              
          }
      }
      if (isPrime == true)
      {
          console.log(i + " is a prime number.");
      }
      
  }
}
primeNumbers()