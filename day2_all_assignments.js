//-----------------------------------------------------------> Assignment 1 <----------------------------------------------------

// A JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero

function checkNumber(num) {
    if (num > 0) {
        console.log("Number is positive");
    } else if (num < 0) {
        console.log("Number is Negative");
    } else {
        console.log("Number is 0");
    }
}

checkNumber(4)

//-----------------------------------------------------------> Assignment 2 <----------------------------------------------------

// Count a Factorial of a number using loops

function fact(num) {
    let j = num;
    if (num == 0 || num == 1) {
        console.log("The factorial of the ", num, " is 1");
    } else {
        for (let i = num - 1; i > 0; i--) {

            num = num * i;

        }
    }
    console.log("The factorial of the ", j, " is ", num);
}
fact(4)

//-----------------------------------------------------------> Assignment 3 <----------------------------------------------------

// Function that takes two number as a parameter and returning a larger one

function largerenum(num1, num2) {
    if (num1 > num2) {
        console.log(num1, " is larger");
    } else {
        console.log(num2, " is larger");
    }
}

largerenum(4, 8)

//-----------------------------------------------------------> Assignment 4 <----------------------------------------------------

// A JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not.

function isPalindrome(str) {

    const cleanedStr = str.toLowerCase();


    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("abcdcba"));

//-----------------------------------------------------------> Assignment 5 <----------------------------------------------------

// A JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer.

function isPrime(n) {

    if (n == 1 || n == 0) return false;

    for (let i = 2; i < n; i++) {

        if (n % i == 0) return false;
    }
    return true;
}


var N = 20;

for (var i = 1; i <= N; i++) {
    // check if current number is prime
    if (isPrime(i)) {
        console.log(i);
    }
}

//-----------------------------------------------------------> Assignment 6 <----------------------------------------------------

// A JavaScript function that simulates a simple calculator. 

function calculator(num1, num2) {
    let num3 = (num1 + num2);
    console.log("Addition of two number is ", num3);
    let num4 = (num1 - num2);
    console.log("Subtraction of two number is ", num4);

    let num5 = (num1 * num2);
    console.log("Multiplication of two number is ", num5);

    let num6 = (num1 / num2);
    console.log("Division of two number is ", num6);

}

calculator(8, 2)

//-----------------------------------------------------------> Assignment 7 <----------------------------------------------------

// A javascript code to count the number of vowels in the String

function vowelcount(str) {

    let lowerstr = str.toLowerCase();

    let countvowel = 0;

    for (let i = 0; i < lowerstr.length; i++) {
        const char = lowerstr[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            countvowel++;
        }
    }
    return countvowel;
}
console.log("The Number of vowel is ", vowelcount("hello"));

//-----------------------------------------------------------> Assignment 8 <----------------------------------------------------

// check wether the number is perfect No. or not

function perfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % 1 === 0) {
            sum = sum + i;
        }
    }
    if (sum === num) {
        console.log("yes! the no. you entered is perfect no.");
    } else {
        console.log("No! the no. is not a perfect no.");
    }
}

perfectNumber(8);

//-----------------------------------------------------------> Assignment 9 <----------------------------------------------------

// writhe fibonacci sequence of the No.

function fibonnaciSequence(num) {
    if (num < 0) {
        console.log("the no. is Negative");
        return;
    }

    let first = 0;
    let last = 1;

    console.log("Fibonacci Sereis");
    while (first <= num) {
        console.log(first);
        const nextNumber = first + last;
        first = last;
        last = nextNumber;
    }

}
fibonnaciSequence(10)

//-----------------------------------------------------------> Assignment 10 <----------------------------------------------------

// Multiplication table

function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log("Multiplication table of", num, " * ", i, "= ", (num * i));
    }
}

table(4)