const express = require('express');
require('dotenv').config();
const massive = require('massive');
const ctrl = require('./controllers/controller');
const authCtrl = require('./controllers/authCtrl');
const cmntCtrl = require('./controllers/cmntCtrl');
const session = require('express-session');

const {SESSION_SECRET} = process.env;

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

//endpoints for products
app.get('/api/home', ctrl.inventory)
app.get('/api/visors/:id', ctrl.oneProduct)

//endpoints for auth
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/api/user', authCtrl.userData)

// endpoints for contact
app.get('/api/messages', cmntCtrl.getAll)

const port = process.env.SERVER_PORT || 4000
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, () => console.log(`if you are quiet you can hear port ${port}`))
}).catch( error => console.log('massive error', error))
