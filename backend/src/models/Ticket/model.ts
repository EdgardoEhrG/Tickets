import mongoose from "mongoose";

import { ticketSchema } from "./schema";
import { ITicket } from "../../interfaces/ticket";

const ticketModel: mongoose.Model<ITicket> = mongoose.model<ITicket>(
  "Ticket",
  ticketSchema
);

export { ticketModel as TicketModel };
