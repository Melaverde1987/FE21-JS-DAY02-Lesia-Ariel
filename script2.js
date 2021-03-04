function countTime(minutes) {
    const hours = 60;

    if (minutes >= hours) {
        var intTime = parseInt(minutes / hours);
        var minutes = minutes - intTime * hours;
        document.getElementById("box3").innerHTML = ('It is ' + intTime + ' hour(s) and ' + minutes + ' minute(s)');
    }
}

var number1 = countTime(200);