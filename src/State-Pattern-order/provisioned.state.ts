import { CancelledState } from "./cancelled.state";
import { FinishedState } from "./finished.state";
import { IOrderState } from "./IOrderState";
import { IOrderStateHolder } from "./IOrderStateHolder";

export class ProvisionedState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  stateToString(): string {
    return "ProvisionedState";
  }

  AddSeat(): void {
    console.log("Order is solid");
  }

  RemoveSeat(): void {
    console.log("Order is solid");
  }

  Submit(): void {
    console.log("Order is solid");
  }

  Pay(): void {
    this.orderStateHolder.UpdateState(new FinishedState(this.orderStateHolder));
  }

  Cancel(): void {
    this.orderStateHolder.UpdateState(new CancelledState(this.orderStateHolder))
  }

  HoursUntilMovieChanged(hours: number): void {
    if (hours < 12) this.orderStateHolder.UpdateState(new CancelledState(this.orderStateHolder));
  }
}