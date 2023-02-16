import { Cinema } from "./cinema.component";
import { Hall } from "./hall.component";
import { Room } from "./room.component";
import { Row } from "./row.component";
import { Seat } from "./seat.component";

export interface Visitor {
    visitCinema(cinema: Cinema): void;

    visitRoom(room: Room): void;

    visitHall(hall: Hall): void;

    visitRow(row: Row): void;

    visitSeat(seat: Seat): void;

}