const express = require("express")
const cors = require("cors")

const postRoute = require("./routes/post")
const userRoute = require("./routes/user")

const app = express()

const PORT = 3000
 
app.use(cors({ exposedHeaders: ["x-total-count"]}))

app.use("/posts", postRoute)
app.use("/users", userRoute)

app.get("*", (req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})