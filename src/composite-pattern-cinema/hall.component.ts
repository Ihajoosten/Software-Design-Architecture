import { CompositeComponent } from "./CompositeComponent";
import { Visitor } from "./visitor.component";

export class Hall extends CompositeComponent {
    private hallNumber: number;

    public Hall(number: number) {
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