import { CompositeComponent } from "./CompositeComponent";
import { Visitor } from "./Visitor";

export class Row extends CompositeComponent {
    private rowNumber: number;

    public Row(number: number) {
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