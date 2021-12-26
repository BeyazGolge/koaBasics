const render = require("./lib/render");
const logger = require("koa-logger");
const router = require("@koa/router")();
const koaBody = require("koa-body");

const Koa = require("koa");
const app = (module.exports = new Koa());

// middleware

app.use(logger());

app.use(render);

app.use(koaBody());

// route definitions

router.get("/", index).get("/about", about).get("/contact", contact);

app.use(router.routes());

async function index(ctx) {
  await ctx.render("index");
}
async function about(ctx) {
  await ctx.render("about");
}
async function contact(ctx) {
  await ctx.render("contact");
}

// listen

if (!module.parent) app.listen(3000);
