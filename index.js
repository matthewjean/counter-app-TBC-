
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let maxCapEl = document.getElementById("maxcap-el")
let count = 0
let maxcap = 16



function increment() {
    count += 1
    countEl.textContent = count
    maxCapEl.textContent = maxcap
    maxcap -= 1
}

function decrement(){
    count -= 1
    countEl.textContent = count
    maxCapEl.textContent = maxcap
    maxcap += 1
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    maxCapEl.textContent= 16
    maxcap = 16
    count = 0

}



function reset(){
   //let = SuperCountStr = countStr * 0
    //saveEl.textContent *= SuperCountStr
    maxcap = 16
    count = 0
    countEl.textContent = 0
    maxCapEl.textContent= 16
    saveEl.textContent = " Previous entries: "

}

