import { CompositeComponent } from "./composite.component";
import { Visitor } from "./visitor";

export class Row extends CompositeComponent {
    private rowNumber: number;

    public constructor(number: number) {
        super();
        this.rowNumber = number;
    }

    public getRowNumber(): number {
        return this.rowNumber;
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitRow(this);
        super.acceptVisitor(visitor);
    }
}