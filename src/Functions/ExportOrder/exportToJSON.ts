import * as fs from "fs";
import { Order } from "../../Models/order.model";
import { IExport } from "./IExport";

export class ExportToJSON implements IExport {

  exportOrder(order: Order): void {
    const content = JSON.stringify(order, null, 2);
    fs.writeFile(
      `orders/json/order-${order.getOrderNr()}.json`,
      content,
      (err) => {
        if (err) {
          return console.error(err);
        }
      }
    );
  }
}