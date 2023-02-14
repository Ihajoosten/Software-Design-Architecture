// import * as fs from 'fs';
// import * as path from 'path';
// import { Order } from "../../Models/order.model";
// import { IExport } from "./IExport";

// export class ExportToJSON implements IExport {

//   exportOrder(order: Order): void {
//     const orderExport = JSON.stringify(order, null, 2);
//     fs.readFile(path.join(`orders/json/order${order.getOrderNr()}.json`, orderExport), (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     })
//   }
// }

import { readFileSync, writeFileSync } from 'fs';
import path, { join } from 'path';
import { Order } from '../../Models/order.model';
import { IExport } from './IExportBehaviour';

export class ExportToJSON implements IExport {
  // ✅ write to file SYNCHRONOUSLY
  syncWriteFile(order: Order) {
    /**
     * flags:
     *  - w = Open file for reading and writing. File is created if not exists
     *  - a+ = Open file for reading and appending. The file is created if not exists
     */
    const fileName = path.join(`orders/json/order${order.getOrderNr()}.json`)
    const data = JSON.stringify(order, null, 2);
    writeFileSync(join(__dirname, fileName, data), order.toString(), {
      flag: 'w',
    });
  }
}