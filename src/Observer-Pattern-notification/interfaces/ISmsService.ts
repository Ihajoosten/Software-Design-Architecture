import { IOrderState } from "../../State-Pattern-order/interfaces/IOrderState";

export interface ISmsService {
  SendSMSMessage(message: string): void;
}
