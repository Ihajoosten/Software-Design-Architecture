import { Order } from "../../Models/order.model";

export interface IExport {
  exportOrder(order: Order): void;
}