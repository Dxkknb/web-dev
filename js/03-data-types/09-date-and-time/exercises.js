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