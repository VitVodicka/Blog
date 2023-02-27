using System.Configuration.Provider;
using System.Data.SqlClient;
namespace Blog.Models

{
    public class DatabaseComunnication
    {//in setup
        SqlConnection connection;
        SqlCommand command;
        
        string sql;
        public void databaseWriter(string name, string content)
        {
            string connectionString = "Server=tcp:blogserver.database.windows.net,1433;Initial Catalog=Blog;Persist Security Info=False;User ID=CloudSAea872b24;Password=;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            sql = "INSERT INTO BlogInput([User],Text) VALUES(@name,@content);";
            
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    
                    command = new SqlCommand(sql, connection);
                    command.Parameters.AddWithValue("@name", name);
                    command.Parameters.AddWithValue("@content", content);
                    connection.Open();
                    int comDone = command.ExecuteNonQuery();
                    
                    // Execute queries here
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public void databaseReader()
        {
            SqlDataReader datareader;
            string connectionString = "Server=tcp:blogserver.database.windows.net,1433;Initial Catalog=Blog;Persist Security Info=False;User ID=CloudSAea872b24;Password=;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            sql = "SELECT * FROM [dbo].[BlogInput]";
            string output;
            List<string> list = new List<string>();
            try
            {

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                    command = new SqlCommand(sql, connection);
                    datareader= command.ExecuteReader();
                    while(datareader.Read())
                    {            
                        output = datareader.GetValue(0).ToString()+ "-"+datareader.GetValue(1).ToString()+"-"+datareader.GetValue(2).ToString();
                        list.Add(output);
                    }

                    // Execute queries here
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message); 
            }
        }
    }
}
