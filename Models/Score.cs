using System;

namespace Blog.Models
{
    public class Score
    {

        private static double Cislo = 0;
        public double Prumer { get; set; }
        private static double poradi = 0;
        
        public Score() {
           
            
            
            
        }
        public void calculateAverage()
        {
            poradi++;
            if (poradi == 1)
            {
                Cislo = (Cislo + Prumer);
                Cislo = Math.Round(Cislo, 2);
            }
            else
            {
                Cislo = (Cislo + Prumer) / 2;
                Cislo = Math.Round(Cislo, 2);
            }
            

            
            
            
        

        }
        public void PrumerEquals()
        {
            Prumer = Cislo;
        }
    }
}
