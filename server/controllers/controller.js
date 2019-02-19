module.exports = {

    inventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then(
            inventory => res.status(200).send(inventory)
        )
    },

    oneProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        
        db.one_product([id]).then( product => {
            res.status(200).send(product)
        }).catch( err => console.log('sorry didnt work', err))
    },

}