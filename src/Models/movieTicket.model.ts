import { MovieScreening } from "./moviescreening.model";

export class MovieTicket {
  private rowNr: number;
  private seatNr: number;
  private movieScreening: MovieScreening;
  private isPremiumReservation: boolean;

  public constructor(
    movieScreening: MovieScreening,
    isPremiumReservation: boolean,
    rowNr: number,
    seatNr: number
  ) {
    this.rowNr = rowNr;
    this.seatNr = seatNr;
    this.movieScreening = movieScreening;
    this.isPremiumReservation = isPremiumReservation;
  }

  public isPremiumTicket(): boolean {
    return this.isPremiumReservation;
  }

  public getPrice(): number {
    return this.movieScreening.getPricePerSeat();
  }

  public getMovieScreening(): MovieScreening {
    return this.movieScreening;
  }

  public toString(): string {
    return `Ticket with row: ${this.rowNr} \\r \
            Seat: ${this.seatNr} \\r 
            Premium Ticket: ${this.isPremiumReservation ? "yes " : "no"} \\r
            Moviescreening: ${this.movieScreening.tostring()}`;
  }
}