let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let atendidoEl = document.getElementById("count-el")

let count = 0

function increment () {
    count = count + 1
    countEl.innerText = count
    console.log(count)

}
function atendido () {
    count = count - 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let saveCounts = count + " - "
    saveEl.textContent += saveCounts
    countEl.innerText = 0
    count = 0
}