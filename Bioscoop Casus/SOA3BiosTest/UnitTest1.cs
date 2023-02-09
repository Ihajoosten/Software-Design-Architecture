using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Xunit;
using Casus_Deel_1;
using System.Collections.Generic;

namespace SOA3BiosTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void SecondTicketFalsePremiumTrueDiscountTrue()
        {
            Movie movie = new Movie("Scream VI");
            MovieScreening movieScreening = new MovieScreening(movie, new DateTime(2023, 2, 11), 10.0);

            List<MovieTicket> movieTickets = new List<MovieTicket>(){
                new MovieTicket(1, 1, true, movieScreening),
                new MovieTicket(1, 2, true, movieScreening),
                new MovieTicket(1, 3, true, movieScreening),
                new MovieTicket(1, 4, true, movieScreening),
                new MovieTicket(1, 5, true, movieScreening),
                new MovieTicket(1, 6, true, movieScreening),
                new MovieTicket(1, 7, true, movieScreening),
                new MovieTicket(1, 8, true, movieScreening),
                new MovieTicket(1, 9, true, movieScreening)
            };

            Order order = new Order(1, false);
            order.MovieTickets.AddRange(movieTickets);

            Assert.AreEqual(105.30, order.CalculatePrice());
        }

        [TestMethod]
        public void SecondTicketFalsePremiumFalseDiscountFalse()
        {
            Movie movie = new Movie("Scream VI");
            MovieScreening movieScreening = new MovieScreening(movie, new DateTime(2023, 2, 10), 15.0);

            List<MovieTicket> movieTickets = new List<MovieTicket>(){
                new MovieTicket(1, 1, false, movieScreening),
                new MovieTicket(1, 2, false, movieScreening)
            };

            Order order = new Order(1, false);
            order.MovieTickets.AddRange(movieTickets);

            Assert.AreEqual(30.0, order.CalculatePrice());
        }
        
        [TestMethod]
        public void SecondTicketTruePremiumFalseDiscountTrue()
        {
            Movie movie = new Movie("Scream VI");
            MovieScreening movieScreening = new MovieScreening(movie, new DateTime(2023, 2, 7), 5.0);

            List<MovieTicket> movieTickets = new List<MovieTicket>(){
                new MovieTicket(1, 1, false, movieScreening),
                new MovieTicket(1, 2, false, movieScreening),
                new MovieTicket(1, 3, false, movieScreening),
                new MovieTicket(1, 4, false, movieScreening),
                new MovieTicket(1, 5, false, movieScreening),
                new MovieTicket(1, 6, false, movieScreening),
                new MovieTicket(1, 7, false, movieScreening)
            };

            Order order = new Order(1, true);
            order.MovieTickets.AddRange(movieTickets);

            Assert.AreEqual(18.0, order.CalculatePrice());
        }

        [TestMethod]
        public void SecondTicketTruePremiumTrueDiscountTrue()
        {
            Movie movie = new Movie("Scream VI");
            MovieScreening movieScreening = new MovieScreening(movie, new DateTime(2023, 2, 12), 20.0);

            List<MovieTicket> movieTickets = new List<MovieTicket>(){
                new MovieTicket(1, 1, true, movieScreening),
                new MovieTicket(1, 2, true, movieScreening),
                new MovieTicket(1, 3, true, movieScreening),
                new MovieTicket(1, 4, true, movieScreening),
                new MovieTicket(1, 5, true, movieScreening),
                new MovieTicket(1, 6, true, movieScreening),
                new MovieTicket(1, 7, true, movieScreening),
                new MovieTicket(1, 8, true, movieScreening)
            };

            Order order = new Order(1, true);
            order.MovieTickets.AddRange(movieTickets);

            Assert.AreEqual(79.20, order.CalculatePrice());
        }

        [TestMethod]
        public void SecondTicketFalsePremiumTrueDiscountFalse()
        {
            Movie movie = new Movie("Scream VI");
            MovieScreening movieScreening = new MovieScreening(movie, new DateTime(2023, 2, 12), 10.0);

            List<MovieTicket> movieTickets = new List<MovieTicket>(){
                new MovieTicket(1, 1, true, movieScreening),
                new MovieTicket(1, 2, true, movieScreening),
                new MovieTicket(1, 3, true, movieScreening),
                new MovieTicket(1, 4, true, movieScreening)
            };

            Order order = new Order(1, false);
            order.MovieTickets.AddRange(movieTickets);

            Assert.AreEqual(52.0, order.CalculatePrice());
        }

        [TestMethod]
        public void SecondTicketTruePremiumTrueDiscountFalse()
        {
            Movie movie = new Movie("Scream VI");
            MovieScreening movieScreening = new MovieScreening(movie, new DateTime(2023, 2, 7), 15.0);

            List<MovieTicket> movieTickets = new List<MovieTicket>(){
                new MovieTicket(1, 1, true, movieScreening),
                new MovieTicket(1, 2, true, movieScreening),
                new MovieTicket(1, 3, true, movieScreening)
            };

            Order order = new Order(1, false);
            order.MovieTickets.AddRange(movieTickets);

            Assert.AreEqual(36.0, order.CalculatePrice());
        }
    }
}
