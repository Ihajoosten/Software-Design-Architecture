import { CancelledState } from "./cancelled.state";
import { FinishedState } from "./finished.state";
import { IOrderState } from "./IOrderState";
import { IOrderStateHolder } from "./IOrderStateHolder";
import { ProvisionedState } from "./provisioned.state";

export class SubmittedState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }
  stateToString(): string {
    return "SubmittedState";
  }

  AddSeat(): void {
    console.log("Added new seat");
  }

  RemoveSeat(): void {
    console.log("Removed a seat");
  }

  Submit(): void {
    console.log("Already submitted order!");
  }

  Pay(): void {
    this.orderStateHolder.UpdateState(new FinishedState(this.orderStateHolder));
  }

  Cancel(): void {
    this.orderStateHolder.UpdateState(new CancelledState(this.orderStateHolder))
  }

  HoursUntilMovieChanged(hours: number): void {
    if (hours < 24) {
      console.log("Reminder to send Payment!")
      this.orderStateHolder.UpdateState(new ProvisionedState(this.orderStateHolder));
    }
  }
}