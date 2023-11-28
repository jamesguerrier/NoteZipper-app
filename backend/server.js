const express = require('express')
const app = express();
const port = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.send('<h1>this is a noting app</h1')
})
app.listen(port, () => {
    console.log(`the app is running ${port}`)
})