import { CancelledState } from "../src/Functions/OrderState/CancelledState";
import { SubmittedState } from "../src/Functions/OrderState/SubmittedState";
import { OrderType } from "../src/Models/enumTypes";
import { Order } from "../src/Models/order.model";

describe("Order class testing the State of Order", () => {
  const order = new Order(2140212, OrderType.STUDENT);
  it("should change the state to SubmittedState after submitting from the TemplateState", () => {
    console.log(order.GetOrderState());
  });
});
