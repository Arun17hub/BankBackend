import express from 'express';
import userRouter from './Routers/userRouter.js';  // Add this import
import customerRouter from './Routers/customerRouter.js';
import employeeRouter from './Routers/employeeRouter.js';
import adminRouter from "./Routers/adminRouter.js";
import cors from 'cors';

const App = express();
app.use(cors({
  origin: "https://bankfrontend-2.onrender.com", // your frontend URL
  credentials: true // optional: only if you're using cookies
}));
App.use(express.json())
App.use(express.urlencoded({extended:true}))

App.use("/api/users", userRouter); 
App.use("/api/customer", customerRouter);
App.use("/api/employee", employeeRouter);
App.use("/api/admin", adminRouter);


export default App