import { Order } from "./order.model";

export class Customer {
  private name: string;
  private orders: Array<Order>;

  public constructor(name: string) {
    this.name = name;
    this.orders = new Array<Order>();
  }

  public AddOrder(order: Order): void {
    this.orders.push(order);
  }
}
