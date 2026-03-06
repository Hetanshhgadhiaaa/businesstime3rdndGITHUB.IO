const sendBtn=document.getElementById("sendBtn")
const input=document.getElementById("prompt")
const chat=document.getElementById("chat")

let mode="normal"

document.querySelectorAll(".modes button")
.forEach(btn=>{
btn.onclick=()=>{
mode=btn.dataset.mode
}
})

sendBtn.onclick=sendMessage

async function sendMessage(){

const text=input.value

if(!text) return

addMessage(text,"user")

input.value=""

const res=await fetch("http://localhost:3000/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:text,
mode:mode
})
})

const data=await res.json()

addMessage(data.reply,"ai")

}

function addMessage(text,type){

const div=document.createElement("div")

div.className="message "+type

div.innerText=text

chat.appendChild(div)

chat.scrollTop=chat.scrollHeight

}

const plus=document.getElementById("plusBtn")
const popup=document.getElementById("popup")

plus.onclick=()=>{
popup.style.display=
popup.style.display==="block"
?"none":"block"
}

const upload=document.getElementById("imageUpload")
const preview=document.getElementById("preview")

upload.onchange=()=>{

preview.innerHTML=""

let files=[...upload.files].slice(0,7)

files.forEach(f=>{

let img=document.createElement("img")

img.src=URL.createObjectURL(f)

preview.appendChild(img)

})

}
