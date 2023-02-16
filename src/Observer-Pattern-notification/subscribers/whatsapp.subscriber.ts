import { jsonc } from "jsonc";
import { IOrderState } from "../../State-Pattern-order/interfaces/IOrderState";
import { ISubscriber } from "../interfaces/ISubscriber";
import { IWhatsappService } from "../interfaces/IWhatsappService";
import { WhatsappService } from "../services/whatsapp.service";

export class WhatsappSubscriber implements ISubscriber {
  private service: IWhatsappService;

  public constructor() {
    this.service = new WhatsappService();
  }

  StatusUpdate(message: IOrderState): void {
    this.service.SendWhatsappMessage(jsonc.stringify(message));
  }
}
