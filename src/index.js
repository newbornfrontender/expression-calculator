function eval() {
    // Do not use eval!!!
    return;
}

const check = (e) => {
    let brackets = [];
    let stack = [];
    let map = {')': '('};

    e.replace(/[\(\)]/g, (m) => m && brackets.push(m));

    for (let i = 0, {length} = brackets; i < length; i++) {
        if ([')'].includes(brackets[i])) {
            if (stack.pop() !== map[brackets[i]]) return false;
        } else {
            stack.push(brackets[i])
        }
    }
  
    return !stack.length;
};

function expressionCalculator(expr) {
    if (!check(expr)) throw TypeError('ExpressionError: Brackets must be paired');

    const result = new Function(`return ${expr}`)();
    const isDivideByZero = result == Infinity || expr.match('/ 0') || expr.match('/0');

    if (isDivideByZero) throw new TypeError('TypeError: Division by zero.');

    return result;
}

module.exports = {
    expressionCalculator
}