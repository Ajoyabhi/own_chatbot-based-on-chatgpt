import { config } from "dotenv";
import { Configuration, OpenAIApi } from "openai";
config()

console.log(process.env.API_KEY)

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role:'user', content:"Hello Chatgpt"}]
}).then(res =>{
    console.log(res.data.choices)
})