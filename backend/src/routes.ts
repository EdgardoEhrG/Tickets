import Router from "koa-router";

import { Auth } from "./controllers/auth";
import { Ticket } from "./controllers/ticket";
import { User } from "./controllers/user";
import { verifyToken } from "./helpers/auth";

export function registerRoutes() {
  const router = new Router();

  router.post("/register", Auth.prototype.create);
  router.post("/login", Auth.prototype.login);

  router.get("/users/:id", verifyToken, User.prototype.getUser);

  router.get("/tickets", verifyToken, Ticket.prototype.getAllTickets);
  router.post("/tickets/add", verifyToken, Ticket.prototype.addTicket);
  router.put("/tickets/:id", verifyToken, Ticket.prototype.editTicket);
  router.put(
    "/tickets/mark-ticket/:id",
    verifyToken,
    Ticket.prototype.closeTicket
  );
  router.delete("tickets/:_id", verifyToken, Ticket.prototype.deleteTicket);

  return router;
}
