import { writeFileSync } from "fs";
import path, { join } from "path";
import { IPremiumTicket } from "../Functions/CheckPremium/IPremiumTicket";
import { NormalPremium } from "../Functions/CheckPremium/normalPremium";
import { StudentPremium } from "../Functions/CheckPremium/studentPremium";
import { IExport } from "../Functions/ExportOrder/IExport";
import { CustomerType, TicketExportType } from "./enumTypes";
import { MovieTicket } from "./movieTicket.model";

export class Order {
  private orderNr: number;
  private seatReservations: Array<MovieTicket> = new Array<MovieTicket>();
  public PremiumPriceBehaviour: IPremiumTicket;
  public CustomerType: CustomerType;

  public constructor(orderNr: number, customerType: CustomerType) {
    this.orderNr = orderNr;
    this.CustomerType = customerType;

    switch (customerType) {
      case CustomerType.STUDENT:
        this.PremiumPriceBehaviour = new StudentPremium();
        break;

      case CustomerType.REGULAR:
        this.PremiumPriceBehaviour = new NormalPremium();
        break;
    }
  }

  public getOrderNr(): number {
    return this.orderNr;
  }

  public addSeatReservation(ticket: MovieTicket): void {
    this.seatReservations.push(ticket);
  }

  public calculatePrice(): number {
    let totalPrice = 0.0;
    let isWeekend = this.isWeekend();
    let isSecondTicketFree = this.PremiumPriceBehaviour.isSecondTicketFree(isWeekend);

    for (let i = 0; i < this.seatReservations.length; i++) {
      let ticket = this.seatReservations[i];
      let ticketPrice = this.PremiumPriceBehaviour.getPremiumPrice(ticket.getPrice(), ticket.isPremiumTicket());
      if (isSecondTicketFree) {
        if (i % 2 == 0) {
          totalPrice += ticketPrice;
        }
      } else {
        totalPrice += ticketPrice;
      }
    }

    // get 10% discount if true
    if (this.PremiumPriceBehaviour.getGroupDiscount(this.seatReservations, isWeekend)) {
      totalPrice *= 0.9;
    }

    return totalPrice;
  }

  //check if weekend
  private isWeekend(): boolean {
    let weekendDays: Array<number> = [0, 5, 6]; //sunday, friday, saturday
    for (let ticket of this.seatReservations) {
      let weekdayOfScreening = ticket.getMovieScreening().getDateAndTime().getDay(); //number of weekday
      //if weekdayOfScreening is in weekendDays
      return weekendDays.includes(weekdayOfScreening) ? true : false;
    }
  }

  public export(filename: string, order: Order, type: TicketExportType): void {
    switch (type) {
      case TicketExportType.JSON:
        const data = JSON.stringify(order, null, 2);
        writeFileSync(join(__dirname, path.join(`orders/json/${filename}-${this.getOrderNr()}.json`)), data.toString(), {
          flag: 'w',
        });
        break;
      case TicketExportType.PLAINTEXT:
        writeFileSync(join(__dirname, path.join(`orders/text/${filename}-${this.getOrderNr()}.txt`)), order.toString(), {
          flag: 'w',
        });
        break;
    }

  }

  public toString(): string {
    return `The order number: ${this.orderNr}, this reservation is for: ${this.CustomerType} and the the seat reservations are: ${this.seatReservations}`;
  }
}