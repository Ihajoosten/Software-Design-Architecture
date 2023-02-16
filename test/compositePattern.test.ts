import { Cinema } from "../src/composite-pattern-cinema/cinema.component";
import { Hall } from "../src/composite-pattern-cinema/hall.component";
import { LogVisitor } from "../src/composite-pattern-cinema/log.visitor";
import { Room } from "../src/composite-pattern-cinema/room.component";
import { Row } from "../src/composite-pattern-cinema/row.component";
import { Seat } from "../src/composite-pattern-cinema/seat.component";

describe("Composite tests", () => {
  it.only("LogVisitor test", () => {
    let cinema = new Cinema("Luc&Erdem Cinema");
    let room = new Room("Room B");
    cinema.addComponent(room);
    let hall = new Hall(7);
    room.addComponent(hall);
    let row = new Row(11);
    hall.addComponent(row);
    let seat = new Seat(4);
    row.addComponent(seat);

    let logVisitor = new LogVisitor();
    cinema.acceptVisitor(logVisitor);

    console.log(logVisitor.visitHall(hall));

    expect(true).toBeTruthy();
});

});
