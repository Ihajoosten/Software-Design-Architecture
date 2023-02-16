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
    console.log("New seat added to the Order");
  }

  RemoveSeat(): void {
    console.log("Seat removed from the Order");
  }

  Submit(): void {
    console.log("Already submitted order!");
  }

  Pay(): void {
    this.orderStateHolder.UpdateState(new FinishedState(this.orderStateHolder));
  }

  Cancel(): void {
    this.orderStateHolder.UpdateState(
      new CancelledState(this.orderStateHolder)
    );
  }

  HoursUntilMovieChanged(hours: number): void {
    if (hours < 24) {
      console.log("Reminder to send Payment!");
      this.orderStateHolder.UpdateState(
        new ProvisionedState(this.orderStateHolder)
      );
    }
  }
}
