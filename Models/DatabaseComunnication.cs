using System.Data.SqlClient;
namespace Blog.Models

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

            }*/
        }
        public DatabaseComunnication()
        {
            DataBaseConnection();
        }
    }
}
