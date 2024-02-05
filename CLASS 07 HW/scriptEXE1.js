fetch ('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
.then(response => response.json())
.then (result => {
console.log("1", result); //api log test

let students = result;

// All students with an average grade higher than 3
let avgGradeHigherThan3 = result.filter(student => student.averageGrade > 3);
console.log("2", avgGradeHigherThan3);


// All female student names with an average grade of 5
let femalesWith5 = result.filter(student => student.gender === "Female" && student.averageGrade === 5).map (student => student.firstName);
console.log(femalesWith5);


//All male student full names who live in Skopje and are over 18 years old
let maleStudentSkopje18 = result.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18).map (student => student.firstName + student.lastName);
console.log(maleStudentSkopje18);


// The average grades of all female students over the age of 24
let avgGradesFemaleOver24 = result.filter(student => student.gender === 'Female').map (student => student.averageGrade);
console.log(avgGradesFemaleOver24);


// All male students with a name starting with B and average grade over 2
let maleNameBavgGradeOverTwo = result.filter(student => student.averageGrade > 2 && student.gender === 'Male').map (student => student.firstName[0]);
console.log(maleNameBavgGradeOverTwo);


// Student emails of all female students with age between 20 and 30 years, ordered ascending
let emailsFemaleBTW20and30ascending = result.filter(student => student.gender === 'Female' && student.age >= 20 && student.age <= 30).sort ((a, b) => a.age - b.age).map (student => student.email);
console.log(emailsFemaleBTW20and30ascending);


// Students full names of students above 40, ordered descending
let fullNamesAbove40descenting = result.filter(student => student.age > 40).map (student =>student.firstName + student.lastName).sort ((a, b) => b.age - a.age);
console.log(fullNamesAbove40descenting);


// Count of students using google mail
let googleUsers = result.filter(student => student.email.includes('google'));
console.log(googleUsers);


// The average age of female students living in Skopje
let avgAgeFemaleSkopje = result.filter(student => student.gender === 'Female' && student.city === 'Skopje');
//average age ne mozam da uspeam da go napravam ne znam zashto. Koristam .reduce funkcija, no ne mi izlaga
console.log(avgAgeFemaleSkopje);

});