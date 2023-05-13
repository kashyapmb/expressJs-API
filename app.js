import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.js"
import { config } from "dotenv"

export const app = express()

config({
	path: "./data/config.env",
})

//using Middleware
app.use(express.json())
app.use("/users", userRouter)

const schema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
})

app.get("/", (req, res) => {
	res.send("Heyyyy")
})
