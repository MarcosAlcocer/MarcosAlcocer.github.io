/*
eventID should be a number
eventDate should be an interger containing the date of the item expressed in "Unix Time" terms
eventName should be a string

*/

//vvv Required Global variables
var eventItemsSorted = [];/* used to store the eventItems objects grouped by day */
var eventDaysList = [];/* used to store a list of all the days that with events associated with them*/


var eventItems = [
    {eventID: 13, eventDate: 1020778200000, eventName: "This is the first event"},
    {eventID: 14, eventDate: 1208377800000, eventName: "Another event"},
    {eventID: 15, eventDate: 1473526800000, eventName: "Event text Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero nisi officiis "},
    {eventID: 14, eventDate: 1594470600000, eventName: "This is an example of what text looks like"},
    {eventID: 14, eventDate: 1594513800000, eventName: "This is another example of what more text looks like"},
    {eventID: 14, eventDate: 1594521840000, eventName: "This is just gibberish esffgtb rnbe eui wio h veu af uae aev b eafa bueu iai aefb aek  af ue vakek "},
    {eventID: 16, eventDate: 1609437600000, eventName: "Eum libero nisi officiis cum, asperiores aliquam, pariatur a error dolor incidunt consequuntur, excepturi sit molestias similique recusandae voluptates sed."},
    {eventID: 17, eventDate: 1609470000000, eventName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero nisi officiis cum, asperiores aliquam, pariatur a error dolor incidunt consequuntur, excepturi sit molestias similique recusandae voluptates sed."},
    {eventID: 18, eventDate: 1610748000000, eventName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero nisi officiis cum, asperiores aliquam, pariatur a error dolor incidunt consequuntur, excepturi sit molestias similique recusandae voluptates sed."},
    {eventID: 19, eventDate: 1610757840000, eventName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero nisi officiis cum, asperiores aliquam, pariatur a error dolor incidunt consequuntur, excepturi sit molestias similique recusandae voluptates sed."},
    {eventID: 20, eventDate: 1610795772000, eventName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero nisi officiis cum, asperiores aliquam, pariatur a error dolor incidunt consequuntur, excepturi sit molestias similique recusandae voluptates sed."}
];

//vvvvv successGettingEventsData() should be executed after successfully requesting the eventItems data
function successGettingEventsData() {

    eventItems.forEach(element => {
        element.eventDate = new Date(element.eventDate);
        if (!eventItemsSorted[element.eventDate.toDateString()]) {
            eventItemsSorted[element.eventDate.toDateString()] = [];
        }
        eventItemsSorted[element.eventDate.toDateString()].push(element);
    });

    eventDaysList = Object.keys(eventItemsSorted);/*contains a list of all the days that have events associated with them*/

    printEvents();
    weekConstructor();
    printCalendarDayLetters();
    document.getElementById('week_list_day_1st').click();
}
successGettingEventsData();