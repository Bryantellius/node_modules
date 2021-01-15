const { myInfo } = require("./mymodule");

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE:\n==========\n");

const http = require("http");
const port = 3000;

console.log(myInfo);
// Finish setting up the server

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    let info = myInfo();
    res.end(
      "I am " +
        info.name +
        ", aged " +
        info.age +
        ", living in " +
        info.city +
        "."
    );
  })
  .listen(port, () => console.log("Server listening on port: " + port));
