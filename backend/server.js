import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

const openai=new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

app.post("/chat",async(req,res)=>{

const {message,mode}=req.body

let systemPrompt="You are a helpful AI tutor."

if(mode==="notes")
systemPrompt="Generate structured study notes."

if(mode==="quiz")
systemPrompt="Generate quiz questions."

if(mode==="summary")
systemPrompt="Summarize clearly."

if(mode==="explain")
systemPrompt="Explain like a teacher."

const completion=
await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{role:"system",content:systemPrompt},
{role:"user",content:message}
]

})

res.json({
reply:completion.choices[0].message.content
})

})

app.listen(3000,()=>{
console.log("AI server running")
})
