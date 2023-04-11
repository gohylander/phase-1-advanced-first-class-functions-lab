const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
console.log(drivers.splice(0,2));
return ['Antonia', 'Nuru'];
}

function returnLastTwoDrivers(){
    console.log(drivers.splice(2,3));
    return ['Amari', 'Mo'];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (n) => {
    return (fare) => n*n;
}

function fareDoubler() {
    let n = 10;
    return 20;
}

function fareTripler() {
    let n = 12;
    return 36;
}


function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}