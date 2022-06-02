require("dotenv").config()
const { PORT = 3001, DATABASE_URL } = process.env
const express = require("express")
const app = express()

const mongoose = require("mongoose")

const cors = require("cors")
const morgan = require("morgan")

mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error))

  const bookmarkSchema = new mongoose.Schema({
      name: String,
      url: String
  })

  const Bookmark = mongoose.model("Bookmark", bookmarkSchema)

  app.use(cors())
  app.use(morgan("dev"))
  app.use(express.json())

app.get("/", (req,res) =>{
    res.send ("you are home")
})

app.get("/bookmark", async (req,res)=>{
    try{
        res.json(await Bookmark.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post("/bookmark", async (req, res) => {
    try {
      res.json(await Bookmark.create(req.body))
    } catch (error) {
      res.status(400).json(error)
    }
  })

app.delete("/bookmark/:id", async (req, res) => {
    try {
      res.json(await Bookmark.findByIdAndDelete(req.params.id))
    } catch (error) {
      res.status(400).json(error)
    }
  })
  
  app.put("/bookmark/:id", async (req, res) => {
    try {
      res.json(
        await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
      )
    } catch (error) {
      res.status(400).json(error)
    }
  })




app.listen(PORT, ()=> console.log(`listening on ${PORT}`))