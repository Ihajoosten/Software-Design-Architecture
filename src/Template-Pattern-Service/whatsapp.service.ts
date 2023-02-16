import { AbstractMessageSenderService } from "./abstract.message.sender.service";

export class WhatsappService extends AbstractMessageSenderService {
  protected sendMessage(message: string): void {
    console.log(`You have a new Whatsapp message: ${message}`);
  }
}
