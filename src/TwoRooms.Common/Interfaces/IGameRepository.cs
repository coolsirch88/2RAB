using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwoRooms.Common.Models;

namespace TwoRooms.Common
{
    public interface IGameRepository
    {
        Game FindGame(Guid id);
        Guid CreateGame(Game create);
        List<Game> RetrieveGames();
    }
}
