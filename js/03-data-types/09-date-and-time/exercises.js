// TODO: Current Date
function currentDate() {
    const currentDateTime = new Date();

    let year = currentDateTime.getFullYear();
    let month = currentDateTime.getMonth() < 10 ?
                ('0' + currentDateTime.getMonth()):(currentDateTime.getMonth());
    let day = currentDateTime.getDate() < 10 ? 
            ("0"+currentDateTime.getDate()):(currentDateTime.getDate());

    const today = `${day}/${month}/${year}`;

    console.log("Today is: \n" + today);
}

currentDate();

// TODO: Current Time

function currentTime() {
    const currentDateTime = new Date();

    console.log("It's actually:");
    console.log(`${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`);
}

currentTime();

// TODO: More information about current date

function dateNow() {
    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const DAYS = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const date = new Date();

    const year = date.getFullYear();
    const month = MONTHS[date.getMonth()];
    const day = date.getDate();
    const weekday = DAYS[date.getDay()];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {year, month, day, weekday, hours, minutes, seconds};
}

console.log("Date infos:", dateNow());

// TODO: Name of day
/**
 * Display current day
 * @param {Date} date : date objet
 * @return {string} : current day name
 */
function displayDay(date) {
    const DAYS = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    return DAYS[date.getDay()];
}

console.log( "Today is " + displayDay(new Date()));

// TODO: Calculate age

/**
 * Calculate a person’s age in years based on their birthdate.
 *
 * @param {Date} birthDate - The person’s date of birth.
 * @returns {number} The person's current age in full years.
 * @throws {Error} If the birthdate is the future.
 */
function calculateAge(birthDate) {
    const now = new Date();

    if (now.getTime() - birthDate.getTime() < 0) {
        throw Error("Birth date is invalid");
    }

    let age = now.getFullYear() - birthDate.getFullYear();

    const hasHadBirthThisYear =
        now.getMonth() > birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() && now.getDate() === birthDate.getDate());

    if (!hasHadBirthThisYear) {
        age--;
    }

    return age;
}

console.log(calculateAge(new Date("1996-08-03")));