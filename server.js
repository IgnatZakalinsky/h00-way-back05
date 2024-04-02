const http = require('http')

const server = http.createServer((req, res) => {
    res.write('hi!')
    res.end()
})

server.listen(3000)

// terminal:

// node server.js

// http://localhost:3000/ // (02.04.2024)

// ctrl+c // for stop 