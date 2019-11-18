const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

const routes = require('./routes')
app.use('/api', routes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
        message: error.message
        }
    })
})

const port = process.env.PORT || 5000;

app.listen(port);

console.log('App is listening on port ' + port);