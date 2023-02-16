import { CompositeComponent } from "./composite.component";
import { Visitor } from "./visitor";

export class Seat extends CompositeComponent {
    private seatNumber: number;

    public constructor(number: number) {
        super();
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