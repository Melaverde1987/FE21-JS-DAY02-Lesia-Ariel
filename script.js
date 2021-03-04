var text = (function ( someText ) {
    var firstLetter = someText.charAt(0);    // retuns the letter of 0 position
    var capText = firstLetter.toUpperCase(); // capitalize the letter
    var someText = someText.substring(1);    // returns text from 1 position
    document.getElementById("box").innerHTML = (capText + ' ' + someText); // write result
} ( 'i am a web developer' ));


function averageGrade(Math, Physics, English) {
    var sum = Math + Physics + English;
    var average = (Math + Physics + English)/3;

    document.getElementById("box2").innerHTML = (sum + '<br>' + average);
}

var person1 = averageGrade(5, 3, 1);