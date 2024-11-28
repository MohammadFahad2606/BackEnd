import express from "express"
// import { homePage } from "./All Data/homePage"
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send(`home`)
})




app.listen(port, () => {
  console.log(`Sever is  running Port: ${port}`)
})
