function initAboutUS(){
    let intervall = setInterval(function(){
        let headline = document.getElementById('headLine');
        if (headline){
            headline.innerHTML = `Über Uns`;
            clearInterval(intervall)
            }
       });
}