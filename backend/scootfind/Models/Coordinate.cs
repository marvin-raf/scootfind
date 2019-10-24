using System;
using Newtonsoft.Json;

namespace scootfind.Models
{
    public class Coordinate
    {
        [JsonProperty]
        private double lat { get; set; }

        [JsonProperty]
        private double lon { get; set; }

        public Coordinate(double lat, double lon)
        {
            this.lat = lat;
            this.lon = lon;
        }
    }
}
