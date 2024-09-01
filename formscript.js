import { GoogleGenerativeAI } from "@google/generative-ai"
const ai=new GoogleGenerativeAI(process.env.API_KEY);
let submission=document.getElementById('submit');
submission.addEventListener('click',getdata);

async function getdata(){
	const model = ai.getGenerativeModel({ model: "gemini-pro" });
	let pretext=document.getElementById('hobbies');
	let text="Show me list of career options if my interests are in ";
	text+=pretext;
	const res=await model.generateContent(text);
	let fin1=await res.response;
	let fin=fin1.text();
	console.log(fin);
	document.getElementById('options').innerHTML=fin;
}
