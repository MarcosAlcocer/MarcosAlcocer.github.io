//lang_dependant_text stores an array with all the elements to wich their "innerHTML" is language dependant, that is all the elements that contain text that gets translated
var lang_dependant_text = document.getElementsByClassName("lang");

var supported_languages = ["es-MX", "en-US", "pt-PT", "ru-RU"];



function setLanguage(lang) { /*prints the selected ('lang') version of the text*/
    var requestLanguage = new XMLHttpRequest();
    requestLanguage.open('GET', 'assets/lang/'+lang+'.json', true);
    requestLanguage.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            //console.log(lang+" language pack successfully retrieved");
            var data = JSON.parse(this.response);
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

function lang_stored_settings() {
    //if there are previous language settings and if those are valid settings then use them
    if (localStorage.getItem("language") !== null && supported_languages.indexOf(localStorage.getItem("language")) != -1) {
        //console.log('there are stored settings');
        setLanguage(localStorage.getItem("language"));
        document.getElementById('language_prompt').classList.add('display-none');
        setTimeout(function(){
            solidify_loader();
        }, 1000);
    }
    //if there aren't any previous valid language settings then show the user a prompt to choose some
    else{
        document.getElementById('language_prompt').classList.remove('display-none');
    }
}
function lang_settings(lang) {
    if (supported_languages.indexOf(lang) != -1) {
        localStorage.setItem("language", lang)/*<- this stores the user's language settings*/
        lang_stored_settings();/*this uses the user's stored settings to load the page's language*/
    }
    
}

lang_stored_settings();