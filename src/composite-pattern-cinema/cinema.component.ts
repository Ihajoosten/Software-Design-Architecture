import { CompositeComponent } from "./composite.component";
import { Visitor } from "./visitor";

export class Cinema extends CompositeComponent {
    private cinemaName: string;

    public constructor(name: string) {
        super();
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