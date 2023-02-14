namespace Blog.Models
{
    public class BlogInput
    {
        public List<User> users { get; set; }
        public string UserName { get; set; }
        public string UserText { get; set; }

        public BlogInput()
        {
            
            users = new List<User>();
        }
        public void addingToList()
        {
            User u = new User(UserName, UserText);
            users.Add(u);
        }

    }
}
