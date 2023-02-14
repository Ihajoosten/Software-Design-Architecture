export interface OrderState {
  AddSeat(): void;
  RemoveSeat(): void;
  Submit(): void;
  Pay(): void;
  Cancel(): void;
  HoursUntilMovieChanged(hours: number): void
}