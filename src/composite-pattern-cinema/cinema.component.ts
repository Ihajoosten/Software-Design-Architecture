import { CompositeComponent } from "./CompositeComponent";
import { Visitor } from "./visitor.component";

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