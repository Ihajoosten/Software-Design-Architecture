import { CancelledState } from "./CancelledState";
import { FinishedState } from "./FinishedState";
import { OrderState } from "./OrderState";
import { OrderStateHolder } from "./OrderStateHolder";
import { ProvisionedState } from "./ProvisionedState";

export class SubmittedState implements OrderState {
  private readonly orderStateHolder: OrderStateHolder;

  constructor(orderStateHolder: OrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
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