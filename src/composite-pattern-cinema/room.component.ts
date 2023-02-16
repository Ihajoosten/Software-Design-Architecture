import { CompositeComponent } from "./composite.component";
import { Visitor } from "./visitor";

export class Room extends CompositeComponent {
    private roomName: string;

    public constructor(name: string) {
        super();
        this.roomName = name;
    }

    public getRoomName(): string {
        return this.roomName;
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.visitRoom(this);
        super.acceptVisitor(visitor);
    }
}