import { Cinema } from "./cinema.component";
import { Hall } from "./hall.component";
import { Room } from "./room.component";
import { Row } from "./row.component";
import { Seat } from "./seat.component";

export abstract class Visitor {
    public abstract visitCinema(cinema: Cinema): void;

    public abstract visitRoom(room: Room): void;

    public abstract visitHall(hall: Hall): void;

    public abstract visitRow(row: Row): void;

    public abstract visitSeat(seat: Seat): void;

}