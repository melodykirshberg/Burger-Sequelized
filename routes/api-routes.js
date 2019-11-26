// Dependencies ==========================
const db = require("../models");
// =======================================

// Routes ================================
module.exports = function (app) {


    app.get("/", async function (req, res) {
        try {
            const burgers = await db.burger.findAll({ devoured: true });
            res.render('index', { burgers });
        }
        catch (err) {
            console.log(err)

            res.status(500).end();
        };
    });

    app.get("/api/burgers", async function (req, res) {
        try {
            const burgers = await db.burger.findAll({ devoured: true });
            res.json(burgers);
        }
        catch (err) {
            console.log(err)

            res.status(500).end();
        };
    });

    app.post("/api/burgers", async function (req, res) {
        try {
            const { burger_name } = req.body;
            const burgers = await db.burger.create({ burger_name });
            res.json(burgers);
        }
        catch (err) {
            console.log(err)

            res.status(500).end();
        }
    });

    app.put("/api/burgers", async (req, res) => {
        try {
            const burgers = await db.burger.update({
                devoured: true
            }, {
                where: {
                    id: req.body.id
                }
            });

            res.json(burgers);
        }
        catch (err) {
            console.log(err)

            res.status(500).end();
        }
    });

    app.delete("/api/burgers/:id", async function (req, res) {
        try {
            const burgers = await db.burger.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.json(burgers);
        }
        catch (err) {
            console.log(err)
            res.status(500).end();
        }
    });
}
// =======================================
