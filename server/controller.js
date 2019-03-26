module.exports = {

    getAll : (req, res) => {
        const dbInstance = req.db;

        dbInstance.get_properties().then( (properties) => {
            res.status(200).send(properties)
        }).catch(err => {
            res.status(500).send('Failed to list properties.')
            console.error(err);
        })
    },

    create : (req, res) => {
        const dbInstance = req.db;
        const { name, address, city, state, zipcode, image, mortgage, rent } = req.body

        dbInstance.create_property([ name, address, city, state, zipcode, image, mortgage, rent ]).then(() => {
            res.status(200).send('Product added')
        }).catch(err => {
            res.status(500).send('Failed to add property.')
            console.error(err)
        })
    },

    delete : (req, res) => {
        const dbInstance = req.db;
        const { params } = req;

        dbInstance.delete_property(params.id).then( () => {
            res.status(200).send('Property deleted.')
        }).catch(err => {
            res.status(500).send('Failed to delete property.')
            console.error(err)
        })
    },




}