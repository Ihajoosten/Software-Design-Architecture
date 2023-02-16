import { AbstractMessageSenderService } from "./abstract.message.sender.service";

export class EmailService extends AbstractMessageSenderService {
  protected sendMessage(message: string): void {
    console.log(`You have a new email: ${message}`);
  }
}
