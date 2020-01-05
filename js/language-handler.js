//lang_dependant_text stores an array with all the elements to wich their "innerHTML" is language dependant, that is all the elements that contain text that gets translated
var lang_dependant_text = document.getElementsByClassName("lang");

var supported_languages = ["es-MX", "en-US", "pt-PT", "ru-RU"];



function setLanguage(lang) { /*prints the selected ('lang') version of the text*/
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

function lang_settings(lang) {
    /*if (supported_languages.indexOf(lang) == -1) {
        console.log('Unsupported language')
    }
    else{
        if (localStorage.getItem("language") === null) {
            console.log('no language in memory');
            localStorage.setItem("language", lang);
        }
        else{
            lang = localStorage.getItem("language");
            console.log('language in memory is '+lang);
        }
    }*/
    
    
    setLanguage(lang);
    document.getElementById('language_prompt').classList.add('display-none');
    setTimeout(function(){
        solidify_loader();
    }, 1000);
    
}   