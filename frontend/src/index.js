import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { ParseRequestUrl } from "./util.js";
import Error404Screen from "./screens/Error404screen.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};
const router = async () => {
  const request = ParseRequestUrl();
  const ParseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  console.log(request);

  const screen = routes[ParseUrl] ? routes[ParseUrl] : Error404Screen;

  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
