using System;

namespace Blog.Models
{
    public class Score
    {

        // tatic field to store the cumulative sum of scores
        public static double Cislo { get; set; }

        public double Prumer { get; set; }

        // static field to store the current rank (or position) in the score list
        Files file;
        private static int constructorOrder=0;

        public Score()
        {//if the programme is launched, it will read file
            file = new Files();
            if (Score.constructorOrder == 0)
            {

                constructorOrder ++;
                Cislo = file.ReadingFile();


            }


        }

        //calculates the average score
        public void calculateAverage()
        {
            //add it to the cumulative sum and round to 2 decimal places

            Cislo = (Cislo + Prumer) / 2;
            Cislo = Math.Round(Cislo, 2);
            file.WrittingFile(Cislo);
        }
    }
}