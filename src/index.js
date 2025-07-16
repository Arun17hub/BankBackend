import http from 'http';
import 'dotenv/config';
import App from './App.js';
import connectDB from './Database/db.connect.js';
import cors from "cors";
app.use(cors({
  origin: "https://bankfrontend-2.onrender.com", // your frontend URL
  credentials: true // optional: only if you're using cookies
}));

const server=http.createServer(App);

const PORT=process.env.PORT
 
connectDB().then(()=>{
server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
})