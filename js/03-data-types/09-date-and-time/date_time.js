/*
Date and time
*/

// Create a new Date object
let currentDate = new Date();
console.log(currentDate);

let jan01_1970 = new Date(0);
console.log(jan01_1970);

// Add 24h to 1970/01/01 UTC+0
console.log(new Date(jan01_1970.getMilliseconds() + 24 * 3600 * 1000));

// Access Date Components
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();

console.log(`Today: ${currentYear}/${currentMonth}/${currentDay}`);

// Date to number, date diff

const students = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Koné",
    age: 16,
    class: "3ème A",
    grades: {
      mathematics: 18,
      french: 15,
      english: 17,
      physics: 16,
      history: 14
    }
  },
  {
    id: 2,
    firstName: "Bernard",
    lastName: "Traoré",
    age: 15,
    class: "3ème A",
    grades: {
      mathematics: 12,
      french: 13,
      english: 15,
      physics: 11,
      history: 16
    }
  },
  {
    id: 3,
    firstName: "Carine",
    lastName: "Yao",
    age: 16,
    class: "3ème A",
    grades: {
      mathematics: 19,
      french: 18,
      english: 17,
      physics: 20,
      history: 18
    }
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Ouattara",
    age: 15,
    class: "3ème B",
    grades: {
      mathematics: 9,
      french: 11,
      english: 13,
      physics: 10,
      history: 12
    }
  },
  {
    id: 5,
    firstName: "Emma",
    lastName: "Kouassi",
    age: 16,
    class: "3ème B",
    grades: {
      mathematics: 14,
      french: 16,
      english: 18,
      physics: 15,
      history: 17
    }
  }
];

const calculateMean = (grades) => {
    const sum = Object.values(grades)
                .reduce((tot, val) => tot + val, 0);
    return Math.round(sum / Object.values(grades).length, 2);
    
}

let start = new Date();
const studentsWithMean = students.map((student) => {
    return {
        fullname: student.firstName + " " + student.lastName,
        age: student.age,
        classGrade: student.class,
        mean: calculateMean(student.grades)
    }
});
console.log("Students with mean:", studentsWithMean);
let end = new Date();

console.log( `The loop took ${end - start} ms` );


// TODO: Show a weekday
/**
 * Show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 
 * @param {Date} date 
 * @returns {string}
 */
function getWeekDay(date) {
  const WEEKDAYS = ["MO","TU","WE","TH","FR","SA","SU"]

  return WEEKDAYS[date.getDay()];
}