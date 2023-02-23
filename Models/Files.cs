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
            XmlElement root = doc.DocumentElement;
            double averageRet = 0;
            foreach (XmlNode node in root.ChildNodes)
            {
                if (node != null)
                {
                    XmlNode average = node.SelectSingleNode("average");
                    averageRet = double.Parse(average.InnerText);
                }
            }
            return averageRet;
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return 0;
            }
            

        }
        public Files()
        {
            doc= new XmlDocument();
        }
        public void WrittingFile(double averageValue) {
            XmlElement root = doc.CreateElement("Score");
            doc.AppendChild(root);

            XmlElement average = doc.CreateElement("average");
            average.InnerText = averageValue.ToString();
            root.AppendChild(average);
            doc.Save("average.xml");
        }
    }
}
