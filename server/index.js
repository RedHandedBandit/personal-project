const express = require('express');
require('dotenv').config();
const massive = require('massive');
const ctrl = require('./controllers/controller');
const authCtrl = require('./controllers/authCtrl');
const cmntCtrl = require('./controllers/cmntCtrl');
const session = require('express-session');
const app = require("express")();
const {SESSION_SECRET, SECRET_KEY} = process.env;
const stripe = require("stripe")(SECRET_KEY);






// const app = express()
app.use( express.static( `${__dirname}/../build` ) );
app.use(require("body-parser").text());
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
app.post('/api/messages', cmntCtrl.addPost)
app.put(`/api/editMesh/:id`, cmntCtrl.editMesh)
app.delete('/api/deleteMesh/:id',cmntCtrl.deleteMesh)

//STRIPE endpoints
app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });

const port = process.env.SERVER_PORT || 4000
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, () => console.log(`if you are quiet you can hear port ${port}`))
}).catch( error => console.log('massive error', error))
