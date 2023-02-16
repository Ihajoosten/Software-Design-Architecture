import { CompositeComponent } from "./composite.component";
import { Visitor } from "./visitor";

export class Hall extends CompositeComponent {
    private hallNumber: number;

    public constructor(number: number) {
        super();
        this.hallNumber = number;
    }

    public getHallNumber(): number {
        return this.hallNumber;
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitHall(this);
        super.acceptVisitor(visitor);
    }
}