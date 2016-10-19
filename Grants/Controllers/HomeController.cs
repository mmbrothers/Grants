﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Grants.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // ząb zupa zębowa, dąb zupa dębowa
            // Hello Git!
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}