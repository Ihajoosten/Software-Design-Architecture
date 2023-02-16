import { writeFileSync } from "fs";
import { Order } from "../Models/order.model";
import { IExportBehaviour } from "./interfaces/IExportBehaviour";

export class ExportToText implements IExportBehaviour {
  syncWriteFile(order: Order) {
    try {
      writeFileSync(`orders/text/${order.getOrderNr()}.txt`, order.toString(), {
        flag: "w",
      });
    } catch (err) {
      console.log(err);
    }
  }
}
