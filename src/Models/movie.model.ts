import { MovieScreening } from "./moviescreening.model";

export class Movie {
  private title: string;
  private movieScreening: Array<MovieScreening> = new Array<MovieScreening>();

  constructor(title: string) {
    this.title = title;
  }

  public addScreening(screening: MovieScreening): void {
    this.movieScreening.push(screening);
  }

  public toString(): string {
    return `Movie: ${this.title}`;
  }
}
