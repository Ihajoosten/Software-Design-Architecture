import { ExportToJSON } from "../Functions/ExportOrder/exportToJSON";
import { CustomerType, TicketExportType } from "../Models/enumTypes";
import { Movie } from "../Models/movie.model";
import { MovieScreening } from "../Models/moviescreening.model";
import { MovieTicket } from "../Models/movieTicket.model";
import { Order } from "../Models/order.model";

const order = new Order(1, CustomerType.REGULAR);
let movie = new Movie("Leuke film");
let movieScreening = new MovieScreening(new Date("2/14/2023 12:00"), 2, false, movie);
movie.addScreening(movieScreening);
let ticket = new MovieTicket(movieScreening, true, 2, 15);
let ticket2 = new MovieTicket(movieScreening, true, 2, 17);
let ticket3 = new MovieTicket(movieScreening, false, 2, 19);
let ticket4 = new MovieTicket(movieScreening, true, 2, 19);
let ticket5 = new MovieTicket(movieScreening, false, 2, 19);
let ticket6 = new MovieTicket(movieScreening, false, 2, 19);
order.addSeatReservation(ticket);
order.addSeatReservation(ticket2);
order.addSeatReservation(ticket3);
order.addSeatReservation(ticket4);
order.addSeatReservation(ticket5);
order.addSeatReservation(ticket6);

console.log("Orderprice is: " + order.calculatePrice());
// order.export

