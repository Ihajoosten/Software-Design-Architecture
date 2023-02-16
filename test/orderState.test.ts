import { OrderType } from "../src/Models/enumTypes";
import { Order } from "../src/Models/order.model";
import { CancelledState } from "../src/State-Pattern-order/cancelled.state";
import { FinishedState } from "../src/State-Pattern-order/finished.state";
import { ProvisionedState } from "../src/State-Pattern-order/provisioned.state";
import { SubmittedState } from "../src/State-Pattern-order/submitted.state";

describe("Order class testing the State of Order", () => {
  let order: Order;
  beforeEach(() => {
    order = new Order(2140212, OrderType.STUDENT);
  });

  it("should change the state to SubmittedState after submitting from the TemplateState", () => {
    order.Submit();
    expect(order.orderState).toBeInstanceOf(SubmittedState);
  });

  it("should change the state to CancledState after canceling from the TemplateState", () => {
    order.Cancel();
    expect(order.orderState).toBeInstanceOf(CancelledState);
  });
});

describe("Testing the SubmittedState", () => {
  let order: Order;
  beforeEach(() => {
    order = new Order(2140212, OrderType.STUDENT);
    order.Submit();
  });

  it("Check the SubmittedState as begin point", () => {
    expect(order.orderState).toBeInstanceOf(SubmittedState);
  });

  it("should change the state to Finished after submitting from the SubmittedState", () => {
    order.Pay();
    expect(order.orderState).toBeInstanceOf(FinishedState);
  });

  it("should change the state to CancledState after canceling from the SubmittedState", () => {
    order.Cancel();
    expect(order.orderState).toBeInstanceOf(CancelledState);
  });
});

describe("Testing the ProvisionedState > 12 && < 24 hours", () => {
  let order: Order;
  beforeEach(() => {
    order = new Order(2140212, OrderType.STUDENT);
    order.Submit();
  });

  it("Check the state to be Provisioned", () => {
    order.HoursUntilMovieChanged(20);
    expect(order.orderState).toBeInstanceOf(ProvisionedState);
  });

  it("Check the state to be Cancelled", () => {
    order.HoursUntilMovieChanged(20);
    order.HoursUntilMovieChanged(8);
    expect(order.orderState).toBeInstanceOf(CancelledState);
  });
});
