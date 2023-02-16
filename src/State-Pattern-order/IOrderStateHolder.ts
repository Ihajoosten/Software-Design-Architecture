import { IOrderState } from "./IOrderState";

export interface IOrderStateHolder {
  UpdateState(newState: IOrderState): void;
}
