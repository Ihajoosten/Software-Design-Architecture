import { IEmailService } from "../interfaces/IEmailService";

export class EmailService implements IEmailService {

  SendEmailMessage(message: string): void {
    console.log(`You have a new email: ${message}`);
  }
}