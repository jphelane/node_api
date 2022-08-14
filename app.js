const express = require('express')

const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server is Listening on 3000`)
})

app.get('/', (request, response) => {
    response.send("The beginning of great things Mr. Phelane...");
})