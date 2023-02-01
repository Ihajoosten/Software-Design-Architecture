namespace Casus_Deel_1
{
    public class Movie
    {
        private string Title { get; set; }

        public Movie(string title)
        {
            Title = title;
        }

        public void AddScreening(MovieScreening screening)
        {
            // TO-DO
        }

        public override string ToString()
        {
            return $"Title: {Title}";
        }
    }
}
