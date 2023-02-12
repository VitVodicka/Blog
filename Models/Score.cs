namespace Blog.Models
{
    public class Score
    {
        public double Cislo { get; set; }
        public double Prumer { get; set; }
        double poradi { get; set; }
        public Score() {
            poradi = 0;
            Cislo = 0;
            Prumer= 0;
        }
        public void calculateAverage()
        {
            poradi++;
            Prumer = (Prumer + Cislo) / poradi;


        }
    }
}
