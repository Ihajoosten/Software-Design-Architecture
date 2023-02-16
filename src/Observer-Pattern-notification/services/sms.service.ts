import { ISmsService } from "../interfaces/ISmsService";

export class SmsService implements ISmsService {

  SendSMSMessage(message: string): void {
    console.log(`You have a new SMS: ${message}`);
  }
}