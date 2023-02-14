import { OrderState } from "./OrderState";

export interface OrderStateHolder {
  UpdateState(newState: OrderState): void
}