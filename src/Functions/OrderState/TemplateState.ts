import { CancelledState } from "./CancelledState";
import { OrderState } from "./OrderState";
import { OrderStateHolder } from "./OrderStateHolder";
import { SubmittedState } from "./SubmittedState";

export class TemplateState implements OrderState {

  private readonly orderStateHolder: OrderStateHolder;

  constructor(orderStateHolder: OrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  AddSeat(): void {
    console.log("Added new seat")
  }
  RemoveSeat(): void {
    console.log("Removed a seat")
  }
  Submit(): void {
    this.orderStateHolder.UpdateState(new SubmittedState(this.orderStateHolder));
  }
  Pay(): void {
    console.log("You cannot pay here")
  }

  Cancel(): void {
    this.orderStateHolder.UpdateState(new CancelledState(this.orderStateHolder));
  }
  HoursUntilMovieChanged(hours: number): void {
    console.log("Nothing has happened")
  }
}