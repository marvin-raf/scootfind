using System;
namespace scootfind.Models
{
    public class Scooter
    {

        public double lat { get; set; }
        public double lon { get; set; }
        
        
        public Scooter(double lat, double lon)
        {
            this.lat = lat;
            this.lon = lon;
        }
    }
}
