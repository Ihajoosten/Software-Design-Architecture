import { CancelledState } from "./cancelled.state";
import { IOrderState } from "./IOrderState";
import { IOrderStateHolder } from "./IOrderStateHolder";
import { SubmittedState } from "./submitted.state";

export class TemplateState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  stateToString(): string {
    return "TemplateState";
  }

  AddSeat(): void {
    console.log("Added new seat");
  }

  RemoveSeat(): void {
    console.log("Removed a seat");
  }

  Submit(): void {
    this.orderStateHolder.UpdateState(
      new SubmittedState(this.orderStateHolder)
    );
  }

  Pay(): void {
    console.log("You cannot pay for the order");
  }

  Cancel(): void {
    this.orderStateHolder.UpdateState(
      new CancelledState(this.orderStateHolder)
    );
  }

  HoursUntilMovieChanged(hours: number): void {
    console.log("Nothing has happened");
  }
}
