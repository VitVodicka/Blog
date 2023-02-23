using System.Xml;

namespace Blog.Models
{
    public class Files
    {
        XmlDocument doc;
        public double ReadingFile()
        {
            try
            {

           
            doc.Load("average.xml");
            XmlElement root = doc.DocumentElement;//declaring root 
            double averageRet = 0;
            foreach (XmlNode node in root.ChildNodes)//going throught node by node in root
            {
                if (node != null)
                {
                    averageRet = double.Parse(node.InnerText);
                }
            }
            return averageRet;
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return -1;
            }
            

        }
        public Files()
        {
            doc= new XmlDocument();
        }
        public void WrittingFile(double averageValue) {
            try
            {

            
            XmlElement root = doc.CreateElement("Score");
            doc.AppendChild(root);//declares element called root and appends it to the document

            XmlElement average = doc.CreateElement("average");
            average.InnerText = averageValue.ToString();//declares node average and adds a value to it
            root.AppendChild(average);
            doc.Save("average.xml");//appends node average under root and saves it
            }
            catch(Exception e) { Console.WriteLine(e.Message);}
        }
    }
}
