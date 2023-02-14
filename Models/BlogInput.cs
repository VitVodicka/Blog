namespace Blog.Models
{
    public class BlogInput
    {
        public static List<User> users { get; set; }= new List<User>();
        
        public string UserName { get; set; }
        public string UserText { get; set; }

        public BlogInput()
        {
            
            
        }
        public  void addingToList()
        {
            User u = new User(UserName, UserText);
            BlogInput.users.Add(u);
        }

    }
}
