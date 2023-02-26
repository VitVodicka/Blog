using System.Configuration.Provider;
using System.Data.SqlClient;
namespace Blog.Models
    //INSERT INTO BlogInput([User],Text) VALUES('jan','toto je text');
    //SELECT * FROM BlogInput;

{
    public class DatabaseComunnication
    {//in setup
        SqlConnection connection;
        SqlCommand command;
        SqlDataReader datareader;
        string sql;
        public void DataBaseConnection()
        {
            /*try
            {

                string connectionString = Properties.Settings.Default.DatabaseConnectionString;
                connection = new SqlConnection(connectionString);
                connection.Open();


            }
            catch (Exception e)
            {
                
            }*///password needs to be put here
            string connectionString = "Server=tcp:blogserver.database.windows.net,1433;Initial Catalog=Blog;Persist Security Info=False;User ID=CloudSAea872b24;Password=HesloSpravce;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

            try
            {

            
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                // Execute queries here
            }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message); 
            }
        }
        public DatabaseComunnication()
        {
            DataBaseConnection();
        }
    }
}
