using System;
using System.Collections.Generic;

namespace scootfind.ApiModels
{
    public class BeamApiResponse
    {
        public bool success { get; set; }
        public string message { get; set; }
        public string error { get; set; }
        public BeamData data { get; set; }
    }

    public class BestLocation
    {
        public string type { get; set; }
        public List<double> coordinates { get; set; }
    }

    public class UnformattedBeamScooter
    {
        public int id { get; set; }
        public int status { get; set; }
        public int lastReportedBattery { get; set; }
        public string code { get; set; }
        public DateTime? lastOysterHeartbeatReportTime { get; set; }
        public DateTime lastPhoneLocationTime { get; set; }
        public object lastReportedTimeTrackerMotion { get; set; }
        public object lastOysterAfterMotionSingleReportTime { get; set; }
        public int lastPhoneLocationBLERSSI { get; set; }
        public BestLocation bestLocation { get; set; }
        public string serialNumber { get; set; }
        public int vehicleType { get; set; }
        public string bleMacAddress { get; set; }
        public int parkingSpotId { get; set; }
        public string omniIotImei { get; set; }
        public List<object> Tasks { get; set; }
    }

    public class BeamData
    {
        public List<UnformattedBeamScooter> scooters { get; set; }
        public bool isRideableTime { get; set; }
    }

    
}
