import { jsonc } from "jsonc";
import { Customer } from "../src/Models/customer.model";
import { NotificationType, OrderType } from "../src/Models/enumTypes";
import { Order } from "../src/Models/order.model";
import { EmailSubscriber } from "../src/Observer-Pattern-notification/subscribers/email.subscriber";
import { SmsSubscriber } from "../src/Observer-Pattern-notification/subscribers/sms.subscriber";
import { WhatsappSubscriber } from "../src/Observer-Pattern-notification/subscribers/whatsapp.subscriber";
import { FinishedState } from "../src/State-Pattern-order/finished.state";
import { SubmittedState } from "../src/State-Pattern-order/submitted.state";

describe("Testing Observer pattern with notifications", () => {
  let order: Order;
  beforeEach(() => {
    order = new Order(2140212, OrderType.STUDENT);
    order.Submit();
  });

  it("Can create Customer", () => {
    const customer = new Customer("Luc", NotificationType.WHATSAPP);

    expect(customer).toBeDefined();
  });

  it("Customer which has Whatsapp notification enabled can add order", () => {
    const customer = new Customer("Luc", NotificationType.WHATSAPP);

    customer.AddOrder(order);
    order.Submit();

    expect(order.subscribers.length).toEqual(1);
    expect(order.subscribers[0]).toBeInstanceOf(WhatsappSubscriber);
    expect(order.orderState).toBeInstanceOf(SubmittedState);
  });

  it("Customer which has Email notification enabled can add order", () => {
    const customer = new Customer("Luc", NotificationType.EMAIL);

    customer.AddOrder(order);
    order.Submit();

    expect(order.subscribers.length).toEqual(1);
    expect(order.subscribers[0]).toBeInstanceOf(EmailSubscriber);
    expect(order.orderState).toBeInstanceOf(SubmittedState);
  });

  it("Customer which has SMS notification enabled can add order", () => {
    const customer = new Customer("Luc", NotificationType.SMS);

    customer.AddOrder(order);
    order.Submit();

    expect(order.subscribers.length).toEqual(1);
    expect(order.subscribers[0]).toBeInstanceOf(SmsSubscriber);
    expect(order.orderState).toBeInstanceOf(SubmittedState);
  });
});
