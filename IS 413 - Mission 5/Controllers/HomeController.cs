using IS_413___Mission_5.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace IS_413___Mission_5.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        // Constructor. The logger is to keep track of the errors that occur in the app
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        // Index method. This is the default method for the app home page
        public IActionResult Index()
        {
            return View();
        }

        // Quote method. This method is for the quote page
        public IActionResult Quote()
        {
            return View();
        }
    }
}
