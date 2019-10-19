using System;
using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using Newtonsoft.Json;
using scootfind.Models;
using scootfind.ApiModels;

namespace scootfind.Services
{
    public class LimeService : ILimeService
    {
        private readonly string limeUrl = "https://web-production.lime.bike/api/rider/v1/views/map";

        public async Task<List<Scooter>> GetScooters(string latitude, string longitude)
        {
            var response = await sendRequest(latitude, longitude);
            var unformattedScooters = response.data.attributes.bikes;
            var scooters = new List<Scooter>();
            
            foreach (var unformattedScooter in unformattedScooters)
            {
                scooters.Add(new Scooter(unformattedScooter.attributes.latitude, unformattedScooter.attributes.longitude));
            }

            return scooters;
        }



        private async Task<LimeApiResponse> sendRequest(string latitude, string longitude) {
            string fullLimeUrl = getLimeUrl(latitude, longitude);
            var request = new HttpRequestMessage(HttpMethod.Get, fullLimeUrl);
            request.Headers.Add("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiVVFVNk5YN1lJUDRDTiIsImxvZ2luX2NvdW50Ijo0fQ.c8zDSCTQaxw9JBzYx8HTni2j85-ztaZLF33YLMAzpWA");
            request.Headers.Add("Cookie", "_limebike-web_session=SkVDSUtIUGVDWSt4Y0V5RExrdTNienlhQmdtRHFBc3pTUzJuQkFGc2VyS0I2RHRCZ0U5eGw2eUVxb1dtdGV0KzFUOU9YbStQRlRFUDBqZFRVTG9sb3ZvbUlKL0JVM2FNdkdaaGhMNVRUekVLTmNpZ2VsUElmNUZYRGluOUJFM3RQOS9EdkdFc1dTVXFZaEJBZ2V6WWMwNHZjMWM3UWdYbEFSVDB2L0pTQkV3VE11cVVvUVI0WW9HSk4rVWFRc2NldTRTTm1HR3R4S2t5VlFFeENtazRtYStIOHNDNWhMMnh3NjlXV3JONzQxVmt2UDNsQnR5Vjl6R1lwTFBwdFg5TU1peGR4NnlqOGIxV3NyQ3h2MlVzSU95UjdBRDVpamZmVklHd283cVBQYlBKZDZVNFpKTmFVMGNWbTY2d2RxZVNmNU5tcTZjR3ZPWHJ6aFFDQkg3RzJwUFZ6cFM1WCs5RUFJVHF6TDczMWZINENMWFlYYXU5dHpyQ01UTlZhL1RwU2tLOFZ1dlNINVcyYjVxNWI4MDBTNEN1OXNZT0xMS2JQRGx5Y3J1ZXpGQXR0cEluR3hTSVphN3JudzBNWCsxY0JPQ2tGa2pvc2VpZnh0aVZKRFVVZkE9PS0tbFU0Y3U0ZkVEWW5vTDZLK2JXVjhoQT09--cab00be0a96b548336558c43468698e3bba2747f;");
            var client = new HttpClient();
            var response = await client.SendAsync(request);
            string jsonResponse = await response.Content.ReadAsStringAsync();
            var scooters = JsonConvert.DeserializeObject<LimeApiResponse>(jsonResponse);
            return scooters;
        }

        private string getLimeUrl(String latitude, String longitude) {
            var builder = new UriBuilder(limeUrl);
            var query = HttpUtility.ParseQueryString(builder.Query);
            query["accuracy"] = "30";
            query["ne_lat"] = "-43.50126436463388";
            query["ne_lng"] = "172.6122334599495";
            query["sw_lat"] = "-43.50645490873456";
            query["sw_lng"] = "172.6082101464272";
            query["user_latitude"] = latitude;
            query["user_longitude"] = longitude;
            query["zoom"] = "17";
            builder.Query = query.ToString();
            return builder.ToString();
        }
    }
}
