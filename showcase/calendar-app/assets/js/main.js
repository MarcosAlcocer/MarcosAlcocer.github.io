/*
Settings

The variable "language" sets the current language being used in the app, the supported values are:
"es": Sets the language to spanish
"en": Sets the language to english

*/
var language = "es";








/*
End of Settings
Other information:

Months and days of the week are 0 indexed, years and days of the month are 1 indexed.


*/





var weekDaysList = document.getElementsByClassName('week-list-day');


function pickDate(weekDay) {
    for (let i = 0; i < weekDaysList.length; i++) {
        weekDaysList[i].classList.remove("week-list-day-active");
        
    }
    weekDay.classList.add("week-list-day-active");
}
function goToDate(target) {

    try {
        let scrollpx = document.getElementById(target).offsetTop;
        window.scrollTo(0, scrollpx);
        document.getElementById('calendar_button').classList.remove("calendar-button-active");
        document.getElementById('calendarMenu').classList.add("calendar-menu-hidden");
    } catch (error) {
        //vvvRemoves the active state on all the days of the "week view"
        for (let i = 0; i < weekDaysList.length; i++) {
            weekDaysList[i].classList.remove("week-list-day-active");
        }
    }
    
}

function weekConstructor(date) {

    if (date) {
        var weekStartDay = new Date(date);
    }
    else{
        var weekStartDay = new Date();
    }


//This prints the week shown in the header
    let dayOfTheWeekIterator = weekStartDay;
    for (let i = 0; i < 7; i++) {
        let currentDay = stringFor.day[dayOfTheWeekIterator.getDay()][language];
        let currentDayLetter = currentDay.slice(0, 1);

    //Give the element the corresponding onclick function
        weekDaysList[i].setAttribute("onclick", "pickDate(this); goToDate('e_d_"+dayOfTheWeekIterator.getFullYear()+"_"+dayOfTheWeekIterator.getMonth()+"_"+dayOfTheWeekIterator.getDate()+"');");
    //Prints the letters on the "week days list" containter
        weekDaysList[i].firstElementChild.innerHTML = currentDayLetter;
    //Prints the numbers (date) on the "week days list" containter
        weekDaysList[i].lastElementChild.innerHTML = dayOfTheWeekIterator.getDate();
        
        dayOfTheWeekIterator.setDate(dayOfTheWeekIterator.getDate()+1);       
    }

//This fills out the calendar menu for the first time
    calendarConstructor(weekStartDay.getFullYear(), weekStartDay.getMonth());

}


function toggleCalendarVisibility(calendarButton) {
    document.getElementById('calendarMenu').classList.toggle("calendar-menu-hidden");
    calendarButton.classList.toggle("calendar-button-active");
}

function printCalendarDayLetters() {
    let calendarLetters = document.getElementsByClassName("calendar-day-initial");
    for (let i = 0; i < calendarLetters.length; i++) {

        let currentDay = stringFor.day[i%7][language];
        calendarLetters[i].innerHTML = currentDay.slice(0, 3)+".";
        
    }
}
var currentYearOnCalendar;
var currentMonthOnCalendar;
function calendarConstructor(year, month) {
    currentYearOnCalendar = year;
    currentMonthOnCalendar = month;
    let currentMonth = new Date(year, month);
    let previousMonth = new Date(year, month-1);
    let nextMonth = new Date(year, month+1);

    let calendarMonths = [previousMonth, currentMonth, nextMonth];

    let calendarDaySlots = document.getElementsByClassName("calendar-day-number");
    let calendarMonthNameSlots = document.getElementsByClassName("month-name-text");
    let calendarYearNameSlots = document.getElementsByClassName("month-year-text");

    for (let i = 0; i < calendarDaySlots.length; i++) {/*resets the calendar*/
        calendarDaySlots[i].innerHTML = "";
        calendarDaySlots[i].classList.add("calendar-day-number-inactive");
    }

    let onFirstLine = true;
    let currentCalendarDay = 1;
    for (let i = 0; i < calendarDaySlots.length; i++) {
        
        let currentCalendarMonth = Math.floor(i / (calendarDaySlots.length / calendarMonths.length));
        let currentMonthNumber = calendarMonths[currentCalendarMonth].getMonth();
        let currentMonthName = stringFor.month[currentMonthNumber][language];
        let currentYearNumber = calendarMonths[currentCalendarMonth].getFullYear();
        let currentMonthTotalDays = new Date(currentYearNumber, currentMonthNumber+1, 0).getDate();

    //prints the year and name of the current month
        calendarMonthNameSlots[currentCalendarMonth].innerHTML = currentMonthName;
        calendarYearNameSlots[currentCalendarMonth].innerHTML = currentYearNumber;

    //prints the days (numbers) of the current month in an orderly fashion
        if (onFirstLine) {
            i = i+calendarMonths[currentCalendarMonth].getDay();
            onFirstLine = false;
        }
        calendarDaySlots[i].innerHTML = currentCalendarDay;
        if (eventDaysList.indexOf(new Date(currentYearNumber, currentMonthNumber, currentCalendarDay).toDateString()) != -1) {
            calendarDaySlots[i].classList.remove("calendar-day-number-inactive");
        }
        calendarDaySlots[i].setAttribute("onclick", "goToDate('e_d_"+currentYearNumber+"_"+currentMonthNumber+"_"+currentCalendarDay+"');");

        if (currentCalendarDay == currentMonthTotalDays) {
            currentCalendarDay = 0;
            onFirstLine = true;
            i = ((calendarDaySlots.length / calendarMonths.length)*(currentCalendarMonth + 1))-1;
        }
        currentCalendarDay++;
    }
}
function navCalendar(direction, directionNum) {
    console.log(direction);
    document.getElementById('calendar_menu_months_container').classList.add("calendar-menu-months-container-"+direction);
    currentMonthOnCalendar = currentMonthOnCalendar+directionNum;

    setTimeout(function(){
        calendarConstructor(currentYearOnCalendar, currentMonthOnCalendar)
        document.getElementById('calendar_menu_months_container').classList.remove("calendar-menu-months-container-previous");
        document.getElementById('calendar_menu_months_container').classList.remove("calendar-menu-months-container-next");
    }, 600);
}

function printEvents() {
    let eventItemsContainer = document.getElementById('eventItemsContainer');
    let eventsInnerHTML = "";

    for (let i = 0; i < eventDaysList.length; i++) {
        let currentDayObject = eventItemsSorted[eventDaysList[i]][0].eventDate;

        eventsInnerHTML += "<div class='event-day' id='e_d_"+currentDayObject.getFullYear()+"_"+currentDayObject.getMonth()+"_"+currentDayObject.getDate()+"'>";
        eventsInnerHTML +=      "<p class='event-day-text'>"+currentDayObject.getFullYear()+" - "+stringFor.month[currentDayObject.getMonth()][language]+" "+currentDayObject.getDate()+" <span>"+stringFor.day[currentDayObject.getDay()][language]+"<span></p>";

        eventItemsSorted[eventDaysList[i]].forEach(element => {
            eventsInnerHTML +=  "<div class='event-item'>";
            eventsInnerHTML +=      "<table><tr>";
            eventsInnerHTML +=          "<td class='event-item-hour'>"+element.eventDate.getHours()+":"+element.eventDate.getMinutes()+" <span>hrs.</span></td>";
            eventsInnerHTML +=          "<td class='event-item-string'>"+element.eventName+"</td>";
            eventsInnerHTML +=      "</tr></table>";
            eventsInnerHTML +=  "</div>";
        });
        
        eventsInnerHTML +=      "<div class='bottom-spacer'></div>";
        eventsInnerHTML += "</div>";
        
    }
    eventItemsContainer.innerHTML = eventsInnerHTML;
}





