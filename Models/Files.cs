using System.Xml;

namespace Blog.Models
{
    public class Files
    {
        

        public double ReadingFile()
        {
            try
            {
                XmlDocument doc = new XmlDocument();
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
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return -1;
            }


        }
        
        public void WrittingFile(double averageValue)
        {
            try
            {

                XmlDocument doc = new XmlDocument();
                XmlElement root = doc.CreateElement("Score");
                doc.AppendChild(root);//declares element called root and appends it to the document

                XmlElement average = doc.CreateElement("average");
                average.InnerText = averageValue.ToString();//declares node average and adds a value to it
                root.AppendChild(average);
                doc.Save("average.xml");//appends node average under root and saves it
            }
            catch (Exception e) { Console.WriteLine(e.Message); }
        }
    }
}