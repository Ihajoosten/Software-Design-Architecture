import { CompositeComponent } from "./CompositeComponent";
import { Visitor } from "./Visitor";

export class Seat extends CompositeComponent {
    private seatNumber: number;

    public Seat(number: number) {
        this.seatNumber = number;
    }

    public getSeatNumber(): number {
        return this.seatNumber;
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitSeat(this);
        super.acceptVisitor(visitor);
    }
}