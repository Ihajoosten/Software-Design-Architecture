import { IOrderState } from "../../State-Pattern-order/IOrderState";
import { ISmsService } from "../interfaces/ISmsService";
import { ISubscriber } from "../interfaces/ISubscriber";
import { SmsService } from "../services/sms.service";

export class SmsSubscriber implements ISubscriber {

  private service: ISmsService;

  public constructor() { this.service = new SmsService(); }

  StatusUpdate(message: IOrderState): void {
    this.service.SendSMSMessage(message.stateToString());
  }
}