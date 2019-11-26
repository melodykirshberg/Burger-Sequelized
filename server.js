// Dependencies ==========================
const express = require("express");
const db = require('./models')
const exphbs = require("express-handlebars");
// =======================================

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./routes/api-routes.js')(app);


db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
});

