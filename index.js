const express = require("express");
const chalk = require("chalk");
const path = require("path");

const {addNotes, removeNotes, getNotes, editNotes} = require("./note.controller");

const PORT = 3000;

const app = express();
app.set("view engine", "ejs");
app.set("views", "pages");

app.use(express.json());
app.use(express.static(path.resolve(( __dirname, "public" ))));
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    res.render("index", {
        title: "Node Express app get",
        notes: await getNotes(),
        created: false
    });
});

app.post("/", async (req, res) => {
    await addNotes(req.body.title);
    res.render("index", {
        title: "Node Express app post",
        notes: await getNotes(),
        created: true
    });
});

app.delete("/:id", async (req, res) => {
    await removeNotes(req.params.id);
    res.render("index", {
        title: "Node Express app",
        notes: await getNotes(),
        created: false
    });
});

app.put("/:id", async (req, res) => {
    await editNotes(req.params.id, req.body.title);
    res.render("index", {
        title: "Node Express app put",
        notes: await getNotes(),
        created: false
    });
});

app.listen(PORT, () => {
    console.log(chalk.green.bgBlackBright(`Server started on PORT: ${PORT}`));
});