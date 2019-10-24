using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using scootfind.Services;
using scootfind.Models;
using Newtonsoft.Json;

namespace scootfind.Controllers
{
    [Route("api/scooters")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly ILimeService limeService;
        private readonly IBeamService beamService;

        public ValuesController(ILimeService limeService, IBeamService beamService) {
            this.limeService = limeService;
            this.beamService = beamService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Scooter>>> Get([FromQuery(Name = "latitude")] String latitude, [FromQuery(Name = "longitude")] String longitude)
        {
            var scooterTasks = new List<Task<List<Scooter>>>();
            scooterTasks.Add(limeService.GetScooters(latitude, longitude));
            scooterTasks.Add(beamService.GetScooters(latitude, longitude));

            var scooters = await Task.WhenAll(scooterTasks);
            var flattenedScooters = scooters.SelectMany(currentScooters => currentScooters).ToList();
            JsonSerializerSettings jsonSerializerSettings = new JsonSerializerSettings();
            jsonSerializerSettings.TypeNameHandling = TypeNameHandling.All;
            jsonSerializerSettings.NullValueHandling = NullValueHandling.Ignore;
            string textJson = JsonConvert.SerializeObject(flattenedScooters, jsonSerializerSettings);
            var settings = new JsonSerializerSettings()
            {
                TypeNameHandling = TypeNameHandling.Objects
            };
            var resourceJSon = JsonConvert.SerializeObject(flattenedScooters, settings);
            

                return flattenedScooters;
        }
    }
}
