using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace scootfind.Services
{
    public interface ILimeService
    {
        Task<List<Models.Scooter>> GetScooters(String latitude, String longitude);
    }
}
