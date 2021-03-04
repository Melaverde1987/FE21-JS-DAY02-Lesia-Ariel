// basic 1 way1
function crystalGazer1(jobTitle, location, partnersName, numberChildren)
{
      console.log('You will be a ' + jobTitle + ' in ' + location + ' and married to ' + partnersName + ' with ' + numberChildren + ' children.');
}

crystalGazer1('Maurer', 'Linz', 'Groß', 7);


// basic 1 way2
function crystalGazer2(jobTitle, location, partnersName, numberChildren)
{
      console.log(`You will be a ${jobTitle} in ${location} and married to ${partnersName} with ${numberChildren} children.`);
}

crystalGazer2('Pfleger', 'Wien', 'Klein', 14);

// basic 2 way1
function ageCalculator(birthYear, currentYear)
{
    let age1 = currentYear - birthYear;
    let age2 = currentYear - birthYear - 1;
    console.log('You are either ' + age1 + ' or ' + age2 + '.'); 
}

ageCalculator(2000, 2021);

// basic 2 way2
function ageCalculator(birthYear, currentYear)
{
    let age1 = currentYear - birthYear;
    let age2 = currentYear - birthYear - 1;
    console.log(`You are either ${age1} or ${age2}.`); 
}

ageCalculator(1980, 2021);

// basic 3 
function birthDate(birthYear)
{
    var d = new Date();
    console.log(d);
    var currentYear = d.getFullYear();
    let age1 = currentYear - birthYear;
    let age2 = currentYear - birthYear - 1;
    console.log(`You are either ${age1} or ${age2}.`); 
}

birthDate(1990);

// basic 4
function degreeRadian (degree)
{
    return degree * (3.14 / 180);
    
}

console.log(`${degreeRadian(90)} radiants`);



// basic 5
function calculation(width, height, depth)
{
    let area = width * height;
    let volume = width * height * depth;
    return [area, volume];
}

// console.log(`The area of the box is: ${calculation(5, 2, 10)[0]}\n, The area of the box is: ${calculation(2, 2, 10)[1]}`);

var result = calculation(3,3,10);
console.log(`The area of the box is: ${result[0]}, \nThe area of the box is: ${result[1]}`);

/*
! like this down the same exercise is more cleaner:
*/
// var result = calculation(3,3,10);
// console.log(result[0], result[1]);

