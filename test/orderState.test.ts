import { CancelledState } from "../src/Functions/OrderState/CancelledState";
import { SubmittedState } from "../src/Functions/OrderState/SubmittedState";
import { OrderType } from "../src/Models/enumTypes";
import { Order } from "../src/Models/order.model";



// const movie = new Movie("Scream VI");
// const movieScreening = new MovieScreening(new Date("2/18/2023"), 15, true, movie);
// movie.addScreening(movieScreening);
// const ticket = new MovieTicket(movieScreening, true, 1, 1, order.orderType);

describe("Order class testing the State of Order", () => {
  const order = new Order(2140212, OrderType.STUDENT);
  it("Order cancled should return a cancled state", () => {

    order.Cancel();
    console.log(order.orderState)

    expect(order.GetOrderState()).toBe(CancelledState.toString())
  });

  it("Order submitted should return a submitted state", () => {
    order.Submit();

    console.log(order.orderState)
    expect(order.GetOrderState()).toBe(SubmittedState.toString())
  });
});
