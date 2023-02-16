import { Cinema } from "./Cinema";
import { Hall } from "./Hall";
import { Room } from "./Room";
import { Row } from "./Row";
import { Seat } from "./Seat";

export abstract class Visitor {
    public abstract visitCinema(cinema: Cinema): void;

    public abstract visitRoom(room: Room): void;

    public abstract visitHall(hall: Hall): void;

    public abstract visitRow(row: Row): void;

    public abstract visitSeat(seat: Seat): void;

}