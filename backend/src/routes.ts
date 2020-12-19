import Router from "koa-router";

import { Auth } from "./controllers/auth";
import { Ticket } from "./controllers/ticket";
import { verifyToken } from "./helpers/auth";

export function registerRoutes() {
  const router = new Router();

  router.post("/register", Auth.prototype.create);
  router.post("/login", Auth.prototype.login);

  router.get("/tickets", verifyToken, Ticket.prototype.getAllTickets);
  router.post("/tickets/add", verifyToken, Ticket.prototype.addTicket);

  return router;
}
