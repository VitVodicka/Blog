
namespace Blog.Models
{
    public class BlogInput
    {
        
        // static property to store a list of users
        public static List<User> users { get; set; } = new List<User>();

        public string UserName { get; set; }

        public string UserText { get; set; }
        DatabaseComunnication dat;

        public BlogInput()
        {
            dat= new DatabaseComunnication();
        }
        
        // method to add the current user to the list of users
        public void addingToList()
        {
            if (UserName != null && UserText != null)
            {
                User u = new User(UserName, UserText);
                dat.databaseWriter(UserName, UserText);
                // Adds the new User object to the static list of users
                BlogInput.users.Add(u);
            }
            
        }
        public void readingFromList()
        {
            BlogInput.users = dat.databaseReader();
        }

    }
}
