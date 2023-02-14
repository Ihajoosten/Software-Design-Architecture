import { OrderState } from "./OrderState";
import { OrderStateHolder } from "./OrderStateHolder";

export class FinishedState implements OrderState {
  private readonly orderStateHolder: OrderStateHolder;

  constructor(orderStateHolder: OrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  stateToString(): string {
    return "FinishedState";
  }

  AddSeat(): void {
    console.log("Order is Finished");
  }
  RemoveSeat(): void {
    console.log("Order is Finished");
  }
  Submit(): void {
    console.log("Order is Finished");
  }
  Pay(): void {
    console.log("Order is Finished");
  }
  Cancel(): void {
    console.log("Order is Finished");
  }
  HoursUntilMovieChanged(hours: number): void {
    console.log("Order is Finished");
  }
}