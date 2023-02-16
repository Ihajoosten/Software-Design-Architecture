import { CancelledState } from "./cancelled.state";
import { IOrderState } from "./interfaces/IOrderState";
import { IOrderStateHolder } from "./interfaces/IOrderStateHolder";
import { SubmittedState } from "./submitted.state";

export class TemplateState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  AddSeat(): void {
    console.log("Added new seat");
  }

  Cancel(): void {
    this.orderStateHolder.UpdateState(
      new CancelledState(this.orderStateHolder)
    );
  }

  HoursUntilMovieChanged(hours: number): void {
    console.log("Nothing has happened");
  }

  Pay(): void {
    console.log("You cannot pay for the order");
  }

  RemoveSeat(): void {
    console.log("Removed a seat");
  }

  Submit(): void {
    this.orderStateHolder.UpdateState(
      new SubmittedState(this.orderStateHolder)
    );
  }
}
