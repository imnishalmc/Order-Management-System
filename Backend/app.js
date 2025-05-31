
const express = require("express")
// const { foodMandu } = require("./Database/connection")
const app = express()
// require("./Database/connection")
app.use(express.json())
const cors= require("cors")
app.use(cors({
    origin:"*",
}))




const bookingRouter =require("./Routes/foodRoutes")
app.use("/order",bookingRouter)
// app.get("/order", (req, res) => {
//     res.send("this is the order page")
// })




app.listen(5000, () => {
    console.log("the server is running in the port no 5k")
})

