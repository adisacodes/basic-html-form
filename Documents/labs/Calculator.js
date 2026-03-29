let history = [];

function addToHistory(a, b, operator,result) {
    const calculation = {
        operands: [a, b],
        operator: operator,
        result: result
    };

    history.push(calculation);
}

    function addAB(a, b) {
        const result = a+b;
        addToHistory(a, b, "+" , result);
        return result;
    }
    console.log("Addition",addAB(5,3));


function subtractAB(a, b) {
    const result =a-b;
    addToHistory(a, b, "-" , result);
    return result;
}
console.log("Subtraction",subtractAB(10,4));

function multiplyAB(a , b) {
    const result = a * b;
    addToHistory(a, b, "*" ,result);
    return result;
}
console.log("Multiplication",multiplyAB(6,7));

function divideAB(a, b) {
    if(b === 0) {
        console.log("Error: division by zero!");
        return null;
    }
    const result = a / b;
    addToHistory(a, b, "/" , result);
    return result;

}
console.log("Division",divideAB(20,5));
console.log("Division by zero",divideAB(5,0));

function viewHistory() {}
    if(history.length === 0) {
        console.log("No calculations yet.");
} else {
    console.log("Calculation History:");
    history.forEach((calculation, index) => {
        console.log((index + 1) + ". " + calculation.operands[0] + " " + calculation.operator + " " + calculation.operands[1] + " = " + calculation.result);
    });
}
