const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
// const btn = document.querySelector('.btn')

document.querySelector('.btn').addEventListener('click', addTask)

// Add task
function addTask() {
    if(inputBox.value === '') {
        alert('Please add a task')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
        inputBox.value = ''
        saveData()
}

// Delete or check task
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// Darkmode toggle
const icon = document.getElementById('icon')

icon.onclick = function() {
    document.body.classList.toggle('darkmode')
    if(document.body.classList.contains('darkmode')){
        icon.className = "fa-solid fa-sun"
     
    }
}

// Local Storage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()