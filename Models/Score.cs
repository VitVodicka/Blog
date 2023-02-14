using System;

namespace Blog.Models
{
    public class Score
    {

        private static double Cislo = 0;
        public double Prumer { get; set; }
        private static double poradi = 0;
        
        public Score() {
           
            Prumer = 0;
            
            
        }
        public void calculateAverage()
        {
            
            poradi++;
            Cislo = (Cislo+Prumer)/poradi;
            Cislo=Math.Round(Cislo,2);

            Prumer = Cislo;
            
            
        

        }
    }
}
