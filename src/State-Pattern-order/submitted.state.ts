import { CancelledState } from "./cancelled.state";
import { FinishedState } from "./finished.state";
import { IOrderState } from "./interfaces/IOrderState";
import { IOrderStateHolder } from "./interfaces/IOrderStateHolder";
import { ProvisionedState } from "./provisioned.state";

export class SubmittedState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
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
