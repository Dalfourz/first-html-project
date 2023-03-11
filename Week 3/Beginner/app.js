function addition(num1, num2) {
    return (num1 + num2)
}

console.log(addition(3, 5));

function hoursIntoSeconds(hours) {
    return (hours * 3600)
}

console.log(hoursIntoSeconds(2));

function calcAreaOfTriangle(base, height) {
    return (base * height) * 0.5
}

console.log(calcAreaOfTriangle(20, 20));

function appendFrontend (string) {
    return string + 'Frontend'
}

console.log (appendFrontend('Apple'))

function sumGreaterThan100 (num1, num2) {
    if (num1 + num2 > 100) {
        return true
    }

    else {
        return false
    }
}

console.log (sumGreaterThan100(100,-50))

function lessThanOrEqualToZero(num1) {
    return num1 <= 0
}

console.log(lessThanOrEqualToZero(3))

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true))

function isNotZero(num) {
    return num !== 0 
}   

console.log(isNotZero(null))

function filterOutFalsy (num1, num2) {
    if (!num1) {
        return num1;
    }
    else {
        return num2
    }
}

console.log (filterOutFalsy(false, 100))

// or

function filterOutFalsy(num1, num2) {
    return (!num1) ? num1 : num2;
}

function arrLength (arr) {
    return arr.length
}

console.log (arrLength([1,2,3,4]));

function lastElem (arr) {
    return arr[arr.length -1];
}

console.log (lastElem([3, 2, 0, 6, 2]))

function arrSum (arr) {
    let sum = 0
    for (let i =0 ; i < arr.length; ++i)
    // this is how you loop through avery element in an array
    sum = sum + arr[i]
    return sum;
}

console.log (arrSum([2, 2,2]))