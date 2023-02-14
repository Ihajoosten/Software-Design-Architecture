import { MovieTicket } from "../../Models/movieTicket.model";

export interface IPremiumTicket {
  getPremiumPrice(ticketPrice: number, isPremium: boolean): number

  getGroupDiscount(tickets: Array<MovieTicket>, isWeekend: boolean): boolean

  isSecondTicketFree(isWeekend: boolean): boolean
}