// src/App.js
import express from 'express';
import userRouter from './Routers/userRouter.js';
import customerRouter from './Routers/customerRouter.js';
import employeeRouter from './Routers/employeeRouter.js';
import adminRouter from "./Routers/adminRouter.js";
import cors from 'cors';

const app = express(); 

//  CORS config
app.use(cors({
  origin: "https://bankfrontend-2.onrender.com",
  credentials: true
}));

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Routers
app.use("/api/users", userRouter);
app.use("/api/customer", customerRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/admin", adminRouter);

export default app; //  Export lowercase 'app'
