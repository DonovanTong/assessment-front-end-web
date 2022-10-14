function favColor(event) {
    alert("Sky Blue")
}

function favPlace(event) {
    alert("Kauai")
}

function favRitual(event) {
    alert("Listening to a podcast on the way to class.")
}

document.querySelector('#color').addEventListener('click', favColor)
document.querySelector('#place').addEventListener('click', favPlace)
document.querySelector('#ritual').addEventListener('click', favRitual)
