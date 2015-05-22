using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwoRooms.Common.Models
{
    public class Player
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Card PlayerCard { get; set; }
    }
}
