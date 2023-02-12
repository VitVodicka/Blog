namespace Blog.Models
{
    public class User
    {
        public string UserName { get; set; }
        public string UserText { get; set; }

        public User(string userName, string userText)
        {
            UserName = userName;
            UserText = userText;
        }
    }
}
