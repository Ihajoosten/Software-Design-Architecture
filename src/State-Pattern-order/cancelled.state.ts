import { IOrderState } from "./interfaces/IOrderState";
import { IOrderStateHolder } from "./interfaces/IOrderStateHolder";

export class CancelledState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  AddSeat(): void {
    console.log("You cannot add a new seat because the order is canceled!");
  }
  RemoveSeat(): void {
    console.log("You cannot remove a seat because the order is canceled");
  }
  Submit(): void {
    console.log("You cannot submit the order because it has been canceled!");
  }
  Pay(): void {
    console.log("You cannot pay for the order because it has been canceled!");
  }
  Cancel(): void {
    console.log("The Order is now canceled");
  }
  HoursUntilMovieChanged(hours: number): void {
    console.log("Order is Cancled");
  }
}
