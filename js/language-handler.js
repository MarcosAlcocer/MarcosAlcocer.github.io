//lang_dependant_text stores an array with all the elements to wich their "innerHTML" is language dependant, that is all the elements that contain text that gets translated
var lang_dependant_text = document.getElementsByClassName("lang");
function setLanguage(lang) {
    var requestLanguage = new XMLHttpRequest();
    requestLanguage.open('GET', 'assets/lang/'+lang+'.json', true);
    requestLanguage.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            console.log("Success!");
            var data = JSON.parse(this.response);
            console.log(data);
            for (let i = 0; i < lang_dependant_text.length; i++) {
                lang_dependant_text[i].innerHTML = data[lang_dependant_text[i].id];
            }
        }
        else {
            console.log("We reached our target server, but it returned an error");
        }
    };
    requestLanguage.onerror = function() {
        console.log("There was a connection error of some sort");
    };
    requestLanguage.send();    
}