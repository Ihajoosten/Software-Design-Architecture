import { IOrderState } from "./interfaces/IOrderState";
import { IOrderStateHolder } from "./interfaces/IOrderStateHolder";

export class FinishedState implements IOrderState {
  private readonly orderStateHolder: IOrderStateHolder;

  constructor(orderStateHolder: IOrderStateHolder) {
    this.orderStateHolder = orderStateHolder;
  }

  AddSeat(): void {
    console.log(
      "You cannot add a new seat because the order is already finished!"
    );
  }
  RemoveSeat(): void {
    console.log(
      "You cannot remove a seat because the order is already finished"
    );
  }
  Submit(): void {
    console.log(
      "You cannot submit the order because it already has been finished!"
    );
  }
  Pay(): void {
    console.log("You cannot pay for the order because it is already finished!");
  }
  Cancel(): void {
    console.log("The Order is now finished");
  }
  HoursUntilMovieChanged(hours: number): void {
    console.log("Order is Finished");
  }
}
