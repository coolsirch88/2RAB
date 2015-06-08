using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwoRooms.Common.Models;

namespace TwoRooms.Common
{
    public interface IGameRepository
    {
        Task<Game> FindGame(Guid id);
        Task<Game> CreateGame(Game create);
        Task<List<Game>> RetrieveGames();
    }
}
