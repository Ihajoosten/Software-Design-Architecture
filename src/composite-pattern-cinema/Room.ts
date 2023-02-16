import { CompositeComponent } from "./CompositeComponent";
import { Visitor } from "./Visitor";

export class Room extends CompositeComponent {
    private roomName: string;

    public Room(name: string) {
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