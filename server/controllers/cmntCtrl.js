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
        console.log("this is the body",req.body)
        const {id} = req.params
        
        db.edit_cmnts({comment, date, id}).then(comments => {
            // console.log("this is the cmnt id", cmnt_id)
            res.status(200).send(comments)
            // console.log("comments 2", comments)
        }).catch(error => console.log('this sucks', error))
    },

    deleteMesh: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        // console.log(id)

        db.delete_cmnts({id}).then(comments => {
            res.status(200).send(comments)
            // console.log("comments",comments)
        }).catch(error => console.log('delete didnt work idiot', error))
    },
}

