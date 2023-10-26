let icon = document.getElementById('icon')

icon.onclick = function() {
    document.body.classList.toggle('darkmode')
    if(document.body.classList.contains('darkmode')){
        icon.className = "fa-solid fa-sun"
     
    }
}