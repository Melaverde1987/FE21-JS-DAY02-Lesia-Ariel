function countTime(seconds) {
    const week = 604800;
    const day = 86400;
    const hour = 3600;
    const minute = 60;

    var intWeek = parseInt(seconds / week);
    if (week <= seconds) {
        var seconds = seconds - intWeek * week;

        if (seconds == 0) {
            document.getElementById("box").innerHTML = ('It is exactly ' + intWeek + ' week(s)');
        }
    }

    var intDay = parseInt(seconds / day);
    if (day <= seconds) {
        var seconds = seconds - intDay * day;

        if (seconds == 0) {
            document.getElementById("box").innerHTML = ('It is exactly ' + intDay + ' day(s)');
        }
    }

    var intHour = parseInt(seconds / hour);
    if (hour <= seconds) {
        var seconds = seconds - intHour * hour;

        if (seconds == 0) {
            document.getElementById("box").innerHTML = ('It is exactly ' + intHour + ' hour(s)');
        }
    }

    var intMinute = parseInt(seconds / minute);
    if (minute <= seconds) {
        var seconds = seconds - intMinute * minute;

        if (seconds == 0) {
            document.getElementById("box").innerHTML = ('It is exactly ' + intMinute + ' minute(s)');
        }
    }

    document.getElementById("box").innerHTML = ('It is ' + intWeek + ' week(s) ' + intDay + ' day(s) ' + intHour + ' hour(s) ' + intMinute + ' minute(s) ' + seconds + ' seconds');

}

var number1 = countTime(2000000);