using Blog.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using static System.Formats.Asn1.AsnWriter;

namespace Blog.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            Score score = new Score();
            DatabaseComunnication comunnication = new DatabaseComunnication();
            //transfering 2 classes between normal and HttpPost
            return View(score);
        }
        [HttpPost]
        public IActionResult Index(Score score)
        {
            score.calculateAverage();
            return View();
        }

        public IActionResult Blog()
        {
            //I have to rename class Blog
            BlogInput blo = new BlogInput();
            return View(blo);
        }
        [HttpPost]
        public IActionResult Blog(BlogInput blog)
        {
            blog.addingToList();
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}