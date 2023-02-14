import { MovieScreening } from "./moviescreening.model";
import { IPremiumBehaviour } from "../Functions/CheckPremium/IPremiumBehaviour";
import { OrderType } from "./enumTypes";
import { StudentPremium } from "../Functions/CheckPremium/studentPremium";
import { RegularPremium } from "../Functions/CheckPremium/regularPremium";

export class MovieTicket {
  private rowNr: number;
  private seatNr: number;
  private movieScreening: MovieScreening;
  private isPremium: boolean;
  private PremiumBehaviour: IPremiumBehaviour;
  private orderType: OrderType;

  public constructor(
    movieScreening: MovieScreening,
    isPremium: boolean,
    rowNr: number,
    seatNr: number,
    orderType: OrderType
  ) {
    this.rowNr = rowNr;
    this.seatNr = seatNr;
    this.movieScreening = movieScreening;
    this.isPremium = isPremium; // isPremium - isNotPremium
    this.orderType = orderType; // isStudent - isNotStudent

    switch (this.orderType) {
      case OrderType.REGULAR:
        this.PremiumBehaviour = new RegularPremium()
        break;
      case OrderType.STUDENT:
        this.PremiumBehaviour = new StudentPremium()
        break;
    }
  }

  public getPrice(): number {
    return this.movieScreening.getPricePerSeat() + this.PremiumBehaviour.getPremiumPrice(this.isPremium);
  }

  public getMovieScreening(): MovieScreening {
    return this.movieScreening;
  }

  public toString(): string {
    return `Ticket with row: ${this.rowNr} \\r \
            Seat: ${this.seatNr} \\r 
            Premium Ticket: ${this.isPremium ? "yes " : "no"} \\r
            Moviescreening: ${this.movieScreening.tostring()}`;
  }
}