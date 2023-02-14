import { Movie } from "./movie.model";

export class MovieScreening {
  private dateAndTime: Date;
  private pricePerSeat: number;
  private isWeekend: boolean;
  private movie: Movie;


  constructor(dateAndTime: Date, pricePerSeat: number, isWeekend: boolean, movie: Movie) {
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
    var result = '';

    result + `Date and Time: ${this.dateAndTime.toLocaleString()}`
    result + ``
    result + `Price Per Seat: ${this.pricePerSeat}`
    result + ``
    result + `${this.movie} on Weekend: ${this.isWeekend}`
    return result;
  }
}