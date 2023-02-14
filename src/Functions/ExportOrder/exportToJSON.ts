import { writeFileSync } from 'fs';
import { jsonc } from 'jsonc';
import { Order } from '../../Models/order.model';
import { IExportBehaviour } from './IExportBehaviour';

export class ExportToJSON implements IExportBehaviour {
  syncWriteFile(order: Order) {
    try {
      const data = jsonc.stringify(order, null, 2);
      writeFileSync(`orders/json/${order.getOrderNr()}.json`, data, { flag: 'w' });
    } catch (err) {
      console.log(err)
    }
  }
}