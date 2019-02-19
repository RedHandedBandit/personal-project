module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.all_cmnts().then(
            comments => res.status(200).send(comments)
        )
    },
}