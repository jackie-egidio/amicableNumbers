// amicable
// purpose: to find if two numbers are amicable
// paramters: none; grabs necessary numbers from HTML form
// returns: none
function amicable() {
    // grabs numbers from HTML form
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');

    // creates arrays to save factors
    var factors1 = Array();
    var factors2 = Array();

    // calls factors fuction to find factors
    factors1 = factors(factors1, number1);
    factors2 = factors(factors2, number2);

    toAdd1 = add(factors1);
    toAdd2 = add(factors2);

    // compares the two sums to see if they're amicable
    var isAmicable;
    if (toAdd1 == number2.value && toAdd2 == number1.value) {
        isAmicable = true;
    } else {
        isAmicable = false;
    }

    printAmicable(number1, number2, isAmicable);
    printFactors(factors1, factors2);
}

// factors
// purpose: gets factors of a number; stores them in a given array
// parameters: array (to put factors into), number to find factors of
// returns: array with factors
function factors(factors, num) {
    for (var i = 0; i < num.value; i++) {
        // adds factors of num to the array parameter
        if (num.value % i == 0) factors.push(i);
    }

    return factors;
}

// add
// purpose: adds all factors of a number
// parameters: array of factors of the number
// returns: sum of the factors
function add(factors) {
    var sum = 0;
    for (var i = 0; i < factors.length; i++) {
        sum += factors.at(i);
    }

    return sum;
}

// printAmicable
// purpose: to print if the two numbers are amicable
// parameters: two numbers and a bool that tells whether they're amicable
// returns: none
function printAmicable(num1, num2, isAmicable) {
    // prints if numbers are amicable
    if (isAmicable) {
        const div = document.getElementById('amicable');
        div.innerHTML = "The numbers " + num1.value + " and " + num2.value + " are amicable";
    } else { // prints if numbers aren't amicable
        const div = document.getElementById('amicable');
        div.innerHTML = "The numbers " + num1.value + " and " + num2.value + " are not amicable";
    }
}

// printFactors
// purpose: prints out the array holding the factors of a number
// parameters: an array of nums
// returns: none
function printFactors(factors1, factors2) {
    const factorsDiv = document.getElementById('factors');
    
    // prints out all the factors of first number
    factorsDiv.innerHTML = "First number's factors: ";
    for (var i = 0; i < factors1.length; i++) {
        factorsDiv.innerHTML += factors1.at(i) + " ";
    }
    
    // prints out all the factors of the second number
    factorsDiv.innerHTML += "<br />Second number's factors: ";
    for (var i = 0; i < factors2.length; i++) {
        factorsDiv.innerHTML += factors2.at(i) + " ";
    }
}
