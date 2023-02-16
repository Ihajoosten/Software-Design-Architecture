import { IOrderState } from "../../State-Pattern-order/interfaces/IOrderState";

export interface ISubscriber {
  StatusUpdate(message: IOrderState): void;
}
