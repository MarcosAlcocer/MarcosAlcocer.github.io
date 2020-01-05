function animate_favicon() {
    let favicon = document.getElementById('favicon');
    let speed = 250;
    setTimeout(function(){ favicon.href = "assets/icons/favicon_f2.png"; }, speed*1);
    setTimeout(function(){ favicon.href = "assets/icons/favicon_f3.png"; }, speed*2);
    setTimeout(function(){ favicon.href = "assets/icons/favicon_f4.png"; }, speed*3);
    setTimeout(function(){ favicon.href = "assets/icons/favicon_f5.png"; }, speed*4);
    for (let i = 5; i < 18; i = i+6) {
        
        setTimeout(function(){ favicon.href = "assets/icons/favicon_f6.png"; }, speed*(i+0));
        setTimeout(function(){ favicon.href = "assets/icons/favicon_f7.png"; }, speed*(i+1));
        setTimeout(function(){ favicon.href = "assets/icons/favicon_f8.png"; }, speed*(i+2));
        setTimeout(function(){ favicon.href = "assets/icons/favicon_f9.png"; }, speed*(i+3));
        setTimeout(function(){ favicon.href = "assets/icons/favicon_f8.png"; }, speed*(i+4));
        setTimeout(function(){ favicon.href = "assets/icons/favicon_f7.png"; }, speed*(i+5));
        
    }
    setTimeout(function(){ favicon.href = "assets/icons/favicon_f5.png"; }, speed*23);
    setTimeout(function(){ favicon.href = "assets/icons/favicon_f4.png"; }, speed*24);
    setTimeout(function(){ favicon.href = "assets/icons/favicon_f3.png"; }, speed*25);
    setTimeout(function(){ favicon.href = "assets/icons/favicon_f2.png"; }, speed*26);
    setTimeout(function(){ favicon.href = "assets/icons/favicon.png"; }, speed*27);
}
setInterval(animate_favicon, 30000);