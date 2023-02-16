import { CancelledState } from "./cancelled.state";
import { FinishedState } from "./finished.state";
import { IOrderState } from "./interfaces/IOrderState";
import { IOrderStateHolder } from "./interfaces/IOrderStateHolder";

export class ProvisionedState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  AddSeat(): void {
    console.log("You can't add a new seat because the order is provisioned!");
  }

  Cancel(): void {
    this.orderStateHolder.UpdateState(
      new CancelledState(this.orderStateHolder)
    );
  }

  HoursUntilMovieChanged(hours: number): void {
    if (hours < 12)
      this.orderStateHolder.UpdateState(
        new CancelledState(this.orderStateHolder)
      );
  }

  Pay(): void {
    this.orderStateHolder.UpdateState(new FinishedState(this.orderStateHolder));
  }

  RemoveSeat(): void {
    console.log(
      "You can't remove a seat because the order is already provisioned!"
    );
  }

  Submit(): void {
    console.log("Order has already been provisioned!");
  }
}
