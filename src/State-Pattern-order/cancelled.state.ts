import { IOrderState } from "./IOrderState";
import { IOrderStateHolder } from "./IOrderStateHolder";

export class CancelledState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  stateToString(): string {
    return "CancelledState";
  }

  AddSeat(): void {
    console.log("Order is Cancled");
  }
  RemoveSeat(): void {
    console.log("Order is Cancled");
  }
  Submit(): void {
    console.log("Order is Cancled");
  }
  Pay(): void {
    console.log("Order is Cancled");
  }
  Cancel(): void {
    console.log("Order is Cancled");
  }
  HoursUntilMovieChanged(hours: number): void {
    console.log("Order is Cancled");
  }
}
