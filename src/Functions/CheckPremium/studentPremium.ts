import { MovieTicket } from "../../Models/movieTicket.model";
import { IPremiumTicket } from "./IPremiumTicket";

export class StudentPremium implements IPremiumTicket {

  getGroupDiscount(tickets: MovieTicket[], isWeekend: boolean): boolean {
    return false;
  }

  getPremiumPrice(ticketPrice: number, isPremium: boolean): number {
    return isPremium ? ticketPrice + 2 : ticketPrice;
  }

  isSecondTicketFree(isWeekend: boolean): boolean {
    return true;
  }
}