import { IOrderState } from "../../State-Pattern-order/interfaces/IOrderState";

export interface IEmailService {
  SendEmailMessage(message: string): void;
}
