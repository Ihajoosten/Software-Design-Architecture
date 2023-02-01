using System.Text.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

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

        public double CalculatePrice()
        {
            double price = 0.0;
            bool secondTicketFree = false;

            DayOfWeek dayOfWeek = MovieTickets[0].MovieScreening.DateTime.DayOfWeek;
            if (IsStudentOrder || (dayOfWeek != DayOfWeek.Friday && dayOfWeek != DayOfWeek.Saturday && dayOfWeek != DayOfWeek.Sunday))
            {
                secondTicketFree = true;
            }

            if (secondTicketFree)
            {
                for (int i = 0; i < MovieTickets.Count; i += 2)
                {
                    if (MovieTickets[i].IsPremium)
                    {
                        if (IsStudentOrder)
                        {
                            price += MovieTickets[i].GetPrice() + 2;
                        }
                        else
                        {
                            price += MovieTickets[i].GetPrice() + 3;
                        }
                    } else
                    {
                        price += MovieTickets[i].GetPrice();
                    }
                }

                if (MovieTickets.Count >= 6)
                {
                    double discount = 0.1 * price;
                    price -= discount;
                }
            }
            else
            {
                for (int i = 0; i < MovieTickets.Count; i++)
                {
                    if (MovieTickets[i].IsPremium)
                    {
                        if (IsStudentOrder)
                        {
                            price += MovieTickets[i].GetPrice() + 2;
                        }
                        else
                        {
                            price += MovieTickets[i].GetPrice() + 3;
                        }
                    } else
                    {
                        price += MovieTickets[i].GetPrice();
                    }

                    if (MovieTickets.Count >= 6)
                    {
                        double discount = 0.1 * price;
                        price -= discount;
                    }
                }
            }

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