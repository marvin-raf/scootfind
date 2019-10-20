using System;
using System.Collections.Generic;

namespace scootfind.ApiModels
{
    public class LimeApiResponse
    {
       public Data data { get; set; }
    }

    public class Data
    {
        public string id { get; set; }
        public string type { get; set; }
        public Attributes attributes { get; set; }
    }

    public class Attributes
    {
        public List<Bike> bikes { get; set; }

    }

    public class Bike
    {
        public string id { get; set; }
        public string type { get; set; }
        public Attributes7 attributes { get; set; }
    }

    public class Attributes7
    {
        public string status { get; set; }
        public string plate_number { get; set; }
        public double latitude { get; set; }
        public double longitude { get; set; }
        public DateTime last_activity_at { get; set; }
        public object bike_icon { get; set; }
        public string type_name { get; set; }
        public string battery_level { get; set; }
        public int meter_range { get; set; }
        public string rate_plan { get; set; }
        public string rate_plan_short { get; set; }
        public int bike_icon_id { get; set; }
        public string last_three { get; set; }
        public object license_plate_number { get; set; }
    }


}
