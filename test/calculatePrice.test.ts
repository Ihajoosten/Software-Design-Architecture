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

  it("A student orders premium tickets not in the weekend with second ticket free", () => {
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

  it("A student can order 1 normal ticket and should not get a fee", () => {
    const order = new Order(1, CustomerType.STUDENT);
    let movie = new Movie("Peaky Blinders The Movie");
    let movieScreening = new MovieScreening(
      new Date("2/4/2023 12:00"),
      12.95,
      false,
      movie
    );
    movie.addScreening(movieScreening);
    let ticket = new MovieTicket(movieScreening, false, 2, 15);
    order.addSeatReservation(ticket);
    expect(order.calculatePrice()).toBe(12.95);
  });

  it("A student can order 2 normal ticket on Saturday and should get the second ticket for free", () => {
    const order = new Order(1, CustomerType.STUDENT);
    let movie = new Movie("Fast & the Furious 10");
    let movieScreening = new MovieScreening(
      new Date("2/18/2023 12:00"),
      105,
      true,
      movie
    );
    movie.addScreening(movieScreening);
    let ticket = new MovieTicket(movieScreening, false, 2, 15);
    let ticket2 = new MovieTicket(movieScreening, false, 2, 16);
    order.addSeatReservation(ticket);
    order.addSeatReservation(ticket2);
    expect(order.calculatePrice()).toBe(105);
  });

  it("A customer can order 1 premium ticket and should get a fee", () => {
    const order = new Order(1, CustomerType.REGULAR);
    let movie = new Movie("Peaky Blinders The Movie");
    let movieScreening = new MovieScreening(
      new Date("2/4/2023 12:00"),
      12.95,
      false,
      movie
    );
    movie.addScreening(movieScreening);
    let ticket = new MovieTicket(movieScreening, true, 2, 15);
    order.addSeatReservation(ticket);
    expect(order.calculatePrice()).toBe(15.95);
  });

  it("A student can order 2 premium, and 4 regular tickets for his/her group and should get a 10% discount", () => {
    const order = new Order(1, CustomerType.STUDENT);
    let movie = new Movie("Leuke film");
    let movieScreening = new MovieScreening(
      new Date("2/4/2023 12:00"),
      2,
      false,
      movie
    );
    movie.addScreening(movieScreening);
    let ticket = new MovieTicket(movieScreening, true, 1, 15);
    let ticket2 = new MovieTicket(movieScreening, false, 1, 16);
    let ticket3 = new MovieTicket(movieScreening, false, 1, 17);
    let ticket4 = new MovieTicket(movieScreening, true, 1, 18);
    let ticket5 = new MovieTicket(movieScreening, false, 1, 19);
    let ticket6 = new MovieTicket(movieScreening, false, 1, 20);
    order.addSeatReservation(ticket);
    order.addSeatReservation(ticket2);
    order.addSeatReservation(ticket3);
    order.addSeatReservation(ticket4);
    order.addSeatReservation(ticket5);
    order.addSeatReservation(ticket6);
    expect(order.calculatePrice()).toBe(8);
  })

  it("A customer can order 6 premium tickets on Tuesday and should not get a 10% discount", () => {
    const order = new Order(1, CustomerType.REGULAR);
    let movie = new Movie("Leuke film");
    let movieScreening = new MovieScreening(
      new Date("2/14/2023 12:00"),
      5,
      false,
      movie
    );
    movie.addScreening(movieScreening);
    let ticket = new MovieTicket(movieScreening, true, 1, 15);
    let ticket2 = new MovieTicket(movieScreening, true, 1, 16);
    let ticket3 = new MovieTicket(movieScreening, true, 1, 17);
    let ticket4 = new MovieTicket(movieScreening, true, 1, 18);
    let ticket5 = new MovieTicket(movieScreening, true, 1, 19);
    let ticket6 = new MovieTicket(movieScreening, true, 1, 20);
    order.addSeatReservation(ticket);
    order.addSeatReservation(ticket2);
    order.addSeatReservation(ticket3);
    order.addSeatReservation(ticket4);
    order.addSeatReservation(ticket5);
    order.addSeatReservation(ticket6);
    expect(order.calculatePrice()).toBe(24);
  })

  it("A customer can order 6 premium tickets on Saturday and should get a 10% discount", () => {
    const order = new Order(1, CustomerType.REGULAR);
    let movie = new Movie("Leuke film");
    let movieScreening = new MovieScreening(
      new Date("2/18/2023 12:00"),
      5,
      true,
      movie
    );
    movie.addScreening(movieScreening);
    let ticket = new MovieTicket(movieScreening, true, 1, 15);
    let ticket2 = new MovieTicket(movieScreening, true, 1, 16);
    let ticket3 = new MovieTicket(movieScreening, true, 1, 17);
    let ticket4 = new MovieTicket(movieScreening, true, 1, 18);
    let ticket5 = new MovieTicket(movieScreening, true, 1, 19);
    let ticket6 = new MovieTicket(movieScreening, true, 1, 20);
    order.addSeatReservation(ticket);
    order.addSeatReservation(ticket2);
    order.addSeatReservation(ticket3);
    order.addSeatReservation(ticket4);
    order.addSeatReservation(ticket5);
    order.addSeatReservation(ticket6);
    expect(order.calculatePrice()).toBe(43.2);
  })
})