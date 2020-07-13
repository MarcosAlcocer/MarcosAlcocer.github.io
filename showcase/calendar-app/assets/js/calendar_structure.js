//This creates html tables used for the calendar

function createCalendarTables() {
    let tables = document.getElementsByClassName("calendar-table");

        
    let tableHTMLbody = "<tr>";
    for (let b = 0; b < 7; b++) {
        tableHTMLbody += "<td class='calendar-day-initial'></td>";
    }
    tableHTMLbody += "</tr>";

    for (let c = 0; c < 6; c++) {
        tableHTMLbody += "<tr>";
        for (let d = 0; d < 7; d++) {
            tableHTMLbody += "<td class='calendar-day-number calendar-day-number-inactive'>01</td>";
        }
        tableHTMLbody += "</tr>";
    }

    for (let a = 0; a < tables.length; a++) {
        tables[a].innerHTML += tableHTMLbody;
    }
}
createCalendarTables();