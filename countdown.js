var countdownGenerator = function(x) {
    var temp = x;
    return function() {
        if (temp < 0) {
            console.log("bro flights gone.")
            temp--
        }
        if (temp == 0) {
            console.log("Blast off!")
            temp--
        }
        if (temp !== 0 && temp >= 0) {
            console.log(`T-minus ${temp}...`)
            temp--
        }
    };
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!