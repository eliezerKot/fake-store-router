module.exports = function approuter(app) {

    const
        blptoducts = require('./bl/blproducts')
    app.get('/categories', async (req, res) => {
        try {
            const list = await blptoducts.getAllc()
            res.send(list)
            // console.log(list);
        } catch (error) {
            console.log(error.message || error);
        }
    })
    app.get(`/categorey/:name`, async (req, res) => {
        try {
            const list = await blptoducts.getAll()
            console.log("list", list[0]);
            const categ = list.filter(p => {
                console.log(p.category,  req.params.name);
              return  p.category._id == req.params.name
            })
            console.log("categ", categ[0]);
            res.send(categ)
        } catch (error) {
            console.log(error.message || error);
        }
    })
    app.get('/categorey/product/:id', async (req, res) => {
        try {
            const list = await blptoducts.getAll()
            const found = list.find(p => p.id == req.params.id)
            res.send(found)
        } catch (error) {
            console.log(error.message || error);

        }
    })

    app.post('/create', async (req, res) => {
        try {
            const newObj = await blptoducts.create(req.body)
            res.send(newObj)
        } catch (error) {
            console.log(error.message || error);
        }
    })

    app.put('/update/:id', async (req, res) => {
        try {
            const updatedobj = await blptoducts.update(req.params.id, req.body)
            res.send(updatedobj)
        } catch (error) {
            console.log(error.message || error);
        }
    })

    app.put('/delete/:id', async (req, res) => {
        try {
            const updatedobj = await blptoducts.delete1(req.params.id)
            res.send(updatedobj)
        } catch (error) {
            console.log(error.message || error);
        }
    })



}

