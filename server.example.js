// const http = require('http');
// const chalk = require("chalk");
// const fs = require("fs/promises");
// const path = require("path");
// const {addNotes, removeNotes, printNotes} = require("./note.controller")

// const server = http.createServer(async (req, res) => {
//     if(req.method === "GET") {
//         const content = await fs.readFile(path.join(basePath, "index.ejs"));
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.end(content);
//     } else if(req.method === "POST") {
//         const body = [];
//         res.writeHead(200, {
//             "Content-Type": "text/plain; charset=utf-8"
//         });
//
//         req.on("data", data => {
//             body.push(Buffer.from(data));
//         });
//         req.on("end", () => {
//             const title = body.toString().split("=")[1].replaceAll("+", " ");
//             addNotes(title);
//             res.end(`Title = ${title}`);
//         });
//
//     }
// });

// server.listen(PORT, () => {
//     console.log(chalk.green(`Server started on PORT: ${PORT}`));
// });