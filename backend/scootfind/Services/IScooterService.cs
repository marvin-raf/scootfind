using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using scootfind.Models;


namespace scootfind.Services
{
    public interface IScooterService
    {
        Task GetScooters();
    }
}
