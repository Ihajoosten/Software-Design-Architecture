using System.Text.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Diagnostics;

namespace Casus_Deel_1
{
    public class Order
    {
        private int OrderNr { get; set; }
        private bool IsStudentOrder { get; set; }
        public List<MovieTicket> MovieTickets { get; set; } = new List<MovieTicket>();

        public Order(int orderNr, bool isStudentOrder)
        {
            this.OrderNr = orderNr;
            this.IsStudentOrder = isStudentOrder;
        }

        public double CalculatePrice() // BEGIN
        {
            double price = 0.0;

            if (SecondTicketFree())
            {
                // A
                for (int i = 0; i < MovieTickets.Count; i += 2)
                {
                    price += PriceAfterPremiumCheck(MovieTickets[i]);
                }
                return PriceAfterDiscount(price, MovieTickets.Count);
            }
            // B
            for (int i = 0; i < MovieTickets.Count; i++)
               {
                  price += PriceAfterPremiumCheck(MovieTickets[i]);
               }
            return PriceAfterDiscount(price, MovieTickets.Count);
        }

        public bool SecondTicketFree()
        {
            DayOfWeek dayOfWeek = MovieTickets[0].MovieScreening.DateTime.DayOfWeek;

            if (IsStudentOrder || (dayOfWeek != DayOfWeek.Friday && dayOfWeek != DayOfWeek.Saturday && dayOfWeek != DayOfWeek.Sunday))
            {
                // A
                return true;
            }
            // B
            return false;
        }

        public double PriceAfterPremiumCheck(MovieTicket ticket)
        {

            if (!ticket.IsPremium)
            {
                // C
                return ticket.GetPrice();
            }

            if (IsStudentOrder)
            {
                // D
                return ticket.GetPrice() + 2;
            }
            // E
            return ticket.GetPrice() + 3; ;
        }

        public double PriceAfterDiscount(double price, int ticketAmount)
        {

            if (ticketAmount > 6)
            {
                // F
                return price * 0.9;
            }
            // G
            return price;
        }

        public void Export(TicketExportFormat exportFormat)
        {

            StringBuilder sb = new StringBuilder();

            switch (exportFormat)
            {
                case TicketExportFormat.PLAINTEXT:
                    WritePlainText(sb);
                    break;
                case TicketExportFormat.JSON:
                    WriteJSON(sb);
                    break;
            }
        }

        public void WritePlainText(StringBuilder sb)
        {
            MovieTicket _movieTicket;
            sb.AppendLine("Order number: " + OrderNr.ToString());
            sb.AppendLine("Student order: " + IsStudentOrder.ToString());
            sb.AppendLine("====================");

            for (int i = 0; i < MovieTickets.Count; i++)
            {
                _movieTicket = MovieTickets[i];
                sb.AppendLine(_movieTicket.ToString());
            }

            File.WriteAllText("/SOA3_tickets/movietickets.txt", sb.ToString());
        }

        public void WriteJSON(StringBuilder sb)
        {
            sb.AppendLine(JsonSerializer.Serialize(this));
            File.WriteAllText("/SOA3_tickets/movietickets.json", sb.ToString());
        }
    }
    }