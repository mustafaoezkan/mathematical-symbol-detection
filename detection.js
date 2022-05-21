const s = "(2-6)-6(3/5)*3/4+2/2+5-6-5";

const regEx = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

var result = regEx.test(s);

/// Control the expression 
function test(s) {
    console.log("%s geçerli mi? ", s);
}

test(s);

if (result) {
    console.log("%s geçerli bir ifade", s);
    var operators = [];
    var priorityOfOperators = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            operators.push(s[i]);
            priorityOfOperators.push("1");
        } else if (s[i] === ")") {
            operators.push(s[i]);
            priorityOfOperators.push("1.5");
        } else if (s[i] === "*") {
            operators.push(s[i]);
            priorityOfOperators.push("2");
        } else if (s[i] === "/") {
            operators.push(s[i]);
            priorityOfOperators.push("2.5");
        } else if (s[i] === "+") {
            operators.push(s[i]);
            priorityOfOperators.push("3");
        } else if (s[i] === "-") {
            operators.push(s[i]);
            priorityOfOperators.push("3.5");
        }

    }

    // Sort priorities of operators
    priorityOfOperators.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < priorityOfOperators.length; i++) {
        if (priorityOfOperators[i] === "1") {
            console.log("(");
        } else if (priorityOfOperators[i] === "1.5") {
            console.log(")");
        } else if (priorityOfOperators[i] === "2") {
            console.log("*");
        } else if (priorityOfOperators[i] === "2.5") {
            console.log("/");
        } else if (priorityOfOperators[i] === "3") {
            console.log("+");
        } else if (priorityOfOperators[i] === "3.5") {
            console.log("-");
        }
    }
} else {
    console.log("Geçersiz ifade");
}