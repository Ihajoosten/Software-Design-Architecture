using Casus_Deel_1;
using System;
using System.Collections.Generic;

namespace SOA3Bios
{
    class Program
    {
        static void Main(string[] args)
        {
            Movie movie1 = new Movie("Toy Story 3");
            DateTime dateTime1 = new DateTime(2022, 10, 15);
            MovieScreening movieScreening1 = new MovieScreening(movie1, dateTime1, 5.0);

            Movie movie2 = new Movie("The Black Panther");
            DateTime dateTime2 = new DateTime(2023, 1, 4);
            MovieScreening movieScreening2 = new MovieScreening(movie2, dateTime2, 8.0);

            List<MovieTicket> movieTicketsList1 = new List<MovieTicket>();
            MovieTicket movieTicket1 = new MovieTicket(6, 13, true, movieScreening1);
            MovieTicket movieTicket2 = new MovieTicket(6, 14, true, movieScreening1);
            MovieTicket movieTicket3 = new MovieTicket(3, 9, false, movieScreening1);
            movieTicketsList1.Add(movieTicket1);
            movieTicketsList1.Add(movieTicket2);
            movieTicketsList1.Add(movieTicket3);

            List<MovieTicket> movieTicketsList2 = new List<MovieTicket>();
            MovieTicket movieTicket4 = new MovieTicket(13, 3, true, movieScreening2);
            MovieTicket movieTicket5 = new MovieTicket(7, 19, false, movieScreening2);
            MovieTicket movieTicket6 = new MovieTicket(12, 11, true, movieScreening2);
            MovieTicket movieTicket7 = new MovieTicket(1, 3, false, movieScreening2);
            MovieTicket movieTicket8 = new MovieTicket(1, 3, false, movieScreening2);
            MovieTicket movieTicket9 = new MovieTicket(2, 4, false, movieScreening2);
            MovieTicket movieTicket10 = new MovieTicket(2, 4, false, movieScreening2);
            movieTicketsList2.Add(movieTicket4);
            movieTicketsList2.Add(movieTicket5);
            movieTicketsList2.Add(movieTicket6);
            movieTicketsList2.Add(movieTicket7);
            movieTicketsList2.Add(movieTicket8);
            movieTicketsList2.Add(movieTicket9);
            movieTicketsList2.Add(movieTicket10);

            Order orderFromNotStudent = new Order(312312, false);
            orderFromNotStudent.MovieTickets.AddRange(movieTicketsList1);

            Order orderFromStudent = new Order(82372, true);
            orderFromStudent.MovieTickets.AddRange(movieTicketsList2);

            orderFromNotStudent.Export(TicketExportFormat.PLAINTEXT);
            orderFromNotStudent.Export(TicketExportFormat.JSON);

            //orderFromStudent.Export(TicketExportFormat.PLAINTEXT);
            //orderFromStudent.Export(TicketExportFormat.JSON);

            Console.WriteLine($"Not-student order: {orderFromNotStudent.CalculatePrice()}");
            Console.WriteLine($"Student order: {orderFromStudent.CalculatePrice()}");

            Console.ReadLine();
        }
        }
    }
