import { CancelledState } from "../src/Functions/OrderState/CancelledState";
import { FinishedState } from "../src/Functions/OrderState/FinishedState";
import { ProvisionedState } from "../src/Functions/OrderState/ProvisionedState";
import { SubmittedState } from "../src/Functions/OrderState/SubmittedState";
import { OrderType } from "../src/Models/enumTypes";
import { Order } from "../src/Models/order.model";

describe("Order class testing the State of Order", () => {
  let order: Order;
  beforeEach(() => {
    order = new Order(2140212, OrderType.STUDENT);
  });

  it("should change the state to SubmittedState after submitting from the TemplateState", () => {
    order.Submit();
    expect(order.GetOrderState()).toBe(SubmittedState.name)
  });

  it("should change the state to CancledState after canceling from the TemplateState", () => {
    order.Cancel();
    expect(order.GetOrderState()).toBe(CancelledState.name)
  });

});

describe("Testing the SubmittedState", () => {
  let order: Order;
  beforeEach(() => {
    order = new Order(2140212, OrderType.STUDENT);
    order.Submit();
  });

  it("Check the SubmittedState as begin point", () => {
    expect(order.GetOrderState()).toBe(SubmittedState.name)
  });

  it("should change the state to Finished after submitting from the SubmittedState", () => {
    order.Pay();
    expect(order.GetOrderState()).toBe(FinishedState.name)
  });

  it("should change the state to CancledState after canceling from the SubmittedState", () => {
    order.Cancel();
    expect(order.GetOrderState()).toBe(CancelledState.name)
  });
});

describe("Testing the ProvisionedState > 12 && < 24 hours", () => {
  let order: Order;
  beforeEach(() => {
    order = new Order(2140212, OrderType.STUDENT);
    order.Submit();
  });

  it("Check the state to be Provisioned", () => {
    order.HoursUntilMovieChanged(20)
    expect(order.GetOrderState()).toBe(ProvisionedState.name)
  });

  it("Check the state to be Cancelled", () => {
    order.HoursUntilMovieChanged(20)
    order.HoursUntilMovieChanged(8)
    expect(order.GetOrderState()).toBe(CancelledState.name)
  });
});

