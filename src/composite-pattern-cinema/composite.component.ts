import { Component } from "./Component";
import { Visitor } from "./visitor";

export class CompositeComponent {
    private parts: Component[];

    public constructor() {
        this.parts = new Array<Component>();
    }

    public addComponent(component: Component): void {
        this.parts.push(component);
    }

    public getComponent(i: number): Component {
        return this.parts[i];
    }

    public getSize(): number {
        return this.parts.length;
    }

    public acceptVisitor(visitor: Visitor): void {
        this.parts.forEach((component) => {
            component.acceptVisitor(visitor)
        })
    }

}
