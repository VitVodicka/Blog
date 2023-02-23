using System;

namespace Blog.Models
{
    public class Score
    {

        // tatic field to store the cumulative sum of scores
        public static double Cislo = 0;

        public double Prumer { get; set; }

        // static field to store the current rank (or position) in the score list
        public static double poradi = 0;

        public Score()
        {

        }

        //calculates the average score
        public void calculateAverage()
        {   Files file = new Files();
            poradi++;

            // If this is the first score, add it to the cumulative sum and round to 2 decimal places
            if (poradi == 1)
            {
                Cislo = (file.ReadingFile() + Prumer);
                Cislo = Math.Round(Cislo, 2);
                file.WrittingFile(Cislo);
            }
            // Otherwise, add the current score to the cumulative sum, divide by 2 to get the average, and round to 2 decimal places
            else
            {
                Cislo = (file.ReadingFile() + Prumer) / 2;
                Cislo = Math.Round(Cislo, 2);
                file.WrittingFile(Cislo);
            }
        }

        // Define a method to set the current score to the average score
        public void PrumerEquals()
        {
            Prumer = Cislo;
        }
    }
}
