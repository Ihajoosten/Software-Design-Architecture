import { jsonc } from "jsonc";
import { IOrderState } from "../../State-Pattern-order/interfaces/IOrderState";
import { IEmailService } from "../interfaces/IEmailService";
import { ISubscriber } from "../interfaces/ISubscriber";
import { EmailService } from "../services/email.service";

export class EmailSubscriber implements ISubscriber {
  private service: IEmailService;

  public constructor() {
    this.service = new EmailService();
  }

  StatusUpdate(message: IOrderState): void {
    this.service.SendEmailMessage(jsonc.stringify(message));
  }
}
