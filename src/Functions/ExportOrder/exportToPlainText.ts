// import * as fs from "fs";
// import * as path from 'path';
// import { Order } from "../../Models/order.model";
// import { IExport } from "./IExport";

// export class ExportToText implements IExport {

//   exportOrder(order: Order): void {
//     fs.writeFile(path.join(`orders/text/order${order.getOrderNr()}.txt`, order.toString()), (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     })
//   }
// }

import { readFileSync, writeFileSync } from 'fs';
import path, { join } from 'path';
import { Order } from '../../Models/order.model';
import { IExport } from './IExport';

export class ExportToText implements IExport {
  // ✅ write to file SYNCHRONOUSLY
  syncWriteFile(order: Order) {
    /**
     * flags:
     *  - w = Open file for reading and writing. File is created if not exists
     *  - a+ = Open file for reading and appending. The file is created if not exists
     */
    const fileName = path.join(`orders/text/order${order.getOrderNr()}.txt`)
    writeFileSync(join(__dirname, fileName), order.toString(), {
      flag: 'w',
    });
  }
}