import * as fs from "fs";
import { Order } from "../../Models/order.model";
import { IExport } from "./IExport";

export class ExportToText implements IExport {

  exportOrder(order: Order): void {
    fs.writeFile(
      `orders/text/order-${order.getOrderNr()}.txt`,
      order.toString(),
      function (err) {
        if (err) {
          return console.error(err);
        }
      }
    );
  }

}