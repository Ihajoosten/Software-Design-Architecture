using System;
using System.Text;

namespace Casus_Deel_1
{
    public class MovieScreening
    {
        public DateTime DateTime { get; set; }
        public double PricePerSeat { get; private set; }
        private Movie Movie { get; set; }

        public MovieScreening(Movie movie, DateTime dateTime, double pricePerSeat) 
        {
            Movie = movie;
            DateTime = dateTime;
            PricePerSeat= pricePerSeat;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"Date and time: {DateTime}");
            sb.AppendLine($"Price: {PricePerSeat}");
            sb.AppendLine(Movie.ToString());

            return sb.ToString();
        }

        public DateTime GetDateTime() { return DateTime; }
    }
}
