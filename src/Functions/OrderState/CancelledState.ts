import { OrderState } from "./OrderState";
import { OrderStateHolder } from "./OrderStateHolder";

export class CancelledState implements OrderState {
  private readonly orderStateHolder: OrderStateHolder;

  constructor(orderStateHolder: OrderStateHolder) {
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