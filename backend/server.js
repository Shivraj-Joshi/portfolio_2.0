
import 'dotenv/config'
import express from "express"
const app = express()
const port = process.env.PORT

try {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
} catch (error) {
    console.log(error)
}
app.get('/page', (req, res) => {
    res.send('the server is working fine')
})


// import routes here 

import adminRouter from "./Routes/adminAuth.routes.js"

// route decleration 

app.use("/api/v1/admin", adminRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log(port)