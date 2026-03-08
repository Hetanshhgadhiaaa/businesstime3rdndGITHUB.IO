const chatBox = document.getElementById("chatBox")
const inputBox = document.getElementById("chatInput")

let chats = JSON.parse(localStorage.getItem("chats")) || []

// load old chats
function loadChats(){

chatBox.innerHTML=""

chats.forEach(msg=>{
addMessage(msg.text,msg.type,msg.reference)
})

}

loadChats()

// add message bubble
function addMessage(text,type,reference=""){

const message=document.createElement("div")

message.classList.add("message",type)

message.innerHTML=text

if(reference){
const ref=document.createElement("div")
ref.style.fontSize="12px"
ref.style.marginTop="5px"
ref.innerHTML="Source: "+reference
message.appendChild(ref)
}

chatBox.appendChild(message)

chatBox.scrollTop=chatBox.scrollHeight

}

// send message
async function sendMessage(){

const userMessage=inputBox.value

if(!userMessage) return

addMessage(userMessage,"user")

chats.push({text:userMessage,type:"user"})

inputBox.value=""

const response=await fetch(
"https://businesstime3rdndgithub-io.hetanshhgadhiaaa.workers.dev",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:userMessage
})
}
)

const data=await response.json()

addMessage(data.reply,"ai","AI Knowledge Base")

chats.push({
text:data.reply,
type:"ai",
reference:"AI Knowledge Base"
})

localStorage.setItem("chats",JSON.stringify(chats))

}
