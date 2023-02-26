using System;

namespace Blog.Models
{
    public class Score
    {

        // tatic field to store the cumulative sum of scores
        public static double Cislo = 0;

        public double Prumer { get; set; }

        // static field to store the current rank (or position) in the score list
        Files file;
        int constructorOrder = 0;

        public Score()
        {
            file= new Files();
            if (constructorOrder == 0)
            {
                
                Prumer = file.ReadingFile();
                constructorOrder= 1;
                Cislo=file.ReadingFile();


            }

            
        }
        
        

        //calculates the average score
        public void calculateAverage()
        {
            
            

            //add it to the cumulative sum and round to 2 decimal places
            
                Cislo = (Cislo+ Prumer)/2;
                Cislo = Math.Round(Cislo, 2);
            file.WrittingFile(Cislo);
                Prumer = Cislo;
            
           
        }
    }
}
