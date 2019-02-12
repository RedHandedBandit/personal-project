const express = require('express');
require('dotenv').config();
const massive = require('massive');
const ctrl = require('./controller');

const app = express()

app.use(express.json())

//endpoints 
app.get('/api/home', ctrl.inventory)

const port = process.env.SERVER_PORT || 4000

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, () => console.log(`if you are quiet you can hear port ${port}`))
}).catch( error => console.log('massive error', error))
