import { CancelledState } from "./CancelledState";
import { FinishedState } from "./FinishedState";
import { OrderState } from "./OrderState";
import { OrderStateHolder } from "./OrderStateHolder";

export class ProvisionedState implements OrderState {
  private readonly orderStateHolder: OrderStateHolder;

  constructor(orderStateHolder: OrderStateHolder) {
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