import { Visitor } from "./Visitor";

export abstract class Component {
    public abstract acceptVisitor(visitor: Visitor): void;
}