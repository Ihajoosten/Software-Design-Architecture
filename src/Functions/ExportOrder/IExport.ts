import { Order } from "../../Models/order.model";

export interface IExport {
  syncWriteFile(order: Order): void;
}