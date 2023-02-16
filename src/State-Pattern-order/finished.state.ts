import { IOrderState } from "./IOrderState";
import { IOrderStateHolder } from "./IOrderStateHolder";

export class FinishedState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
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