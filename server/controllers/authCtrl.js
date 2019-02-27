const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {first_name, last_name, email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db')

        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(password, salt)

        let dbInfo = {
            first: first_name,
            last: last_name,
            email: email,
            pass: password
        }

        let gangMember = await db.register(dbInfo)
        gangMember = gangMember[0];
        session.dbInfo = {...gangMember}

        res.status(200).send(session.dbInfo)
    },

    login: async (req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');

        let user = await db.login({email: email, password: password})
        user = user[0]
        
        if(!user) {
            return res.sendStatus(418)
        }

        if(user) {
            delete user.password
            session.user = user
            res.status(200).send(session.user)
        }else {
            return res.sendStatus(401)
        }

    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    },

    userData: (req, res) => {
        const {user} = req.session
        if(user){
            res.status(200).send(user)
        }else{
            res.sendStatus(418)
        }
    }
}