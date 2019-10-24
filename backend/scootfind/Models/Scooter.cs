using System;
using Newtonsoft.Json;

namespace scootfind.Models
{
    public class Scooter
    {

        [JsonProperty]
        private Coordinate coordinate { get; set; }

        [JsonProperty]
        private String type { get; set; }
        
        
        public Scooter(double lat, double lon, String type)
        {
            coordinate = new Coordinate(lat, lon);
            this.type = type;
        }
    }
}
