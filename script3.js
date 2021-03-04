function countTime(seconds) {
    const week = 604800;
    const day = 86400;
    const hour = 3600;
    const minute = 60;

    var intWeek = parseInt(seconds / week);
    if (seconds >= week) {
        var seconds = seconds - intWeek * week;

        if (seconds == 0) {
            return document.getElementById("box").innerHTML = ('It is exactly ' + intWeek + ' week(s)');
        }
    }

    var intDay = parseInt(seconds / day);
    if (seconds >= day) {
        var seconds = seconds - intDay * day;

        if (seconds == 0) {
            return document.getElementById("box").innerHTML = ('It is exactly ' + intDay + ' day(s)');
        }
    }

    var intHour = parseInt(seconds / hour);
    if (seconds >= hour) {
        var seconds = seconds - intHour * hour;

        if (seconds == 0) {
            return document.getElementById("box").innerHTML = ('It is exactly ' + intHour + ' hour(s)');
        }
    }

    var intMinute = parseInt(seconds / minute);
    if (seconds >= minute) {
        var seconds = seconds - intMinute * minute;

        if (seconds == 0) {
            return document.getElementById("box").innerHTML = ('It is exactly ' + intMinute + ' minute(s)');
        }
    }

    document.getElementById("box").innerHTML = ('It is ' + intWeek + ' week(s) ' + intDay + ' day(s) ' + intHour + ' hour(s) ' + intMinute + ' minute(s) ' + seconds + ' seconds');

}

var number1 = countTime(2000000);