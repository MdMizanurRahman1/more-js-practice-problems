function add(num1, num2) {
    let total = num1 + num2;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please enter a valid number';
    }
    return total;
}
const number = add('10', 15);
console.log(number);