import { Order } from "../../Models/order.model";

export interface IExportBehaviour {
  syncWriteFile(order: Order): void;
}