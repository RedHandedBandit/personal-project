module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.all_cmnts().then(
            comments => res.status(200).send(comments)
        )
    },

    addPost: (req, res) => {
        const db = req.app.get('db')
        const {comment, date} = req.body
        const {username_id} = req.session.user
        // console.log(req.session)

        db.add_cmnts({comment, date, username_id}).then(comments => {
            res.status(200).send(comments)})
    }, 

    editMesh: (req, res) => {
        const db = req.app.get('db')
        const {comment, date} = req.body
        // console.log(req.body)
        const {id} = req.params
        
        db.edit_cmnts({comment, date, id}).then(comments => {
            // console.log(comments)
            res.status(200).send(comments)
            // console.log(comments)
        }).catch(error => console.log('this sucks', error))
    },

    deleteMesh: (req, res) => {
        const db = req.app.get('db')

    }

}