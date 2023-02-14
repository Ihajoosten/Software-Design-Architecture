import { CustomerType } from "../src/Models/enumTypes";
import { Movie } from "../src/Models/movie.model";
import { MovieScreening } from "../src/Models/moviescreening.model";
import { MovieTicket } from "../src/Models/movieTicket.model";
import { Order } from "../src/Models/order.model";


describe("Order class testing public methods", () => {
  it("getOrderNr should return order nr", () => {
    const order = new Order(1, CustomerType.REGULAR);
    expect(order.getOrderNr()).toBe(1);
  });
});

describe("Test method Calculate Price", () => {
  it("Student orders 1 premium ticket in the weekend", () => {
    var order = new Order(2140212, CustomerType.STUDENT);
    var movie = new Movie("Scream VI");
    var movieScreening = new MovieScreening(new Date("2/18/2023"), 15, true, movie);
    movie.addScreening(movieScreening);
    var ticket = new MovieTicket(movieScreening, true, 1, 1);
    order.addSeatReservation(ticket)
    expect(order.calculatePrice()).toBe(17)
  })
})

describe("Test method Calculate Price", () => {
  it("Student orders premium tickets not in the weekend with second ticket free", () => {
    var order = new Order(2140212, CustomerType.STUDENT);
    var movie = new Movie("Scream VI");
    var movieScreening = new MovieScreening(new Date("2/14/2023"), 15, false, movie);
    movie.addScreening(movieScreening);
    var ticket = new MovieTicket(movieScreening, true, 1, 1);
    var ticket2 = new MovieTicket(movieScreening, true, 1, 2);
    order.addSeatReservation(ticket)
    order.addSeatReservation(ticket2)
    expect(order.calculatePrice()).toBe(17)
  })
})