import { NotificationType, NotificationExtensions } from "./enumTypes";
import { Order } from "./order.model";

export class Customer {
  private name: string;
  private notificationType: NotificationType;
  private orders: Array<Order>;

  public constructor(name: string, notificationType: NotificationType) {
    this.name = name;
    this.notificationType = notificationType;
    this.orders = new Array<Order>();
  }

  public AddOrder(order: Order): void {
    this.orders.push(order);
    order.Subscribe(
      NotificationExtensions.GetSubscribers(this.notificationType)
    );
  }
}
