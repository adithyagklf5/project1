const express = require('express');
const app = new express()
const PORT = 2343
const db = require('./db')





app.listen(PORT, () => {
    console.log(`server is running at  ${PORT} port`)
})