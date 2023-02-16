import { Movie } from "./movie.model";

export class MovieScreening {
  private dateAndTime: Date;
  private pricePerSeat: number;
  private isWeekend: boolean;
  private movie: Movie;

  constructor(
    dateAndTime: Date,
    pricePerSeat: number,
    isWeekend: boolean,
    movie: Movie
  ) {
    this.dateAndTime = dateAndTime;
    this.pricePerSeat = pricePerSeat;
    this.isWeekend = isWeekend;
    this.movie = movie;
  }

  public getPricePerSeat(): number {
    return this.pricePerSeat;
  }

  public getDateAndTime(): Date {
    return this.dateAndTime;
  }

  public tostring(): string {
    return `Date & Time:"${this.dateAndTime} \r
            Price Per Seat: ${this.pricePerSeat} \r
            You are going to: ${this.movie} \r
            On the weekend: ${this.isWeekend}`;
  }
}
