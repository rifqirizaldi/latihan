document.title = "Belajar JS"
const body = document.body

// const h1 = document.createElement("h1")
// h1.textContent="Halo Dunia"

// const namaSaya = document.createElement("p")
// namaSaya.innerHTML = "Rifaldi"

// const namaNda = document.createElement("b")
// namaNda.innerText = "Mif"

// body.append(h1)
// body.append(namaSaya)
// body.append(namaNda)

const btn1 = document.getElementById("btn1")
const btn2 = document.querySelector(".btn2")

const defaultText = "Klik saya 1"
btn1.textContent = defaultText

const newText = document.createElement("p")


btn1.style.border = "none"
btn1.style.background = "tomato"
btn1.style.fontSize = "24px"
btn1.style.padding = "8px"

btn2.style.border = "none"
btn2.style.background = "grape"
btn2.style.fontSize = "30px"
btn2.style.padding = "5px"

function clickButton(){
    btn1.style.background = "blue"
    newText.textContent = "Halo Bang"
    body.append(newText)
}

function ubahText(){
    // console.log("Ubah text nya")
    btn1.textContent = "Sudah diklik"
    
}

function kembalikanText(){
    btn1.textContent = defaultText
    newText.style.color = "blue"
}