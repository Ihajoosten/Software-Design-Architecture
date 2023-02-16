import { Visitor } from "./visitor.component";

export abstract class Component {
    public abstract acceptVisitor(visitor: Visitor): void;
}