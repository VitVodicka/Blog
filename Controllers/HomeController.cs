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
            

            //DatabaseComunnication comunnication = new DatabaseComunnication();
            //transfering 2 classes between normal and HttpPost
            return View(score);
        }
        [HttpPost]
        public IActionResult Index(Score score)
        {
            if (ModelState.IsValid)
            {
                //score.PrumerEquals();
                return View(score);

            }
            else
            {
                return View(score);
            }


        }
        [HttpPost]
        public IActionResult javascrpitTransfer([FromBody] Score score)
        {
            score.calculateAverage();
            //score.PrumerEquals();
            return Ok(score);
        }
        /* later
        [HttpPost]
        public IActionResult delete(BlogInput blog)
        {
            blog.removeList();
            return Ok(blog);
        }*/

        public IActionResult Blog()
        {
            BlogInput blogInput = new BlogInput();
            return View(blogInput);
        }

        [HttpPost]
        public IActionResult Blog(BlogInput model)
        {
            if (ModelState.IsValid)
            {
                model.addingToList();
                return View(model);
            }
            else
            {
                // Model is not valid, so redisplay the form with validation errors
                return View(model);
            }
        }
       

                [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}