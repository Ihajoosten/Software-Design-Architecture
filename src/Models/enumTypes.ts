import { ISubscriber } from "../Observer-Pattern-notification/interfaces/ISubscriber";
import { EmailSubscriber } from "../Observer-Pattern-notification/subscribers/email.subscriber";
import { SmsSubscriber } from "../Observer-Pattern-notification/subscribers/sms.subscriber";
import { WhatsappSubscriber } from "../Observer-Pattern-notification/subscribers/whatsapp.subscriber";

export enum OrderType {
  STUDENT = 'Student',
  REGULAR = 'Regular',
}

export enum TicketExportType {
  PLAINTEXT,
  JSON,
}

export enum NotificationType {
  EMAIL,
  SMS,
  WHATSAPP
}

export abstract class NotificationExtensions {
  public static GetSubscribers(type: NotificationType): ISubscriber {
    switch (type) {
      case NotificationType.EMAIL:
        return new EmailSubscriber
      case NotificationType.WHATSAPP:
        return new WhatsappSubscriber();
      case NotificationType.SMS:
        return new SmsSubscriber();
    }
  }
}