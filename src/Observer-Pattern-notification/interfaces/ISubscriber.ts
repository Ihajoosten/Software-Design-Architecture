import { IOrderState } from "../../State-Pattern-order/IOrderState";

export interface ISubscriber {
  StatusUpdate(message: IOrderState): void;
}
