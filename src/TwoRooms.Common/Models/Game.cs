using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwoRooms.Common.Models
{
    public class Game
    {
        public Game()
        {
            CurrentPlayers = new List<Player>();
        }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<Player> CurrentPlayers { get; set; }
        public Player Leader { get; set; }
    }
}
