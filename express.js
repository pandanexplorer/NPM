var app = require("express")();

app.use(function *() {
	this.body = "Koa say Hi!";
});

app.listen(3000);
console.log("Application started.");