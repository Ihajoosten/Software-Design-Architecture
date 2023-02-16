import { IOrderState } from "../../State-Pattern-order/IOrderState";
import { ISubscriber } from "./ISubscriber";

export interface IPublisher {

  Publish(orderState: IOrderState): void
  Subscribe(sub: ISubscriber): void;
  UnSubscribe(sub: ISubscriber): void
}