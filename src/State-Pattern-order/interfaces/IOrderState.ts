export interface IOrderState {
  AddSeat(): void;
  RemoveSeat(): void;
  Submit(): void;
  Pay(): void;
  Cancel(): void;
  HoursUntilMovieChanged(hours: number): void;
}
