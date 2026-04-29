const Express = require('express')
const app = Express()

const port = 8080

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})