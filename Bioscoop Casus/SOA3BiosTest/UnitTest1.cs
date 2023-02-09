using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Xunit;

namespace SOA3BiosTest
{
    [TestClass]
    public class UnitTest1
    {
        [Fact]
        public void SecondTicketFreeStudentWeekend()
        {

            var movieScreening10euro = new MovieScreening(new Movie("Sharknado 2"), new DateTime(2023, 2, 5, 8, 30, 0), 10);

            var movieTickets = new List<MovieTicket>() {
                new MovieTicket(movieScreening10euro, false, 1, 1),
                new MovieTicket(movieScreening10euro, false, 1, 2)
            };

            var studentOrder = new Order(1, true);
            studentOrder.movieTickets.AddRange(movieTickets);

            Assert.Equal(10.0, studentOrder.CalculatePrice());
        }

        [Fact]
        public void SecondTicketFreeStudentWeek()
        {

            var movieScreening10euro = new MovieScreening(new Movie("Sharknado 2"), new DateTime(2023, 2, 6, 8, 30, 0), 10);

            var movieTickets = new List<MovieTicket>() {
                new MovieTicket(movieScreening10euro, false, 1, 1),
                new MovieTicket(movieScreening10euro, false, 1, 2)
            };

            var studentOrder = new Order(1, true);
            studentOrder.movieTickets.AddRange(movieTickets);

            Assert.Equal(10.0, studentOrder.CalculatePrice());
        }

        [Fact]
        public void SecondTicketFreeNonStudent()
        {

            var movieScreening10euro = new MovieScreening(new Movie("Sharknado 2"), new DateTime(2023, 2, 6, 8, 30, 0), 10);

            var movieTickets = new List<MovieTicket>() {
                new MovieTicket(movieScreening10euro, false, 1, 1),
                new MovieTicket(movieScreening10euro, false, 1, 2)
            };

            var studentOrder = new Order(1, false);
            studentOrder.movieTickets.AddRange(movieTickets);

            Assert.Equal(10.0, studentOrder.CalculatePrice());
        }

        [Fact]
        public void SecondTicketNotFreeNonStudent()
        {

            var movieScreening10euro = new MovieScreening(new Movie("Sharknado 2"), new DateTime(2023, 2, 5, 8, 30, 0), 10);

            var movieTickets = new List<MovieTicket>() {
                new MovieTicket(movieScreening10euro, false, 1, 1),
                new MovieTicket(movieScreening10euro, false, 1, 2)
            };

            var studentOrder = new Order(1, false);
            studentOrder.movieTickets.AddRange(movieTickets);

            Assert.Equal(20.0, studentOrder.CalculatePrice());
        }
    }
}
