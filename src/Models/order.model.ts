import { IPublisher } from "../Observer-Pattern-notification/interfaces/IPublisher";
import { ISubscriber } from "../Observer-Pattern-notification/interfaces/ISubscriber";
import { IOrderState } from "../State-Pattern-order/IOrderState";
import { IOrderStateHolder } from "../State-Pattern-order/IOrderStateHolder";
import { TemplateState } from "../State-Pattern-order/template.state";
import { ExportToJSON } from "../strategy-pattern-export/exportToJSON";
import { ExportToText } from "../strategy-pattern-export/exportToPlainText";
import { IExportBehaviour } from "../strategy-pattern-export/IExportBehaviour";
import { OrderType, TicketExportType } from "./enumTypes";
import { MovieTicket } from "./movieTicket.model";

export class Order implements IOrderStateHolder, IPublisher {
  private orderNr: number;
  private seatReservations: Array<MovieTicket> = new Array<MovieTicket>();
  public ExportBehaviour: IExportBehaviour
  public orderType: OrderType;
  public orderState: IOrderState = new TemplateState(this);
  public subscribers: Array<ISubscriber>;

  public constructor(orderNr: number, orderType: OrderType) {
    this.orderNr = orderNr;
    this.orderType = orderType;
    this.subscribers = new Array<ISubscriber>();
  }

  // Notify
  public Subscribe(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber);
  }

  public UnSubscribe(subscriber: ISubscriber): void {
    const index = this.subscribers.indexOf(subscriber, 0);
    if (index > -1) this.subscribers.splice(index, 1);
  }

  Publish(orderState: IOrderState): void {
    this.subscribers.forEach(sub => { sub.StatusUpdate(orderState) });
  }

  public getOrderNr(): number {
    return this.orderNr;
  }

  public addSeatReservation(ticket: MovieTicket): void {
    this.seatReservations.push(ticket);
  }

  public calculatePrice(): number {
    let totalPrice = 0.0;
    let isSecondTicketFree = this.orderType == OrderType.STUDENT || !this.isWeekend();

    for (let i = 0; i < this.seatReservations.length; i++) {
      let ticket = this.seatReservations[i];
      let ticketPrice = ticket.getPrice();

      if (isSecondTicketFree) {
        if (i % 2 == 0) {
          totalPrice += ticketPrice;
        }
      } else {
        totalPrice += ticketPrice;
      }
    }

    if (this.orderType !== OrderType.STUDENT && this.seatReservations.length >= 6 && this.isWeekend()) {
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

  public export(order: Order, exportType: TicketExportType): void {
    switch (exportType) {
      case TicketExportType.PLAINTEXT:
        this.ExportBehaviour = new ExportToText()
        this.ExportBehaviour.syncWriteFile(order);
        break;
      case TicketExportType.JSON:
        this.ExportBehaviour = new ExportToJSON()
        this.ExportBehaviour.syncWriteFile(order);
        break;
    }
  }

  public toString(): string {
    return `The order number: ${this.orderNr}, this reservation is for: ${this.orderType} and the the seat reservations are: ${this.seatReservations}`;
  }

  public Submit(): void {
    this.orderState.Submit();
  }

  public Pay(): void {
    this.orderState.Pay();
  }

  public Cancel(): void {
    this.orderState.Cancel();
  }

  public UpdateState(newState: IOrderState): void {
    this.orderState = newState
    this.Publish(newState);
  }

  public HoursUntilMovieChanged(hours: number): void {
    this.orderState.HoursUntilMovieChanged(hours);
  }

  public GetOrderState(): string {
    return this.orderState.stateToString();
  }
}