import { CompositeComponent } from "./CompositeComponent";
import { Visitor } from "./Visitor";

export class Cinema extends CompositeComponent {
    private cinemaName: string;

    public Cinema(name: string) {
        this.cinemaName = name;
    }

    public getCinemaName(): string {
        return this.cinemaName;
    }

public acceptVisitor(visitor: Visitor): void {
    visitor.visitCinema(this);
    super.acceptVisitor(visitor);
}
}