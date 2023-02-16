import { json } from "stream/consumers";
import { IOrderState } from "../../State-Pattern-order/IOrderState";
import { ISubscriber } from "../interfaces/ISubscriber";
import { IWhatsappService } from "../interfaces/IWhatsappService";
import { WhatsappService } from "../services/whatsapp.service";

export class WhatsappSubscriber implements ISubscriber {

  private service: IWhatsappService;

  public constructor() {
    this.service = new WhatsappService();
  }

  StatusUpdate(message: IOrderState): void {
    this.service.SendWhatsappMessage(message.stateToString());
  }
}