// 1.Write a function to check if a given number is prime

function isPrime(num) {
    for (let i = 3; i * i <= num; i+=2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(101));



// 2.Write a function to find the largest element in an array

function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

console.log(findLargest([115, 101, 29, 98, 145, 278, 10]));



// 3.Write a function to find the second largest element in an array

function findSecondLargestElement(array) {
    if (array.length < 2) {
        return null;
    }

    let largest = array[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i];
        }
    }

    return secondLargest !== -Infinity ? secondLargest : null;
}

console.log(findSecondLargestElement([115, 101, 29, 98, 145, 278, 10]));



// 4.Write a function to find the nth Fibonacci number using iteration

function fibonacci(n) {
    if (n < 0) {
        return null;
    }

    let first = 0;
    let second = 1;

    for (let i = 2; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
}
console.log(fibonacci(12));


// 5.Write a function to calculate the factorial of a number using iteration

function factorial(n) {
    if (n < 0) {
        return 1;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));