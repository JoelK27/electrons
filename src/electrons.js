function Electrons() {}

Electrons.prototype.add = function(string_numbers) {
    let numbers = string_numbers.split(',').map(Number);
    let sum = numbers.reduce((total, num) => {
        if (num % 2 === 0) {
            total += num;
        }
        return total;
    }, 0);

    // Konvertiere die Summe in einen String und gib sie zurück
    return sum.toString();
}

