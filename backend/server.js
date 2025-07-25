import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'


//App Config
const app = express()
const port = 4000

//Middleware
app.use(express.json())
app.use(cors())

//DB Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

