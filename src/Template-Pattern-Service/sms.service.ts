import { AbstractMessageSenderService } from "./abstract.message.sender.service";

export class SmsService extends AbstractMessageSenderService {
  protected sendMessage(message: string): void {
    console.log(`You have a new SMS: ${message}`);
  }
}
