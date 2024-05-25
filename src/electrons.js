function Electrons() {}

Electrons.prototype.add = function(string_numbers) {
    let numbers = string_numbers.split(',').map(Number);
    let sum = numbers[0];

    if (numbers.length > 5) {
        for (let i = numbers.length - 1; i >= 0; i--) {
            if (numbers[i] % 2 === 1) {
                sum -= numbers[i];
            }
        }
    } else {
        sum = numbers.reduce((total, num) => {
            if (num % 2 === 0) {
                total += num;
            }
            return total;
        }, 0);
    }

    return sum.toString();
}