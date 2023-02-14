import { MovieTicket } from "../../Models/movieTicket.model";
import { IPremiumTicket } from "./IPremiumTicket";

export class NormalPremium implements IPremiumTicket {

  getGroupDiscount(tickets: MovieTicket[], isWeekend: boolean): boolean {
    let amountOfTickets = tickets.length;
    return amountOfTickets >= 6 ? isWeekend : false;
  }

  getPremiumPrice(ticketPrice: number, isPremium: boolean): number {
    return isPremium ? ticketPrice + 3 : ticketPrice;
  }

  isSecondTicketFree(isWeekend: boolean): boolean {
    return !isWeekend;
  }
}