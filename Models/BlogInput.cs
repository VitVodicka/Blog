
namespace Blog.Models
{
    public class BlogInput
    {
        // static property to store a list of users
        public static List<User> users { get; set; } = new List<User>();

        public string UserName { get; set; }

        public string UserText { get; set; }

        public BlogInput()
        {

        }
        /* later
        public void removeList()
        {
            users.Clear();
        }*/

        // method to add the current user to the list of users
        public void addingToList()
        {
           
            User u = new User(UserName, UserText);

            // Adds the new User object to the static list of users
            BlogInput.users.Add(u);
        }

    }
}
