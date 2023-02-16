import { Cinema } from "./cinema.component";
import { Hall } from "./hall.component";
import { Room } from "./room.component";
import { Row } from "./row.component";
import { Seat } from "./seat.component";
import { Visitor } from "./visitor";

export class LogVisitor implements Visitor {
    visitCinema(cinema: Cinema): void {
        console.log(cinema.getCinemaName());
    }
    visitRoom(room: Room): void {
        console.log(room.getRoomName());
    }
    visitHall(hall: Hall): void {
        console.log(hall.getHallNumber());
    }
    visitRow(row: Row): void {
        console.log(row.getRowNumber());
    }
    visitSeat(seat: Seat): void {
        console.log(seat.getSeatNumber());
    }
}