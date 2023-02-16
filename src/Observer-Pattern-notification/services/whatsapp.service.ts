import { IWhatsappService } from "../interfaces/IWhatsappService";

export class WhatsappService implements IWhatsappService {
  SendWhatsappMessage(message: string): void {
    console.log(`You have a new Whatsapp message: ${message}`);
  }
}
