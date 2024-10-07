// JavaScript
let hours = document.querySelector(".hours");
let minuts = document.querySelector(".minuts");
let second = document.querySelector(".second");
let period = document.querySelector(".period");

let month = document.querySelector(".month-name");
let dayName = document.querySelector(".day-name");
let dayNumber = document.querySelector(".day-number")
let year = document.querySelector(".year")
let formatButton = document.querySelector(".menu-btn")
let menuList = document.querySelector(".menu-list")
let activeMenu = document.querySelector("#active-menu")

let formatSwitchBtn = document.querySelector(".clock-format-switch-btn")
formatValue = formatSwitchBtn.getAttribute("data-format");

formatSwitchBtn.addEventListener("click", () =>  {  
    formatSwitchBtn.classList.toggle("active")
    formatValue = formatSwitchBtn.getAttribute("data-format");
    if (formatValue === "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else{
        formatSwitchBtn.setAttribute("data-format", "12");
    }

});


// Clock Function 
function clock () {
    let today = new Date ();
    let currentHours = today.getHours();
    let currentMinuts = today.getMinutes();
    let currentSecond = today.getSeconds();
    let currentPeriods = "PM"

    //set the time periods (AM/PM)
    if (currentHours <= 12) {
        currentPeriods = "AM"
    }

    // set the 12-hours clock 
    // formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12") {
        currentHours = currentHours > 12 ? currentHours % 12 : currentHours
    }

    // add the 0 for the value lower than 10
    if (currentHours < 10){
        currentHours = "0" + currentHours
    }

    if (currentMinuts < 10 ) {
        currentMinuts = "0" + currentMinuts
    }

    if (currentSecond < 10) {
        currentSecond = "0" + currentSecond
    }

    hours.innerHTML = currentHours
    minuts.innerHTML = currentMinuts
    second.innerHTML = currentSecond
    period.innerHTML = `${currentPeriods}`
}

let updateClock = setInterval(clock, 1000)


formatButton.addEventListener("click", () => {
    menuList.classList.toggle("active")
})

document.addEventListener("click", ()=> {
    if(event.target !== activeMenu){
        menuList.classList.remove("active")
    }
})



// date in javascript

let today = new Date();
const currentDayNumber = today.getDate()
const currentYear = today.getFullYear()
const currentDayName = today.toLocaleString("default", {weekday: "long"});
const currentMonthName = today.toLocaleString("default", {month: "short"});

month.innerHTML = currentMonthName
dayName.innerHTML = currentDayName
dayNumber.innerHTML = currentDayNumber
year.innerHTML = currentYear

