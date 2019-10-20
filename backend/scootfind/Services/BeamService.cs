using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using Newtonsoft.Json;
using scootfind.Models;
using scootfind.ApiModels;


namespace scootfind.Services
{
    public class BeamService : IBeamService
    {

        private readonly string beamUrl = "https://gateway.ridebeam.com/api/vehicles/scooter/latlong";

        public async Task<List<Scooter>> GetScooters(string latitude, string longitude)
        {
            var response = await SendRequest(latitude, longitude);
            
            var unformattedScooters = response.data.scooters;

            var scooters = new List<Scooter>();

            foreach (var unformattedScooter in unformattedScooters)
            {
                scooters.Add(new Scooter(unformattedScooter.bestLocation.coordinates[1], unformattedScooter.bestLocation.coordinates[0]));
            }

            return scooters;
        }

        private async Task<BeamApiResponse> SendRequest(string latitude, string longitude)
        {
            string fullBeamUrl = getBeamUrl(latitude, longitude);
            Console.WriteLine(fullBeamUrl);
            var request = new HttpRequestMessage(HttpMethod.Get, fullBeamUrl);
            request.Headers.Add("latitude", latitude);
            request.Headers.Add("longitude", longitude);
            request.Headers.Add("User-Agent", "escooterapp/1.18.0");
            var client = new HttpClient();
            var response = await client.SendAsync(request);
            string jsonResponse = await response.Content.ReadAsStringAsync();
            Console.WriteLine("The json response was: ");
            Console.WriteLine(jsonResponse);
            var scooters = JsonConvert.DeserializeObject<BeamApiResponse>(jsonResponse);
            return scooters;
        }

        private string getBeamUrl(string latitude, string longitude)
        {
            var builder = new UriBuilder(beamUrl);
            var query = HttpUtility.ParseQueryString(builder.Query);
            query["latitude"] = latitude;
            query["longitude"] = longitude;
            
            builder.Query = query.ToString();
            return builder.ToString();
        }
    }
}
