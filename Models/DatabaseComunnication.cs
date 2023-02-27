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
                using (SqlConnection connection = new SqlConnection(connectionString))//connects database
                {
                    
                    command = new SqlCommand(sql, connection);
                    command.Parameters.AddWithValue("@name", name);
                    command.Parameters.AddWithValue("@content", content);//adds value to parametrs
                    connection.Open();
                    int comDone = command.ExecuteNonQuery();//executes the SQL command
                    
                    // Execute queries here
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public List<User> databaseReader()
        {
            SqlDataReader datareader;
            string connectionString = "Server=tcp:blogserver.database.windows.net,1433;Initial Catalog=Blog;Persist Security Info=False;User ID=CloudSAea872b24;Password=;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            sql = "SELECT * FROM [dbo].[BlogInput]";//key to connection to the database
            List<User> list = new List<User>();
            try
            {

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                    command = new SqlCommand(sql, connection);
                    datareader= command.ExecuteReader();//exectures read command
                    while(datareader.Read())//reads from database
                    {
                        User u = new User(datareader.GetValue(1).ToString(), datareader.GetValue(2).ToString());
                        
                        list.Add(u);
                    }

                    // Execute queries here
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return list;
        }
    }
}
