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

        db.edit_cmnts({comment}).then(comments => {
            res.status(200).send(comments)
        })
    },

    deleteMesh: (req, res) => {
        const db = req.app.get('db')

    }
}