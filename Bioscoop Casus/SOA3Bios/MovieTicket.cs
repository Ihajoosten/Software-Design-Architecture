using System.Text;

namespace Casus_Deel_1
{
    public class MovieTicket
    {
        public int RowNr { get; private set; }
        public int SeatNr { get; private set; }
        public bool IsPremium { get; private set; }
        public MovieScreening MovieScreening { get; private set; }


        public MovieTicket(int rowNR, int seatNR, bool isPremium, MovieScreening movieScreening)
        {
            RowNr = rowNR;
            SeatNr = seatNR;
            IsPremium = isPremium;
            MovieScreening = movieScreening;
        }

        public double GetPrice()
        {
            return MovieScreening.PricePerSeat;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"Row number: {RowNr}");
            sb.AppendLine($"Seat number: {SeatNr}");
            sb.AppendLine($"Premium: {(IsPremium ? "YES" : "NO")}");
            sb.AppendLine(MovieScreening.ToString());

            return sb.ToString();
        }

    }
}
